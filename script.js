
/* 1. Select HTML elements */
const themeButton = document.getElementById("theme-button");
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const year = document.getElementById("year");

/* 2. Show the current year */
year.textContent = new Date().getFullYear();

/* 3. Change the theme when the button is clicked */
themeButton.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");

    if (isDark) {
        themeButton.textContent = "☀ Light Theme";
    } else {
        themeButton.textContent = "☾ Change Theme";
    }

    themeButton.setAttribute("aria-pressed", String(isDark));
});

/* 4. Open and close the mobile menu */
menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

/* 5. Close the mobile menu after clicking a link */
const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
    });
});

/* 6. Handle the contact form */
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("Portfolio message from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    formStatus.textContent = "Opening your email application...";

    window.location.href =
        "mailto:?subject=" + subject + "&body=" + body;
});
