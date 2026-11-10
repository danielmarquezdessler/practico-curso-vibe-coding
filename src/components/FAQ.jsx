import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { schoolData } from '../data/schoolData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="section-header">
          <span className="badge-tag blue">Respuestas Rápidas</span>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle">
            Resolvemos las inquietudes habituales de aspirantes, estudiantes y familias sobre
            nuestro régimen académico y vida institucional.
          </p>
        </div>

        <div className="faq-container">
          {schoolData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-card ${isOpen ? 'active' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-text">
                    <HelpCircle size={20} className="faq-icon" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

