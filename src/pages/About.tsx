import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const content = {
    kz: {
      history: {
        description: "Біздің клиника 2010 жылы ашылды және қазіргі уақытта Шымкент, Отырар ауданы және Шұбарсу ауылында клиникалары бар. Біз қауымдастығымызда жақсы атақ пен сенімді тұтынушы базасын құрдық."
      },
      values: {
        quality: {
          title: "Сапа",
          description: "Біз әрбір процедураны қауіпсіздік пен сапаны сақтай отырып, ең жоғары стандарттарға сәйкес жүргіземіз."
        },
        care: {
          title: "Қамқор",
          description: "Біз әрбір науқастың қажеттіліктерін түсініп, құрметтейміз, бұл олардың қорқыныштарын азайтады және емделу кезінде жайлылық сезінуіне көмектеседі."
        },
        community: {
          title: "Қауымдастық",
          description: "Біз қауымдастығымыздың ауыз қуысы денсаулығын жақсартуға тырысамыз, өз білімдерімізбен бөлісеміз және жоғары сапалы стоматологиялық көмекке қол жетімділікті қамтамасыз етеміз."
        }
      },
      team: {
        doctors: [
          {
            name: "Др. Мыктыбек Мадияр Бауыржанулы",
            position: "Бас дәрігер",
            description: "15 жылдан астам тәжірибесі бар тіс дәрігері. Стоматологиялық емдеудің барлық аспектілерінде жаттықтырылған.",
            image: "assets/doctor-1.png"
          },
          {
            name: "Др. Саудабек Бақыт Базарбекұлы",
            position: "Хирург-стоматолог",
            description: "Тәжірибелі хирург, күрделі тіс экстракцияларында және имплантациялау процедураларында маманданған.",
            image: "assets/doctor-2.png"
          },
          {
            name: "Др. Қази Мәди",
            position: "Ортодонт",
            description: "Эстетикалық және қалпына келтіру стоматологиясы саласында маманданған, әр науқасқа жеке әдісті қолданады.",
            image: "assets/doctor-3.png"
          },
          {
            name: "Др. Камила Абенова",
            position: "Терапевт-стоматолог",
            description: "Тістерді емдеу және қалпына келтіру саласындағы маман. Науқастарға жеке көзқарас.",
            image: "assets/doctor-4.png"
          },
          {
            name: "Др. Дина Даулетовна",
            position: "Терапевт-стоматолог",
            description: "Тістерді емдеу және қалпына келтіру саласындағы маман. Науқастарға жеке көзқарас.",
            image: "assets/doctor-5.png"
          }
        ]
      },
      testimonials: [
        {
          text: "Өте жақсы қызмет көрсетіледі. Дәрігерлер өте білімді және мұқият. Мен өзімнің тісімді емдеу тәжірибеме өте қанағаттанамын!",
          name: "Айгүл К.",
          role: "Науқас"
        },
        {
          text: "Мен Zhanga Shipa-да тісімді қалпына келтіру процедурасын жасаттым. Нәтижелері керемет! Дәрігерлер мені қолайлы сезіндірді және барлығын түсіндірді.",
          name: "Дәулет М.",
          role: "Науқас"
        },
        {
          text: "Менің балам стоматологтарға бару деген қорқынышы болатын, бірақ мұндағы дәрігерлер шыдамды және мейірімді. Енді балам стоматологқа барудан қорықпайды!",
          name: "Әсел Н.",
          role: "Науқас"
        }
      ]
    },
    ru: {
      history: {
        description: "Наша клиника открылась в 2010 году и в настоящее время имеет филиалы в Шымкенте, Отырарском районе и селе Шубарсу. Мы создали хорошую репутацию и надежную клиентскую базу в нашем сообществе."
      },
      values: {
        quality: {
          title: "Качество",
          description: "Мы проводим каждую процедуру в соответствии с высочайшими стандартами, соблюдая безопасность и качество."
        },
        care: {
          title: "Забота",
          description: "Мы понимаем и уважаем потребности каждого пациента, что помогает уменьшить их страхи и чувствовать себя комфортно во время лечения."
        },
        community: {
          title: "Сообщество",
          description: "Мы стремимся улучшить здоровье полости рта нашего сообщества, делимся своими знаниями и обеспечиваем доступ к качественной стоматологической помощи."
        }
      },
      team: {
        doctors: [
          {
            name: "Др. Айнур Казангапова",
            position: "Главный врач",
            description: "Стоматолог с более чем 15-летним опытом. Обучена всем аспектам стоматологического лечения.",
            image: "assets/doctor-1.png"
          },
          {
            name: "Др. Арман Исмаилов",
            position: "Хирург-стоматолог",
            description: "Опытный хирург, специализирующийся на сложных удалениях зубов и процедурах имплантации.",
            image: "assets/doctor-2.png"
          },
          {
            name: "Др. Гульнур Алибекова",
            position: "Ортодонт",
            description: "Специализируется в области эстетической и восстановительной стоматологии, применяет индивидуальный подход к каждому пациенту.",
            image: "assets/doctor-3.png"
          },
          {
            name: "Др. Сауле Нурланова",
            position: "Терапевт-стоматолог",
            description: "Специалист в области лечения и восстановления зубов. Индивидуальный подход к пациентам.",
            image: "assets/doctor-4.png"
          },
          {
            name: "Др. Бахыт Серикулы",
            position: "Детский стоматолог",
            description: "Специализируется на работе с детьми, добрый и терпеливый подход.",
            image: "assets/doctor-5.png"
          }
        ]
      },
      testimonials: [
        {
          text: "Отличное обслуживание. Врачи очень знающие и внимательные. Я очень доволен своим опытом лечения зубов!",
          name: "Айгуль К.",
          role: "Пациент"
        },
        {
          text: "Я делал процедуру восстановления зубов в Zhanga Shipa. Результаты потрясающие! Врачи заставили меня чувствовать себя комфортно и все объяснили.",
          name: "Даулет М.",
          role: "Пациент"
        },
        {
          text: "Мой ребенок боялся ходить к стоматологам, но здешние врачи терпеливые и добрые. Теперь мой ребенок не боится ходить к стоматологу!",
          name: "Асель Н.",
          role: "Пациент"
        }
      ]
    }
  };

  const currentContent = language === 'kz' ? content.kz : content.ru;
  const totalSlides = Math.ceil(currentContent.team.doctors.length / 3);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth / totalSlides;
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth / totalSlides;
      const newSlide = Math.round(scrollPosition / scrollWidth);
      if (newSlide !== activeSlide) {
        setActiveSlide(newSlide);
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [activeSlide]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-800 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="assets/background.jpg" 
            alt="Dental team" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-primary-900 opacity-60 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-200">{t('about.subtitle')}</p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f97316" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('about.history.title')}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.history.description')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {currentContent.history.description}
              </p>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="assets/zh-sh-2.jpg" 
                alt="Dental clinic history" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.mission.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('about.mission.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{currentContent.values.quality.title}</h3>
              <p className="text-gray-600">
                {currentContent.values.quality.description}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{currentContent.values.care.title}</h3>
              <p className="text-gray-600">
                {currentContent.values.care.description}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl">
              <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{currentContent.values.community.title}</h3>
              <p className="text-gray-600">
                {currentContent.values.community.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('about.team.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('about.team.description')}
            </p>
          </div>
          
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 px-4 pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {currentContent.team.doctors.map((doctor, index) => (
                <div 
                  key={index} 
                  className="flex-none w-72 snap-center"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="w-72 h-72 mx-auto p-4">
                      <img 
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="p-6 text-center h-48">
                      <h3 className="text-xl font-semibold mb-1 text-gray-800">{doctor.name}</h3>
                      <p className="text-primary-600 mb-3">{doctor.position}</p>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {doctor.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    activeSlide === index ? 'bg-primary-600' : 'bg-primary-200'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {language === 'kz' ? 'Пікірлер' : 'Отзывы'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'kz' ? 'Біздің науқастарымыз біз туралы не айтады' : 'Что говорят о нас наши пациенты'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="text-primary-500 text-5xl absolute -top-5 -left-3">"</div>
                <p className="text-gray-600 mb-6 pt-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src="assets/background.jpg" 
                      alt="Patient" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;