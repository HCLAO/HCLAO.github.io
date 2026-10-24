/* =====================================
   鴻成地政士事務所
   script.js
===================================== */


/* --------------------
   Hero 進場動畫
-------------------- */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* --------------------
   回到頂端按鈕
-------------------- */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* --------------------
   區塊滾動顯示動畫
-------------------- */

const observerOptions = {

    threshold: 0.15

};

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

observerOptions

);


document
.querySelectorAll(
".card,.pillar,.service,.gallery img,.contact-card"
)
.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});


/* --------------------
   導覽列變色
-------------------- */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background =
            "rgba(0,0,0,0.98)";

        nav.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.4)";

    } else {

        nav.style.background =
            "rgba(0,0,0,.92)";

        nav.style.boxShadow = "none";

    }

});


/* --------------------
   導覽列目前區塊高亮
-------------------- */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");


window.addEventListener(
"scroll",
() => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        const height =
            section.clientHeight;

        if (
            pageYOffset >= top &&
            pageYOffset < top + height
        ) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* --------------------
   圖片淡入效果
-------------------- */

const images =
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


images.forEach(img => {

    img.style.opacity = "0";

    img.style.transform =
        "translateY(50px)";

    img.style.transition =
        "all .9s ease";

    imageObserver.observe(img);

});


/* --------------------
   卡片滑鼠光澤效果
-------------------- */

const cards =
document.querySelectorAll(
".card,.pillar,.service"
);

cards.forEach(card => {

    card.addEventListener(
    "mousemove",
    function(e){

        const rect =
            this.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        this.style.background =
        `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(212,175,55,.18),
            #181818 50%
        )`;

    });

    card.addEventListener(
    "mouseleave",
    function(){

        this.style.background =
            "#181818";

    });

});


/* --------------------
   平滑捲動
-------------------- */

document
.querySelectorAll(
'nav a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(
    "click",

    function(e){

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if(target){

            window.scrollTo({

                top:
                target.offsetTop - 80,

                behavior:
                "smooth"

            });

        }

    });

});


/* --------------------
   Hero 打字機效果
-------------------- */

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

const originalText =
heroTitle.innerText;

heroTitle.innerText = "";

let i = 0;

function typeWriter(){

    if(i < originalText.length){

        heroTitle.innerHTML +=
            originalText.charAt(i);

        i++;

        setTimeout(
            typeWriter,
            70
        );
    }

}

setTimeout(
    typeWriter,
    300
);

}


/* --------------------
   Footer 年份自動更新
-------------------- */

const footer =
document.querySelector("footer");

if(footer){

const year = new Date().getFullYear();

footer.innerHTML = footer.innerHTML
.replace(
"2026",
year
);

}


/* --------------------
   Console Logo
-------------------- */

console.log(
"%c鴻成地政士事務所",
"color:#d4af37;font-size:22px;font-weight:bold;"
);

console.log(
"財富傳承藍圖官網已啟動"
);
