import React from 'react';
import { BookOpen, Users2, Sparkles, Scale, Landmark, Calendar, CheckCheck } from 'lucide-react';
import { schoolData } from '../data/schoolData';

const pillarIcons = {
  pedagogia: BookOpen,
  inclusion: Users2,
  ciencia: Sparkles,
  valores: Scale
};

export default function About() {
  return (
    <section id="institucional" className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">Nuestra Identidad</span>
          <h2 className="section-title">Más de un Siglo al Servicio de la Educación</h2>
          <p className="section-subtitle">
            Herederos del movimiento normalista que sentó las bases de la educación pública nacional,
            conjugamos la memoria viva de nuestra historia con las metodologías pedagógicas más avanzadas.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story & Values */}
          <div className="about-history-card">
            <div className="history-badge">
              <Landmark size={20} />
              <span>Monumento Histórico y Educativo</span>
            </div>
            <h3>Una Comunidad con Raíces Fuertes y Mirada hacia el Mañana</h3>
            <p>
              El <strong>Colegio Normal Nacional Superior</strong> abrió sus aulas a fines del siglo XIX 
              con la misión insustituible de formar maestras y profesores para una patria en pleno crecimiento.
              A lo largo de las décadas, nuestro edificio señorial ha albergado a destacadas personalidades
              de la cultura, la ciencia, las artes y la vida cívica nacional.
            </p>
            <p>
              Hoy reafirmamos el compromiso con la escuela pública: inclusiva, participativa, laica y atenta
              a las transformaciones digitales, promoviendo en cada aula el respeto irrestricto por los derechos
              humanos y el valor supremo del conocimiento compartido.
            </p>

            <div className="history-highlights">
              <div className="history-point">
                <CheckCheck size={18} className="text-secondary" />
                <span>Edificio con valor patrimonial y salas climatizadas</span>
              </div>
              <div className="history-point">
                <CheckCheck size={18} className="text-secondary" />
                <span>Equipo docente de alta graduación académica</span>
              </div>
              <div className="history-point">
                <CheckCheck size={18} className="text-secondary" />
                <span>Asociación Cooperadora activa y solidaria</span>
              </div>
            </div>

            <div className="quote-box">
              <p className="quote-text">
                "Educar a un niño o a una futura docente no es llenar un receptáculo, sino encender un fuego
                que ilumine a su comunidad entera."
              </p>
              <span className="quote-author">— Acta Fundacional del Colegio Normal, 1898</span>
            </div>
          </div>

          {/* Institutional Pillars */}
          <div className="pillars-wrapper">
            <h4 className="pillars-heading">Nuestros Pilares Formativos</h4>
            <div className="pillars-list">
              {schoolData.pillars.map((pillar) => {
                const IconComponent = pillarIcons[pillar.id] || BookOpen;
                return (
                  <div key={pillar.id} className="pillar-card">
                    <div className="pillar-icon-box">
                      <IconComponent size={24} />
                    </div>
                    <div className="pillar-content">
                      <h5>{pillar.title}</h5>
                      <p>{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

