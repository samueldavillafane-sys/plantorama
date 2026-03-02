import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { PlantasNaturales } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PlantaNaturalDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [plant, setPlant] = useState<PlantasNaturales | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPlant();
  }, [id]);

  const loadPlant = async () => {
    try {
      if (!id) return;
      const data = await BaseCrudService.getById<PlantasNaturales>('naturalplants', id);
      setPlant(data);
    } catch (error) {
      console.error('Error loading plant:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[100rem] mx-auto px-6 py-16">
        <Link to="/plantas-naturales">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 font-paragraph text-base text-primary hover:opacity-80 transition-opacity mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Plantas Naturales
          </motion.button>
        </Link>

        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner />
            </div>
          ) : !plant ? (
            <div className="text-center py-16">
              <p className="font-paragraph text-xl text-foreground opacity-60">
                Planta no encontrada
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                {plant.plantImage && (
                  <div className="aspect-[21/9] overflow-hidden">
                    <Image
                      src={plant.plantImage}
                      alt={plant.plantName || 'Planta natural'}
                      width={1200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-8 md:p-12">
                  <h1 className="font-heading text-4xl md:text-5xl text-primary mb-8">
                    {plant.plantName}
                  </h1>

                  {plant.description && (
                    <div className="mb-8">
                      <h2 className="font-heading text-2xl text-foreground mb-4">
                        Descripción
                      </h2>
                      <p className="font-paragraph text-lg text-foreground leading-relaxed">
                        {plant.description}
                      </p>
                    </div>
                  )}

                  {plant.careInstructions && (
                    <div className="bg-tropical-green-light/10 rounded-2xl p-6 mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Heart className="w-6 h-6 text-tropical-green-light" />
                        <h2 className="font-heading text-2xl text-foreground">
                          Cuidados
                        </h2>
                      </div>
                      <p className="font-paragraph text-lg text-foreground leading-relaxed">
                        {plant.careInstructions}
                      </p>
                    </div>
                  )}

                  {plant.curiousFacts && (
                    <div className="bg-secondary/10 rounded-2xl p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-6 h-6 text-secondary" />
                        <h2 className="font-heading text-2xl text-foreground">
                          Datos Curiosos
                        </h2>
                      </div>
                      <p className="font-paragraph text-lg text-foreground leading-relaxed">
                        {plant.curiousFacts}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
