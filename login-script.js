// Dictionnaire des comptes (comme le PHP)
const accounts = {
    "admin": "N9FHENN9EF",
    "user1": "pass123"
};

// Formulaire
const form = document.getElementById("login-form");

// Submit
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche le reload de la page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (accounts[username] && accounts[username] === password) {
        // Même redirection que PHP
        window.location.href = "https://editor4001.github.io/Enclave-website/home.html?username=" + encodeURIComponent(username);
    } else {
        // Même redirection que PHP pour login invalide
        window.location.href = "https://editor4001.github.io/Enclave-website/invalid.html";
    }
});