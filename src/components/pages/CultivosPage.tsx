import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Cultivos } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CultivosPage() {
  const [crops, setCrops] = useState<Cultivos[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCrops();
  }, []);

  const loadCrops = async () => {
    try {
      const result = await BaseCrudService.getAll<Cultivos>('crops');
      setCrops(result.items);
    } catch (error) {
      console.error('Error loading crops:', error);
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
          <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">
            Cultivos
          </h1>
          <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
            Conoce los cultivos que alimentan y sostienen nuestra región
          </p>
        </motion.div>

        <div className="min-h-[400px]">
          {isLoading ? null : crops.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crops.map((crop, index) => (
                <motion.div
                  key={crop._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/cultivos/${crop._id}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full"
                    >
                      {crop.cropImage && (
                        <div className="aspect-[4/3] overflow-hidden">
                          <Image
                            src={crop.cropImage}
                            alt={crop.cropName || 'Cultivo'}
                            width={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-heading text-2xl text-foreground mb-3">
                          {crop.cropName}
                        </h3>
                        {crop.cultivationDetails && (
                          <p className="font-paragraph text-base text-foreground opacity-80 line-clamp-3">
                            {crop.cultivationDetails}
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
                No hay cultivos disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
