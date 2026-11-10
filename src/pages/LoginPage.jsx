import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, Lock, Mail, ArrowLeft, AlertCircle, CheckCircle, ShieldCheck, KeyRound } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Route to redirect after successful login
  const from = location.state?.from?.pathname || '/profesores';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor completa todos los campos.');
      return;
    }

    setLoading(true);
    const result = login(email, password);
    setLoading(false);

    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error);
    }
  };

  const handleUseDemo = () => {
    setEmail('docente@cnns.edu.ar');
    setPassword('password123');
    setError('');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card-container">
        {/* Back Link */}
        <Link to="/" className="auth-back-link">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo-badge">
              <GraduationCap size={32} />
            </div>
            <span className="auth-badge-sub">Colegio Normal Nacional Superior</span>
            <h2 className="auth-title">Iniciar Sesión</h2>
            <p className="auth-desc">
              Accede al Portal Privado del Claustro Docente y Servicios Académicos.
            </p>
          </div>

          {location.state?.from && (
            <div className="auth-notice-box">
              <Lock size={18} className="notice-icon" />
              <span>
                La página de <strong>Profesores</strong> es privada. Por favor inicia sesión o regístrate para acceder.
              </span>
            </div>
          )}

          {error && (
            <div className="form-alert error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="login-email">Correo Electrónico Institucional</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  id="login-email"
                  placeholder="ejemplo@normalnacionalsuperior.edu.ar"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Contraseña</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input
                  type="password"
                  id="login-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit" disabled={loading}>
              {loading ? 'Verificando...' : 'Ingresar al Portal'}
            </button>
          </form>

          {/* Demo account shortcut helper */}
          <div className="demo-credentials-box">
            <div className="demo-header">
              <KeyRound size={15} />
              <span>¿Quieres probar sin registrarte?</span>
            </div>
            <p>Puedes usar la cuenta de prueba oficial docente:</p>
            <div className="demo-creds-info">
              <span><strong>Email:</strong> docente@cnns.edu.ar</span>
              <span><strong>Clave:</strong> password123</span>
            </div>
            <button type="button" onClick={handleUseDemo} className="btn-demo-autofill">
              Cargar datos de prueba automáticamente
            </button>
          </div>

          <div className="auth-footer-nav">
            <p>
              ¿No tienes una cuenta aún?{' '}
              <Link to="/registro" className="auth-nav-link">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

