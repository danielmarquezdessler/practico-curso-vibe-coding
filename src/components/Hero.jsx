import React from 'react';
import { Award, BookOpen, Users, Compass, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-pattern-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={18} className="hero-badge-icon" />
            <span>125 Años de Vocación y Compromiso Educativo</span>
          </div>

          <h1 className="hero-title">
            Colegio Normal <br />
            <span className="hero-title-accent">Nacional Superior</span>
          </h1>

          <p className="hero-lead">
            Una institución emblemática de la educación pública argentina. Formamos personas críticas,
            solidarias y competentes desde el Nivel Inicial hasta la Formación Docente y Técnica Superior.
          </p>

          <div className="hero-actions">
            <a href="#inscripciones" className="btn btn-primary btn-large">
              <span>Admisiones Ciclo 2026</span>
              <ArrowRight size={18} />
            </a>
            <a href="#niveles" className="btn btn-outline-light btn-large">
              <BookOpen size={18} />
              <span>Explorar Niveles</span>
            </a>
          </div>

          <div className="hero-trust-indicators">
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-secondary" />
              <span>Validez Nacional en Todos los Títulos</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={16} className="text-secondary" />
              <span>Educación Pública, Gratuita y Plural</span>
            </div>
          </div>
        </div>

        {/* Hero Card Showcase / Stats */}
        <div className="hero-showcase">
          <div className="hero-card-glass">
            <div className="hero-card-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="card-tag">Identidad Normalista</span>
            </div>

            <div className="hero-card-body">
              <div className="hero-card-banner">
                <Compass size={32} className="card-icon" />
                <div>
                  <h4>Formación Integral</h4>
                  <p>Articulación pedagógica continua en 4 niveles educativos.</p>
                </div>
              </div>

              <div className="hero-stats-grid">
                {schoolData.stats.map((stat, idx) => (
                  <div key={idx} className="stat-box">
                    <div className="stat-number">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                    <div className="stat-sub">{stat.sub}</div>
                  </div>
                ))}
              </div>

              <div className="hero-card-footer">
                <div className="announcement-pill">
                  <span className="pulse-indicator"></span>
                  <span><strong>Período de Preinscripción:</strong> Abierto para todos los niveles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

