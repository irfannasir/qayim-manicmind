document.addEventListener("DOMContentLoaded", function () {
    const secretMessage = document.getElementById("secret-message");
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    document.querySelector(".glow-button").addEventListener("click", function () {
        secretMessage.style.display = "block";
        secretMessage.classList.add("fade-in");
    });

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
