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

// Función para abrir el modal con video
function openModal(videoSrc) {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");

    modal.style.display = "flex";
    modalVideo.src = videoSrc;
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");

    modal.style.display = "none";
    modalVideo.src = ""; // Detener video al cerrar
}

// Cerrar modal al hacer clic fuera del video
window.onclick = function (event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
};




