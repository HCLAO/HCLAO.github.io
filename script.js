/* ====================================
   鴻成地政士事務所
   script.js
   Premium Black Gold Edition
==================================== */

/* ====================================
   頁面載入動畫
==================================== */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


/* ====================================
   回到頂端按鈕
==================================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

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

}


/* ====================================
   平滑捲動
==================================== */

document
.querySelectorAll('nav a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});


/* ====================================
   Navbar Active
==================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ====================================
   Scroll Reveal
==================================== */

const revealElements =
document.querySelectorAll(

".card, .pillar, .service, .contact-card"

);

revealElements.forEach(el => {

    el.classList.add("fade-up");

});

const revealObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.15
}

);

revealElements.forEach(el => {

    revealObserver.observe(el);

});


/* ====================================
   Gallery Animation
==================================== */

const galleryImages =
document.querySelectorAll(
".gallery img"
);

const imageObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

        }

    });

},

{
    threshold: 0.1
}

);

galleryImages.forEach(img => {

    img.style.opacity = "0";

    img.style.transform =
        "translateY(40px)";

    img.style.transition =
        "all .9s ease";

    imageObserver.observe(img);

});


/* ====================================
   Card Hover Glow
   桌機版才啟用
==================================== */

if (window.innerWidth > 768) {

    const hoverCards =
    document.querySelectorAll(
    ".card, .pillar, .service"
    );

    hoverCards.forEach(card => {

        card.addEventListener(

        "mousemove",

        function (e) {

            const rect =
                this.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            this.style.background =

            `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(212,175,55,.15),
            #181818 60%
            )`;

        });

        card.addEventListener(

        "mouseleave",

        function () {

            this.style.background = "";

        });

    });

}


/* ====================================
   Navbar Shadow
==================================== */

const navBar =
document.querySelector("nav");

if (navBar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navBar.style.background =
                "rgba(0,0,0,.98)";

            navBar.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.4)";

        } else {

            navBar.style.background =
                "rgba(0,0,0,.92)";

            navBar.style.boxShadow =
                "none";

        }

    });

}


/* ====================================
   Footer 年份自動更新
==================================== */

const copyright =
document.getElementById(
"copyright-year"
);

if (copyright) {

    copyright.innerHTML =

    `© ${new Date().getFullYear()}
    All Rights Reserved`;

}


/* ====================================
   Console Signature
==================================== */

console.log(
"%c鴻成地政士事務所",
"color:#d4af37;font-size:22px;font-weight:bold;"
);

console.log(
"%c財富傳承藍圖官網已成功載入",
"color:#ffffff;font-size:14px;"
);
