import { motion } from 'framer-motion';
import { Heart, Leaf, BookOpen, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConclusionesPage() {
  const conclusions = [
    {
      icon: Leaf,
      title: 'Biodiversidad Única',
      description: 'Barranquilla posee una riqueza botánica extraordinaria que merece ser conocida, valorada y preservada por todos.'
    },
    {
      icon: Heart,
      title: 'Cuidado Responsable',
      description: 'El conocimiento sobre el cuidado adecuado de cada especie es fundamental para mantener un ecosistema saludable.'
    },
    {
      icon: Users,
      title: 'Educación Comunitaria',
      description: 'Compartir este conocimiento con nuestra comunidad fortalece la conciencia ambiental y el respeto por la naturaleza.'
    },
    {
      icon: BookOpen,
      title: 'Aprendizaje Continuo',
      description: 'La botánica es un campo fascinante que siempre tiene algo nuevo que enseñarnos sobre nuestro entorno.'
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
          <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">
            Conclusiones
          </h1>
          <p className="font-paragraph text-xl text-foreground max-w-3xl mx-auto">
            Reflexiones finales sobre nuestro viaje por el mundo verde de Barranquilla
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <div className="font-paragraph text-lg text-foreground space-y-6 leading-relaxed">
            <p>
              A lo largo de este recorrido educativo, hemos explorado la increíble diversidad de 
              plantas que habitan en Barranquilla y sus alrededores. Desde las plantas naturales 
              que adornan nuestros parques y espacios verdes, hasta la vegetación costera que 
              resiste las condiciones únicas de nuestras playas, cada especie tiene una historia 
              fascinante que contar.
            </p>
            <p>
              Los cultivos que sostienen nuestra economía local y las plantas aromáticas que 
              llenan de vida nuestros jardines son testimonio de la adaptabilidad y riqueza de 
              la flora tropical. Cada planta, con sus características únicas, sus necesidades 
              específicas de cuidado y sus datos curiosos, contribuye al maravilloso tapiz verde 
              que define nuestra región.
            </p>
            <p>
              Es fundamental reconocer que el conocimiento sobre estas especies no es solo 
              información académica, sino una herramienta práctica para la conservación y el 
              aprovechamiento sostenible de nuestros recursos naturales. Al comprender cómo 
              cuidar cada planta, estamos contribuyendo activamente a la preservación de la 
              biodiversidad local.
            </p>
            <p>
              La educación ambiental comienza con el conocimiento de lo que nos rodea. Esperamos 
              que este proyecto haya despertado en ti una mayor apreciación por las plantas de 
              Barranquilla y te inspire a seguir aprendiendo sobre la naturaleza que nos rodea.
            </p>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {conclusions.map((conclusion, index) => {
            const Icon = conclusion.icon;
            return (
              <motion.div
                key={conclusion.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="bg-tropical-green-light w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-3">
                  {conclusion.title}
                </h3>
                <p className="font-paragraph text-base text-foreground opacity-80">
                  {conclusion.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-primary-foreground text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            ¡Gracias por Acompañarnos!
          </h2>
          <p className="font-paragraph text-lg max-w-3xl mx-auto mb-6">
            Esperamos que este viaje educativo haya sido enriquecedor y te haya inspirado a 
            cuidar y valorar las plantas de nuestra hermosa región. Recuerda que cada pequeña 
            acción cuenta cuando se trata de preservar nuestro medio ambiente.
          </p>
          <p className="font-paragraph text-xl font-bold">
            🌿 Juntos podemos hacer de Barranquilla un lugar más verde y sostenible 🌿
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
