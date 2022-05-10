<!-- 

/*
----------------------------------------
Executes specified functions upon page load
----------------------------------------
*/
function init() {
	addOpeners();
	stripeTables();
	
	/* show warning box if its available */
	try {
		_showWarningBox();
	}
	catch(e) { }
	
	/* run page_init function if there is one for this page */
	try {
		page_init();
	}
	catch(e) { }
	
	/* setup focus/blur events for the search box */
	try {
		var searchBox = document.getElementById('search').getElementsByTagName('input')[0];	
		searchBox.value = 'Search Homeport';
		searchBox.style.color = '#666';
		
		if(searchBox.addEventListener) {
			searchBox.addEventListener('focus', searchFocus, false);
			searchBox.addEventListener('blur', searchBlur, false);
		}
		else if(searchBox.attachEvent) {
			searchBox.attachEvent('onfocus', searchFocus);
			searchBox.attachEvent('onblur', searchBlur);
		}
	}
	catch(e) { }
}

function searchFocus() {
	var searchBox = document.getElementById('search').getElementsByTagName('input')[0];	
	
	if(searchBox.value == 'Search Homeport') 
		searchBox.value = '';

	searchBox.style.color = '#000';	
}

function searchBlur() {
	var searchBox = document.getElementById('search').getElementsByTagName('input')[0];	
	
	if(searchBox.value == '') {
		searchBox.value = 'Search Homeport';
		searchBox.style.color = '#666';
	}
}

/*
----------------------------------------
Opens documents and other domains in new window
----------------------------------------
*/
function addOpeners() {
	var newwinb_features = 'menubar=no,toolbar=no,location=no,status=no,width=800,height=600,resizable=yes,scrollbars=no';
	var newwindwnld_features = 'menubar=no,toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes';
	var links = document.getElementsByTagName('a');
	var curLocation = ''+document.location+'';
	
	for (var i = 0; i < links.length; i++) {
		if (links[i].href!=null && links[i].href != "")
		{
			if (getCookie("OnSeat") != null && getCookie("OnSeat") != "")
			{
				if (getCookie("OnSeat") != "usn" && getCookie("OnSeat") != "usmc")
				{
					if ((links[i].hostname.match("homeport") || links[i].hostname.match("smil.mil") || 
						links[i].href.indexOf("file://") == 0 || links[i].hostname.match("nistt.infosec.navy.mil") || 
						links[i].hostname.match("kcs") || 
						links[i].hostname.match("vtcdirectory.nads.navy.mil") ||
						links[i].hostname.match("remedysso.nmci.navy.mil") ||
						links[i].hostname.match('pwdreset.nads.navy.mil') ||
						links[i].hostname.match('nmcicustomerreporting') ||
						links[i].hostname.match('pwdreset.mcds.usmc.mil') ||
						links[i].hostname.match('servman') ||
						links[i].hostname.match('peoeis.portal.navy.mil') ||
						/*links[i].hostname.match('navy.deps.mil') ||*/
						links[i].hostname.match("nmcinrfkws02a") || links[i].hostname.match("remedyview")) &&
						(!links[i].hostname.match("homeportweb.com") && !links[i].hostname.match("homeportnmci.com")
							&& !links[i].hostname.match("www.homeport.navy.mil") && !links[i].hostname.match("homeport.navy.mil")
							&& !links[i].hostname.match("www.homeport.nmci.usmc.mil")))
					{
						if (curLocation.indexOf("intercept.aspx") == -1)
						{
							links[i].href="/intercept.aspx?loc="+links[i].href.replace("#","%23")+"&ref="+curLocation;
						}
					}
				}
			}
			if (curLocation.indexOf("intercept.aspx") == -1)
			{
				if ( !links[i].hostname.match("localhost") && !links[i].hostname.match("www.homeport.navy.mil")
				&& !links[i].hostname.match("www.homeport.usmc.mil") && !links[i].hostname.match("homeport")
				&& !links[i].hostname.match("dev.homeport") && !links[i].hostname.match("www.mo-nmci.com")
				&& !links[i].hostname.match("mo-nmci.com") && !links[i].hostname.match("homeportweb.com")
				&& !links[i].hostname.match("homeportnmci.com") && !links[i].href.match("javascript:"))
				{
					links[i].target="_blank";
				}
			}
		}
		else
		{
			links[i].href = "#";
		}

		
		if (/\bnewwinb\b/.exec(links[i].className)) {
    		links[i].onclick = function() {
				var destination = this.href;
				var newwin = window.open(destination,"newwinb",newwinb_features);
				newwin.focus();
				return false;
			}
		}
  	}
}


