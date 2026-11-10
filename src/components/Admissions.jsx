import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, UserCheck, FileCheck, Users, GraduationCap, AlertCircle, Sparkles } from 'lucide-react';

export default function Admissions({ selectedLevel, onClearSelectedLevel }) {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    nivel: 'Nivel Secundario',
    anioInteres: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Update level if pre-selected from levels section
  useEffect(() => {
    if (selectedLevel) {
      setFormData((prev) => ({ ...prev, nivel: selectedLevel }));
    }
  }, [selectedLevel]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombreCompleto || !formData.email || !formData.telefono) {
      setErrorMessage('Por favor, completa los campos requeridos (Nombre, Correo y Teléfono).');
      return;
    }

    setErrorMessage('');
    // Generate a simulated official submission code
    const randomCode = 'CNNS-2026-' + Math.floor(1000 + Math.random() * 9000);
    setReferenceCode(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      nombreCompleto: '',
      email: '',
      telefono: '',
      nivel: 'Nivel Secundario',
      anioInteres: '',
      mensaje: ''
    });
    setIsSubmitted(false);
    setReferenceCode('');
    if (onClearSelectedLevel) onClearSelectedLevel();
  };

  return (
    <section id="inscripciones" className="section-padding admissions-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">Ciclo Lectivo 2026</span>
          <h2 className="section-title">Inscripciones y Solicitud de Vacantes</h2>
          <p className="section-subtitle">
            Conocé el proceso de admisión y completá tu preinscripción online para formar parte
            de la comunidad educativa del Colegio Normal Nacional Superior.
          </p>
        </div>

        {/* 4 Steps Guide */}
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <UserCheck size={22} />
            </div>
            <h4>Preinscripción Online</h4>
            <p>Completá el formulario con los datos del aspirante y nivel educativo elegido.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <FileCheck size={22} />
            </div>
            <h4>Documentación</h4>
            <p>Presentá DNI, certificado de regularidad, libreta de calificaciones y partida.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <Users size={22} />
            </div>
            <h4>Entrevista Familiar</h4>
            <p>Encuentro orientador con directivos y gabinete psicopedagógico.</p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <div className="step-icon">
              <GraduationCap size={22} />
            </div>
            <h4>Matriculación</h4>
            <p>Confirmación formal de la vacante e inicio del curso introductorio.</p>
          </div>
        </div>

        {/* Form and Information Grid */}
        <div className="admissions-grid">
          {/* Information Side */}
          <div className="admissions-info-box">
            <h3>Información para Familias y Aspirantes</h3>
            <p>
              El proceso de asignación de vacantes prioriza a hermanos de alumnos actuales, 
              hijos del personal, articulación interna entre niveles y aspirantes del radio escolar.
            </p>

            <div className="info-bullets">
              <div className="info-bullet-item">
                <div className="bullet-dot"></div>
                <div>
                  <strong>Vacantes Limitadas:</strong> Sugerimos completar la solicitud 
                  con la debida anticipación para agilizar la asignación de turnos.
                </div>
              </div>

              <div className="info-bullet-item">
                <div className="bullet-dot"></div>
                <div>
                  <strong>Nivel Superior (Terciario):</strong> Las carreras de profesorado
                  requieren título secundario completo o constancia de título en trámite.
                </div>
              </div>

              <div className="info-bullet-item">
                <div className="bullet-dot"></div>
                <div>
                  <strong>Horario de Secretaría:</strong> Atención presencial para recepción
                  de legajos de lunes a viernes de 8:30 a 19:30 hs.
                </div>
              </div>
            </div>

            <div className="help-box">
              <Sparkles size={24} className="text-secondary" />
              <div>
                <h5>¿Tenés dudas sobre equivalencias o pases?</h5>
                <p>Nuestro equipo de asesoramiento pedagógico atiende consultas personalizadas sin turno previo.</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="admissions-form-box">
            {isSubmitted ? (
              <div className="submission-success">
                <div className="success-icon">
                  <CheckCircle2 size={54} />
                </div>
                <h3>¡Solicitud Recibida con Éxito!</h3>
                <p>
                  Hemos registrado la preinscripción de <strong>{formData.nombreCompleto}</strong> para el{' '}
                  <strong>{formData.nivel}</strong>.
                </p>

                <div className="tracking-ticket">
                  <span className="ticket-label">Código de Seguimiento Oficial:</span>
                  <span className="ticket-code">{referenceCode}</span>
                  <small>Guardá este código para consultar el estado en la Secretaría del Colegio.</small>
                </div>

                <p className="ticket-instructions">
                  Te enviamos un correo electrónico a <strong>{formData.email}</strong> con el detalle 
                  de la documentación requerida y la fecha para la presentación de legajo.
                </p>

                <button onClick={handleReset} className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="admissions-form">
                <div className="form-header">
                  <h3>Formulario de Preinscripción 2026</h3>
                  <p>Completá tus datos y un coordinador escolar se contactará a la brevedad.</p>
                </div>

                {errorMessage && (
                  <div className="form-alert error">
                    <AlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="nombreCompleto">
                    Nombre y Apellido del Aspirante o Tutor *
                  </label>
                  <input
                    type="text"
                    id="nombreCompleto"
                    name="nombreCompleto"
                    placeholder="Ej. Martín García"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="nombre@correo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono / Celular *</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      placeholder="Ej. +54 9 11 5555-1234"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nivel">Nivel Educativo de Interés *</label>
                    <select
                      id="nivel"
                      name="nivel"
                      value={formData.nivel}
                      onChange={handleChange}
                    >
                      <option value="Nivel Inicial">Nivel Inicial (Salas 3, 4 y 5)</option>
                      <option value="Nivel Primario">Nivel Primario (1° a 7° Grado)</option>
                      <option value="Nivel Secundario">Nivel Secundario (Bachillerato)</option>
                      <option value="Nivel Superior">Nivel Superior (Profesorados y Tecnicaturas)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="anioInteres">Año, Grado o Sala a Cursar</label>
                    <input
                      type="text"
                      id="anioInteres"
                      name="anioInteres"
                      placeholder="Ej. 1er Año Bachiller / Sala de 4"
                      value={formData.anioInteres}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Comentario o Consulta Adicional</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="3"
                    placeholder="Contanos si provienen de otra institución o si solicitan articulación..."
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <span>Registrar Preinscripción</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

