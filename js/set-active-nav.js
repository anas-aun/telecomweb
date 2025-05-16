// set-active-nav.js

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navigation li a');
    const currentPath = window.location.pathname.split("/").pop(); // e.g. about.html

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        if (linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
            link.parentElement.classList.add("current");
        }
    });
});
