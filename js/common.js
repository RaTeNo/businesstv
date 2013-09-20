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
	
	// popup close
	$(".js-close-popup").click(function(){
		$(".js-popup").hide();
		$(".js-overlay").hide();
	});
	$(".js-overlay").click(function(){
		$(".js-popup").hide();
		$(this).hide();
	});

	// select
	function select() {
		var select = $(".js-select");
		var select_list = $(".select__list");
		var select_item = $(".select__list li");
		select.each(function(){
			$(this).click(function(){
				if($(this).hasClass("is-active")) {
					$(this).removeClass("is-active");
					$(this).find(select_list).slideUp("fast");
				}
				else {
					select.removeClass("is-active")
					$(this).addClass("is-active");
					$(this).find(select_list).slideDown("fast");
				}
			});
			select_item.click(function(){
				var text = $(this).text();
				var data_id = $(this).attr("data-id");
				$(this).parent().parent().find(".select__text").addClass("is-activated").text(text);
				$(this).parent().parent().find(".js-select-input").val(data_id);
			});
		});
		
	}
	select();

	//begin debug width
	$('.page').after('<div class="debug"></div>')
	$(window).on( 'resize', debug);
	function debug(){
		$('.debug').html($(window).width());
	}
	debug();
	//end debug width
});
