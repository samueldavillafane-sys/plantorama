import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-[100rem] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <h3 className="font-heading text-xl">Plantas de Barranquilla</h3>
            </div>
            <p className="font-paragraph text-sm opacity-90">
              Un proyecto educativo dedicado a explorar y preservar la biodiversidad tropical de nuestra región.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-4">Enlaces Rápidos</h3>
            <div className="flex flex-col gap-2">
              <Link to="/introduccion" className="font-paragraph text-sm hover:opacity-80 transition-opacity">
                Introducción
              </Link>
              <Link to="/plantas-naturales" className="font-paragraph text-sm hover:opacity-80 transition-opacity">
                Plantas Naturales
              </Link>
              <Link to="/recomendaciones" className="font-paragraph text-sm hover:opacity-80 transition-opacity">
                Recomendaciones
              </Link>
              <Link to="/bibliografia" className="font-paragraph text-sm hover:opacity-80 transition-opacity">
                Bibliografía
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl mb-4">Contacto</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-paragraph text-sm">Barranquilla, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-paragraph text-sm">info@plantasbarranquilla.edu.co</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-paragraph text-sm opacity-90">
            © 2026 Plantas y Cultivos en Barranquilla. Proyecto Educativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
