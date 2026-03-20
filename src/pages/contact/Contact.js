import React from 'react';
import './Contact.css';
import { useState } from 'react';
import ContactFormModal from '../../components/contact/ContactFormModal';

const Contact = () => {
const [showModal, setShowModal] = useState(false);

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="status-badge">Bengaluru builds faster</span>
          <h1 className="contact-headline">
            Let’s build your <br/><span>digital legacy.</span>
          </h1>
          
          <div className="contact-methods">
            <div className="contact-card">
              <p>For inquiries, builds, and partnerships:</p>
              <a href="mailto:contact@bengalurubuilds.com" className="email-link">
                contact@bengalurubuilds.com
              </a>
              <div className="divider">or</div>
            <button className="btn-open-modal" onClick={() => setShowModal(true)}>
              Drop your contact details
            </button>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-insights">
        <div className="container">
          <div className="insights-grid">
            <div className="insight-item">
              <h4>The Vision</h4>
              <p>We believe every business deserves an elite digital foundation. We’re currently scaling our operations to help more founders launch faster.</p>
            </div>
            <div className="insight-item">
              <h4>Our Location</h4>
              <p>Proudly built in Bengaluru. We bring the speed and technical excellence of India’s Silicon Valley to every project we touch.</p>
            </div>
            <div className="insight-item">
              <h4>The Build Standard</h4>
              <p>Zero bloat. No hidden costs. Just high-performance Shopify stores and Brand sites that work as hard as you do.</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="contact-footer">
        <p>© 2026 Bengaluru Builds. All systems go.</p>
      </footer>

      {showModal && <ContactFormModal close={() => setShowModal(false)} />}
    </main>
  );
};

export default Contact;