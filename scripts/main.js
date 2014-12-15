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
}

$(on_site_load);
