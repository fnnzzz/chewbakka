window.requireModules = [];
admixRequire(['html5api_0.0.1'],function(admixAPI){
	admixAPI.init({
		'initial' : {
			'width' : '300px', //
			'height' : '250px' //
		}
	});
	function $(id){
		return document.getElementById(id);
	}
	document.body.onclick = function(){
		admixAPI.click('http://sales.admixer.ua'); //
	};
	document.body.onselectstart = function() {
		return false;
	}
});