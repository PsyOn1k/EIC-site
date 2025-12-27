
import React, { useState, useEffect, useRef } from 'react';
import { getGeminiResponse } from './services/geminiService';
import { ChatMessage } from './types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'glass-dark py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 glass rounded-lg flex items-center justify-center font-bold text-xl border-white/20">E</div>
             <div className="flex flex-col">
                <span className="font-bold tracking-tighter text-lg leading-none">EIC</span>
                <span className="text-[10px] uppercase tracking-widest opacity-60">Company</span>
             </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-white/70">
            <a href="#about" className="hover:text-white transition-colors">О нас</a>
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+78129968678" className="hidden md:block text-sm font-semibold hover:opacity-80">
            Телефон: +7 812 996 86 78
          </a>
          <button className="btn-glass px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full">
            Заказать звонок
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="glass w-32 h-32 mb-12 flex items-center justify-center rounded-2xl border-white/10 p-4">
           {/* Placeholder for the crest logo from the screenshot */}
           <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z" />
           </svg>
        </div>
        <h1 className="hero-title mb-8 text-gradient">Ост Индийская Компания</h1>
        <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed max-w-2xl font-light">
          Ваш надежный партнер в подборе талантов. Мы работаем с компаниями любого масштаба: от стартапов до крупных корпораций, помогая находить лучших специалистов для их успеха.
        </p>
        <button className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-white/10">
          Связь с нами
        </button>
      </div>
    </div>
    
    {/* Subtle Indian flag colors gradient overlay as seen in screen 1 */}
    <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-white/5 to-green-500/5 pointer-events-none -z-10"></div>
  </section>
);

