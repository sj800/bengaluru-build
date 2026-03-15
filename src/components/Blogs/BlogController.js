import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import blogList from './blogList';

// Import all your different blog layouts
import DesignLayout from './BlogPages/BlogPage';
import BlogPage from './BlogPages/BlogPage';

const BlogController = () => {
  const { id } = useParams();
  const blogContent = blogList.find(blog => blog.slug === id);

  if (!blogContent) return <Navigate to="/" replace />;

  // Logic to return the specific component based on the data
  switch (blogContent.template) {
    case 'Infrastructure':
      return <BlogPage data={blogContent} />;
    case 'design':
      return <DesignLayout data={blogContent} />;
    default:
      return <DesignLayout data={blogContent} />; // Fallback layout
  }
};

export default BlogController;