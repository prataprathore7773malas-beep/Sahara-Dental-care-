// =========================
// FAQ ACCORDION
// =========================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question =
item.querySelector(".faq-question");

question.addEventListener("click", () => {

const answer =
item.querySelector(".faq-answer");

const isOpen =
answer.style.display === "block";

document
.querySelectorAll(".faq-answer")
.forEach(ans => {

ans.style.display = "none";

});

if(!isOpen){

answer.style.display = "block";

}

});

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// =========================
// NAVBAR SHADOW
// =========================

window.addEventListener("scroll", () => {

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.12)";

}else{

header.style.boxShadow =
"0 2px 20px rgba(0,0,0,.05)";

}

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(window.scrollY >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
".why-card, .review-card, .highlight-card, .info-card, .overview-card, .glass-box, .contact-card"
);

function revealOnScroll(){

revealElements.forEach(el => {

const windowHeight =
window.innerHeight;

const revealTop =
el.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

el.style.opacity = "1";
el.style.transform =
"translateY(0)";

}

});

}

revealElements.forEach(el => {

el.style.opacity = "0";
el.style.transform =
"translateY(40px)";
el.style.transition =
"all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(
".stat-card h2"
);

counters.forEach(counter => {

const text =
counter.innerText;

const target =
parseInt(text);

if(!isNaN(target)){

let count = 0;

const updateCounter = () => {

count += Math.ceil(
target / 50
);

if(count < target){

counter.innerText = count;

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText = text;

}

};

updateCounter();

}

});

// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn"
);

buttons.forEach(btn => {

btn.addEventListener(
"mouseenter",
() => {

btn.style.transform =
"translateY(-4px)";

});

btn.addEventListener(
"mouseleave",
() => {

btn.style.transform =
"translateY(0px)";

});

});

// =========================
// PAGE LOADED
// =========================

window.addEventListener(
"load",
() => {

document.body.style.opacity =
"1";

});

console.log(
"Sahara Dental Care Website Loaded Successfully"
);