/*
----------------------------------------
Stripes tables with alternating row colors
----------------------------------------
*/
function stripeTables() {
	var even = false;
    var evenColor = arguments[1] ? arguments[1] : "";
    var oddColor = arguments[2] ? arguments[2] : "alternaterow";
   	var tabletags = document.getElementsByTagName('table');
	for (var i = 0; i < tabletags.length; i++) {
    	if (/\bstriped\b/.exec(tabletags[i].className)) {
    		var trs = tabletags[i].getElementsByTagName('tbody')[0].getElementsByTagName("tr");
    		for (var t = 0; t < trs.length; t++) {
				if (trs[t].className || trs[t].style.backgroundColor) {
 					even = false;
					continue;			
				} else {
       				var mytr = trs[t];
       				mytr.className = even ? evenColor : oddColor;
					even =  ! even;
       			}
       		}        
    	}
  	}
}


/*
----------------------------------------
Sets a Cookie value
----------------------------------------
*/
function createCookie(name,value,days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


/*
----------------------------------------
Grabs a Cookie value
----------------------------------------
*/
function getCookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


/*
----------------------------------------
Erases a Cookie value
----------------------------------------
*/
function eraseCookie(name)
{
	createCookie(name,"",-1);
}


/*
----------------------------------------
Grabs a QueryString value
----------------------------------------
*/
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
}

/*
----------------------------------------
Get the count of chars in textarea
----------------------------------------
*/
function getCharCount(elemId, displayId, maxChars) {
	var charElem = document.getElementById(elemId);
	var displayElem = document.getElementById(displayId);
	var count = charElem.value.length;

	displayElem.innerHTML = count+' of a maximum '+maxChars+' characters used.';
	if (count > maxChars)
	{
		displayElem.style.fontWeight = "bold"; 
		displayElem.style.color = "#ff0000";
	}
	else
	{
		displayElem.style.fontWeight = "bold"; 
		displayElem.style.color = "#000";
	}
}

/*
----------------------------------------
Get the count of chars in textarea
----------------------------------------
*/
function getLimitCount(elemId, displayId, maxChars) {
	var charElem = document.getElementById(elemId);
	var displayElem = document.getElementById(displayId);
	var count = charElem.value.length;

	displayElem.innerHTML = count+' of a maximum '+maxChars+' characters used.';
	if (count > maxChars)
	{
		charElem.value = charElem.value.substring(0,maxChars);
		displayElem.innerHTML = maxChars+' of a maximum '+maxChars+' characters used.';
		displayElem.style.fontWeight = "bold"; 
	}
	else
	{
		displayElem.style.fontWeight = "bold"; 
		displayElem.style.color = "#000";
	}
}

/*
---------------------------------------------------
Grabs a text value and insert into hidden element
---------------------------------------------------
*/
function DivideAndPut(textInput, hiddenInput) 
{
	var inputElement = document.getElementById(textInput);
	var hiddenElement = document.getElementById(hiddenInput);
	var inputValue = inputElement.value;
	
	var holder = "";
	var last = inputValue.indexOf(")$$");
	var first = inputValue.indexOf("$$(");

	holder = inputValue.substring((first+3),last);

	hiddenElement.value = holder;
	inputElement.value = inputValue.substring(0,first);
}

window.onload = init;

// -->

