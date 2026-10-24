/* =====================================
   Hong Cheng Wealth Architecture
   Premium Black Gold Edition
===================================== */

:root {

  --gold: #d4af37;
  --gold-light: #f7d978;
  --gold-dark: #8f7020;

  --bg: #0a0a0a;
  --bg-secondary: #111111;

  --card: #181818;

  --text: #f5f5f5;
  --muted: #c9c9c9;

  --border: #3b3020;

  --shadow:
    0 10px 30px rgba(212,175,55,.12);
}

/* =======================
   Reset
======================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{

  font-family:
  "Noto Sans TC",
  "Microsoft JhengHei",
  sans-serif;

  background:var(--bg);

  color:var(--text);

  line-height:1.8;

  overflow-x:hidden;
}

a{
  text-decoration:none;
  color:inherit;
}

img{
  display:block;
  max-width:100%;
}

/* =======================
   Scroll Bar
======================= */

::-webkit-scrollbar{
  width:10px;
}

::-webkit-scrollbar-track{
  background:#111;
}

::-webkit-scrollbar-thumb{
  background:var(--gold);
  border-radius:20px;
}


/* =======================
   Navigation
======================= */

nav{

  position:fixed;

  top:0;
  left:0;

  width:100%;
  height:80px;

  background:
  rgba(0,0,0,.92);

  backdrop-filter:blur(15px);

  display:flex;

  justify-content:space-between;
  align-items:center;

  padding:0 50px;

  border-bottom:
  1px solid rgba(212,175,55,.25);

  z-index:9999;

  transition:.3s;
}

.logo{

  color:var(--gold);

  font-size:clamp(
    18px,
    2vw,
    28px
  );

  font-weight:700;

  white-space:nowrap;

  letter-spacing:1px;
}

nav ul{

  display:flex;

  gap:30px;

  list-style:none;
}

nav li{

  position:relative;
}

nav a{

  color:white;

  transition:.3s;
}

nav a:hover{

  color:var(--gold);
}

nav a.active{

  color:var(--gold);
}

nav a.active::after{

  content:"";

  display:block;

  width:100%;

  height:2px;

  margin-top:4px;

  background:var(--gold);
}


/* =======================
   HERO
======================= */

.hero{

  height:100vh;

  background:
  linear-gradient(
      135deg,
      #050505,
      #171717
  );

  display:flex;

  justify-content:center;
  align-items:center;

  text-align:center;

  position:relative;

  overflow:hidden;
}

.hero::before{

  content:"";

  position:absolute;

  width:900px;
  height:900px;

  border-radius:50%;

  background:
  radial-gradient(
      circle,
      rgba(212,175,55,.08),
      transparent 70%
  );

  filter:blur(50px);
}

.hero-overlay{

  max-width:1000px;

  padding:20px;

  position:relative;

  z-index:2;
}

.gold-line{

  width:120px;
  height
