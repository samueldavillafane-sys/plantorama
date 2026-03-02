import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Introducción', path: '/introduccion' },
    { name: 'Plantas Naturales', path: '/plantas-naturales' },
    { name: 'Vegetación Costera', path: '/vegetacion-costera' },
    { name: 'Cultivos', path: '/cultivos' },
    { name: 'Plantas Aromáticas', path: '/plantas-aromaticas' },
    { name: 'Recomendaciones', path: '/recomendaciones' },
    { name: 'Conclusiones', path: '/conclusiones' },
    { name: 'Bibliografía', path: '/bibliografia' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[100rem] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.h1
              whileHover={{ scale: 1.02 }}
              className="font-heading text-2xl md:text-3xl text-primary"
            >
              🌿 Plantas de Barranquilla
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-paragraph text-base text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-primary text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-paragraph text-base text-foreground hover:text-primary transition-colors py-2 px-4 rounded-xl hover:bg-background"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
