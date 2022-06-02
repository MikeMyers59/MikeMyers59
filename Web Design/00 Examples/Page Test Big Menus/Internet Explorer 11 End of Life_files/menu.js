jQuery(document).ready(function(){

    // menu quick fix
    function adjustMenus() {
        $.each($(".drop"), function() {
           var drop = $(this),
           dropOffset = drop.offset();
            if (dropOffset.left > (window.innerWidth / 2 || document.body.clientWidth / 2 )) {
                drop.next().addClass('align_right');
            }
           else {
                 drop.next().removeClass('align_right');
           }
        });
    }
 
    // run quick fix on load
    adjustMenus();

    // add fix to window resize event
    window.onresize = adjustMenus;
    
    
	$('div[class^="dropdown"]').each(function(){
		$(this).parent().click(function(){
			var clicked = 
			$('li.clicked').not($(this)).each(function(){
					$(this).removeClass('clicked').removeClass('jqhover');
			});
			
			if($(this).hasClass('clicked')){
				$(this).removeClass('jqhover').removeClass('clicked');
			}else{
				$(this).addClass('jqhover').addClass('clicked');
			}
			
		});
	
		$(this).mouseleave(function(event){
			event.preventDefault();
			var item = $(this);
			if($(item).not(':visible')){
				$(item).parent().addClass('jqhover');
				setTimeout(function(){
					if(!$(item).parent().hasClass('clicked')){
						$(item).parent().removeClass('jqhover');
					}
				},600);
			}
		});
	});
});