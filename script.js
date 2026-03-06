document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for fade-in animations
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // trigger immediately for hero section
    setTimeout(() => {
        const hero = document.querySelector('.hero.fade-in');
        if (hero) hero.classList.add('appear');
    }, 100);

    // 2. Smooth Scrolling for Nav Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // offset for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Simple Glitch Effect Simulation on Hover for Title
    const title = document.querySelector('.glitch');
    if (title) {
        title.addEventListener('mouseover', () => {
            title.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
            setTimeout(() => {
                title.style.transform = 'translate(0, 0)';
            }, 100);
        });
    }
});
