import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Zhanga Shipa" className="h-8 w-auto" />
              <span className="text-lg font-bold">Zhanga Shipa</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Zhanga Shipa - стоматологиялық клиника Шымкент қаласында және оның айналасында.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/zhanga_shipa/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-accent-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{language === 'kz' ? 'Сілтемелер' : 'Ссылки'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('services.title')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">{t('services.service1')}</li>
              <li className="text-gray-300 text-sm">{t('services.service2')}</li>
              <li className="text-gray-300 text-sm">{t('services.service3')}</li>
              <li className="text-gray-300 text-sm">{t('services.service4')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">+7 777 789 4828</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">info@zhangashipa.kz</span>
              </div>
              <a
                href="https://wa.me/77777894828"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
              >
                {language === 'kz' ? 'Жазылу' : 'Записаться'}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Zhanga Shipa. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;