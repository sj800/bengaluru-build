import "./Services.css";

const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          fill="var(--accent)"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z"
        />
        <path
          fill="var(--accent)"
          d="M16.5 8h-1v10h1V8zm-4.036 10.964l-.707-.707 7.07-7.07.707.707-7.07 7.07z"
        />
      </svg>
    ),
    title: "Comprehensive Digital Presence & Ad Campaign Management",
    desc: "Holistic stewardship of your brand's digital narrative. We cultivate audience growth, architect compelling content strategies, and execute targeted advertising campaigns across Instagram, Facebook, WhatsApp, and X.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          fill="var(--accent)"
          d="M28 2H4a2 2 0 00-2 2v24a2 2 0 002 2h24a2 2 0 002-2V4a2 2 0 00-2-2zm0 26H4V4h24v24z"
        />
        <path fill="var(--accent)" d="M10 18l6-10 6 10h-12z" />
      </svg>
    ),
    title: "High-Performance Static Website Development",
    desc: "Development of secure, lightweight, high-performance static websites engineered for speed, SEO, and exceptional user experience.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <path
          fill="var(--accent)"
          d="M28 8H4a2 2 0 00-2 2v12a2 2 0 002 2h24a2 2 0 002-2V10a2 2 0 00-2-2zm-2 12H6V12h20v8z"
        />
        <path fill="var(--accent)" d="M12 14h8v4h-8z" />
      </svg>
    ),
    title: "Custom Shopify E-Commerce Solutions",
    desc: "We architect and optimize Shopify stores engineered for higher conversions and seamless shopping experiences.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15" stroke="var(--accent)" strokeWidth="2" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".35em"
          fontSize="14"
          fill="var(--accent)"
        >
          @
        </text>
      </svg>
    ),
    title: "Professional Domain & Email Configuration",
    desc: "Secure domain registration and professional email configuration to establish a polished and credible digital identity.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Expertise, Your Advantage</h2>

      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{service.icon}</div>

            <h3 className="service-title">{service.title}</h3>

            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;