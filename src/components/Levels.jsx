import React, { useState } from 'react';
import { Baby, Backpack, GraduationCap, School, Check, Clock, Calendar, ArrowRight } from 'lucide-react';
import { schoolData } from '../data/schoolData';

const levelIcons = {
  inicial: Baby,
  primario: Backpack,
  secundario: School,
  superior: GraduationCap
};

export default function Levels({ onSelectLevelForAdmission }) {
  const [activeLevelId, setActiveLevelId] = useState('secundario');

  const activeLevel = schoolData.levels.find((lvl) => lvl.id === activeLevelId) || schoolData.levels[0];
  const CurrentIcon = levelIcons[activeLevel.id] || School;

  return (
    <section id="niveles" className="section-padding levels-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag blue">Trayectoria Educativa Completa</span>
          <h2 className="section-title">Niveles Educativos Articulados</h2>
          <p className="section-subtitle">
            Acompañamos a nuestros alumnos en cada etapa de su crecimiento vital e intelectual,
            asegurando una continuidad pedagógica integral desde la primera infancia hasta la adultez profesional.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="levels-tabs-container">
          <div className="levels-tabs">
            {schoolData.levels.map((lvl) => {
              const Icon = levelIcons[lvl.id] || School;
              const isActive = lvl.id === activeLevelId;
              return (
                <button
                  key={lvl.id}
                  className={`level-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveLevelId(lvl.id)}
                >
                  <Icon size={20} className="tab-btn-icon" />
                  <span className="tab-btn-title">{lvl.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Level Details Card */}
        <div className="level-detail-card">
          <div className="level-card-left">
            <div className="level-header">
              <div className="level-icon-badge">
                <CurrentIcon size={32} />
              </div>
              <div>
                <span className="level-sub-title">{activeLevel.subtitle}</span>
                <h3 className="level-main-title">{activeLevel.name}</h3>
              </div>
            </div>

            <p className="level-description">{activeLevel.description}</p>

            <div className="level-metadata-grid">
              <div className="metadata-item">
                <Calendar size={18} className="meta-icon" />
                <div>
                  <strong>Destinatarios:</strong>
                  <span>{activeLevel.ageRange}</span>
                </div>
              </div>
              <div className="metadata-item">
                <Clock size={18} className="meta-icon" />
                <div>
                  <strong>Horarios y Turnos:</strong>
                  <span>{activeLevel.turnos}</span>
                </div>
              </div>
            </div>

            <div className="level-actions">
              <a
                href="#inscripciones"
                className="btn btn-primary"
                onClick={() => onSelectLevelForAdmission(activeLevel.name)}
              >
                <span>Solicitar Vacante para {activeLevel.name}</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contacto" className="btn btn-outline-dark">
                Consultar Planes de Estudio
              </a>
            </div>
          </div>

          <div className="level-card-right">
            <div className="highlights-box">
              <h4 className="highlights-title">Aspectos Destacados de la Propuesta</h4>
              <ul className="highlights-list">
                {activeLevel.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <div className="check-bullet">
                      <Check size={16} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="level-info-banner">
                <p>
                  <strong>Articulación Directa:</strong> Los egresados de cada nivel gozan de prioridad
                  para la continuidad de sus estudios en el siguiente tramo formativo dentro del Colegio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

