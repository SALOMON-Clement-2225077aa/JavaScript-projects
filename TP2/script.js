let A_tableau = Array.from({ length: 20000 }, () => Math.floor(Math.random() * (40 - -10 + 1)) + -10);
let I_index = 0;
const A_currentI_temperatureElement = document.getElementById("A_currentI_temperature");
const I_temperatureListElement = document.getElementById("I_temperatureList");
const message= document.getElementById("message");

function displayNextValue() {
    if (I_index < A_tableau.length) {
        let A_currentI_temperature = A_tableau[I_index];

        document.body.style.backgroundColor = getBackgroundColor(A_currentI_temperature);
        A_currentI_temperatureElement.innerHTML = "Température actuelle : " + A_currentI_temperature + "<abbr>°C</abbr>";
        let el = document.createElement('div');
        el.innerHTML = A_currentI_temperature+"<abbr>°C<abbr>";

        if (A_currentI_temperature <= 0) el.classList.add("blue-border");
        else if (A_currentI_temperature <= 20) el.classList.add("green-border");
        else if (A_currentI_temperature <= 30) el.classList.add("orange-border");
        else if (A_currentI_temperature <= 40) el.classList.add("red-border");

        I_temperatureListElement.appendChild(el);
        I_index++;
        setTimeout(displayNextValue, 2000);
    }
}

function getBackgroundColor(I_temperature) {
    message.textContent = "";
    if (I_temperature <= 0) {
        message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        return "#87CEEB";
    }
    else if (I_temperature <= 20) return "#90EE90";
    else if (I_temperature <= 30) return "#FFD700";
    else if (I_temperature <= 40) {
        message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        return "#FF6347";
    }
    else return "#f0f0f0";
}


displayNextValue();