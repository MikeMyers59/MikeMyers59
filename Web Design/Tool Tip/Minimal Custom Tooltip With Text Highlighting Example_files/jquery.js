;(function($){
	$.fn.tooltip = function(){
		$('body').append('<div class="tooltip"></div>');
		var title;
		return this.each(function(){

			var tag = $(this).get(0).nodeName;
			if( tag == 'SPAN' ){
				$(this).css({
					'border-bottom': '1px dashed red',
					'background': 'yellow'
				});
			}

			$(this).mouseenter(function(){
				title = $.trim($(this).attr('title'));
				$(this).attr('title', '');
				if( title == undefined || title == '' ){
					title = $(this).text();
				}
			}).mousemove(function(e){
				var top = e.pageY + 15;
				var left = e.pageX + 15;
				$('.tooltip').css({
					'left': left,
					'top': top
				}).text(title);
				$('.tooltip').show();
			}).mouseleave(function(){
				$('.tooltip').hide();
				$(this).attr('title', title);
			});
		});
	};
})(jQuery);