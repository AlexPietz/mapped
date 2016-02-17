$(document).ready(function() {
 
  /*
   * Application Init
   */
  var map = L.mapbox.map('map', 'jmlabs.k3egm800', {
    center: [35.59, -82.56], // lat, long
    zoom: 13
  });

  L.mapbox.tileLayer('mapbox.pencil', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
  }).addTo(map);
  
});