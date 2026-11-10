import React from 'react';
import { Calendar, MapPin, Tag, FileText, Download, BellRing, ArrowUpRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function NewsAndEvents() {
  return (
    <section id="agenda" className="section-padding agenda-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag blue">Vida Institucional</span>
          <h2 className="section-title">Agenda Escolar y Novedades</h2>
          <p className="section-subtitle">
            Mantenete informado sobre los principales actos, ferias científicas, mesas examinadoras y
            actividades extracurriculares de nuestra comunidad educativa.
          </p>
        </div>

        <div className="agenda-grid">
          {/* Events Column */}
          <div className="events-column">
            <h3 className="column-title">
              <Calendar size={20} className="title-icon" />
              <span>Próximos Acontecimientos</span>
            </h3>

            <div className="events-list">
              {schoolData.upcomingEvents.map((evt, idx) => (
                <div key={idx} className="event-item-card">
                  <div className="event-date-badge">
                    <span className="event-day">{evt.date.split(' ')[0]}</span>
                    <span className="event-month">{evt.date.split(' ')[1]}</span>
                  </div>

                  <div className="event-info">
                    <div className="event-header-meta">
                      <span className="event-category-pill">{evt.category}</span>
                    </div>
                    <h4 className="event-title">{evt.title}</h4>
                    <div className="event-location">
                      <MapPin size={14} />
                      <span>{evt.place}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Notice & Downloads Column */}
          <div className="resources-column">
            <h3 className="column-title">
              <BellRing size={20} className="title-icon" />
              <span>Avisos y Trámites Frecuentes</span>
            </h3>

            <div className="bulletin-card">
              <span className="bulletin-tag">Importante</span>
              <h4>Mesas de Examen Turno Diciembre</h4>
              <p>
                La inscripción para rendir materias previas, libres y equivalencias se encuentra habilitada 
                en la secretaría de cada nivel hasta el 28 de noviembre inclusive.
              </p>
              <div className="bulletin-date">Publicado: Noviembre 2026</div>
            </div>

            <div className="downloads-box">
              <h4 className="downloads-title">Documentación Institucional Descargable</h4>
              
              <div className="download-item">
                <div className="download-info">
                  <FileText size={18} className="doc-icon" />
                  <div>
                    <strong>Régimen Académico y de Convivencia</strong>
                    <span>PDF • Normativa general 2026</span>
                  </div>
                </div>
                <button
                  className="download-btn"
                  title="Descargar Régimen"
                  onClick={() => alert('Descarga iniciada: Regimen_Academico_CNNS.pdf')}
                >
                  <Download size={16} />
                </button>
              </div>

              <div className="download-item">
                <div className="download-info">
                  <FileText size={18} className="doc-icon" />
                  <div>
                    <strong>Calendario Escolar Oficial</strong>
                    <span>PDF • Períodos lectivos y recesos</span>
                  </div>
                </div>
                <button
                  className="download-btn"
                  title="Descargar Calendario"
                  onClick={() => alert('Descarga iniciada: Calendario_Escolar_CNNS.pdf')}
                >
                  <Download size={16} />
                </button>
              </div>

              <div className="download-item">
                <div className="download-info">
                  <FileText size={18} className="doc-icon" />
                  <div>
                    <strong>Plan de Estudios Nivel Superior</strong>
                    <span>PDF • Profesorados y correlatividades</span>
                  </div>
                </div>
                <button
                  className="download-btn"
                  title="Descargar Plan de Estudios"
                  onClick={() => alert('Descarga iniciada: Plan_Superior_CNNS.pdf')}
                >
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

