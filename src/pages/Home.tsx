import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import { 
  Microscope, 
  Stethoscope, 
  Wrench, 
  Scissors, 
  Brush, 
  Smile,
  ChevronRight
} from 'lucide-react';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  const osmsContent = {
    kz: {
      text: "18 жасқа дейінгі балаларға және жүкті аналарға ТЕГІН стоматологиялық қызмет түрлерін ұсынамыз."
    },
    ru: {
      text: "Предлагаем БЕСПЛАТНЫЕ стоматологические услуги для детей до 18 лет и беременных женщин."
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/background.jpg" 
            alt="Dental clinic" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-primary-900 opacity-40 z-0"></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://wa.me/77777894828"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all transform hover:scale-105 text-center"
              >
                {language === 'kz' ? 'Жазылу' : 'Записаться'}
              </a>
              <Link 
                to="/services"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-primary-900 transition-colors text-center"
              >
                {t('services.title')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,149.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* MAMS/OSMS Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 opacity-10 rounded-full -mr-32 -mt-32"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-primary-800 flex items-center">
                  <span className="relative group cursor-help">
                    <span className="font-bold mr-2">МӘМС</span>
                    <span className="absolute left-0 bottom-full mb-2 w-64 bg-white shadow-lg rounded-md p-3 text-sm text-gray-700 invisible group-hover:visible z-30 transition-opacity font-normal">
                      {t('home.insurance.mams.full')}
                    </span>
                  </span>
                  /
                  <span className="relative group cursor-help">
                    <span className="font-bold ml-2">ОСМС</span>
                    <span className="absolute left-0 bottom-full mb-2 w-64 bg-white shadow-lg rounded-md p-3 text-sm text-gray-700 invisible group-hover:visible z-30 transition-opacity font-normal">
                      {t('home.insurance.osms.full')}
                    </span>
                  </span>
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  {language === 'kz' ? osmsContent.kz.text : osmsContent.ru.text}
                </p>
                <Link 
                  to="/services#osms"
                  className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full transition-colors"
                >
                  {language === 'kz' ? 'Толығырақ' : 'Подробнее'}
                  <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              </div>
              
              <img 
                src="assets/zh-sh-1.jpg" 
                alt="Dental insurance" 
                className="w-full md:w-1/4 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('home.services.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title={t('services.service1')}
              description={t('services.service1.description')}
              icon={<Microscope className="h-10 w-10" />}
            />
            
            <ServiceCard 
              title={t('services.service2')}
              description={t('services.service2.description')}
              icon={<Stethoscope className="h-10 w-10" />}
            />
            
            <ServiceCard 
              title={t('services.service3')}
              description={t('services.service3.description')}
              icon={<Wrench className="h-10 w-10" />}
            />
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              {t('home.services.viewAll')}
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('home.about.title')}</h2>
              <p className="text-gray-600 mb-6">
                {t('home.about.description')}
              </p>
              
              <Link 
                to="/about" 
                className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full transition-colors"
              >
                {t('home.about.learnMore')}
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="assets/background.jpg" 
                  alt="Dental team" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="text-lg font-bold">10+ {language === 'kz' ? 'жыл тәжірибе' : 'лет опыта'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('home.contact.title')}</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('home.contact.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="bg-white text-primary-800 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              {t('contact.title')}
            </Link>
            
            <a 
              href="https://wa.me/77777894828"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              {language === 'kz' ? 'Жазылу' : 'Записаться'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;