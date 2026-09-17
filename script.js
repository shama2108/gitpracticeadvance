const startBtn = document.getElementById("startBtn");
const loginBtn = document.getElementById("loginBtn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

startBtn.addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

loginBtn.addEventListener("click", function () {
    alert("Login feature coming soon!");
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        `Thank you, ${name}! Your message has been submitted.`;

    contactForm.reset();
});