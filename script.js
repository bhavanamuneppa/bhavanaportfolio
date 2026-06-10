// ======================
// TYPING ANIMATION
// ======================

const roles = [
    "AI & ML Student",
    "Full Stack Developer",
    "Java Programmer",
    "Tech Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typing.textContent =
            currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, 100);
}

typeEffect();


// ======================
// SECTION SWITCHING
// ======================

function showSection(id) {

    document.getElementById("home").style.display = "none";

    let sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {

        section.style.display = "none";

    });

    document.getElementById(id).style.display =
        "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ======================
// GO HOME
// ======================

function goHome() {

    let sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {

        section.style.display = "none";

    });

    document.getElementById("home").style.display =
        "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ======================
// MOBILE MENU
// ======================

function toggleMenu() {

    document
        .getElementById("menu")
        .classList
        .toggle("active");
}


// ======================
// CLOSE MENU AFTER CLICK
// ======================

document.addEventListener("click", function (e) {

    const menu =
        document.getElementById("menu");

    const hamburger =
        document.querySelector(".hamburger");

    if (
        menu &&
        !menu.contains(e.target) &&
        e.target !== hamburger
    ) {

        menu.classList.remove("active");
    }
});



