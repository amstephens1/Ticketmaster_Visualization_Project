function createMap(activities){
    document.getElementById('map-id').innerHTML = "<div id='map' style='width: 100%; height: 100%;'></div>";

    var streetmap = new L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
      });
    var baseMaps = {
        "Street Map": streetmap
    };
    var overlayMaps = {
        "Events": activities
      };
    var map = new L.map("map", {
        center: [40.73, -74.0059],
        zoom: 12,
        layers: [streetmap, activities]
    });
    console.log(map)
    eventLat = map._layers[1]._latlng.lat
    eventLng = map._layers[1]._latlng.lng
    console.log(eventLat)
    console.log(eventLng)
    var latlng = L.latLng(eventLat, eventLng)
    map.setView(latlng, 7)
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(map);
}
function createMarkers(data){
    
    console.log(data)
    var events = data._embedded.events
    var eventMarkers = []

    for (var i = 0; i < events.length; i++){
        var eventmarker = L.marker([events[i]._embedded.venues[0].location.latitude, events[i]._embedded.venues[0].location.longitude])
        .bindPopup("<h3>" + events[i].name +"<h3><h3>Start Time: " + events[i].dates.start.localTime + "</h3>"+ "<button>Submit</button>")
        
        eventMarkers.push(eventmarker)
        }
    createMap(L.layerGroup(eventMarkers))
}


function createUrl(){

    var userTime = document.getElementById("userTime").value
    var state = document.getElementById("inputGroupSelect01").value
    var userTime = userTime.substr(0,11)+"00:00:00Z"
    var endTime = userTime.substr(0,11)+"23:59:00Z"
    // console.log(userTime)
    // console.log(endTime)
    // console.log(state)
    var url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=ZmIEawYVUQbeMEzMytkLVXUFjgNy3YqT&size=100&stateCode=${state}&startDateTime=${userTime}&endDateTime=${endTime}`
    console.log(url)
    d3.json(url).then(createMarkers)
}


var header = d3.select("header-row")

var sticky = header.offsetTop

function headerFunction(){
    if (window.pageYOffset > sticky){
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}
var userTime = document.getElementById("userTime").value
var state = document.getElementById("inputGroupSelect01").value
console.log(userTime)
console.log(state)