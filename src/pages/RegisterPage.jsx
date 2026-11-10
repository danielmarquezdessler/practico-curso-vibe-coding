import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, Lock, Mail, User, ArrowLeft, AlertCircle, CheckCircle2, UserCheck, Shield } from 'lucide-react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Estudiante',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.password) {
      setError('Por favor completa todos los campos requeridos.');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);
    const result = register({
      name: formData.name,
      email: formData.email,
      role: formData.role,
      password: formData.password
    });
    setLoading(false);

    if (result.success) {
      // Redirige directamente al portal privado de profesores
      navigate('/profesores', { replace: true });
    } else {
      setError(result.error);
    }
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
            <h2 className="auth-title">Crear Cuenta</h2>
            <p className="auth-desc">
              Regístrate para habilitar tu acceso al Portal Docente y servicios académicos protegidos.
            </p>
          </div>

          {error && (
            <div className="form-alert error">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="reg-name">Nombre y Apellido *</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  id="reg-name"
                  name="name"
                  placeholder="Ej. Carolina Méndez"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reg-email">Correo Electrónico *</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  id="reg-email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="reg-role">Perfil / Rol Institucional *</label>
              <div className="input-with-icon">
                <UserCheck size={18} className="input-icon" />
                <select
                  id="reg-role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="Estudiante">Estudiante / Alumno</option>
                  <option value="Docente">Docente / Profesor</option>
                  <option value="Personal Administrativo">Personal Administrativo / Secretaría</option>
                  <option value="Tutor / Familiar">Tutor / Familiar</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="reg-password">Contraseña *</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    id="reg-password"
                    name="password"
                    placeholder="Mínimo 6 caracteres"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="reg-confirm">Confirmar Contraseña *</label>
                <div className="input-with-icon">
                  <Lock size={18} className="input-icon" />
                  <input
                    type="password"
                    id="reg-confirm"
                    name="confirmPassword"
                    placeholder="Repite la contraseña"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="auth-terms-note">
              <Shield size={15} />
              <span>
                Al registrarte obtendrás acceso inmediato y exclusivo a la nómina de profesores, 
                programas de cátedra y consultas académicas.
              </span>
            </div>

            <button type="submit" className="btn btn-primary btn-auth-submit" disabled={loading}>
              {loading ? 'Creando cuenta...' : 'Completar Registro y Entrar'}
            </button>
          </form>

          <div className="auth-footer-nav">
            <p>
              ¿Ya tienes una cuenta creada?{' '}
              <Link to="/login" className="auth-nav-link">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

