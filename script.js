document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Функция для анимации появления элементов при скролле
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };
    
    // Запуск проверки скролла
    window.addEventListener('scroll', revealElements);
    // Начальная проверка с задержкой для корректного расчета позиций после загрузки стилей
    setTimeout(revealElements, 150);

    // Изменение состояния шапки при скролле
    const handleHeader = () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('nav-scrolled');
                header.classList.remove('py-6');
                header.classList.add('py-4');
            } else {
                header.classList.remove('nav-scrolled');
                header.classList.add('py-6');
                header.classList.remove('py-4');
            }
        }
    };
    window.addEventListener('scroll', handleHeader);
    handleHeader(); // Вызов при загрузке

    // Параллакс эффект для фоновых объектов
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        document.querySelectorAll('.blob').forEach((blob, i) => {
            const speed = (i + 1) * 0.5;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Обработка формы контактов
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'ОТПРАВКА...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerText = 'УСПЕШНО ОТПРАВЛЕНО';
                btn.classList.add('bg-green-500', 'text-white');
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.classList.remove('bg-green-500', 'text-white');
                }, 3000);
            }, 1500);
        });
    }

    // Улучшенный скролл для якорей
    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const url = new URL(href, window.location.origin);
            
            // Если ссылка ведет на ту же страницу
            if (url.pathname === window.location.pathname || (url.pathname === '/' && window.location.pathname === '/index.html')) {
                const targetId = url.hash.substring(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});