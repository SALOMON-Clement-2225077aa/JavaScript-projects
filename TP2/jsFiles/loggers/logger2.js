class Logger2 {

    constructor() {
        this.chart = this.createChart();
    }

    update(data) {
        this.chart.data.labels.push(new Date(data.Timestamp * 1000).toLocaleTimeString());
        this.chart.data.datasets[0].data.push(data.Valeur);
        this.chart.update();
    }

    createChart() {
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        const fillPatternGold = ctx.createLinearGradient(0, 0, 0, 300);
        fillPatternGold.addColorStop(0, 'tomato');
        fillPatternGold.addColorStop(1, '#c4a3da');

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Temperature',
                    data: [],
                    borderColor: 'red',
                    borderWidth: 1,
                    fill: true,
                    backgroundColor: fillPatternGold,
                    pointRadius: 0,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            maxTicksLimit: 5
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Temperature (°C)'
                        },
                        ticks: {
                            maxTicksLimit: 5,
                        }
                    }]
                }
            }
        });
    }


}

export { Logger2 };