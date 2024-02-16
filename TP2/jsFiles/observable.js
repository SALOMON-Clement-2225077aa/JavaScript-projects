class Observable {
    constructor() {
        this.A_observers = [];
    }

    start() {
        setInterval(async () => {
            const data = await this.fetchData();
            if (data && data.Timestamp && data.Valeur !== undefined) {
                this.notify(data);
            } else {
                console.log('Failed to fetch data from API');
            }
        }, 2000);
    }

    async fetchData() {
        try {
            const response = await fetch('https://hothothot.dog/api/capteurs/exterieur');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data && data.capteurs && data.capteurs.length > 0) {
                const { type, Nom, Valeur, Timestamp } = data.capteurs[0];
                this.saveDataLocally(data);
                return { type, Nom, Valeur, Timestamp };
            } else {
                throw new Error('No data or invalid data format in response');
            }
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    saveDataLocally(data) {
        try {
            let existingData = localStorage.getItem('temperatureData');
            existingData = existingData ? JSON.parse(existingData) : [];
            if (!Array.isArray(existingData)) {
                existingData = [existingData];
            }
            existingData.push(data);
            const updatedData = JSON.stringify(existingData);
            localStorage.setItem('temperatureData', updatedData);
            console.log('Data saved locally:', data);
        } catch (error) {
            console.error('Error saving data locally:', error);
        }
    }

    readDataLocally() {
        try {
            const jsonData = localStorage.getItem('temperatureData');
            const data = JSON.parse(jsonData);
            console.log('Data read from localStorage:', data);
            return data;
        } catch (error) {
            console.error('No data found in localStorage:', error);
            return null;
        }
    }


    subscribe(observer) {
        this.A_observers.push(observer);
    }

    unsubscribe(observer) {
        this.A_observers = this.A_observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.A_observers.forEach((observer) => observer.update(data));
    }
}

export default Observable;
