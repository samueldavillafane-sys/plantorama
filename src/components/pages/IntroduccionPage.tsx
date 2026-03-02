import { motion } from 'framer-motion';
import { Leaf, Sun, Droplets, Wind } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function IntroduccionPage() {
  const features = [
    {
      icon: Sun,
      title: 'Clima Tropical',
      description: 'Barranquilla cuenta con un clima cálido que favorece el crecimiento de diversas especies vegetales.'
    },
    {
      icon: Droplets,
      title: 'Humedad Ideal',
      description: 'La humedad de nuestra región permite que las plantas tropicales prosperen naturalmente.'
    },
    {
      icon: Wind,
      title: 'Brisa Marina',
      description: 'La cercanía al mar crea condiciones únicas para la vegetación costera.'
    },
    {
      icon: Leaf,
      title: 'Biodiversidad',
      description: 'Nuestra región alberga una increíble variedad de plantas nativas y cultivadas.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">
            Introducción
          </h1>
          <p className="font-paragraph text-xl text-foreground leading-relaxed">
            Bienvenidos a este fascinante viaje por el mundo verde de Barranquilla. 
            Nuestra ciudad, ubicada en la costa caribeña de Colombia, es hogar de una 
            extraordinaria diversidad de plantas que se adaptan perfectamente a nuestro 
            clima tropical.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-[100rem] mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            ¿Por qué es importante conocer nuestras plantas?
          </h2>
          <div className="font-paragraph text-lg text-foreground space-y-4 leading-relaxed">
            <p>
              Las plantas son fundamentales para la vida en nuestro planeta. En Barranquilla, 
              contamos con especies únicas que no solo embellecen nuestros espacios, sino que 
              también contribuyen al equilibrio ecológico de la región.
            </p>
            <p>
              Este proyecto educativo tiene como objetivo acercarte al maravilloso mundo de la 
              botánica local, mostrándote las características, cuidados y curiosidades de las 
              plantas que nos rodean. Desde las plantas naturales que crecen en nuestros parques, 
              hasta los cultivos que alimentan a nuestra comunidad.
            </p>
            <p>
              A través de estas páginas, descubrirás cómo cuidar cada especie, aprenderás datos 
              fascinantes sobre su origen y evolución, y comprenderás la importancia de preservar 
              nuestra biodiversidad tropical.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
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
                  {feature.title}
                </h3>
                <p className="font-paragraph text-base text-foreground opacity-80">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Objectives Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-tropical-blue rounded-3xl p-8 md:p-12 text-white"
        >
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Objetivos de este Proyecto
          </h2>
          <ul className="font-paragraph text-lg space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <span>Identificar y clasificar las principales especies de plantas en Barranquilla</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📚</span>
              <span>Proporcionar información educativa sobre el cuidado de cada especie</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔬</span>
              <span>Compartir datos curiosos y científicos sobre la flora local</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🌍</span>
              <span>Promover la conservación y el respeto por nuestra biodiversidad</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">💚</span>
              <span>Inspirar el amor por la naturaleza en las nuevas generaciones</span>
            </li>
          </ul>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
