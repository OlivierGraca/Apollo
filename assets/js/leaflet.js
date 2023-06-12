// Déclaration d'une variable pour situer MTL
var mtl = [45.5031824, -73.5698065];

// Déclaration de la carte
var map = L.map('map').setView(mtl, 10);

// Déclaration du calque de base
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 10,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Ajout du marqueur
var marker = L.marker(mtl).addTo(map);

// Ajout d'une infobulle 
marker.bindPopup("<h3>Montreal, Quebec.</h3>");