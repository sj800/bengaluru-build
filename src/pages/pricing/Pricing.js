import React from "react";
import "./Pricing.css";
import { useState } from "react";
import ContactFormModal from "../../components/contact/ContactFormModal";

const Pricing = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const shopifyPlans = [
    {
      name: "Starter",
      price: "1,999",
      features: ["Site setup on Shopify", "Onboarding 20 products", "Standard Theme Setup", "Mobile Responsive"],
      extras: ["Shopify Platform Fee", "Domain Charges"],
      buttonName: "Get Starter"
    },
    {
      name: "Professional",
      price: "3,999",
      features: ["Site setup on Shopify", "Onboarding 20 products", "Standard Theme Setup", "Mobile Responsive", "Enabling Analytics", "Integrating Payment Gateway"],
      extras: ["Shopify Platform Fee", "Domain Charges"],
      buttonName: "Get Professional"
    },
    {
      name: "Advanced",
      price: "4,999",
      features: ["Site setup on Shopify", "Onboarding 20 products", "Standard Theme Setup", "Mobile Responsive", "Enabling Analytics", "Integrating Payment Gateway", "Shipping Integration"],
      extras: ["Shopify Platform Fee", "Domain Charges"],
      buttonName: "Get Advanced"
    }
  ];

  const faqs = [
    { q: "Are platform fees included?", a: "No. Shopify platform fees and domain purchase charges are billed directly by the respective providers and are not included in our service fee." },
    { q: "What do I need to start accepting payments?", a: "To activate payments, you’ll need a valid GST number and a Business Bank Account. Since we integrate with third-party gateways, approval is subject to their standard due diligence. In the rare event that gateway integration cannot be completed, we offer a full refund for the integration service fee." },
    { q: "How many section will a page have?", a: "Pages can have 7 sections including header and footer. Any additional sections will be charged at 99/section." },
    { q: "Can you manage my store after launch?", a: "Yes. We offer Digital Store Management, which includes updating your online presence, managing product listings, and keeping your site optimized. Please note that we do not handle physical operations, such as inventory storage, product delivery, or order fulfillment." },
    { q: "Do you manage my social media accounts monthly?", a: "We specialize in the technical launch of your digital identity. This includes securing your handles, optimizing your bios, and linking your platforms across the web. We do not provide ongoing content creation or daily account management, ensuring you maintain full creative control over your brand’s voice." },
    { q: "What does the monthly management fee cover?", a: "Our monthly plan is designed for total peace of mind. It includes 5 requests for product updates (upto 10 products) or store health checks (for Shopify) and 1 requests for changes per month for Personal or Business Brand sites. We also provide full technical support for any issues you face. Any additional requests beyond this quota are handled at a transparent flat rate of ₹99 per request." }
  ];

  return (
    <div className="pricing-page">
      {/* Centered Header */}
      <header className="pricing-header">
        <h1>Transparent Pricing</h1>
        <p>Choose the right plan for your business growth.</p>
      </header>

      {/* SHOPIFY SECTION */}
      <div className="pricing-section">
        <h2 className="section-label">Shopify Store Launchpad</h2>
        <div className="pricing-grid">
          {shopifyPlans.map((plan, i) => (
            <div key={i} className="pricing-card">
              <span className="plan-label">{plan.name}</span>
              <div className="price">₹{plan.price}<span>/setup</span></div>
              <ul className="feature-list">
                {plan.features.map((f, j) => <li key={j}>{f}</li>)}
                {plan.extras.map((e, j) => <li key={j} className="extra">Excl: {e}</li>)}
              </ul>
              <button className="cta-button" onClick={() => setShowContactModal(true)}>
                {plan.buttonName}
              </button>
            </div>
          ))}
        </div>
        
        <div className="addons-container">
          <h3 className="addon-title">Shopify Specific Add-ons</h3>
          <div className="addon-row"><span>Extra Product Upload</span> <span>₹299 / 10 product</span></div>
          <div className="addon-row"><span>Monthly maintenance </span> <span>₹499 / mo</span></div>
          
        </div>
      </div>

      {/* BRAND SITES SECTION */}
      <div className="pricing-section">
        <h2 className="section-label">Personal & Business Brand Sites</h2>
        <div className="static-box">
          <div className="static-content">
            <h3>Custom High-Performance Build</h3>
            <div className="price">₹1,299 <span>(First 2 Pages)</span></div>
            <p className="sub-price">+ ₹499 per additional page</p>
            <div className="static-tags">
              <span>Domain: At Cost</span>
              <span>Hosting: At Cost</span>
            </div>
          </div>
        </div>

        <div className="addons-container">
          <h3 className="addon-title">Brand Infrastructure Add-ons</h3>
          <div className="addon-row"><span>SEO Optimization</span> <span>FREE</span></div>
          <div className="addon-row"><span>Domain & Email Setup</span> <span>₹999</span></div>
          <div className="addon-row"><span>Social Media Identity Setup</span> <span>₹999</span></div>
          <div className="addon-row"><span>Monthly maintenance </span> <span>₹99 / month</span></div>
        </div>
      </div>

      {/* FAQ SECTION - Static List */}
      <section className="faq-section">
        <h2 className="section-label">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-question">{faq.q}</div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>
          {showContactModal && (
        <ContactFormModal close={() => setShowContactModal(false)} />
      )}

    </div>
  );
};

export default Pricing;