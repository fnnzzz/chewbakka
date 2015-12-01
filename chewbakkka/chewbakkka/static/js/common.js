$(window).load(function() { 
    $("#loaderInner").fadeOut(); 
    $("#loader").delay(400).fadeOut("slow"); 
});

jQuery(document).ready(function($) {

	$('#tabs a').click(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	})


	$('.input__sambalink').on('click', function(){
		$(this).select();
	})

});