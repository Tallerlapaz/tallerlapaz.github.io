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

	var myCenter = new google.maps.LatLng(20.672000, -103.3763865);
	var mapCanvas = document.getElementById("map");
	var mapOptions = {center: myCenter, zoom: 14};
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var marker = new google.maps.Marker({position:myCenter, animation: google.maps.Animation.DROP});
  	marker.setMap(map);
}

/*20.672065,-103.3785900,17z*/