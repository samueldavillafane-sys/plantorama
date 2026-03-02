import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Droplets, Sun, Wind, Sprout } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { RecomendacionesGenerales } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RecomendacionesPage() {
  const [recommendations, setRecommendations] = useState<RecomendacionesGenerales[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadRecommendations();
  }, []);

  const loadRecommendations = async () => {
    try {
      const result = await BaseCrudService.getAll<RecomendacionesGenerales>('generalrecommendations');
      setRecommendations(result.items);
    } catch (error) {
      console.error('Error loading recommendations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generalTips = [
    {
      icon: Sun,
      title: 'Luz Solar',
      description: 'La mayoría de las plantas tropicales necesitan luz indirecta brillante. Evita la exposición directa al sol del mediodía.'
    },
    {
      icon: Droplets,
      title: 'Riego Adecuado',
      description: 'Riega cuando la tierra esté seca al tacto. El exceso de agua es más dañino que la falta de ella.'
    },
    {
      icon: Wind,
      title: 'Ventilación',
      description: 'Asegura una buena circulación de aire para prevenir enfermedades y plagas.'
    },
    {
      icon: Sprout,
      title: 'Fertilización',
      description: 'Fertiliza durante la temporada de crecimiento con productos orgánicos o específicos para cada tipo de planta.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[100rem] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-secondary mb-6">
            Recomendaciones Generales
          </h1>
          <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
            Consejos esenciales para cuidar tus plantas y mantenerlas saludables
          </p>
        </motion.div>

        {/* General Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {generalTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="bg-secondary w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="font-paragraph text-sm text-foreground opacity-80">
                  {tip.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CMS Recommendations */}
        <div className="min-h-[300px]">
          {isLoading ? null : recommendations.length > 0 ? (
            <div className="space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-8">
                Recomendaciones Específicas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={rec._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg"
                  >
                    {rec.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <Image
                          src={rec.image}
                          alt={rec.title || 'Recomendación'}
                          width={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Lightbulb className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-heading text-2xl text-foreground mb-2">
                            {rec.title}
                          </h3>
                          {rec.category && (
                            <span className="inline-block bg-secondary/20 text-secondary-foreground font-paragraph text-sm px-3 py-1 rounded-full mb-3">
                              {rec.category}
                            </span>
                          )}
                        </div>
                      </div>
                      {rec.description && (
                        <p className="font-paragraph text-base text-foreground leading-relaxed mb-3">
                          {rec.description}
                        </p>
                      )}
                      {rec.appliesTo && (
                        <p className="font-paragraph text-sm text-foreground opacity-70">
                          <strong>Aplica a:</strong> {rec.appliesTo}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-paragraph text-xl text-foreground opacity-60">
                No hay recomendaciones específicas disponibles en este momento.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
