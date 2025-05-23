import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, menuOpen, toggleMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const [route, section] = path.split('#');
    
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    toggleMenu();
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/5 backdrop-blur-lg text-white py-6' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link 
            to="/"
            className="text-3xl font-bold font-montserrat tracking-tight text-white"
          >
            MajorWerks
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-8 z-50 relative">
          <span className={`text-sm uppercase tracking-widest transition-all duration-700 ${menuOpen ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 translate-x-8'}`}>
            {menuOpen ? 'Navigation' : ''}
          </span>
          <button
            onClick={toggleMenu} 
            className="relative focus:outline-none" 
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="flex flex-col space-y-3 relative w-10 h-10">
              <span className={`block w-10 h-[4px] origin-center transition-all duration-700 ease-in-out bg-white transform ${menuOpen ? 'rotate-45 translate-y-[14px]' : ''}`}></span>
              <span className={`block w-10 h-[4px] origin-center transition-all duration-700 ease-in-out bg-white transform ${menuOpen ? '-rotate-45 -translate-y-[2px]' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Overlay menu */}
        <div 
          className={`fixed inset-0 bg-gradient-to-b from-navy-900/95 via-purple-900/90 to-navy-900/95 backdrop-blur-lg transition-all duration-700 ease-in-out ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          style={{ zIndex: 40 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleMenu();
            }
          }}
        >
          <div className="h-full pt-40 container mx-auto px-6 pr-12">
            <nav className="max-w-[90rem] ml-auto w-fit">
              <ul className="flex flex-col space-y-8">
                <li className="transform transition-all duration-700 ease-in-out" style={{ transitionDelay: '50ms', transform: `translateX(${menuOpen ? '0' : '2rem'})`, opacity: menuOpen ? 1 : 0 }}>
                  <Link 
                    to="/" 
                    className="relative block text-right text-3xl font-montserrat font-bold text-white/50 hover:text-white transition-colors group"
                    onClick={toggleMenu}
                  >
                    Home
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
                <li className="transform transition-all duration-700 ease-in-out" style={{ transitionDelay: '100ms', transform: `translateX(${menuOpen ? '0' : '2rem'})`, opacity: menuOpen ? 1 : 0 }}>
                  <Link 
                    to="/services" 
                    className="relative block text-right text-3xl font-montserrat font-bold text-white/50 hover:text-white transition-colors group"
                    onClick={toggleMenu}
                  >
                    Services
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
                <li className="transform transition-all duration-700 ease-in-out" style={{ transitionDelay: '200ms', transform: `translateX(${menuOpen ? '0' : '2rem'})`, opacity: menuOpen ? 1 : 0 }}>
                  <Link 
                    to="/vision" 
                    className="relative block text-right text-3xl font-montserrat font-bold text-white/50 hover:text-white transition-colors group"
                    onClick={toggleMenu}
                  >
                    Vision
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
                <li className="transform transition-all duration-700 ease-in-out" style={{ transitionDelay: '300ms', transform: `translateX(${menuOpen ? '0' : '2rem'})`, opacity: menuOpen ? 1 : 0 }}>
                  <Link 
                    to="#team"
                    className="relative block text-right text-3xl font-montserrat font-bold text-white/50 hover:text-white transition-colors group"
                    onClick={(e) => handleNavigation(e, '/#team')}
                  >
                    Team
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
                <li className="transform transition-all duration-700 ease-in-out" style={{ transitionDelay: '400ms', transform: `translateX(${menuOpen ? '0' : '2rem'})`, opacity: menuOpen ? 1 : 0 }}>
                  <Link 
                    to="#blog"
                    className="relative block text-right text-3xl font-montserrat font-bold text-white/50 hover:text-white transition-colors group"
                    onClick={(e) => handleNavigation(e, '/#blog')}
                  >
                    Blog
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
                <li className="transform transition-all duration-700 ease-in-out" style={{ transitionDelay: '450ms', transform: `translateX(${menuOpen ? '0' : '2rem'})`, opacity: menuOpen ? 1 : 0 }}>
                  <Link 
                    to="#contact"
                    className="relative block text-right text-3xl font-montserrat font-bold text-white/50 hover:text-white transition-colors group"
                    onClick={(e) => handleNavigation(e, '/#contact')}
                  >
                    Contact
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </li>
                <li className="transform transition-all duration-700 ease-in-out" style={{ transitionDelay: '500ms', transform: `translateX(${menuOpen ? '0' : '2rem'})`, opacity: menuOpen ? 1 : 0 }}>
                  <div className="flex justify-end">
                    <button className="relative text-right text-3xl font-montserrat font-bold text-white/50 hover:text-white transition-colors group bg-white/30 backdrop-blur-sm px-8 py-3 hover:bg-white/40">
                    Got an idea?
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;