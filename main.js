// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const sideNav = document.getElementById('side-nav');

    navToggle.addEventListener('click', () => {
        sideNav.classList.toggle('active');
    });
});


console.log("Welcome to st.music! Develope By - Shivam Tiwari")