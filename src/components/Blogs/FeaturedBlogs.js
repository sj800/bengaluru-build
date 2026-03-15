import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import blogList from "./blogList";
import "./FeaturedBlogs.css";

// Get 3 random featured blogs
const getRandomFeatured = (list, n = 3) => {
  const featured = list.filter(b => b.featured);
  const shuffled = [...featured].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const featuredData = getRandomFeatured(blogList);

const FeaturedBlogs = () => {
  const containerRef = useRef(null);

  // Scroll Animation Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section className="featured-section" ref={containerRef}>
      <motion.div 
        style={{ scale, opacity }} 
        className="featured-container white-glass"
      >
        <div className="featured__header">
          <h2 className="featured__title">Ideas on <span className="highlight">Paper.</span></h2>
        </div>

        <div className="featured__grid">
          {featuredData.map((blog) => (
            <motion.a
              href={blog.link}
              key={blog.id}
              className="featured__card"
              whileHover={{ y: -5, backgroundColor: "rgba(0, 0, 0, 0.03)" }}
            >
              <div className="card-top">
                <span className="dot"></span>
                <h3>{blog.title}</h3>
              </div>
              <p>{blog.excerpt}</p>
            </motion.a>
          ))}
        </div>

        <div className="featured__footer">
          <Link to="/ideas-on-paper" className="view-all-arrow">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1"/>
              <path d="M18 24h12M25 19l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedBlogs;