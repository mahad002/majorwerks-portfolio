import React, { useEffect, useState, useCallback } from 'react';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import '../index.css';

export default function App({ Component, pageProps }: AppProps) {
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
    <div className="relative min-h-screen bg-neutral-100">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar scrolled={scrolled} menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <main className="relative overflow-hidden">
            <Component {...pageProps} />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
} 