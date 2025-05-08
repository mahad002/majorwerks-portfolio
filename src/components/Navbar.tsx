import React, { memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = memo(({ scrolled, menuOpen, toggleMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = useCallback((path: string) => {
    navigate(path);
    toggleMenu();
  }, [navigate, toggleMenu]);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/vision', label: 'Vision' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/5 backdrop-blur-lg text-white py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/"
            className="text-2xl md:text-3xl font-bold font-montserrat tracking-tight text-white"
          >
            MajorWerks
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === item.path 
                  ? 'text-indigo-400' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 focus:outline-none"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={menuOpen ? "open" : "closed"}
                className="relative w-6 h-6"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 0 }
                  }}
                  className="absolute block w-6 h-0.5 bg-white"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="absolute block w-6 h-0.5 bg-white top-2"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: 0 }
                  }}
                  className="absolute block w-6 h-0.5 bg-white top-4"
                />
              </motion.div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-navy-900/95 backdrop-blur-3xl z-40"
          >
            <div className="container mx-auto px-6 h-full flex flex-col">
              <div className="flex justify-end py-6">
                <button
                  onClick={toggleMenu}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Close Menu"
                >
                  <span className="sr-only">Close Menu</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1 flex items-center justify-center">
                <ul className="space-y-8 text-center">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className={`text-2xl font-bold transition-colors duration-300 ${
                          location.pathname === item.path 
                            ? 'text-indigo-400' 
                            : 'text-white hover:text-indigo-400'
                        }`}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="py-8 text-center text-white/50 text-sm">
                © {new Date().getFullYear()} MajorWerks. All rights reserved.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;