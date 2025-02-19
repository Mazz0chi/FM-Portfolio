document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuLinks = document.querySelectorAll(".menu-link");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
        });
    });

    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            menuToggle.classList.remove("active");
            mobileMenu.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
});

document.addEventListener("DOMContentLoaded", function () {
    const brandLogos = document.querySelectorAll(".brand-logo");

    brandLogos.forEach(logo => {
        logo.addEventListener("mouseenter", () => {
            logo.style.transform = "scale(1.2)";
        });

        logo.addEventListener("mouseleave", () => {
            logo.style.transform = "scale(1)";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
    }, 1500); 
});




