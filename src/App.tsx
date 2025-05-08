import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import HomePage from './app/HomePage';
import ServicesPage from './app/ServicesPage';
import VisionPage from './app/VisionPage';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative min-h-screen bg-neutral-100">
          <Navbar scrolled={scrolled} menuOpen={menuOpen} toggleMenu={toggleMenu} />
          
          <main className="relative overflow-hidden">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/vision" element={<VisionPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;