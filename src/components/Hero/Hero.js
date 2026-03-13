import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero__content">
      <h1 className="hero__headline">Building Bengaluru’s Digital Future.</h1>
      <p className="hero__subhead">
        From blazing-fast static websites and high-converting Shopify stores to end-to-end digital platform management. We engineer your digital presence so you can focus on your business.
      </p>
      <div className="hero__actions">
        <button className="btn btn-primary">Explore Our Services</button>
        <button className="btn btn-outline">Book a Consultation</button>
      </div>
    </div>
  </section>
);

export default Hero;
