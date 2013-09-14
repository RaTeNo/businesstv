$(document).ready(function() {






	//begin debug width
	$('body').after('<div class="debug"></div>')
	$(window).on( 'resize', debug);
	function debug(){
		$('.debug').html($(window).width());
	}
	debug();
	//end debug width
});
