// Animação ao rolar (scroll reveal simples)
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("section");

    const revealOnScroll = () => {
        elements.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    };

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
