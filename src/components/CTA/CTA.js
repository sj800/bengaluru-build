import React from 'react';
import './CTA.css';

const CTA = () => (
  <section className="cta-section">
    <div className="cta__banner">
      <h2 className="cta__headline">Ready to upgrade your digital footprint?</h2>
      <p className="cta__subhead">Let’s discuss your next project, profile, or platform.</p>
      <form className="cta__form">
        <input type="email" placeholder="Enter your email" className="cta__input" />
        <button className="cta__button">Get in Touch</button>
      </form>
    </div>
  </section>
);

export default CTA;
