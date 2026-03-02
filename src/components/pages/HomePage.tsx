// HPI 1.7-G
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Leaf, Sprout, Trees, Flower, BookOpen, Lightbulb, ArrowRight, Sun, Cloud } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

// --- Types ---
interface SectionData {
  title: string;
  icon: React.ElementType;
  color: string;
  textColor: string;
  link: string;
  description: string;
  pattern: string;
}

// --- Canonical Data Source ---
const SECTIONS: SectionData[] = [
  {
    title: 'Plantas Naturales',
    icon: Trees,
    color: 'bg-tropical-green-light',
    textColor: 'text-white',
    link: '/plantas-naturales',
    description: 'Descubre la flora nativa de Barranquilla',
    pattern: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.2) 0%, transparent 20%)'
  },
  {
    title: 'Vegetación Costera',
    icon: Leaf,
    color: 'bg-tropical-blue',
    textColor: 'text-white',
    link: '/vegetacion-costera',
    description: 'Explora las plantas de nuestras costas',
    pattern: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)'
  },
  {
    title: 'Cultivos',
    icon: Sprout,
    color: 'bg-primary',
    textColor: 'text-white',
    link: '/cultivos',
    description: 'Conoce los cultivos de la región',
    pattern: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 10px, transparent 10px, transparent 20px)'
  },
  {
    title: 'Plantas Aromáticas',
    icon: Flower,
    color: 'bg-tropical-pink',
    textColor: 'text-white',
    link: '/plantas-aromaticas',
    description: 'Aromáticas que alegran nuestros jardines',
    pattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)'
  },
  {
    title: 'Recomendaciones',
    icon: Lightbulb,
    color: 'bg-secondary',
    textColor: 'text-secondary-foreground',
    link: '/recomendaciones',
    description: 'Consejos para cuidar tus plantas',
    pattern: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)'
  },
  {
    title: 'Bibliografía',
    icon: BookOpen,
    color: 'bg-tropical-green-light',
    textColor: 'text-white',
    link: '/bibliografia',
    description: 'Fuentes y referencias',
    pattern: 'radial-gradient(circle at 90% 10%, rgba(255,255,255,0.2) 0%, transparent 30%)'
  }
];

// --- Components ---

const FloatingLeaf = ({ delay = 0, x = 0, y = 0, rotate = 0, scale = 1 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ 
      opacity: [0.4, 0.8, 0.4], 
      y: [0, -20, 0], 
      rotate: [rotate - 10, rotate + 10, rotate - 10] 
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    className="absolute pointer-events-none z-0 text-primary/20"
    style={{ left: `${x}%`, top: `${y}%`, scale }}
  >
    <Leaf size={64} />
  </motion.div>
);

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-clip bg-background pt-20 pb-10">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-tropical-green-light/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-tropical-blue/10 rounded-full blur-3xl" />
        <FloatingLeaf x={10} y={20} delay={0} rotate={45} />
        <FloatingLeaf x={85} y={15} delay={1} rotate={-15} />
        <FloatingLeaf x={15} y={75} delay={2} rotate={90} />
        <FloatingLeaf x={80} y={80} delay={0.5} rotate={-45} />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y: yText }} className="text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-primary/20"
          >
            <Sun className="w-5 h-5 text-secondary" />
            <span className="font-paragraph font-bold text-primary text-sm uppercase tracking-wider">Bienvenidos a la Aventura</span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary leading-[0.9] tracking-tight">
            Plantas y <br />
            <span className="text-tropical-green-light">Cultivos</span> en <br />
            <span className="text-tropical-blue relative inline-block">
              Barranquilla
              <svg className="absolute w-full h-4 -bottom-2 left-0 text-secondary/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="font-paragraph text-xl md:text-2xl text-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Un viaje educativo vibrante por la biodiversidad tropical de nuestra región. ¡Explora, aprende y diviértete!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link to="/introduccion">
              <motion.button
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white font-heading text-xl px-8 py-5 rounded-full shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all flex items-center gap-3 group"
              >
                Comenzar la Aventura
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/plantas-naturales">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary font-heading text-xl px-8 py-5 rounded-full shadow-lg hover:shadow-xl border-2 border-primary/20 hover:border-primary/50 transition-all"
              >
                Explorar Flora
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div style={{ y: yImage, scale: scaleImage }} className="relative hidden lg:block">
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* Organic Blob Shape Mask */}
            <div className="absolute inset-0 bg-tropical-green-light/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[morph_8s_ease-in-out_infinite] blur-xl" />
            <div className="relative w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl border-8 border-white">
               <Image
                src="https://static.wixstatic.com/media/069c88_2bf3833625c74ca29b61d5441b1e14cd~mv2.png?originWidth=576&originHeight=576"
                alt="Vegetación tropical de Barranquilla"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl max-w-[200px] rotate-[-6deg]"
            >
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="text-tropical-blue w-6 h-6" />
                <span className="font-heading text-lg text-foreground">Clima</span>
              </div>
              <p className="font-paragraph text-sm text-foreground/70">Perfecto para nuestra biodiversidad única.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="w-full bg-secondary py-4 overflow-hidden rotate-[-1deg] shadow-lg z-20 relative my-8">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-secondary-foreground font-heading text-2xl uppercase tracking-widest">
            <span>Biodiversidad</span>
            <Sprout className="w-6 h-6" />
            <span>Naturaleza</span>
            <Leaf className="w-6 h-6" />
            <span>Barranquilla</span>
            <Sun className="w-6 h-6" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SectionCard = ({ section, index }: { section: SectionData; index: number }) => {
  const Icon = section.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", bounce: 0.4 }}
      className="h-full"
    >
      <Link to={section.link} className="block h-full group">
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`relative h-full overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 ${section.color}`}
        >
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ backgroundImage: section.pattern }} 
          />
          
          <div className="relative z-10 p-8 flex flex-col h-full min-h-[320px]">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Icon className={`w-8 h-8 ${section.textColor}`} />
            </div>
            
            <h3 className={`font-heading text-3xl mb-4 ${section.textColor}`}>
              {section.title}
            </h3>
            
            <p className={`font-paragraph text-lg opacity-90 mb-8 flex-grow ${section.textColor}`}>
              {section.description}
            </p>
            
            <div className={`flex items-center gap-2 font-heading text-sm uppercase tracking-wider ${section.textColor}`}>
              <span>Explorar</span>
              <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-2 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Decorative Big Icon */}
          <Icon className={`absolute -bottom-8 -right-8 w-48 h-48 opacity-10 rotate-[-15deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 ${section.textColor}`} />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const MosaicGrid = () => {
  return (
    <section className="w-full max-w-[120rem] mx-auto px-6 py-24 relative">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-heading text-tropical-pink text-xl mb-4 block"
        >
          Tu Mapa de Ruta
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-5xl md:text-6xl text-foreground mb-6"
        >
          Explora el Jardín
        </motion.h2>
        <p className="font-paragraph text-xl text-foreground/70">
          Cada sección es una nueva semilla de conocimiento. Haz clic en las tarjetas para descubrir la riqueza natural de nuestra tierra.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {SECTIONS.map((section, index) => (
          <SectionCard key={section.title} section={section} index={index} />
        ))}
      </div>
    </section>
  );
};

const FunFactSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="w-full py-32 relative overflow-hidden bg-tropical-green-light/10">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div style={{ y }} className="absolute top-10 right-10 opacity-20">
          <Trees size={300} className="text-tropical-green-light" />
        </motion.div>
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }} className="absolute bottom-10 left-10 opacity-20">
          <Leaf size={200} className="text-primary" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border-4 border-tropical-green-light/20 max-w-5xl mx-auto text-center transform rotate-1 hover:rotate-0 transition-transform duration-500">
          <div className="inline-block bg-secondary p-4 rounded-full mb-8 shadow-lg rotate-[-5deg]">
            <Lightbulb className="w-10 h-10 text-secondary-foreground" />
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl text-primary mb-8">
            ¿Sabías que...?
          </h2>
          
          <p className="font-paragraph text-2xl md:text-3xl text-foreground leading-relaxed mb-12">
            "Barranquilla cuenta con una increíble diversidad de plantas tropicales que se adaptan perfectamente a nuestro clima cálido y húmedo. ¡Cada planta tiene una historia de supervivencia única!"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-dashed border-gray-200 pt-12">
            <div className="text-center">
              <span className="block font-heading text-4xl text-tropical-pink mb-2">300+</span>
              <span className="font-paragraph text-foreground/70">Especies Nativas</span>
            </div>
            <div className="text-center border-l-0 md:border-l border-r-0 md:border-r border-dashed border-gray-200">
              <span className="block font-heading text-4xl text-tropical-blue mb-2">28°C</span>
              <span className="font-paragraph text-foreground/70">Temp. Promedio Ideal</span>
            </div>
            <div className="text-center">
              <span className="block font-heading text-4xl text-secondary mb-2">100%</span>
              <span className="font-paragraph text-foreground/70">Tropical</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="w-full py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-grid-lg text-white" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl text-white mb-8">
            ¿Listo para aprender?
          </h2>
          <p className="font-paragraph text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Sumérgete en el mundo de la botánica local. Empieza tu recorrido por las plantas naturales hoy mismo.
          </p>
          <Link to="/plantas-naturales">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-secondary-foreground font-heading text-xl px-10 py-6 rounded-full shadow-2xl hover:bg-white transition-colors"
            >
              Ver Plantas Naturales
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-tropical-pink selection:text-white">
      <style>{`
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
      `}</style>
      
      <Header />
      
      <main>
        <HeroSection />
        <Marquee />
        <MosaicGrid />
        <FunFactSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}