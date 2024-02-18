const apiCallsElement = document.getElementById("apiCalls");
const minTemperatureElement = document.getElementById("minTemperature");
const maxTemperatureElement = document.getElementById("maxTemperature");
const averageTemperatureElement = document.getElementById("averageTemperature");
const collectTime = document.getElementById("collectTime");

class Logger3 {

    I_apiCalls = 0;
    I_minTemperature = 999;
    date_min = null;
    I_maxTemperature = -999;
    date_max = null;
    I_sumOfTemperature = 0;
    I_averageTemperature = 0;

    softUpdate(data) {
        let I_currentTemperature = parseFloat(data.Valeur);
        let D_currentDate = new Date(data.Timestamp * 1000).toLocaleTimeString();
        this.I_apiCalls += 1;
        this.I_sumOfTemperature += I_currentTemperature;
        if(I_currentTemperature < this.I_minTemperature) {
            this.I_minTemperature = I_currentTemperature;
            this.date_min = D_currentDate;
        }
        if(I_currentTemperature > this.I_maxTemperature) {
            this.I_maxTemperature = I_currentTemperature;
            this.date_max = D_currentDate;
        }
    }

    update(data) {
        this.softUpdate(data);
        this.I_averageTemperature = this.I_sumOfTemperature / this.I_apiCalls;
        this.updateHTML();
    }

    formatTime(seconds) {
        if (seconds < 60) {
            return seconds + " secondes";
        } else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            return minutes + " minute" + (minutes > 1 ? "s" : "");
        } else {
            const hours = Math.floor(seconds / 3600);
            const remainingMinutes = Math.floor((seconds % 3600) / 60);
            return hours + " heure" + (hours > 1 ? "s" : "") + " et " + remainingMinutes + " minute" + (remainingMinutes > 1 ? "s" : "");
        }
    }

    updateHTML() {
        apiCallsElement.innerHTML = "Nombre d'appels d'API effectués : <b>" + this.I_apiCalls + "</b>";
        minTemperatureElement.innerHTML = "Température minimale enregistrée : <b>" + this.I_minTemperature + "<abbr>°C</abbr></b>" + " - " + this.date_min;
        maxTemperatureElement.innerHTML = "Température maximale enregistrée : <b>" + this.I_maxTemperature + "<abbr>°C</abbr></b>"  + " - " + this.date_max;
        averageTemperatureElement.innerHTML = "Moyenne des températures : <b>" + this.I_averageTemperature.toFixed(2)+ "<abbr>°C</abbr></b>";
        collectTime.innerHTML = "Temps de collecte : <b>" + this.formatTime(this.I_apiCalls*2) + "</b>";
    }
}


export { Logger3 };