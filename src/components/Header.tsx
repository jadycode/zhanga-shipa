import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-primary-600"
          >
            <img src="assets/logo.svg" alt="Zhanga Shipa" className="h-8 w-auto" />
            <span className={`text-lg font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
              Zhanga Shipa
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors text-sm`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors text-sm`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/services" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors text-sm`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/contact" 
              className={`${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500 transition-colors text-sm`}
            >
              {t('nav.contact')}
            </Link>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setLanguage('kz')} 
                className={`px-2 py-1 rounded-md text-sm ${
                  language === 'kz' 
                    ? 'bg-primary-500 text-white' 
                    : `${isScrolled ? 'text-gray-800' : 'text-white'} hover:bg-gray-200 hover:text-gray-800`
                }`}
              >
                KZ
              </button>
              <button 
                onClick={() => setLanguage('ru')} 
                className={`px-2 py-1 rounded-md text-sm ${
                  language === 'ru' 
                    ? 'bg-primary-500 text-white' 
                    : `${isScrolled ? 'text-gray-800' : 'text-white'} hover:bg-gray-200 hover:text-gray-800`
                }`}
              >
                RU
              </button>
            </div>
            
            <a 
              href="https://wa.me/77777894828" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-full text-sm transition-all transform hover:scale-105"
            >
              {language === 'kz' ? 'Жазылу' : 'Записаться'}
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg mt-2 rounded-lg">
            <div className="py-4 space-y-2">
              <Link 
                to="/" 
                className="block px-4 py-2 text-gray-800 hover:text-primary-500 text-sm"
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-2 text-gray-800 hover:text-primary-500 text-sm"
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/services" 
                className="block px-4 py-2 text-gray-800 hover:text-primary-500 text-sm"
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-2 text-gray-800 hover:text-primary-500 text-sm"
              >
                {t('nav.contact')}
              </Link>
              
              <div className="flex space-x-2 px-4 py-2">
                <button 
                  onClick={() => setLanguage('kz')} 
                  className={`px-3 py-1 rounded-md text-sm ${
                    language === 'kz' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  KZ
                </button>
                <button 
                  onClick={() => setLanguage('ru')} 
                  className={`px-3 py-1 rounded-md text-sm ${
                    language === 'ru' 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  RU
                </button>
              </div>
              
              <div className="px-4 py-2">
                <a 
                  href="https://wa.me/77777894828" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-full text-sm text-center"
                >
                  {language === 'kz' ? 'Жазылу' : 'Записаться'}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;