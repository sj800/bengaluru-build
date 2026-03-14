import React from "react";
import "./Value.css";

const values = [
  {
    title: "Design that stands out",
    desc: "We build clean, modern digital experiences that make your brand look credible and professional."
  },
  {
    title: "Built for speed",
    desc: "Our websites are engineered for performance — fast load times, smooth UX, and strong SEO foundations."
  },
  {
    title: "One partner for everything",
    desc: "From domains and websites to Shopify stores and digital growth — we handle the entire digital stack."
  }
];

const Value = () => (
  <section className="value">
    <div className="value__container">

      <div className="value__header">
        <h2>Why Businesses Choose Bengaluru Builds</h2>
        <p>
          We combine thoughtful design, strong engineering, and practical
          business thinking to help brands grow online.
        </p>
      </div>

      <div className="value__grid">
        {values.map((v, i) => (
          <div className="value__card" key={i}>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Value;