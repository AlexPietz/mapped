$(document).ready(function() {

    var map = L.map('map').setView([55.943,-3.18], 13);

  // create the tile layer with correct attribution
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([55.944, -3.187]).addTo(map);
});