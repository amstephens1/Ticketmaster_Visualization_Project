function createMap(activities){
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });
    var baseMaps = {
        "Light Map": lightmap
    };
    var overlayMaps = {
        "Events": activities
      };
    var map = L.map("map-id", {
        center: [40.73, -74.0059],
        zoom: 12,
        layers: [lightmap, Events]
    });
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);
}
function createMarkers(response){
    var events = response.data._embedded.events
    var eventMarkers = []
    for (var i = 0; i < events.length; index++){
        var eventmarker = L.marker([events[i]._embedded.venues[0].location.latitude, events[i]._embedded.venues[0].location.longitude])
        .bindPopup("<h3>" + events[i].name +"<h3><h3>Start Time: " + events[i].dates.start.localTime + "</h3>")
        
        eventMarkers.push(eventmarker)
    }
    createMap(L.layerGroup(eventMarkers))
}
function createUrl(){
    var userTime = d3.select()
    var state = d3.select()

}