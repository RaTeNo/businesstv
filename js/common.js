$(document).ready(function() {

	$('.header__toggle').click(function (e) {
		$('body').toggleClass('is-withmenu');
	});

	$('.search__toggle').click(function (e) {
		$('body').toggleClass('is-withsearch');
	});




	//begin debug width
	$('body').after('<div class="debug"></div>')
	$(window).on( 'resize', debug);
	function debug(){
		$('.debug').html($(window).width());
	}
	debug();
	//end debug width
});
