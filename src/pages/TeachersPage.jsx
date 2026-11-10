import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { teachersData } from '../data/teachersData';
import {
  GraduationCap,
  Mail,
  Clock,
  BookOpen,
  Search,
  Filter,
  ShieldCheck,
  LogOut,
  User,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Send,
  Sparkles
} from 'lucide-react';

export default function TeachersPage() {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('Todos');
  const [consultModalTeacher, setConsultModalTeacher] = useState(null);
  const [consultMessage, setConsultMessage] = useState('');
  const [consultSuccess, setConsultSuccess] = useState(false);

  const departments = ['Todos', 'Ciencias Sociales', 'Ciencias Exactas', 'Lengua y Literatura', 'Ciencias Naturales', 'Formación Docente', 'Tecnología e Informática', 'Educación Física y Deportes', 'Arte y Comunicación', 'Lenguas Extranjeras'];

  const filteredTeachers = teachersData.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.degree.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'Todos' || teacher.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleOpenConsult = (teacher) => {
    setConsultModalTeacher(teacher);
    setConsultMessage('');
    setConsultSuccess(false);
  };

  const handleSendConsult = (e) => {
    e.preventDefault();
    if (consultMessage.trim()) {
      setConsultSuccess(true);
    }
  };

  return (
    <div className="teachers-page-wrapper">
      {/* Top Banner with Authentication info */}
      <div className="private-top-bar">
        <div className="container private-top-content">
          <div className="private-badge-box">
            <span className="private-status-pill">
              <ShieldCheck size={14} /> Área Privada Exclusiva
            </span>
            <span className="private-welcome-text">
              Sesión iniciada como: <strong>{user?.name}</strong> <span className="user-role-tag">({user?.role})</span>
            </span>
          </div>

          <div className="private-user-actions">
            <Link to="/" className="btn-return-home">
              <ArrowLeft size={16} /> Volver al Inicio
            </Link>
            <button onClick={logout} className="btn-logout">
              <LogOut size={16} /> Cerrar Sesión
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container teachers-container">
        {/* Header Section */}
        <div className="teachers-hero-header">
          <div className="badge-tag gold">
            <GraduationCap size={16} /> Cuerpo Docente Oficial
          </div>
          <h1 className="teachers-main-title">Claustro de Profesores y Cátedras</h1>
          <p className="teachers-lead-text">
            Bienvenido a la nómina oficial del cuerpo docente del <strong>Colegio Normal Nacional Superior</strong>. 
            Este espacio privado detalla los profesores a cargo de cátedras en los niveles Secundario y Superior, 
            sus títulos de grado, materias asignadas, horarios de consulta y canales institucionales de contacto.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="teachers-controls-card">
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por nombre de profesor, materia o especialidad..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="teachers-search-input"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                ✕
              </button>
            )}
          </div>

          <div className="dept-filters-row">
            <div className="filter-label">
              <Filter size={15} /> Departamentos:
            </div>
            <div className="dept-chips-list">
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`dept-chip ${selectedDept === dept ? 'active' : ''}`}
                  onClick={() => setSelectedDept(dept)}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Teachers Results Count */}
        <div className="teachers-count-row">
          <span>
            Mostrando <strong>{filteredTeachers.length}</strong> de {teachersData.length} profesores registrados
          </span>
          {selectedDept !== 'Todos' && (
            <button onClick={() => setSelectedDept('Todos')} className="reset-filter-link">
              Limpiar filtro de departamento
            </button>
          )}
        </div>

        {/* Teachers Cards Grid */}
        <div className="teachers-grid">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="teacher-card">
              <div className="teacher-card-top">
                <div className="teacher-avatar">
                  <User size={28} />
                </div>
                <div className="teacher-header-info">
                  <span className="teacher-badge">{teacher.badge}</span>
                  <h3 className="teacher-name">{teacher.name}</h3>
                  <p className="teacher-degree">{teacher.degree}</p>
                </div>
              </div>

              <div className="teacher-card-body">
                <div className="teacher-meta-item">
                  <BookOpen size={16} className="meta-icon" />
                  <div>
                    <strong>Materia / Asignatura:</strong>
                    <span>{teacher.subject}</span>
                  </div>
                </div>

                <div className="teacher-tags-row">
                  <span className="tag-pill dept">{teacher.department}</span>
                  <span className="tag-pill level">{teacher.level}</span>
                </div>

                <p className="teacher-bio">{teacher.bio}</p>

                <div className="teacher-office-hours">
                  <Clock size={16} className="meta-icon text-secondary" />
                  <div>
                    <strong>Horario de Consultas y Tutoría:</strong>
                    <p>{teacher.officeHours}</p>
                  </div>
                </div>
              </div>

              <div className="teacher-card-footer">
                <a
                  href={`mailto:${teacher.email}`}
                  className="btn-teacher-email"
                  title="Enviar correo institucional"
                >
                  <Mail size={16} />
                  <span>{teacher.email}</span>
                </a>

                <button
                  onClick={() => handleOpenConsult(teacher)}
                  className="btn-teacher-consult"
                >
                  <Send size={15} /> Solicitar Consulta
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="no-teachers-found">
            <GraduationCap size={48} className="no-results-icon" />
            <h3>No se encontraron profesores con los criterios seleccionados</h3>
            <p>Intenta con otros términos de búsqueda o selecciona "Todos" en los departamentos.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDept('Todos');
              }}
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              Restablecer Filtros
            </button>
          </div>
        )}
      </div>

      {/* Consultation Modal */}
      {consultModalTeacher && (
        <div className="modal-backdrop" onClick={() => setConsultModalTeacher(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-title">
                <GraduationCap size={22} className="text-secondary" />
                <h3>Solicitud de Tutoría / Consulta Académica</h3>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setConsultModalTeacher(null)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="teacher-summary-box">
                <strong>Destinatario:</strong> {consultModalTeacher.name}
                <br />
                <strong>Cátedra:</strong> {consultModalTeacher.subject}
                <br />
                <strong>Remitente:</strong> {user?.name} ({user?.email})
              </div>

              {consultSuccess ? (
                <div className="consult-success-view">
                  <CheckCircle2 size={48} className="text-success" />
                  <h4>¡Consulta Enviada Correctamente!</h4>
                  <p>
                    El profesor ha recibido la notificación en su casilla de correo institucional (
                    <code>{consultModalTeacher.email}</code>). Te responderá o coordinará la reunión en su horario de atención ({consultModalTeacher.officeHours}).
                  </p>
                  <button
                    className="btn btn-primary"
                    style={{ marginTop: '1rem' }}
                    onClick={() => setConsultModalTeacher(null)}
                  >
                    Aceptar y Cerrar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendConsult}>
                  <div className="form-group" style={{ marginBottom: '1rem' }}>
                    <label>Tema o Motivo de la Consulta</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Escribe aquí tu duda sobre trabajos prácticos, fechas de examen o pedido de tutoría..."
                      value={consultMessage}
                      onChange={(e) => setConsultMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="modal-actions">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={() => setConsultModalTeacher(null)}
                    >
                      Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      <Send size={16} /> Enviar Mensaje
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

