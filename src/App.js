
import './App.css';
import './styles/global.css';
import './styles/theme.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/Contact';
import IdeasOnPaper from './components/Blogs/IdeasOnPaper';
import BlogRoutes from './BlogRoutes';



function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ideas-on-paper" element={<IdeasOnPaper />} />
          <Route path="/blog/*" element={<BlogRoutes />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
