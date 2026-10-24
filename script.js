/* =====================================
   鴻成地政士事務所
   Wealth Architecture Website
   Version 1.0
===================================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* =====================================
   回到頂端按鈕
===================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =====================================
   平滑捲動
===================================== */

document
.querySelectorAll('nav a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            window.scrollTo({

                top:
                target.offsetTop - 80,

                behavior:"smooth"

            });

        }

    });

});

/* =====================================
   導覽列 Active 狀態
===================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.offsetHeight;

        if(

            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight

        ){

            currentSection =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(

            link.getAttribute("href") ===
            "#" + currentSection

        ){

            link.classList.add("active");

        }

    });

});

/* =====================================
   Scroll Reveal Animation
===================================== */

const animateElements =
document.querySelectorAll(

".card, .pillar, .service, .gallery img, .contact-card"

);

animateElements.forEach(el => {

    el.classList.add("fade-up");

});

const observerOptions = {

    threshold:0.15

};

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

observerOptions

);

animateElements.forEach(el=>{

    revealObserver.observe(el);

});

/* =====================================
   Gallery Image Animation
===================================== */

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.style.opacity = "0";

    img.style.transform =
    "translateY(40px)";

    img.
