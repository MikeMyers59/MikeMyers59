if(!jQuery)
{
	var script = document.createElement( 'script' );
	script.type = 'text/javascript';
	script.src = '/jquery/jquery_latest/jquery.min.js';
	jQuery('head').append(script);
}


if(jQuery)
{
	var docLocation = document.location;
	var script;

	if(typeof(userInfo)==="undefined")
	{
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = '/webtools/userinfo/userinfo.js';
		jQuery('head').append(script);
	}

	jQuery(document).ready(function(){
	jQuery('body').append('<div class="emailFormContainer" title="Email This Page">\
	<form class="emailForm" name="emailForm" id="emailForm">\
	Email Address: <input type="text" name="toAddress" id="toAddress" class="toAddress"/>\
	<button class="submit" id="submit" name="submit">Submit</button>\
	</form>\
	</div>\
	<div class="phoneResult" id="phoneResult" style="display:none;">\
	</div>');
	jQuery( "div.emailFormContainer" ).dialog({autoOpen: false,  modal: true, draggable: false, resizable:false, show: 'fade', hide: 'fade',height: 200,width: 500});
	jQuery('form.emailForm').keypress(function(event){      if (event.keyCode == 10 || event.keyCode == 13){event.preventDefault();	sendEmail(); }});
	jQuery( "button.submit" ).button();
	jQuery( "button.submit" ).click(function(event){
		event.preventDefault();
		sendEmail();
	});

	jQuery('a.emailThis').click(function(){
		jQuery('div.emailFormContainer').dialog('open');
	});

	var scrollingDiv = jQuery("#scrollingDiv");
	jQuery(window).scroll(function(){			
	scrollingDiv
	   .stop()
	   .animate({"marginTop": (jQuery(window).scrollTop() - 10) + "px" },"slow" );			
		  });
	});

	function sendEmail()
	{
		if(jQuery('input[name="toAddress"]').val() == ""){alert('To address is required. Please try again'); return false;}
		var email = jQuery('input[name="toAddress"]').val();
		if(email.indexOf('@gdeb.com') == -1 && email.indexOf('@csc.com') == -1)
		{
			alert('You must provide a valid email address (ex: joe@gdeb.com or joe@csc.com)');
			return false;
		}
		
		var curLocation = document.location.href;
		if(curLocation.indexOf('?') != -1)
		{
			var n = curLocation.split('?');
			curLocation = n[0];
		}
		
		if(!userInfo){alert('Unable to obtain valid user information, please try again later.'); return false;}
		
		var link = 'mailto:'+email+'?subject='+userInfo.firstName+'%20'+userInfo.lastName+'%20('+userInfo.badge+')%20Would%20Like%20To%20Share%20A%20Link%20With%20You&body='+userInfo.firstName+'%20'+userInfo.lastName+'%20('+userInfo.badge+')%20would%20like%20to%20share%20the%20following%20intranet%20link%20with%20you:%0D%0D'+curLocation+'%0D';
		window.location.href =  link;
		jQuery('input[name="toAddress"]').val('');
		jQuery('div.emailFormContainer').dialog('close');
	}
}
else
{
	alert('jQuery is not loaded on this page.  "emailthis.js" requires jQuery to function.');
}