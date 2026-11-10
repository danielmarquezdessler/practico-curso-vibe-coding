import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Bus, Send, CheckCircle2 } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function Contact() {
  const [quickContact, setQuickContact] = useState({ email: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quickContact.email) {
      setSent(true);
    }
  };

  return (
    <section id="contacto" className="section-padding contact-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag gold">Estamos a tu disposición</span>
          <h2 className="section-title">Canales de Contacto y Ubicación</h2>
          <p className="section-subtitle">
            Acercate a nuestra sede histórica o comunicate con las secretarías correspondientes.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-card">
            <h3>Información Institucional</h3>
            <p className="contact-intro">
              El Colegio Normal Nacional Superior se encuentra en el casco histórico de la ciudad,
              con fácil acceso mediante transporte público.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={22} />
                </div>
                <div>
                  <strong>Dirección de la Sede Central:</strong>
                  <p>{schoolData.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone size={22} />
                </div>
                <div>
                  <strong>Conmutador Telefónico:</strong>
                  <p>{schoolData.phone}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div>
                  <strong>Mesa General de Entradas:</strong>
                  <p>{schoolData.email}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Clock size={22} />
                </div>
                <div>
                  <strong>Horarios de Funcionamiento:</strong>
                  <p>{schoolData.schedule}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Bus size={22} />
                </div>
                <div>
                  <strong>Cómo Llegar:</strong>
                  <p>Líneas de colectivo: 7, 24, 64, 86, 105. Subte Línea A (Estación Sáenz Peña / Lima).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Box */}
          <div className="contact-message-card">
            <div className="contact-message-header">
              <h3>Mesa de Ayuda Virtual</h3>
              <p>Envianos tu consulta específica y te responderemos por correo electrónico.</p>
            </div>

            {sent ? (
              <div className="contact-sent-feedback">
                <CheckCircle2 size={44} className="text-secondary" />
                <h4>¡Mensaje Enviado con Éxito!</h4>
                <p>
                  Hemos recibido tu consulta desde <strong>{quickContact.email}</strong>.
                  La Secretaría Académica te responderá en un plazo máximo de 24 a 48 hs hábiles.
                </p>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    setSent(false);
                    setQuickContact({ email: '', mensaje: '' });
                  }}
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quick-contact-form">
                <div className="form-group">
                  <label htmlFor="quick-email">Tu Correo Electrónico</label>
                  <input
                    type="email"
                    id="quick-email"
                    required
                    placeholder="nombre@ejemplo.com"
                    value={quickContact.email}
                    onChange={(e) => setQuickContact({ ...quickContact, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quick-msg">Mensaje o Consulta</label>
                  <textarea
                    id="quick-msg"
                    rows="4"
                    required
                    placeholder="Escribí aquí tu inquietud (equivalencias, constancias, horarios)..."
                    value={quickContact.mensaje}
                    onChange={(e) => setQuickContact({ ...quickContact, mensaje: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
                  <span>Enviar Consulta Rápida</span>
                  <Send size={16} />
                </button>
              </form>
            )}

            <div className="secretarias-list">
              <h5>Correos directos por Nivel:</h5>
              <ul>
                <li><strong>Inicial:</strong> inicial@normalnacionalsuperior.edu.ar</li>
                <li><strong>Primario:</strong> primaria@normalnacionalsuperior.edu.ar</li>
                <li><strong>Secundario:</strong> secundaria@normalnacionalsuperior.edu.ar</li>
                <li><strong>Superior:</strong> terciario@normalnacionalsuperior.edu.ar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

