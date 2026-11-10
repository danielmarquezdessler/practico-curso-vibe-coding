import React, { useState } from 'react';
import { BookMarked, FlaskConical, Cpu, Trophy, Theater, HeartHandshake, Sparkles } from 'lucide-react';
import { schoolData } from '../data/schoolData';

const facilityIcons = [
  BookMarked,
  FlaskConical,
  Cpu,
  Trophy,
  Theater,
  HeartHandshake
];

export default function Facilities() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const categories = ['Todas', 'Académica', 'Científica', 'Tecnología', 'Deportes', 'Cultura', 'Bienestar'];

  const filteredFacilities = activeCategory === 'Todas'
    ? schoolData.facilities
    : schoolData.facilities.filter(f => f.category === activeCategory);

  return (
    <section id="instalaciones" className="section-padding facilities-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">Espacios para Aprender</span>
          <h2 className="section-title">Infraestructura y Campus Histórico</h2>
          <p className="section-subtitle">
            Un predio educativo que fusiona la majestuosidad de la arquitectura histórica con 
            equipamiento tecnológico y científico de vanguardia.
          </p>
        </div>

        {/* Category Filters */}
        <div className="facilities-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {filteredFacilities.map((fac, idx) => {
            const Icon = facilityIcons[idx % facilityIcons.length] || Sparkles;
            return (
              <div key={fac.title} className="facility-card">
                <div className="facility-card-top">
                  <div className="facility-icon-circle">
                    <Icon size={24} />
                  </div>
                  <span className="facility-badge">{fac.badge}</span>
                </div>

                <div className="facility-card-content">
                  <span className="facility-category">{fac.category}</span>
                  <h3 className="facility-title">{fac.title}</h3>
                  <p className="facility-detail">{fac.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tour Banner */}
        <div className="campus-banner">
          <div className="campus-banner-text">
            <h4>¿Querés recorrer nuestras instalaciones?</h4>
            <p>Organizamos visitas guiadas y jornadas de puertas abiertas para aspirantes y sus familias.</p>
          </div>
          <a href="#contacto" className="btn btn-outline-light">
            Solicitar Visita Guiada
          </a>
        </div>
      </div>
    </section>
  );
}

