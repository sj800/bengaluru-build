import React from 'react';
import './ITProfessionalUmbra.css';

const ITProfessionalUmbra = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="it-prof-umbra-template-wrapper">
      <div className="it-prof-umbra-glow-field"></div>
      
      {/* NAVIGATION */}
      <nav className="it-prof-umbra-nav">
        <div className="it-prof-umbra-nav-container">
          <div className="it-prof-umbra-nav-logo" onClick={() => window.location.href = '/'}>
            Bengalurur Builds<span>.</span>
          </div>
          <div className="it-prof-umbra-nav-menu">
            <button onClick={() => scrollToSection('experience')}>Experience</button>
            <button onClick={() => scrollToSection('skills')}>Stack</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('education')}>Education</button>
            <button className="it-prof-umbra-nav-cta" onClick={() => scrollToSection('contact')}>Hire Me</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="it-prof-umbra-hero">
        <div className="it-prof-umbra-hero-grid">
          <div className="it-prof-umbra-hero-text">
            <div className="it-prof-umbra-status-pill">
              <span className="it-prof-umbra-dot"></span> Available for AI Architecture
            </div>
            <h1>Architecting the <span>Neural Era.</span></h1>
            <p>
              9+ years of experience defining AI strategy for Fortune 500s. 
              Ex-Google Architect specializing in Large Language Model (LLM) scaling and ethical AI frameworks.
            </p>
            <div className="it-prof-umbra-hero-actions">
              <button className="it-prof-umbra-btn-glass" onClick={() => scrollToSection('projects')}>View Systems</button>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="it-prof-umbra-btn-outline">LinkedIn</a>
            </div>
          </div>
          <div className="it-prof-umbra-hero-image-wrap">
            <div className="it-prof-umbra-image-accent"></div>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&h=600&fit=crop" alt="Architect Portrait" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="it-prof-umbra-section">
        <h2 className="it-prof-umbra-heading">Professional Trajectory</h2>
        <div className="it-prof-umbra-exp-list">
          <div className="it-prof-umbra-glass-card">
            <span className="it-prof-umbra-exp-date">2021 — Present</span>
            <div className="it-prof-umbra-exp-header">
              <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google" className="it-prof-umbra-company-logo"/>
              <div>
                <h3>Principal Solutions Architect</h3>
                <h4>Google AI | Mountain View</h4>
              </div>
            </div>
            <p>Leading the deployment of multimodal Generative AI for Google Cloud customers. Reduced training costs by 30% through sparse attention optimization.</p>
          </div>

          <div className="it-prof-umbra-glass-card">
            <span className="it-prof-umbra-exp-date">2018 — 2021</span>
            <div className="it-prof-umbra-exp-header">
              <img src="https://cdn-icons-png.flaticon.com/128/5969/5969055.png" alt="Nvidia" className="it-prof-umbra-company-logo"/>
              <div>
                <h3>Senior ML Engineer</h3>
                <h4>NVIDIA | Santa Clara</h4>
              </div>
            </div>
            <p>Core developer for CUDA-accelerated deep learning libraries. Optimized transformer kernels for the H100 GPU architecture.</p>
          </div>

          <div className="it-prof-umbra-glass-card">
            <span className="it-prof-umbra-exp-date">2017 (Internship)</span>
            <div className="it-prof-umbra-exp-header">
              <img src="https://cdn-icons-png.flaticon.com/128/732/732228.png" alt="Microsoft" className="it-prof-umbra-company-logo"/>
              <div>
                <h3>AI Research Intern</h3>
                <h4>Microsoft Research | Redmond</h4>
              </div>
            </div>
            <p>Conducted research on zero-shot learning in healthcare datasets. Published two papers at NeurIPS 2017.</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="it-prof-umbra-skills-section">
        <div className="it-prof-umbra-skills-glass">
          <div className="it-prof-umbra-skill-info">
            <h2 className="it-prof-umbra-heading">Technical Stack</h2>
            <div className="it-prof-umbra-skill-tags">
              <span>LLM Orchestration</span> <span>Distributed Systems</span> <span>MLOps</span>
              <span>Vector Databases</span> <span>CUDA C++</span> <span>Cloud Infrastructure</span>
            </div>
          </div>
          <div className="it-prof-umbra-tool-grid">
            <div className="it-prof-umbra-tool-item">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="it-prof-umbra-tool-item">
              <img src="https://cdn-icons-png.flaticon.com/128/2103/2103633.png" alt="PyTorch" />
              <span>PyTorch</span>
            </div>
            <div className="it-prof-umbra-tool-item">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968532.png" alt="Docker" />
              <span>Docker</span>
            </div>
            <div className="it-prof-umbra-tool-item">
              <img src="https://cdn-icons-png.flaticon.com/128/919/919851.png" alt="React" />
              <span>React</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="it-prof-umbra-section">
        <h2 className="it-prof-umbra-heading">Open Source Systems</h2>
        <div className="it-prof-umbra-project-grid">
          <div className="it-prof-umbra-git-glass">
            <div className="it-prof-umbra-git-top">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="Github" />
              <a href="https://github.com" target="_blank" rel="noreferrer">View Repo</a>
            </div>
            <h3>Quantum-LLM-Core</h3>
            <p>A library for simulating quantum-inspired attention mechanisms on classical hardware.</p>
            <div className="it-prof-umbra-git-meta"><span>Python</span> <span>C++</span></div>
          </div>
          <div className="it-prof-umbra-git-glass">
            <div className="it-prof-umbra-git-top">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="Github" />
              <a href="https://github.com" target="_blank" rel="noreferrer">View Repo</a>
            </div>
            <h3>Auto-MLOps-Pipeline</h3>
            <p>End-to-end automated pipeline for deploying fine-tuned Llama models to Kubernetes.</p>
            <div className="it-prof-umbra-git-meta"><span>Bash</span> <span>YAML</span></div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="it-prof-umbra-section">
        <h2 className="it-prof-umbra-heading">Academic Pedigree</h2>
        <div className="it-prof-umbra-edu-timeline">
          <div className="it-prof-umbra-edu-item">
            <div className="it-prof-umbra-edu-marker"></div>
            <div>
              <h3>PhD in Artificial Intelligence</h3>
              <p>MIT | 2017</p>
            </div>
          </div>
          <div className="it-prof-umbra-edu-item">
            <div className="it-prof-umbra-edu-marker"></div>
            <div>
              <h3>B.S. in Computer Science</h3>
              <p>Stanford University | 2013</p>
            </div>
          </div>
          <div className="it-prof-umbra-edu-item">
            <div className="it-prof-umbra-edu-marker"></div>
            <div>
              <h3>Secondary Education</h3>
              <p>The International School | 96.5%</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="it-prof-umbra-footer">
        <div className="it-prof-umbra-footer-box">
          <h2>Let's build the next dimension.</h2>
          <div className="it-prof-umbra-contact-links">
            <a href="mailto:architect@umbra.ai">Email</a>
            <a href="https://linkedin.com">LinkedIn</a>
            <span>+1 415 XXX XXXX</span>
          </div>
          <p className="it-prof-umbra-copyright">© 2026 Umbra Template | Engineered for Performance</p>
        </div>
      </footer>
    </div>
  );
};

export default ITProfessionalUmbra;