import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import HomePage from './app/HomePage';
import ServicesPage from './app/ServicesPage';
import VisionPage from './app/VisionPage';
import AboutPage from './app/AboutPage';
import TeamPage from './app/TeamPage';
import ContactPage from './app/ContactPage';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleEnd = () => setIsTransitioning(false);

    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('load', handleEnd);

    return () => {
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleEnd);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`relative min-h-screen bg-navy-900 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar scrolled={scrolled} menuOpen={menuOpen} toggleMenu={toggleMenu} />
          
          <main className="relative overflow-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;