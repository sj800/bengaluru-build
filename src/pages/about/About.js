import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      {/* Section 1: The Vision */}
      <section className="about-hero">
  <div className="container">
    {/* Highlighting the 'Platform' aspect */}
    <h1 className="reveal-text">We build the engine. <br/><span>You drive the growth.</span></h1>
    <p className="about-subtitle">
      Bengaluru Builds is where your digital journey starts. We don't just build websites; 
      we set up your entire digital identity—from your first domain to your final social media handle.
    </p>
  </div>
</section>

<section className="about-services">
  <div className="container">
    <div className="services-grid">
      <div className="service-item">
        <h3>Shopify Store Launch</h3>
        <p>We build, design, and manage your Shopify store. From adding your first product to integrating payments, we make sure you're ready to sell from day one.</p>
      </div>
      <div className="service-item">
        <h3>Professional Brand Sites</h3>
        <p>Whether it's for your business or your personal brand, we build high-speed websites that never go down and require zero technical work from your side.</p>
      </div>
      <div className="service-item">
        <h3>Total Infrastructure</h3>
        <p>We handle the "boring" stuff: domain registration, professional business emails (you@yourbrand.com), and secure hosting—all included.</p>
      </div>
      <div className="service-item">
        <h3>Social Presence Setup</h3>
        <p>We secure your brand across Instagram, X, Facebook, and Telegram. We build the accounts and link them together so your customers can find you everywhere.</p>
      </div>
    </div>
  </div>
</section>
      {/* Section 3: The Promise (Transparency & Speed) */}
      <section className="about-promise">
        <div className="container">
          <div className="promise-card">
            <h2>The Bengaluru Builds Promise</h2>
            <div className="promise-grid">
              <div className="promise-item">
                <h4>Rapid Delivery</h4>
                <p>We measure deployment in days, not months. Your brand waits for no one.</p>
              </div>
              <div className="promise-item">
                <h4>Transparent Costing</h4>
                <p>One clear quote. Zero hidden fees. No "maintenance surprises" down the road.</p>
              </div>
              <div className="promise-item">
                <h4>Technical Simplicity</h4>
                <p>We handle the DNS, the code, and the servers. You get a launchpad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;