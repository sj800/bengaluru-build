import React from "react";
import "./ServicesModal.css";

const services = [
  {
    title: "Shopify Store Build",
    features: [
      "Quickstore Setup",
      "Payment & Tax Integration",
      "Inventory & Analytics Setup",
      "Conversion-Ready Launch"
    ]
  },
  {
    title: "Personal & Business Brands",
    features: [
      "Custom Brand Identity",
      "SEO Optimization",
      "Minimal maintenance",
      "Mobile friendly design"
    ]
  },
  {
    title: "Social Identity Setup",
    features: [
      "Profile setup across platforms",
      "Bio & Keyword Optimization",
      "Cross-Platform Linking",
      "Brand Identity Foundations"
    ]
  },
  {
    title: "Domain & Email Setup",
    features: [
      "Domain setup & management",
      "Free Hosting",
      "Professional Email Routing",
      "Domain Privacy Protection"
    ]
  }
];

const ServicesModal = ({ close, onSelectService }) => {
  return (
    <div className="services-modal-overlay">
      <button className="modal-close" onClick={close} aria-label="Close Modal">✕</button>
      
      <div className="services-modal__container">
        <header className="services-modal__header">
          <h2>Our Services</h2>
          <p>Everything you need to launch your digital presence.</p>
        </header>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__content">
                <h3>{service.title}</h3>
                <ul>
                  {service.features.map((f, j) => (
                    <li key={j}><span className="check">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
              <button 
                className="btn-card-select" 
                onClick={() => {
                  if(onSelectService) onSelectService(service.title);
                  close();
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesModal;