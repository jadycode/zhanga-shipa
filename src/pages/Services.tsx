import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import { 
  Microscope, 
  Stethoscope, 
  Wrench, 
  Scissors, 
  Brush, 
  Smile,
  CheckCircle2,
  Hammer
} from 'lucide-react';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      title: t('services.service1'),
      description: t('services.service1.description'),
      icon: <Microscope className="h-10 w-10" />,
    },
    {
      title: t('services.service2'),
      description: t('services.service2.description'),
      icon: <Stethoscope className="h-10 w-10" />,
    },
    {
      title: t('services.service3'),
      description: t('services.service3.description'),
      icon: <Wrench className="h-10 w-10" />,
    },
    {
      title: t('services.service4'),
      description: t('services.service4.description'),
      icon: <Scissors className="h-10 w-10" />,
    },
    {
      title: t('services.service5'),
      description: t('services.service5.description'),
      icon: <Brush className="h-10 w-10" />,
    },
    {
      title: t('services.service6'),
      description: t('services.service6.description'),
      icon: <Smile className="h-10 w-10" />,
    },
    {
      title: t('services.service7'),
      description: t('services.service7.description'),
      icon: <CheckCircle2 className="h-10 w-10" />,
    },
    {
      title: t('services.service8'),
      description: t('services.service8.description'),
      icon: <Hammer className="h-10 w-10" />,
    },
  ];

  const osmsContent = {
    kz: {
      title: "МӘМС",
      description: "МӘМС мемлекеттік бағдарламасы белгілі бір санаттағы азаматтарға тегін стоматологиялық қызметтер алуға мүмкіндік береді.",
      servicesTitle: "📌 МӘМС-ке не кіреді?",
      services: [
        "✅ Жедел тіс ауруын емдеу",
        "✅ Тіс жұлу",
        "✅ Пломба салу",
        "✅ Хирургиялық көмек"
      ],
      eligibilityTitle: "💡 Кімдер тегін ала алады?",
      eligibility: [
        "👶 18 жасқа дейінгі балалар",
        "🤰 Жүкті әйелдер",
        "👴 Зейнеткерлер",
        "🦷 Әлеуметтік маңызы бар аурулары бар адамдар"
      ]
    },
    ru: {
      title: "ОСМС",
      description: "Государственная программа ОСМС позволяет получать бесплатные стоматологические услуги для определённых категорий граждан.",
      servicesTitle: "📌 Что входит в ОСМС?",
      services: [
        "✅ Лечение острой зубной боли",
        "✅ Удаление зубов",
        "✅ Пломбирование",
        "✅ Хирургическая помощь"
      ],
      eligibilityTitle: "💡 Кто может получить услуги бесплатно?",
      eligibility: [
        "👶 Дети до 18 лет",
        "🤰 Беременные женщины",
        "👴 Пенсионеры",
        "🦷 Люди с социально значимыми заболеваниями"
      ]
    }
  };

  const content = language === 'kz' ? osmsContent.kz : osmsContent.ru;

  const processContent = {
    kz: {
      title: "Біздің үдеріс",
      description: "Біз ауыз қуысының жоғары сапалы күтімін қамтамасыз ету үшін бірнеше қадам жасаймыз",
      steps: [
        {
          title: "Тексеру",
          description: "Біздің тіс дәрігерлеріміз сіздің ауыз қуысының денсаулығын тексереді және мәселелерді анықтайды."
        },
        {
          title: "Емдеу жоспары",
          description: "Тексеру нәтижелеріне сүйене отырып, біз сіздің қажеттіліктеріңізге сәйкес емдеу жоспарын ұсынамыз."
        },
        {
          title: "Емдеу",
          description: "Біздің тәжірибелі тіс дәрігерлеріміз стоматологиялық көмекті дәл, жайлы және тиімді жолмен көрсетеді."
        }
      ]
    },
    ru: {
      title: "Наш процесс",
      description: "Мы делаем несколько шагов для обеспечения качественного ухода за полостью рта",
      steps: [
        {
          title: "Осмотр",
          description: "Наши стоматологи проверяют здоровье вашей полости рта и выявляют проблемы."
        },
        {
          title: "План лечения",
          description: "На основе результатов осмотра мы предлагаем план лечения, соответствующий вашим потребностям."
        },
        {
          title: "Лечение",
          description: "Наши опытные стоматологи оказывают стоматологическую помощь точно, комфортно и эффективно."
        }
      ]
    }
  };

  const currentProcess = language === 'kz' ? processContent.kz : processContent.ru;

  const ctaContent = {
    kz: {
      title: "Бүгін жазылыңыз",
      description: "Сіздің ауыз қуысының денсаулығына қамқорлық жасауды бастау үшін бізге жазылыңыз"
    },
    ru: {
      title: "Запишитесь сегодня",
      description: "Запишитесь к нам, чтобы начать заботиться о здоровье вашей полости рта"
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="assets/background.jpg" 
            alt="Dental equipment" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-primary-900 opacity-60 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
            <p className="text-xl text-gray-200">{t('services.subtitle')}</p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f97316" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MӘMS/OSMS Section */}
      <section id="osms" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 opacity-10 rounded-full -mr-32 -mt-32"></div>
            
            <div className="flex flex-col md:flex-row items-start justify-between relative z-10">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="text-2xl font-bold mb-6 text-primary-800">
                  {content.title}
                </h2>

                <p className="text-gray-700 text-lg mb-8">
                  {content.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">{content.servicesTitle}</h3>
                  <ul className="space-y-3">
                    {content.services.map((service, index) => (
                      <li key={index} className="text-gray-700">{service}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">{content.eligibilityTitle}</h3>
                  <ul className="space-y-3">
                    {content.eligibility.map((item, index) => (
                      <li key={index} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <img 
                src="assets/zh-sh-1.jpg" 
                alt="Free dental services" 
                className="w-full md:w-1/3 rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentProcess.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {currentProcess.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProcess.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 z-10 relative">
                  <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                </div>
                {index < currentProcess.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 w-full h-1 bg-primary-100 -z-10"></div>
                )}
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{language === 'kz' ? ctaContent.kz.title : ctaContent.ru.title}</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {language === 'kz' ? ctaContent.kz.description : ctaContent.ru.description}
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

export default Services;