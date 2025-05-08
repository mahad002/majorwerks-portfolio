import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, scrolled, menuOpen, toggleMenu }) => {
  return (
    <div className="relative min-h-screen bg-neutral-100">
      <Navbar scrolled={scrolled} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 