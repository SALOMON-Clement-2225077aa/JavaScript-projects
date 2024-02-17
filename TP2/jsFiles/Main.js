import Observable from './observable.js';
import {Logger1} from './loggers/logger1.js';
import {Logger2} from './loggers/logger2.js';
import {Logger3} from './loggers/logger3.js';

// Lancer l'application
async function start() {

    await observable.start();
    switchTab(1);
}

// Main()
const observable = new Observable();

// Création des listeners :
const logger1 = new Logger1();
const logger2 = new Logger2();
const logger3 = new Logger3();

// Ajout des données local (si elles existent) :
let localData = observable.readDataLocally()
if(localData != null) {
    localData.forEach(data => {
        logger1.update(data['capteurs'][0]);
    });
    localData.forEach(data => {
        logger2.update(data['capteurs'][0]);
    });
    localData.forEach(data => {
        logger3.softUpdate(data['capteurs'][0]);
    });
}

observable.subscribe(logger1);
observable.subscribe(logger2);
observable.subscribe(logger3);

start();
