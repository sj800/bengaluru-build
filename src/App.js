import './App.css';
import './styles/global.css';
import './styles/theme.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/about/About';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/contact/Contact';
import ScrollToTop from './utils/ScrollToTop';
import ChooseYourTemplate from './components/Blogs/ChooseYourTemplate';
import { templateList } from './templateData';
import { MotionConfig } from 'framer-motion';

function App() {
  // Detect react-snap (Puppeteer)
  const isSnap =
    typeof navigator !== 'undefined' &&
    navigator.userAgent.includes('HeadlessChrome');

  return (
    <MotionConfig transition={isSnap ? { duration: 0 } : undefined}>
      <Router>
        <ScrollToTop />

        <Routes>
          {/* --- MAIN WEBSITE (with layout) --- */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/choose-your-template" element={<ChooseYourTemplate />} />

            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Route>

          {/* --- TEMPLATE PREVIEW PAGES (no layout) --- */}
          {templateList.map((template) => (
            <Route
              key={template.id}
              path={template.path}
              element={<template.component />}
            />
          ))}
        </Routes>
      </Router>
    </MotionConfig>
  );
}

export default App;