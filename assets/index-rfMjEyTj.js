(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();window.addEventListener("scroll",()=>{document.querySelector("header").classList.toggle("sticky",window.scrollY>0)});document.querySelector("#ptOneBio").textContent="Hi! My name is Gonzalo, a passionate educator and software developer with a rich background and a commitment to making a positive impact in the world.";document.querySelector("#ptTwoBio").textContent="I was born in Mexico and raised in the vibrant borough of Brooklyn, where my journey as an educator began. With 12 years of experience in teaching, I've dedicated the past 7 years to inspiring young minds through the world of computer science. In the last 2 years, I've delved into the dynamic realm of software development, adding an exciting dimension to my professional journey.";document.querySelector("#ptThreeBio").textContent="My focus goes beyond the conventional classroom. I am deeply committed to empowering young people, especially those from traditionally marginalized backgrounds. I believe that education is a key that unlocks doors, and my mission is to provide a pathway for individuals to thrive as software developers.";document.querySelector("#ptFourBio").textContent="My work is driven by the belief that everyone deserves the opportunity to achieve financial freedom. Through my teaching, I aim to equip students with the skills and knowledge needed to not just enter the field of software development but to excel and create a future of their own design.";document.querySelector("#ptFiveBio").textContent="Join me on this journey of learning, growth, and empowerment. Together, let's build a community where the power of education and technology transforms lives.";
