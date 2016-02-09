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



	var json_response;

	$('.bannerform').on('submit', function(e) {
	    $.ajax({
	        url: $(this).attr('action'),
	        type: 'POST',
	        data: new FormData(this),
	        processData: false,
	        contentType: false,
	        dataType: 'json',

			beforeSend: function() {
				$('.ajax_loader').addClass('-show');
			},

			complete: function() {
				$('.ajax_loader').removeClass('-show');
			}
	    })

	    .done(function(json_response) {
	    	console.log(json_response);
			swal({   
				title: "Success!",   
				text: '<a class="swal__downloadhref" href="/download-banner/'+json_response+'">Download banner!</a>',
				html: true, 
				type: "success"
			});
	    })

	    .fail(function(msg) {
	    	json_response = $.parseJSON(msg.responseText);
	    	sweetAlert("Oops...", json_response, "error");
	    })

	    e.preventDefault();
	});


	// $('.ajax_loader')
	// 	.ajaxStart(function() {
	// 		alert('START');
	//         $(this).addClass('-show');
	//     })
	//     .ajaxStop(function() {
	//         $(this).removeClass('-show');
	//     })

});