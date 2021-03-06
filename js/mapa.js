
var map;
var marker;


function initialize() {

    var mapOptions = {
        center: new google.maps.LatLng(-23.548464,-46.665235),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), mapOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);


function searchAddress() {

  var addressInput = document.getElementById('address-input').value;

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: addressInput}, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

      var myResult = results[0].geometry.location;

      createMarker(myResult);

      map.setCenter(myResult);

      map.setZoom(17);
        }
    });

}

function createMarker(latlng) {

  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }

  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });
}