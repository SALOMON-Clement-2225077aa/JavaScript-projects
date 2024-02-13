const EL_currentTemperatureElement = document.getElementById("currentTemperature");
const EL_temperatureListElement = document.getElementById("temperatureList");
const EL_message= document.getElementById("message");

class Logger1 {

    I_currentTemperature = 0;

    changeLabel(I_currentTemperature) {
        EL_message.textContent = "";
        if (I_currentTemperature < 0) {
            EL_message.textContent = "Brrrrrrr, un peu froid ce matin, mets ta cagoule !";
        }
        else if (I_currentTemperature > 30) {
            EL_message.textContent = "Caliente ! Vamos a la playa, ho hoho hoho !!";
        }
    }

    update(data) {
        if(data != this.I_currentTemperature) {
            this.I_currentTemperature = data;

            this.changeLabel(this.I_currentTemperature);
            EL_currentTemperatureElement.innerHTML = "Température actuelle : " + this.I_currentTemperature + "<abbr>°C</abbr>";
            let el = document.createElement('div');
            el.innerHTML = this.I_currentTemperature+"<abbr>°C<abbr>";

            if (this.I_currentTemperature <= 0) el.classList.add("blue-border");
            else if (this.I_currentTemperature <= 20) el.classList.add("green-border");
            else if (this.I_currentTemperature <= 30) el.classList.add("orange-border");
            else if (this.I_currentTemperature <= 40) el.classList.add("red-border");

            EL_temperatureListElement.appendChild(el);
        }
    }
}

class Logger2 {
    update(data) {
        console.log(data + ' Logger 2');
    }
}

class Logger3 {
    update(data) {
        console.log(data + ' Logger 3');
    }
}

export { Logger1, Logger2, Logger3 };
