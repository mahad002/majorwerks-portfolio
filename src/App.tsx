import React, { useEffect, useState, Suspense, useCallback, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import LoadingDots from './components/LoadingDots';

// Lazy load pages with prefetching
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const VisionPage = React.lazy(() => import('./pages/VisionPage'));

// Memoized Routes component
const MemoizedRoutes = memo(() => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/vision" element={<VisionPage />} />
  </Routes>
));

MemoizedRoutes.displayName = 'MemoizedRoutes';

// Memoized Main Content
const MainContent = memo(({ scrolled, menuOpen, toggleMenu }: { scrolled: boolean; menuOpen: boolean; toggleMenu: () => void }) => (
  <div className="relative min-h-screen bg-neutral-100">
    <Navbar scrolled={scrolled} menuOpen={menuOpen} toggleMenu={toggleMenu} />
    <main className="relative overflow-hidden">
      <Suspense fallback={<LoadingDots />}>
        <MemoizedRoutes />
      </Suspense>
    </main>
    <Footer />
  </div>
));

MainContent.displayName = 'MainContent';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Memoized menu toggle
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <MainContent 
          scrolled={scrolled} 
          menuOpen={menuOpen} 
          toggleMenu={toggleMenu} 
        />
      )}
    </Router>
  );
}

export default memo(App);