const FeatureSection: React.FC = () => (
  <section id="about" className="py-32 relative">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-full opacity-30"></div>
          <div className="relative glass p-2 rounded-3xl border-white/10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Recruiter" 
              className="rounded-2xl w-full grayscale-[0.2]"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Подбор персонала для вашего бизнеса</h2>
          <div className="w-20 h-1 bg-white mb-8"></div>
          <p className="text-lg text-white/70 mb-8 leading-relaxed italic">
            Мы меняем стереотипы о подборе персонала. Мы не ищем сотрудников — мы находим тех, кто станет частью вашего успеха.
          </p>
          <p className="text-lg text-white/60 leading-relaxed">
            Нас вдохновляет ваш рост, а гордимся мы тем, что делаем подбор персонала быстрым, честным и без головной боли и дополнительных затрат!
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ServicesGrid: React.FC = () => {
  const items = [
    {
      title: "Бесплатно для работодателей",
      desc: "Мы берем небольшую комиссию с зарплаты сотрудника вы ни за что не платите.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      dark: true
    },
    {
      title: "Индивидуальный подход",
      desc: "Каждый бизнес уникален, и мы это понимаем. Анализируем ваши потребности и предлагаем решения, которые работают именно для вас.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      dark: false
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
         <h2 className="text-center text-3xl md:text-4xl font-bold mb-20 max-w-3xl mx-auto">Наши услуги это быстрый подбор персонала</h2>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {items.map((item, idx) => (
              <div key={idx} className="group relative h-[500px] overflow-hidden rounded-3xl glass transition-all duration-500 card-hover">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative h-full flex flex-col justify-end p-12 bg-gradient-to-t from-black via-black/20 to-transparent">
                  <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass p-2 rounded-3xl border-white/10">
            <div className="p-12">
               <h3 className="text-3xl font-bold mb-8">Полная интеграция сотрудника</h3>
               <p className="text-white/60 text-lg leading-relaxed mb-8">
                Мы не просто находим кандидатов — мы сопровождаем весь процесс, начиная с поиска и заканчивая полной интеграцией нового сотрудника в вашу компанию.
               </p>
               <button className="btn-glass px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest">
                  Подробнее об услугах
               </button>
            </div>
            <div className="overflow-hidden rounded-2xl h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale-[0.5]" 
              />
            </div>
         </div>
      </div>
    </section>
  );
};

const WhyUs: React.FC = () => {
  const reasons = [
    { title: "Стабильность", text: "С нами вы не просто закрываете вакансии — вы строите стабильную и профессиональную команду." },
    { title: "Гибкость", text: "С нами вы получаете не просто сервис, а надежного партнера, который заботится о вашем бизнесе." },
    { title: "Долгосрочные Результаты", text: "Мы помогаем строить команду, которая будет расти и развиваться вместе с вашим бизнесом, обеспечивая стабильность и успех на годы вперед." },
    { title: "Экономия Вашего Времени", text: "Мы берем на себя все этапы: от поиска и собеседований до оформления документов и адаптации. Вы сосредотачиваетесь на бизнесе, а мы — на ваших кадрах." },
    { title: "Бесплатно Для Работодателей", text: "Вы платите только за результат. Никаких скрытых комиссий или предоплат — мы заинтересованы в вашем успехе." },
    { title: "Индивидуальный Подход", text: "Мы не работаем по шаблонам. Каждый клиент для нас уникален, и мы предлагаем решения, которые идеально подходят именно вам." }
  ];

  return (
    <section className="py-32 bg-white/5 backdrop-blur-3xl">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-24">Почему мы?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="glass p-10 rounded-3xl border-white/5 transition-all hover:border-white/20">
              <i className="fas fa-check text-white text-2xl mb-6"></i>
              <h4 className="text-xl font-bold mb-4">{r.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews: React.FC = () => {
  const reviews = [
    { name: "Александр В.", company: "Tech Solutions", text: "Лучший опыт работы с кадровым агентством. Нашли Senior разработчика за 2 недели." },
    { name: "Елена К.", company: "Retail Group", text: "Приятно удивлена форматом оплаты. Реально никаких рисков для бизнеса." },
    { name: "Дмитрий М.", company: "LogiFlow", text: "Специалисты из Индии отлично влились в наш производственный процесс." }
  ];

  return (
    <section id="reviews" className="py-32">
       <div className="container mx-auto px-6">
         <h2 className="text-4xl font-bold text-center mb-16">Наши рекомендации</h2>
         <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <div key={i} className="glass-dark p-8 rounded-2xl border-white/10 italic text-white/80 relative">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <i className="fas fa-quote-right text-4xl"></i>
                 </div>
                 <p className="mb-6">"{rev.text}"</p>
                 <div className="flex flex-col">
                    <span className="font-bold text-white not-italic">{rev.name}</span>
                    <span className="text-xs text-white/40 not-italic uppercase tracking-widest">{rev.company}</span>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Приветствуем в Ост Индийской Компании! Могу ответить на любые вопросы о подборе персонала и наших условиях.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);
    const response = await getGeminiResponse(userMsg);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'Ошибка связи' }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform">
          <i className="fas fa-comment-alt text-xl"></i>
        </button>
      ) : (
        <div className="w-80 md:w-[400px] h-[600px] glass-dark rounded-3xl shadow-2xl flex flex-col overflow-hidden border-white/20">
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
            <span className="font-bold uppercase tracking-widest text-sm">AI Ассистент</span>
            <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100"><i className="fas fa-times"></i></button>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-white text-black' : 'glass border-white/10 text-white/80'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-[10px] uppercase tracking-widest opacity-40 ml-2">Печатает ответ...</div>}
          </div>
          <div className="p-6 border-t border-white/10 bg-white/5 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Введите сообщение..."
              className="flex-1 bg-transparent border-none outline-none text-sm"
            />
            <button onClick={handleSend} className="text-white hover:scale-110 transition-transform"><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      )}
    </div>
  );
};

const Footer: React.FC = () => (
  <footer id="contact" className="py-24 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Передайте задачи нашим экспертам и сосредоточьтесь на главном.</h2>
        <p className="text-2xl font-light text-gradient mb-4">Ваш рост – наша работа!</p>
        <p className="text-white/40 italic">Заполните данные ниже и наши специалисты с вами свяжутся.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-white/60">
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center gap-3 mb-6">
             <div className="w-8 h-8 glass rounded flex items-center justify-center font-bold border-white/20">E</div>
             <span className="font-bold tracking-widest text-white">ОСТ ИНДИЙСКАЯ КОМПАНИЯ</span>
           </div>
           <p className="mb-8 max-w-md">Мы предоставляем лучших специалистов для вашего бизнеса без головной боли и лишних затрат. Инвестируйте в таланты правильно.</p>
        </div>
        <div>
           <h5 className="text-white font-bold uppercase tracking-widest mb-6">Навигация</h5>
           <ul className="space-y-3">
             <li><a href="#about" className="hover:text-white">О компании</a></li>
             <li><a href="#services" className="hover:text-white">Наши услуги</a></li>
             <li><a href="#reviews" className="hover:text-white">Рекомендации</a></li>
           </ul>
        </div>
        <div>
           <h5 className="text-white font-bold uppercase tracking-widest mb-6">Контакты</h5>
           <ul className="space-y-3">
             <li>+7 812 996 86 78</li>
             <li>info@eicgrup.ru</li>
             <li>Санкт-Петербург, Россия</li>
           </ul>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-[0.3em] opacity-30">
        © 2024 East India Company. eicgrup.ru. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <FeatureSection />
      <ServicesGrid />
      <WhyUs />
      <Reviews />
      <Footer />
      <AIChat />
    </div>
  );
}
