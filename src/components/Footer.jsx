import React from 'react';
import { GraduationCap, ArrowUp, Heart, Shield } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-main">
      <div className="container footer-content">
        <div className="footer-top-grid">
          {/* Brand info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <GraduationCap size={26} />
              </div>
              <div>
                <div className="footer-title">{schoolData.name}</div>
                <div className="footer-sub">Fundado en {schoolData.foundationYear}</div>
              </div>
            </div>
            <p className="footer-motto">
              "{schoolData.motto}"
            </p>
            <p className="footer-desc">
              Institución señera de la educación pública nacional. Comprometida con la igualdad de
              oportunidades, la ciencia y la formación pedagógica y ciudadana.
            </p>
          </div>

          {/* Nav links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#institucional">Historia y Valores</a></li>
              <li><a href="#niveles">Niveles Educativos</a></li>
              <li><a href="#instalaciones">Instalaciones y Campus</a></li>
              <li><a href="#agenda">Agenda y Novedades</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Academic levels */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Niveles Académicos</h4>
            <ul className="footer-links">
              <li><a href="#niveles">Nivel Inicial (Jardín)</a></li>
              <li><a href="#niveles">Nivel Primario</a></li>
              <li><a href="#niveles">Nivel Secundario (Bachillerato)</a></li>
              <li><a href="#niveles">Nivel Superior (Profesorados)</a></li>
              <li><a href="#inscripciones">Inscripciones y Admisión 2026</a></li>
            </ul>
          </div>

          {/* Institutional support */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Comunidad</h4>
            <ul className="footer-links">
              <li><a href="#contacto">Asociación Cooperadora</a></li>
              <li><a href="#contacto">Centro de Estudiantes</a></li>
              <li><a href="#contacto">Biblioteca Histórica</a></li>
              <li><a href="#contacto">Gabinete Psicopedagógico</a></li>
              <li><a href="#contacto">Portal de Alumnos</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copy">
            <p>© {new Date().getFullYear()} {schoolData.name} — Todos los derechos reservados.</p>
            <p className="footer-subtext">Educación Pública Oficial • Ministerio de Educación</p>
          </div>

          <button onClick={scrollToTop} className="scroll-top-btn" title="Volver arriba">
            <span>Subir</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

