import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: 'kz' | 'ru';
  setLanguage: (language: 'kz' | 'ru') => void;
  t: (key: string) => string;
};

const translations = {
  kz: {
    // Navigation
    'nav.home': 'Басты бет',
    'nav.about': 'Біз туралы',
    'nav.services': 'Қызметтер',
    'nav.contact': 'Байланыс',
    'nav.book': 'Записаться',
    
    // Home page
    'home.hero.title': 'Zhanga Shipa стоматологиялық клиникасына қош келдіңіз',
    'home.hero.subtitle': 'Сіздің күлкіңіз біздің мақтанышымыз',
    'home.hero.cta': 'Жазылу',
    'home.insurance.title': 'МӘМС / ОСМС',
    'home.insurance.description': '18 жасқа дейінгі балаларға және жүкті аналарға ТЕГІН стоматологиялық қызмет түрлерін ұсынамыз.',
    'home.insurance.mams.full': 'Міндетті әлеуметтік медициналық сақтандыру жүйесі',
    'home.insurance.osms.full': 'Система обязательного социального медицинского страхования',
    'home.services.title': 'Біздің қызметтер',
    'home.services.subtitle': 'Сапалы стоматологиялық қызметтер',
    'home.services.viewAll': 'Барлығын көру',
    'home.about.title': 'Біз туралы',
    'home.about.description': 'Zhanga Shipa - бұл заманауи жабдықтармен жабдықталған және тәжірибелі мамандары бар стоматологиялық клиника. Біз ең жоғары сапалы стоматологиялық қызметтерді ұсынуға міндеттеміз.',
    'home.about.learnMore': 'Толығырақ',
    'home.contact.title': 'Бізбен байланыс',
    'home.contact.description': 'Сұрақтарыңыз бар ма? Бізге хабарласыңыз',
    
    // Services page
    'services.title': 'Біздің қызметтер',
    'services.subtitle': 'Біз ұсынатын стоматологиялық қызметтер',
    'services.service1': 'Профилактикалық тексеру',
    'services.service1.description': 'Тіс ауруларының алдын алу және жалпы ауыз қуысының денсаулығын бақылау',
    'services.service2': 'Тістерді емдеу',
    'services.service2.description': 'Тіс ауруларын диагностикалау және емдеу',
    'services.service3': 'Тістерді қалпына келтіру',
    'services.service3.description': 'Зақымдалған тістерді қалпына келтіру және функциясын қалпына келтіру',
    'services.service4': 'Хирургиялық стоматология',
    'services.service4.description': 'Тіс экстракциясы және басқа да ауыз қуысы процедуралары',
    'services.service5': 'Тазалау және ағарту',
    'services.service5.description': 'Кәсіби тіс тазалау және ағарту қызметтері',
    'services.service6': 'Эстетикалық стоматология',
    'services.service6.description': 'Күлкіңізді жақсарту және жетілдіру процедуралары',
    'services.service7': 'Ортодонтиялық қызметтер',
    'services.service7.description': 'Тістерді түзету және ауызды қайта құрылымдау',
    'services.service8': 'Имплантациялау',
    'services.service8.description': 'Жоғалған тістерді ауыстыру үшін имплантаттарды орнату',
    
    // About page
    'about.title': 'Zhanga Shipa туралы',
    'about.subtitle': 'Біздің тарихымыз бен миссиямыз',
    'about.history.title': 'Біздің тарих',
    'about.history.description': 'Zhanga Shipa 2010 жылы Шымкент қаласында құрылған, содан бері біз мыңдаған науқастарға қызмет көрсеттік және жергілікті қауымдастықта сенімді атқа ие болдық.',
    'about.mission.title': 'Біздің миссия',
    'about.mission.description': 'Біздің миссиямыз - ең жоғары сапалы стоматологиялық көмек көрсету, науқастардың әл-ауқатын жақсарту және Шымкент пен оның айналасындағы қауымдастықтарға қызмет ету.',
    'about.team.title': 'Біздің команда',
    'about.team.description': 'Біздің команда тәжірибелі және білікті стоматологтардан, гигиенисттерден және қолдау көрсететін қызметкерлерден тұрады, олардың барлығы сіздің ауыз қуысының денсаулығын қамтамасыз етуге міндеттенген.',
    
    // Contact page
    'contact.title': 'Бізбен байланыс',
    'contact.subtitle': 'Сұрақтарыңыз бар ма? Біз көмектесуге дайынбыз',
    'contact.form.name': 'Аты-жөні',
    'contact.form.email': 'Электрондық пошта',
    'contact.form.message': 'Хабарлама',
    'contact.form.submit': 'Жіберу',
    'contact.locations': 'Біздің орналасқан жерлеріміз',
    'contact.location.shymkent': 'ШЫМКЕНТ ҚАЛАСЫ',
    'contact.location.otyrar': 'ОТЫРАР АУДАНЫ',
    'contact.location.shubarsu': 'ШҰБАРСУ АУЫЛЫ',
    'contact.social': 'Әлеуметтік желілерде',
    'contact.message': 'Біздің Инстаграмда жазылыңыз',
    
    // Footer
    'footer.rights': 'Барлық құқықтар қорғалған',
    'footer.privacy': 'Құпиялылық саясаты',
    'footer.terms': 'Қолдану шарттары',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.book': 'Записаться',
    
    // Home page
    'home.hero.title': 'Добро пожаловать в стоматологическую клинику Zhanga Shipa',
    'home.hero.subtitle': 'Ваша улыбка - наша гордость',
    'home.hero.cta': 'Записаться',
    'home.insurance.title': 'МӘМС / ОСМС',
    'home.insurance.description': 'Предлагаем БЕСПЛАТНЫЕ стоматологические услуги для детей до 18 лет и беременных женщин.',
    'home.insurance.mams.full': 'Міндетті әлеуметтік медициналық сақтандыру жүйесі',
    'home.insurance.osms.full': 'Система обязательного социального медицинского страхования',
    'home.services.title': 'Наши услуги',
    'home.services.subtitle': 'Качественные стоматологические услуги',
    'home.services.viewAll': 'Смотреть все',
    'home.about.title': 'О нас',
    'home.about.description': 'Zhanga Shipa - это стоматологическая клиника, оснащенная современным оборудованием и опытными специалистами. Мы стремимся предоставлять стоматологические услуги высочайшего качества.',
    'home.about.learnMore': 'Узнать больше',
    'home.contact.title': 'Связаться с нами',
    'home.contact.description': 'Есть вопросы? Свяжитесь с нами',
    
    // Services page
    'services.title': 'Наши услуги',
    'services.subtitle': 'Стоматологические услуги, которые мы предлагаем',
    'services.service1': 'Профилактический осмотр',
    'services.service1.description': 'Профилактика заболеваний зубов и контроль общего здоровья полости рта',
    'services.service2': 'Лечение зубов',
    'services.service2.description': 'Диагностика и лечение заболеваний зубов',
    'services.service3': 'Восстановление зубов',
    'services.service3.description': 'Восстановление поврежденных зубов и восстановление их функции',
    'services.service4': 'Хирургическая стоматология',
    'services.service4.description': 'Удаление зубов и другие процедуры полости рта',
    'services.service5': 'Чистка и отбеливание',
    'services.service5.description': 'Профессиональная чистка и отбеливание зубов',
    'services.service6': 'Эстетическая стоматология',
    'services.service6.description': 'Процедуры для улучшения и совершенствования вашей улыбки',
    'services.service7': 'Ортодонтические услуги',
    'services.service7.description': 'Выпрямление зубов и реструктуризация рта',
    'services.service8': 'Имплантация',
    'services.service8.description': 'Установка имплантатов для замены утраченных зубов',
    
    // About page
    'about.title': 'О Zhanga Shipa',
    'about.subtitle': 'Наша история и миссия',
    'about.history.title': 'Наша история',
    'about.history.description': 'Zhanga Shipa была основана в 2010 году в Шымкенте, и с тех пор мы обслужили тысячи пациентов и завоевали репутацию надежной клиники в местном сообществе.',
    'about.mission.title': 'Наша миссия',
    'about.mission.description': 'Наша миссия - предоставлять стоматологическую помощь высочайшего качества, улучшать благополучие пациентов и служить сообществам Шымкента и его окрестностей.',
    'about.team.title': 'Наша команда',
    'about.team.description': 'Наша команда состоит из опытных и квалифицированных стоматологов, гигиенистов и вспомогательного персонала, все из которых стремятся обеспечить ваше здоровье полости рта.',
    
    // Contact page
    'contact.title': 'Связаться с нами',
    'contact.subtitle': 'Есть вопросы? Мы готовы помочь',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Электронная почта',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить',
    'contact.locations': 'Наши местоположения',
    'contact.location.shymkent': 'ГОРОД ШЫМКЕНТ',
    'contact.location.otyrar': 'ОТЫРАРСКИЙ РАЙОН',
    'contact.location.shubarsu': 'СЕЛО ШУБАРСУ',
    'contact.social': 'В социальных сетях',
    'contact.message': 'Подписывайтесь на наш Instagram',
    
    // Footer
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<'kz' | 'ru'>('kz');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};