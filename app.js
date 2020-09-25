import throttle from "lodash/throttle";

const sr = ScrollReveal ();

// HOMEPAGE:

// Header fade-in
sr.reveal('.header-quote', { origin: "right", delay: 200, duration: 2000, distance: '20px' });

// Life-info:
sr.reveal('.image-about-photo', { duration: 2000 });
sr.reveal('.image-about-paris', { duration: 2000 });
sr.reveal('.image-about-amsterdam', { duration: 2000 });
sr.reveal('.image-about-globe', { duration: 2000 });
sr.reveal('.image-title', { delay: 500, duration: 2000 });
sr.reveal('.image-title-1', { delay: 200, duration: 2000 });

// Titles appear
sr.reveal('.titles', {origin: "left", delay: 300, duration: 1500, distance: '50px' })

// Web-cards
sr.reveal('.web-card-show-1', { delay: 300, duration: 2000, distance: '50px' });
sr.reveal('.web-card-show-2', { delay: 400, duration: 2000, distance: '50px' });

// CONTACT PAGE
sr.reveal('.profile-avatar', { delay: 200, duration: 2500 });
sr.reveal('.contact-intro', { delay: 300, duration: 2000 });
// sr.reveal('.tech-skills', { delay: 200, duration: 2000 });
sr.reveal('.container-info-contact', { delay: 400, duration: 1000 });
sr.reveal('.email-tel', { delay: 200, duration: 2000 });





// NAVBAR SCROLL
const checkHeader = throttle(() => {
    const scrollPosition = Math.round(window.scrollY);
    if (scrollPosition > 300){
        document.querySelector('.navbar-1').classList.add('sticky');
    }
    else {
        document.querySelector('.navbar-1').classList.remove('sticky');
    }
}, 300);

window.addEventListener('scroll', checkHeader, {
  passive: true
});

