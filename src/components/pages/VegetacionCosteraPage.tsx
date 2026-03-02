import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { VegetacinCostera } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VegetacionCosteraPage() {
  const [plants, setPlants] = useState<VegetacinCostera[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPlants();
  }, []);

  const loadPlants = async () => {
    try {
      const result = await BaseCrudService.getAll<VegetacinCostera>('coastalvegetation');
      setPlants(result.items);
    } catch (error) {
      console.error('Error loading coastal vegetation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[100rem] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-tropical-blue mb-6">
            Vegetación Costera
          </h1>
          <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
            Explora las plantas que prosperan en nuestras hermosas costas caribeñas
          </p>
        </motion.div>

        <div className="min-h-[400px]">
          {isLoading ? null : plants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plants.map((plant, index) => (
                <motion.div
                  key={plant._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/vegetacion-costera/${plant._id}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full"
                    >
                      {plant.vegetationImage && (
                        <div className="aspect-[4/3] overflow-hidden">
                          <Image
                            src={plant.vegetationImage}
                            alt={plant.vegetationName || 'Vegetación costera'}
                            width={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-heading text-2xl text-foreground mb-3">
                          {plant.vegetationName}
                        </h3>
                        {plant.habitatDetails && (
                          <p className="font-paragraph text-base text-foreground opacity-80 line-clamp-3">
                            {plant.habitatDetails}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-paragraph text-xl text-foreground opacity-60">
                No hay vegetación costera disponible en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
