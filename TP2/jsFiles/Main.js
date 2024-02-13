import Observable from './observable.js';
import { Logger, Logger2, Logger3 } from './logger.js';
import { switchTab, displayNextValue, changeLabel } from './utils.js';

// Lancer l'application
function start() {
    displayNextValue();
    switchTab(1);
}

// Main()
const observable = new Observable();
const logger1 = new Logger();
const logger2 = new Logger2();
const logger3 = new Logger3();

observable.subscribe(logger1);
observable.subscribe(logger2);
observable.subscribe(logger3);

observable.notify('Go');

start();
