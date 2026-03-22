
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
import { templateList } from './index';  



function App() {
  return (
    <Router>
      <ScrollToTop />
  <Routes>
    {/* --- AGENCY PAGES (With Header & Footer) --- */}
    <Route 
      path="/*" 
      element={
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/choose-your-template" element={<ChooseYourTemplate />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </MainLayout>
      } 
    />

    {/* --- TEMPLATE PREVIEWS (Standalone / No Header or Footer) --- */}
    {templateList.map((template) => (
      <Route 
        key={template.id} 
        path={template.path} 
        element={<template.component />} 
      />
    ))}
  </Routes>
    </Router>
  );
}

export default App;
