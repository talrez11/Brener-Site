/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:
 */

var Caracal = Caracal || {};
 
function on_site_load() {

	// create image lightbox
	Caracal.lightbox = new LightBox('a.image.direct', false, false, true);

	// map Canvas
	var image = "/site/images/map-pin.png";
	var mapOptions = {
	  zoom: 17,
	  center: new google.maps.LatLng(31.870843, 34.804183), 
	  mapTypeId: google.maps.MapTypeId.ROADMAP 
	}
	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	var myPos = new google.maps.LatLng(31.870843, 34.804183); 
	var myMarker = new google.maps.Marker({position: myPos, map: map, icon: image });
}

$(on_site_load);
