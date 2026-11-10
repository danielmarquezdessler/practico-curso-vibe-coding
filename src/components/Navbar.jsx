import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Mail, Clock, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Institucional', href: '#institucional' },
    { label: 'Niveles', href: '#niveles' },
    { label: 'Instalaciones', href: '#instalaciones' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Preguntas', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <>
      {/* Top micro bar for quick institutional contacts */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span><Clock size={14} /> Lun - Vie: 7:30 a 22:30 hs</span>
            <span className="divider">•</span>
            <span><Phone size={14} /> +54 (11) 4381-8900</span>
          </div>
          <div className="top-bar-right">
            <span><Mail size={14} /> info@normalnacionalsuperior.edu.ar</span>
            <span className="badge-official">Gestión Pública Oficial</span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#inicio" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-shield">
              <GraduationCap size={28} strokeWidth={2.2} />
            </div>
            <div className="brand-text">
              <span className="brand-name">Colegio Normal</span>
              <span className="brand-sub">Nacional Superior</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="#inscripciones" className="btn btn-primary nav-cta">
              Inscripciones 2026
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="container mobile-menu-inner">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} />
                </a>
              ))}
              <div className="mobile-cta-box">
                <a
                  href="#inscripciones"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inscripciones y Vacantes 2026
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

