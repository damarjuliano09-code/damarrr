// TOMBOL PROMO
const tombolPromo = document.getElementById("tombol-promo");
const infoPromo = document.getElementById("info-promo");

tombolPromo.addEventListener("click", function() {

    infoPromo.textContent =
        "🎉 Promo Hari Ini! Diskon 15% untuk pembelian 2 gelas Kopi Susu Gula Aren sebelum pukul 11.00 WIB!";

    tombolPromo.textContent = "Promo Berhasil Dilihat ✓";

});

// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function() {

    navMenu.classList.toggle("active");

    menuToggle.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";

});

// TUTUP MENU SETELAH LINK DIKLIK
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});