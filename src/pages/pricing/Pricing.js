import React, { useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const shopifyPlans = [
    {
      name: "Starter",
      price: "1,999",
      features: ["Site setup on Shopify", "Onboarding 20 products", "Standard Theme Setup", "Mobile Responsive"],
      extras: ["Shopify Platform Fee", "Domain Charges"]
    },
    {
      name: "Professional",
      price: "2,999",
      features: ["Site setup on Shopify", "Onboarding 20 products", "Enabling Analytics", "Integrating Payment Gateway", "SEO Optimization"],
      extras: ["Shopify Platform Fee", "Domain Charges"]
    },
    {
      name: "Advanced",
      price: "3,999",
      features: ["Site setup on Shopify", "Onboarding 30 products", "Enabling Analytics", "Integration with Shipping", "Integrating Payment", "Priority Support"],
      extras: ["Shopify Platform Fee", "Domain Charges"]
    }
  ];

  const faqs = [
    { q: "Are platform fees included?", a: "No. Shopify platform fees and domain purchase charges are billed directly by the respective providers and are not included in our service fee." },
    { q: "What do I need to start accepting payments?", a: "To integrate a payment gateway and receive funds, you must have a valid GST number and a registered Business Bank Account." },
    { q: "How does the 'Per Page' pricing work for Static sites?", a: "For a 2-page website, the base cost is ₹1,099. Any additional pages beyond the first two are charged at ₹499 per page." },
    { q: "Can you manage my store after launch?", a: "Yes, we offer Order Management and GST filing services starting at ₹499/month to keep your business running smoothly." }
  ];

  return (
    <div className="pricing-page">
      <section className="pricing-header">
        <h1>Transparent Pricing</h1>
        <p>Choose the right plan for your business growth.</p>
      </section>

      {/* Shopify Section */}
      <h2 className="section-title">Shopify Stores</h2>
      <div className="pricing-grid">
        {shopifyPlans.map((plan, i) => (
          <div key={i} className="pricing-card">
            <span className="plan-label">{plan.name}</span>
            <div className="price">₹{plan.price}<span>/service</span></div>
            <ul className="feature-list">
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
              {plan.extras.map((e, j) => <li key={j} className="extra">Excl: {e}</li>)}
            </ul>
            <button className="cta-button">Get Started</button>
          </div>
        ))}
      </div>

      {/* Static Website Section */}
      <h2 className="section-title">Static Websites</h2>
      <div className="static-box">
        <div className="static-content">
          <h3>Custom Static Development</h3>
          <p>₹1,099 (First 2 Pages) + ₹499 per additional page</p>
          <div className="static-tags">
            <span>Domain: At Cost</span>
            <span>Hosting: At Cost</span>
          </div>
        </div>
      </div>

      {/* Add-ons Table */}
      <h2 className="section-title">Additional Services</h2>
      <div className="addons-container">
        <div className="addon-row"><span>Email & Social Setup</span> <span>₹999</span></div>
        <div className="addon-row"><span>Extra Product Upload</span> <span>₹29 / product</span></div>
        <div className="addon-row"><span>Order Management (100 orders)</span> <span>₹499 / mo</span></div>
        <div className="addon-row"><span>GST Filing</span> <span>₹499 / mo</span></div>
        <div className="addon-row highlight"><span>Full Marketing (7 Campaigns)</span> <span>₹1,099 / mo + platform costs</span></div>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${activeFaq === i ? 'open' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
              <div className="faq-question">{faq.q} <span>{activeFaq === i ? '−' : '+'}</span></div>
              {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;