const map = L.map('map').setView([0, 0], 12);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tilesUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tilesUrl, {attribution});
tiles.addTo(map);

let markers = [];
for (let i = 0; i<10; i++) {
    markers.push(L.marker([0, 0]).addTo(map));
}


const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function changeMapView(lat, long) {
    map.setView([lat, long], 12);
}

function success(temp) {
    let pos = temp.coords;
    let current = new Point(pos.latitude, pos.longitude);

    let dist;
    locations.sort((a, b) => current.distance(new Point(a.latitude, a.longitude)) - current.distance(new Point(b.latitude, b.longitude)));

    let table = "<a href='#map-title'><table class='table table-bordered table-secondary table-hover'><thead class='thead-dark'><th>Name</th><th>City</th><th>Distance</th></thead>";
    for (let i = 0; i<10; i++) {
        markers[i].setLatLng([locations[i].latitude, locations[i].longitude]);
        markers[i].bindPopup(locations[i].name);
        table += "<tr onclick='changeMapView("+locations[i].latitude+", "+locations[i].longitude+")'><td>"+locations[i].name+"</td><td>"+locations[i].city+"</td><td>"+Math.round(current.distance(new Point(locations[i].latitude, locations[i].longitude))*10)/10+" km</td></tr>";
    }
    table += "</table></a>";
    $(table).appendTo("#map-results");

    $("#name").text(locations[0].name);
    $("#city").text(locations[0].city);
    
    changeMapView(locations[0].latitude, locations[0].longitude);
}

function error(err) {
    console.warn("ERROR "+err.code+": "+err.message);
    alert("There was an error trying to access your location");
}

navigator.geolocation.getCurrentPosition(success, error, options);