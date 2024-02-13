class Observable {
    constructor() {
        this.A_loggers = [];
    }

    start() {
        setInterval(async () => {
            const data = await this.fetchData();
            if (data !== null) {
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
                return Valeur;
            } else {
                throw new Error('No data or invalid data format in response');
            }
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    }

    subscribe(observer) {
        this.A_loggers.push(observer);
    }

    unsubscribe(observer) {
        // TODO: Implement unsubscribe logic
    }

    notify(data) {
        this.A_loggers.forEach((observer) => observer.update(data));
    }
}

export default Observable;
