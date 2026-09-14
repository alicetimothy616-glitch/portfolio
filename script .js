```javascript
// ========================================
// SMOOTH SCROLLING
// ========================================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    } else {
        header.style.boxShadow = "none";
    }

});
```javascript
// ================================
// TYPING ANIMATION
// ================================

const typingText = document.getElementById("typing");

const words = [
    "BCA Student",
    "Web Designer",
    "Copywriter",
    "Creative Writer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;
    } else {
        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;
    }

    let speed = deleting ? 60 : 100;

    if (!deleting && letterIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
```javascript
// ================================
// DARK / LIGHT MODE
// ================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});
```

```



// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const sections = document.querySelectorAll("section");

const revealSection = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealSection);

revealSection();


// ========================================
// BUTTON CLICK EFFECT
// ========================================

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);

    });

});


// ========================================
// WELCOME MESSAGE
// ========================================

console.log("Welcome to Taff's Portfolio Website! 🚀");
```
// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// Close menu after clicking a link

const mobileLinks = document.querySelectorAll("nav ul li a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });

});