import React, { useState } from "react";
import "./Hero.css";
import Button from "../Button/Button";
import ServicesModal from "../ServicesModal/ServicesModal";

import ContactFormModal from "../contact/ContactFormModal";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero__content">
    {/* H1: The main hook with your brand name or primary value */}
    <h1 className="hero__headline">
      Build Your Digital Presence
    </h1>

    <p className="hero__subhead">
      From high-performance Shopify stores to Personal brands. We build the digital foundations your brand deserves.
    </p>

          <div className="hero__actions">
            <Button className="btn-primary" onClick={() => setOpen(true)}>
              Explore Our Services
            </Button>

            <Button onClick={() => setShowForm(true)} className="btn-outline">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {open && <ServicesModal close={() => setOpen(false)} />}
        {showForm && <ContactFormModal close={() => setShowForm(false)} />}
    </>
  );
};

export default Hero;