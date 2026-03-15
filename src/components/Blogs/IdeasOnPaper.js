
import { motion } from 'framer-motion';
import blogList from './blogList';
import './IdeasOnPaper.css';

const blogData = blogList;

const IdeasOnPaper = () => {
  return (
    <div className="blog-page">
      
      <main className="blog-container">
        <header className="blog-header">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="category-pill"
          >
            Insights & Thoughts
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ideas on <span className="highlight">Paper.</span>
          </motion.h1>
        </header>

        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <motion.a
              href={blog.link}
              key={blog.id}
              className="blog-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="card-content">
                <span className="card-category">{blog.category}</span>
                <h2 className="card-title">{blog.title}</h2>
                <p className="card-excerpt">{blog.excerpt}</p>
                <div className="card-footer">
                  <span className="card-date">{blog.date}</span>
                  <span className="read-more">Read Entry →</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default IdeasOnPaper;