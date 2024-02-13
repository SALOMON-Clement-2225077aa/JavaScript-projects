let A_tableau = Array.from({ length: 20000 }, () => Math.floor(Math.random() * (40 - -10 + 1)) + -10);
let I_index = 0;
const EL_currentTemperatureElement = document.getElementById("currentTemperature");
const EL_temperatureListElement = document.getElementById("temperatureList");
const EL_message= document.getElementById("message");

function displayNextValue() {
    if (I_index < A_tableau.length) {
        let I_currentTemperature = A_tableau[I_index];

        document.body.style.backgroundColor = getBackgroundColor(I_currentTemperature);
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

function getBackgroundColor(temperature) {
    EL_message.textContent = "";
    if (temperature <= 0) {
        EL_message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        return "#87CEEB";
    }
    else if (temperature <= 20) return "#90EE90";
    else if (temperature <= 30) return "#FFD700";
    else if (temperature <= 40) {
        EL_message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        return "#FF6347";
    }
    else return "#f0f0f0";
}


displayNextValue();