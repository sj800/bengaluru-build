import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./CTA.css";
import Button from "../Button/Button";
import ContactFormModal from "../contact/ContactFormModal";

const CTA = () => {
  const [showModal, setShowModal] = React.useState(false);
  const containerRef = useRef(null);

  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"] // Start animation when top of sect enters bottom of viewport
  });

  // Map scroll progress (0 to 1) to Scale and Opacity
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section className="cta-section" ref={containerRef}>
      <motion.div 
        style={{ scale, opacity }} 
        className="cta__banner glassy-effect"
      >
        <h2 className="cta__headline">Let's Build Something Unforgettable.</h2>
        <p className="cta__subhead">
          Transform your vision into a digital experience that stands out.<br/>
          Ready to make your mark?
        </p>
        <Button className="cta__button" onClick={() => setShowModal(true)}>
          Get in Touch
        </Button>
      </motion.div>

      {showModal && <ContactFormModal close={() => setShowModal(false)} />}
    </section>
  );
};

export default CTA;