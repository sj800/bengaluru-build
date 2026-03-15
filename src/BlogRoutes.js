import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import BlogController from './components/Blogs/BlogController';

const BlogRoutes = () => {

  return (
    <AnimatePresence mode="wait">
      <Routes>        
        {/* The dynamic blog route */}
        <Route path=":id" element={<BlogController />} />
        <Route path="*" element={<Navigate to="/" replace />} /> {/* Fallback to a default blog or 404 page */}
      </Routes>
    </AnimatePresence>
  );
};

export default BlogRoutes;