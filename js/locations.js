'use strict';

// MAPS
const coordsCA = [43.64415602798771, -79.39456085954046];
const coordsAU = [-30.329180860950846, 149.78817552453478];
const coordsUK = [53.71034833079546, -1.3417814881083405];
const mapOne = L.map('mapOne').setView(coordsCA, 13);
const mapTwo = L.map('mapTwo').setView(coordsAU, 13);
const mapThree = L.map('mapThree').setView(coordsUK, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapOne);

L.marker(coordsCA).addTo(mapOne).openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapTwo);

L.marker(coordsAU).addTo(mapTwo).openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mapThree);

L.marker(coordsUK).addTo(mapThree).openPopup();
