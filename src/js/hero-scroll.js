document.documentElement.classList.add("has-js");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const title = document.querySelector(".big-title");
    const hero = document.querySelector(".hero");

    // Animate both .small-text and the button together
    const animItems = hero.querySelectorAll(".small-text, .btn-hover");

    document.addEventListener("scroll", () => {
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(Math.max(-rect.top / hero.offsetHeight, 0), 1);

        // Title scales and fades
        const startSize = 12;
        const endSize = 4;
        const currentSize = startSize - (startSize - endSize) * progress;
        title.style.fontSize = currentSize + "rem";
        title.style.opacity = 1 - progress * 0.6;

        // Animate small-text and button together
        animItems.forEach(item => {
            item.style.opacity = progress;
            item.style.transform = `translateY(${20 - 20 * progress}px)`;
        });
    });
}