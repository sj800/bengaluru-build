import React from 'react';
import { motion } from 'framer-motion';
import { templateList } from '../../index'; 
import './ChooseYourTemplate.css';

const ChooseYourTemplate = () => {
  // Function to handle opening in a new window
  const handleTemplateClick = (path) => {
    window.open(path, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="template-page">
      <main className="template-container">
        <header className="template-header">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="category-pill"
          >
            Design Library
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Choose your <span className="highlight">Template.</span>
          </motion.h1>
        </header>

        <div className="template-grid">
          {templateList.map((template, index) => (
            <motion.div
              key={template.id}
              className="template-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => handleTemplateClick(template.path)}
            >
              <div className="preview-window">
                <div className="window-dots">
                  <span></span><span></span><span></span>
                </div>
                <iframe 
                  src={template.path} 
                  title={template.title}
                  className="preview-iframe"
                  scrolling="no"
                />
                <div className="preview-overlay"></div>
              </div>

              <div className="card-content">
                <div className="card-info">
                  <span className="card-category">{template.category}</span>
                  <h2 className="card-title">{template.title}</h2>
                  <p className="card-excerpt">{template.description}</p>
                </div>
                
                <div className="card-footer">
                  <div className="view-link">
                    Open Template 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ChooseYourTemplate;