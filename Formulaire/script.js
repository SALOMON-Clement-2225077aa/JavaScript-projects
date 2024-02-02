function verifierFormulaire() {
    // Réinitialiser les messages d'erreur
    resetErreurs();

    // Valeurs des champs=
    var nom = document.getElementById("nom").value.trim();
    var prenom = document.getElementById("prenom").value.trim();
    var email = document.getElementById("email").value.trim();
    var telephone = document.getElementById("telephone").value.trim();
    var adresse = document.getElementById("adresse").value.trim();
    var codePostal = document.getElementById("codePostal").value.trim();
    var ville = document.getElementById("ville").value.trim();
    var typeCarte = document.getElementById("typeCarte").value;
    var numeroCarte = document.getElementById("numeroCarte").value.trim();
    var codeSecurite = document.getElementById("codeSecurite").value.trim();

    // Nom
    if (nom === "") {
        afficherErreur("nom", "Le champ Nom ne peut pas être vide.");
    }
    // Prénom
    if (prenom === "") {
        afficherErreur("prenom", "Le champ Prénom ne peut pas être vide.");
    }
    // Mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        afficherErreur("email", "Format d'email invalide.");
    }
    // Téléphone
    var regexTelephone = /^\d{2} \d{2} \d{2} \d{2} \d{2}$/;
    var regexTelephone2 = /^\d{10}$/;
    if (!regexTelephone.test(telephone) && !regexTelephone2.test(telephone) ) {
        afficherErreur("telephone", "Format de téléphone invalide.");
    }

    // Adresse
    if (adresse === "") {
        afficherErreur("adresse", "Le champ Adresse ne peut pas être vide.");
    }
    // Code Postal
    var regexCodePostal = /^\d{5}$/;
    if (!regexCodePostal.test(codePostal)) {
        afficherErreur("codePostal", "Code postal invalide (5 chiffres uniquement).");
    }
    // Ville
    if (ville === "") {
        afficherErreur("ville", "Le champ Ville ne peut pas être vide.");
    }

    // N°carte
    var regexNumeroCarte = /^\d{16}$/;
    if (!regexNumeroCarte.test(numeroCarte)) {
        afficherErreur("numeroCarte", "Numéro de carte invalide (16 chiffres).");
    }
    // N° sécu
    var regexCodeSecurite = /^\d{3}$/;
    if (!regexCodeSecurite.test(codeSecurite)) {
        afficherErreur("codeSecurite", "Code de sécurité invalide (3 chiffres).");
    }

    // Aucune erreur
    if (!document.querySelector(".erreur")) {
        alert("Formulaire envoyé !");
    }
}

function afficherErreur(champId, message) {
    var champ = document.getElementById(champId);
    var erreurLabel = document.createElement("label");
    erreurLabel.className = "erreur";
    erreurLabel.style.color = "red";
    erreurLabel.textContent = message;
    champ.parentNode.appendChild(erreurLabel);
}

function resetErreurs() {
    var erreurs = document.querySelectorAll(".erreur");
    for (var i = 0; i < erreurs.length; i++) {
        erreurs[i].remove();
    }
}
