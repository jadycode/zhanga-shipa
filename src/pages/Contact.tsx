import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LocationCard from '../components/LocationCard';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Send 
} from 'lucide-react';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  
  const locations = [
    {
      title: t('contact.location.shymkent'),
      addresses: [
        '16 шағынауданы, 20 үй, 47 пәтер',
        'Ә.Жангелдин, 5 а / Айгүл аялдамасы',
        'Мкр Самал-2, Аргынбекова көшесі 82 (Қазиев көшесінің қиылысы)'
      ],
      phones: [
        '+7 778 260 1415, +7 747 284 4261, +7 776 445 2000',
        '56-09-73, +7 777 789 4828',
        '+7 707 327 5494, +7 771 442 7557'
      ]
    },
    {
      title: t('contact.location.otyrar'),
      addresses: [
        'Шәуілдір ауылы, Алтынбеков көшесі, 17/1 үй',
        'Шәуілдір ауылы, Жібек Жолы көшесі, 8А үй'
      ],
      phones: [
        '+7 777 073 7979, +7 705 355 9194, +7 707 258 8892',
        '+7 725 442 11 37, +7 777 918 9959, +7 700 248 7648'
      ]
    },
    {
      title: t('contact.location.shubarsu'),
      addresses: [
        'Д.Қонаев көшесі, Бибісара ана сауда үйі, 1 қабат'
      ],
      phones: [
        '+7 747 907 8485, +7 776 530 7740'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="assets/background.jpg" 
            alt="Contact us" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-primary-900 opacity-60 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-gray-200">{t('contact.subtitle')}</p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f97316" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,165.3C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('contact.locations')}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <LocationCard
                key={index}
                title={location.title}
                addresses={location.addresses}
                phones={location.phones}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('contact.title')}</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md transition-colors flex items-center"
                >
                  {t('contact.form.submit')}
                  <Send className="h-4 w-4 ml-2" />
                </button>
              </form>
            </div>
            
            {/* Map */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Біздің орналасқан жеріміз</h2>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46309.71179435611!2d69.54357157678424!3d42.31768511349155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a91d074c1d9651%3A0x4e0ee36dee781fc6!2sShymkent%20050000%2C%20Kazakhstan!5e0!3m2!1sen!2sus!4v1695125214486!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">{t('contact.social')}</h3>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.instagram.com/zhanga_shipa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-accent-500 transition-colors"
                  >
                    <Instagram className="h-6 w-6 mr-2" />
                    <span>@zhanga_shipa</span>
                  </a>
                </div>
                <p className="mt-2 text-gray-600">{t('contact.message')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'kz' ? 'WhatsApp арқылы жазылыңыз' : 'Запишитесь через WhatsApp'}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {language === 'kz' 
              ? 'Жазылу үшін төмендегі батырманы басыңыз және бізге WhatsApp арқылы хабарласыңыз'
              : 'Нажмите кнопку ниже и свяжитесь с нами через WhatsApp для записи'
            }
          </p>
          
          <a 
            href="https://wa.me/77777894828"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors inline-block"
          >
            {language === 'kz' ? 'Жазылу' : 'Записаться'}
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;