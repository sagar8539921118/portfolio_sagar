// CUSTOM CURSOR LOGIC
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const links = document.querySelectorAll('a, button, input, textarea');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const isMobile = window.innerWidth <= 768;

if (!isMobile) {
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        followerX += (mouseX - followerX) * 0.05;
        followerY += (mouseY - followerY) * 0.05;

        cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
        follower.style.transform = `translate3d(${followerX - 3}px, ${followerY - 3}px, 0)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(2.5)';
            cursor.style.background = 'rgba(56, 189, 248, 0.1)';
            follower.style.opacity = '0';
        });
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(2.5)', '');
            cursor.style.background = 'transparent';
            follower.style.opacity = '1';
        });
    });
} else {
    cursor.style.display = 'none';
    follower.style.display = 'none';
}

// TYPING ANIMATION
if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
        strings: ['SAGAR KUMAR GUPTA', 'A FULL STACK DEVELOPER', 'A MERN SPECIALIST', 'A PROBLEM SOLVER'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        backDelay: 2000
    });
}

// NAVBAR SCROLL EFFECT
const navbar = document.getElementById('navbar');
const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    // Scroll Indicator Update
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + "%";

    if (window.scrollY > 50) {
        navbar.style.marginTop = '0px';
        navbar.style.width = '100%';
        navbar.style.borderRadius = '0px';
        navbar.style.background = 'rgba(2, 6, 23, 0.95)';
    } else {
        navbar.style.marginTop = '15px';
        navbar.style.width = '90%';
        navbar.style.borderRadius = '40px';
        navbar.style.background = 'rgba(2, 6, 23, 0.8)';
    }
});

// GSAP ENTRANCE ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

// Hero Parallax
gsap.to(".headshot img", {
    y: -50,
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Form Submission (Updated)
const contactForm = document.querySelector('.contact-section form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        btn.innerText = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Message Sent! I will contact you shortly.');
            contactForm.reset();
            btn.innerText = 'Send Message';
            btn.disabled = false;
        }, 1500);
    });
}