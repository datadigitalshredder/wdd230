const images = document.querySelectorAll('[data-src]');
const imageOptions = {};
const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })

}, imageOptions);