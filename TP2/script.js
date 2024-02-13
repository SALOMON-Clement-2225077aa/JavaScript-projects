<!-- Les Variables -->
let A_tableau = Array.from({ length: 20000 }, () => Math.floor(Math.random() * (40 - -10 + 1)) + -10);
let I_index = 0;
const EL_currentTemperatureElement = document.getElementById("currentTemperature");
const EL_temperatureListElement = document.getElementById("temperatureList");
const EL_message= document.getElementById("message");

<!-- Les Fonctions -->
function switchTab(tabIndex) {
    // Cacher tous les onglets
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    // Désélectionner tous les boutons d'onglet
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.setAttribute('aria-selected', 'false');
    });
    // Afficher l'onglet sélectionné
    var selectedTab = document.getElementById('tab-content-' + tabIndex);
    selectedTab.classList.add('active');
    // Sélectionner le bouton d'onglet correspondant
    var selectedTabButton = document.querySelector('.tab-button:nth-of-type(' + tabIndex + ')');
    selectedTabButton.setAttribute('aria-selected', 'true');
}

function displayNextValue() {
    if (I_index < A_tableau.length) {
        let I_currentTemperature = A_tableau[I_index];

        changeLabel(I_currentTemperature);
        EL_currentTemperatureElement.innerHTML = "Température actuelle : " + I_currentTemperature + "<abbr>°C</abbr>";
        let el = document.createElement('div');
        el.innerHTML = I_currentTemperature+"<abbr>°C<abbr>";

        if (I_currentTemperature <= 0) el.classList.add("blue-border");
        else if (I_currentTemperature <= 20) el.classList.add("green-border");
        else if (I_currentTemperature <= 30) el.classList.add("orange-border");
        else if (I_currentTemperature <= 40) el.classList.add("red-border");

        EL_temperatureListElement.appendChild(el);
        I_index++;
        setTimeout(displayNextValue, 2000);
    }
}

function changeLabel(I_currentTemperature) {
    EL_message.textContent = "";
    if (I_currentTemperature <= 0) {
        EL_message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
    }
    else if (I_currentTemperature <= 40) {
        EL_message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
    }
}


<!-- Le Main() -->
displayNextValue();
switchTab(1);