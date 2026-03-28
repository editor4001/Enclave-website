const urlParams = new URLSearchParams(window.location.search);
const title = document.querySelector('#welcome-title');

// Récupérer un paramètre spécifique
const user = urlParams.get('username'); // "leo"

// Exemple : afficher dans la page
if(user) {
    title.textContent = `Enclave - Welcome, ${user}`;
}
