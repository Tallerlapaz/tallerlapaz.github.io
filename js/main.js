//Menú de navegación

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsById("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Mapa//

function myMap() {

	var myCenter = new google.maps.LatLng(20.671900, -103.3765865);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, 
      zoom: 14, 
      mapTypeControl: true,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU, 
      position: google.maps.ControlPosition.TOP_RIGHT,
      },
      /*mapTypeId:google.maps.MapTypeId.HYBRID*/
    };
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter, animation: google.maps.Animation.DROP});
  marker.setMap(map);
  google.maps.event.addListener(marker,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Av. de la Paz 2361-A"
    });
  infowindow.open(map,marker);
  })

}