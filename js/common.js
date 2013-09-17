$(document).ready(function() {

	$('.header__toggle').click(function (e) {
		$('body').toggleClass('is-withmenu');
	});

	$('.search__toggle').click(function (e) {
		$('body').toggleClass('is-withsearch');
	});

	// program tooltip
	function tv_tooltip() {
		var tv_program = $(".js-tv-program li")
		tv_program.click(function(){

			var program_info = $(this).find(".js-prog-info").html();

			var tooltip = $(".js-tooltip-program");
			tooltip.html(program_info).show();
			// tooltip positin
			var pos_top = $(this).position().top + 45;
			var pos_left = $(this).position().left +48;
			tooltip.css({
				"top": pos_top,
				"left": pos_left,
			});
			return false;
		});
	}
	tv_tooltip();
	$(window).resize(function(){
		tv_tooltip();
	});
	

	//begin debug width
	$('.page').after('<div class="debug"></div>')
	$(window).on( 'resize', debug);
	function debug(){
		$('.debug').html($(window).width());
	}
	debug();
	//end debug width
});
