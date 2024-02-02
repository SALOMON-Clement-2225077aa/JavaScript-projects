let tableau = Array.from({ length: 20000 }, () => Math.floor(Math.random() * (40 - -10 + 1)) + -10);
let index = 0;
const currentTemperatureElement = document.getElementById("currentTemperature");
const temperatureListElement = document.getElementById("temperatureList");
const message= document.getElementById("message");

function displayNextValue() {
    if (index < tableau.length) {
        let currentTemperature = tableau[index];

        document.body.style.backgroundColor = getBackgroundColor(currentTemperature);
        currentTemperatureElement.innerHTML = "Température actuelle : " + currentTemperature + "<abbr>°C</abbr>";
        let el = document.createElement('div');
        el.innerHTML = currentTemperature+"<abbr>°C<abbr>";

        if (currentTemperature <= 0) el.classList.add("blue-border");
        else if (currentTemperature <= 20) el.classList.add("green-border");
        else if (currentTemperature <= 30) el.classList.add("orange-border");
        else if (currentTemperature <= 40) el.classList.add("red-border");

        temperatureListElement.appendChild(el);
        index++;
        setTimeout(displayNextValue, 2000);
    }
}

function getBackgroundColor(temperature) {
    message.textContent = "";
    if (temperature <= 0) {
        message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        return "#87CEEB";
    }
    else if (temperature <= 20) return "#90EE90";
    else if (temperature <= 30) return "#FFD700";
    else if (temperature <= 40) {
        message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        return "#FF6347";
    }
    else return "#f0f0f0";
}


displayNextValue();