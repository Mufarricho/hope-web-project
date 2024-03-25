function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.display = (navbar.style.display === "block") ? "none" : "block";
    const hamburger = document.getElementsByClassName("hamburger")[0];
    hamburger.classList.toggle("change");
}

