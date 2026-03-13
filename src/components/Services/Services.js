import React from 'react';
import './Services.css';

const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#7f5fff"/><path d="M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Digital Platform & Ad Management',
    desc: "End-to-end management of your brand's voice. We handle profile growth, content strategy, and targeted ad campaigns across Instagram, Facebook, WhatsApp, and X (formerly Twitter)."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#00eaff"/><path d="M10 22l6-12 6 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    title: 'Blazing-Fast Static Websites',
    desc: 'Secure, zero-bloat, high-performance static websites. Whether you need a sleek Personal Profile to showcase your portfolio or a robust Business Website to establish your brand, we code it for speed and SEO.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#ff7f50"/><path d="M12 14h8v4H12z" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#fff" strokeWidth="2"/></svg>
    ),
    title: 'Shopify E-Commerce Experiences',
    desc: 'Turn visitors into loyal customers. We design, build, and optimize custom Shopify stores tailored for high conversion rates and seamless user experiences.'
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#00eaff"/><text x="10" y="22" fontSize="16" fill="#fff">@</text></svg>
    ),
    title: 'Domain Registration & Email Forwarding',
    desc: 'Claim your corner of the internet. We handle secure domain name registration and set up professional email forwarding so you look official from day one.'
  }
];

const Services = () => (
  <section className="services">
    <h2 className="services__title">What We Build</h2>
    <div className="services__grid">
      {services.map((s, i) => (
        <div className="service-card" key={i}>
          <div className="service-icon">{s.icon}</div>
          <h3 className="service-title">{s.title}</h3>
          <p className="service-desc">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
