// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup();
  }
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  	maxZoom: 18,
  	id: 'mapbox.streets',
  	accessToken: API_KEY
  }
);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = `https://https://raw.githubusercontent.com/markeiabc/Mapping_Earthquakes/master/majorAirports.json`;


// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
    //console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  //L.geoJson(data).addTo(map); 
    // We turn each feature into a marker on the map.
    //onEachFeature: (feature, layer) => {
      //console.log(layer);
      //layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
    //}
  
//});

