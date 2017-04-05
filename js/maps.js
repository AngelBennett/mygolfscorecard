/**
 * Created by ABennett on 3/20/17.
 */

function initMap() {
    var uluru1 = {lat: 40.431459252532, lng: -111.905075311661};
    var uluru2 = {lat: 40.4295033232823, lng: -111.902114152909};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru1
    });
    var marker1 = new google.maps.Marker({
        position: uluru1,
        map: map,
        icon: {url: "images/Map_marker1.png"},
        label: 'Thanksgiving Point'

    });

    var marker2 = new google.maps.Marker({
    position: uluru2,
    map: map,
    icon: {url: "images/Map_marker1.png"}
    });
}