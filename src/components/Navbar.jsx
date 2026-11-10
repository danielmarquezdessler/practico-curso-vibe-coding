import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Menu,
  X,
  GraduationCap,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Lock,
  User,
  LogOut,
  ShieldCheck,
  UserPlus,
  LogIn
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      navigate(`/#${anchorId}`);
    } else {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { label: 'Inicio', anchor: 'inicio' },
    { label: 'Institucional', anchor: 'institucional' },
    { label: 'Niveles', anchor: 'niveles' },
    { label: 'Instalaciones', anchor: 'instalaciones' },
    { label: 'Agenda', anchor: 'agenda' },
    { label: 'Contacto', anchor: 'contacto' }
  ];

  return (
    <>
      {/* Top micro bar */}
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

      {/* Main Navigation */}
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-shield">
              <GraduationCap size={28} strokeWidth={2.2} />
            </div>
            <div className="brand-text">
              <span className="brand-name">Colegio Normal</span>
              <span className="brand-sub">Nacional Superior</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.anchor}
                type="button"
                onClick={() => handleNavClick(link.anchor)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}

            {/* Special link to Teachers Private page */}
            <Link
              to="/profesores"
              className={`nav-link nav-link-teachers ${location.pathname === '/profesores' ? 'active-route' : ''}`}
            >
              <span>Profesores</span>
              {isAuthenticated ? (
                <span className="nav-tag-badge unlocked">Acceso Habilitado</span>
              ) : (
                <span className="nav-tag-badge locked"><Lock size={12} /> Privado</span>
              )}
            </Link>
          </nav>

          {/* Auth & CTAs */}
          <div className="nav-actions">
            {isAuthenticated ? (
              <div className="user-profile-menu">
                <Link to="/profesores" className="user-profile-btn" title="Ir a Profesores">
                  <User size={16} />
                  <span className="user-profile-name">{user?.name}</span>
                </Link>
                <button onClick={logout} className="btn-logout-nav" title="Cerrar Sesión">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <div className="auth-quick-actions">
                <Link to="/login" className="btn-login-ghost">
                  <LogIn size={15} />
                  <span>Ingresar</span>
                </Link>
                <Link to="/registro" className="btn btn-primary btn-register-nav">
                  <UserPlus size={15} />
                  <span>Registrarse</span>
                </Link>
              </div>
            )}

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
                <button
                  key={link.anchor}
                  type="button"
                  className="mobile-link"
                  onClick={() => handleNavClick(link.anchor)}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={18} />
                </button>
              ))}

              <Link
                to="/profesores"
                className="mobile-link mobile-link-teachers"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={18} />
                  <span>Nómina de Profesores (Privado)</span>
                </div>
                {isAuthenticated ? (
                  <span className="nav-tag-badge unlocked">Habilitado</span>
                ) : (
                  <span className="nav-tag-badge locked"><Lock size={12} /> Privado</span>
                )}
              </Link>

              <div className="mobile-auth-box">
                {isAuthenticated ? (
                  <div className="mobile-user-card">
                    <div className="mobile-user-info">
                      <User size={20} />
                      <div>
                        <strong>{user?.name}</strong>
                        <small>{user?.role}</small>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="btn-logout-mobile"
                    >
                      <LogOut size={16} /> Cerrar Sesión
                    </button>
                  </div>
                ) : (
                  <div className="mobile-auth-buttons">
                    <Link
                      to="/login"
                      className="btn btn-outline-dark"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <LogIn size={16} /> Iniciar Sesión
                    </Link>
                    <Link
                      to="/registro"
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <UserPlus size={16} /> Crear Cuenta
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
