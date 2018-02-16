/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//ATENCION https://bootsnipp.com/snippets/VElzQ

var map;
var markers = [];
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function mostrarExcursion(origen, destino, descripcion) {
    clearMarkers();
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': origen}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {

            //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: results[0].geometry.location,
                title: origen
            });
            var infowindow = new google.maps.InfoWindow({
                content: '<h5>' + descripcion + '</h5>'
            });
            markers.push(marker);
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });

    geocoder.geocode({'address': destino}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: results[0].geometry.location,
                title: destino
            });
            markers.push(marker);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}


