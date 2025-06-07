document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});