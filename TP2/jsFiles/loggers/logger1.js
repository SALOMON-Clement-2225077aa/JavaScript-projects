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
        if(data.Valeur != this.I_currentTemperature) {
            this.I_currentTemperature = data.Valeur;

            this.changeLabel(this.I_currentTemperature);
            EL_currentTemperatureElement.innerHTML = "Température actuelle : " + this.I_currentTemperature + "<abbr>°C</abbr>";
            let el = document.createElement('div');
            if (this.I_currentTemperature.toString().length < 4 ) {
                el.innerHTML = "<b>&nbsp;&nbsp;"+this.I_currentTemperature+"<abbr>°C<abbr>&nbsp</b> - "+new Date(data.Timestamp * 1000).toLocaleTimeString();
            } else {
                el.innerHTML = "<b>"+this.I_currentTemperature+"<abbr>°C<abbr></b> - "+new Date(data.Timestamp * 1000).toLocaleTimeString();
            }

            if (this.I_currentTemperature <= 0) el.classList.add("blue-border");
            else if (this.I_currentTemperature <= 20) el.classList.add("green-border");
            else if (this.I_currentTemperature <= 30) el.classList.add("orange-border");
            else if (this.I_currentTemperature <= 40) el.classList.add("red-border");

            // [Update] Insert the new temperature at the top of the list instead :
            EL_temperatureListElement.insertBefore(el, EL_temperatureListElement.firstChild);
            if (EL_temperatureListElement.children.length > 10) {
                EL_temperatureListElement.removeChild(EL_temperatureListElement.lastChild);
            }
            EL_temperatureListElement.firstChild.classList.add("first-element");
            if (EL_temperatureListElement.children.length > 1
                && EL_temperatureListElement.children[1].classList.contains("first-element")) {
                EL_temperatureListElement.children[1].classList.remove("first-element");
            }
        }
    }
}

export { Logger1 };
