import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, User, Calendar } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { Bibliografa } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BibliografiaPage() {
  const [bibliography, setBibliography] = useState<Bibliografa[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBibliography();
  }, []);

  const loadBibliography = async () => {
    try {
      const result = await BaseCrudService.getAll<Bibliografa>('bibliography');
      setBibliography(result.items);
    } catch (error) {
      console.error('Error loading bibliography:', error);
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
            Bibliografía
          </h1>
          <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
            Fuentes y referencias utilizadas en este proyecto educativo
          </p>
        </motion.div>

        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-3xl text-foreground">
              Fuentes Consultadas
            </h2>
          </div>
          <p className="font-paragraph text-lg text-foreground leading-relaxed">
            Este proyecto educativo se ha desarrollado consultando diversas fuentes académicas, 
            científicas y especializadas en botánica tropical. A continuación, presentamos las 
            referencias bibliográficas que han sido fundamentales para la elaboración de este 
            contenido.
          </p>
        </div>

        {/* Bibliography List */}
        <div className="min-h-[300px]">
          {isLoading ? null : bibliography.length > 0 ? (
            <div className="space-y-6">
              {bibliography.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-tropical-green-light w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-white text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-2xl text-foreground mb-3">
                        {item.sourceTitle}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        {item.author && (
                          <div className="flex items-center gap-2">
                            <User className="w-5 h-5 text-tropical-blue" />
                            <span className="font-paragraph text-base text-foreground">
                              <strong>Autor:</strong> {item.author}
                            </span>
                          </div>
                        )}
                        
                        {item.publicationYear && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-tropical-blue" />
                            <span className="font-paragraph text-base text-foreground">
                              <strong>Año:</strong> {item.publicationYear}
                            </span>
                          </div>
                        )}
                      </div>

                      {item.referenceDetails && (
                        <p className="font-paragraph text-base text-foreground opacity-80 mb-4">
                          {item.referenceDetails}
                        </p>
                      )}

                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-paragraph text-base text-tropical-blue hover:opacity-80 transition-opacity"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Ver fuente
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-paragraph text-xl text-foreground opacity-60">
                No hay referencias bibliográficas disponibles en este momento.
              </p>
            </div>
          )}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/10 rounded-3xl p-8 mt-12"
        >
          <h3 className="font-heading text-2xl text-foreground mb-4">
            Nota Importante
          </h3>
          <p className="font-paragraph text-base text-foreground leading-relaxed">
            Todas las fuentes citadas han sido consultadas con fines educativos. Se recomienda 
            verificar la información con fuentes actualizadas y consultar con expertos en 
            botánica para aplicaciones específicas. Este proyecto busca promover el conocimiento 
            y la conservación de la flora local de Barranquilla.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
