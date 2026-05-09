/* ═══════════════════════════════════════════
   LAN Studios — script.js
   All interactive behaviour for LAN Studios
═══════════════════════════════════════════ */

// Custom cursor
const cur=document.getElementById("cur"),ring=document.getElementById("cur-ring");
let mx=0,my=0,rx=0,ry=0;
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
(function animate(){
  cur.style.left=mx+"px";cur.style.top=my+"px";
  rx+=(mx-rx)*.13;ry+=(my-ry)*.13;
  ring.style.left=rx+"px";ring.style.top=ry+"px";
  requestAnimationFrame(animate);
})();

// Scroll reveal
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");obs.unobserve(e.target)}});
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

// Metric bars
const mObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");mObs.unobserve(e.target)}});
},{threshold:.4});
document.querySelectorAll(".metric-fill").forEach(el=>mObs.observe(el));

// Project filters
document.querySelectorAll(".proj-filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".proj-filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Nav scroll
const nav=document.getElementById("nav");
window.addEventListener("scroll",()=>{
  nav.style.background=window.scrollY>50?"rgba(6,7,9,.97)":"rgba(6,7,9,.88)";
});

// Active nav highlight
const secs=document.querySelectorAll("section[id]");
window.addEventListener("scroll",()=>{
  let cur="";
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-130)cur=s.id});
  document.querySelectorAll(".nav-links a").forEach(a=>{
    a.classList.toggle("active",a.getAttribute("href")==="#"+cur);
  });
});