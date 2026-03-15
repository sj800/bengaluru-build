import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './BlogPages.css';
import FeaturedBlogs from '../FeaturedBlogs';
import { Helmet } from "react-helmet";

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
  >
    {children}
  </motion.div>
);

const BlogPage = ({ data }) => {
  const { scrollYProgress } = useScroll();
  const blogContent = data;

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!blogContent) return null;

  return (
    <div className="blog-post-page">
      <Helmet>
        <title>{blogContent.title} | Bengaluru Builds</title>

        <meta name="description" content={blogContent.subtitle} />

        <meta property="og:title" content={blogContent.title} />
        <meta property="og:description" content={blogContent.subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://bengalurubuilds.com/blog/${blogContent.slug}`} />
          <meta
    property="og:image"
    content={`https://bengalurubuilds.com/B.png`}/>

        <link
          rel="canonical"
          href={`https://bengalurubuilds.com/blog/${blogContent.slug}`}
        />
        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": blogContent.title,
  "description": blogContent.subtitle,
  "author": {
    "@type": "Person",
    "name": blogContent.writer
  },
  "datePublished": blogContent.date,
  "publisher": {
    "@type": "Organization",
    "name": "Bengaluru Builds"
  }
})}
</script>

      </Helmet>

      {/* Reading Progress Bar */}
      <motion.div className="reading-progress-bar" style={{ scaleX }} />

      <article className="blog-article">
        <header className="article-header">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="article-category"
          >
            {blogContent.category}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="article-title"
          >
            {blogContent.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="article-subtitle"
          >
            {blogContent.subtitle}
          </motion.p>

          <div className="article-meta">
            <span>{blogContent.writer}</span>
            <span className="meta-dot">•</span>
            <span>{blogContent.date}</span>
          </div>
        </header>

        <section className="article-body">
          {blogContent.content.map((section, index) => (
            <ScrollReveal key={index}>
              {section.type === "heading" && <h2>{section.content}</h2>}
              {section.type === "subheading" && <h3>{section.content}</h3>}
              {section.type === "paragraph" && <p className="glass-text">{section.content}</p>}
            </ScrollReveal>
          ))}
        </section>
      </article>

      {/* Modern Divider */}
      <hr className="blog-section-divider" />

      {/* Read More Section */}
      <section className="more-stories-section">
        <div className="read-more-header container">
          <span className="read-more-label">Keep Reading</span>
          <h2 className="read-more-title">More Ideas on Paper.</h2>
        </div>
        <FeaturedBlogs />
      </section>
    </div>
  );
};

export default BlogPage;