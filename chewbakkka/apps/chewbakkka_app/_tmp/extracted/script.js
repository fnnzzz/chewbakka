/* only for Ajax!!! */
var ar_width		= '240';
var ar_height		= '350';
var ar_html			= '240x350.html'; 
var ar_pix			= '';
/* Do not touch any below */

var a = adriver(ar_ph);
new adriver.Plugin.require("html.adriver", 'pixel.adriver', 'makeImage.adriver' ).onLoadComplete(function(){
	a.onDomReady(function(){
		a.sendPixels(ar_pix);
		a.p.innerHTML = a.makeHTML(ar_width, ar_height, ar_html);
		a.loadComplete();
	})
});