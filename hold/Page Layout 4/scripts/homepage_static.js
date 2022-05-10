/****************************************** 
 * NMCI Homeport Homepage JS
 * 10/16/2007 [jdt]
 ******************************************/
 
var HomePage = function() {
	this.initialize.apply(this, arguments);
};

HomePage.prototype = {
	initialize: function(userType) {		
		this.observe(window, 'load', this.onLoad.bindAsEventListener(this));		
		this.selected = null;		
		this.userType = 'usnnew';
	},
	
	onLoad: function() {
		var tabs = document.getElementById('tabNav');
		
		this.observe(tabs, 'click', this.onClick.bindAsEventListener(this));		
		
		var firstTab = tabs.getElementsByTagName('li')[0];
		this.selectTab(firstTab.id.split('_')[1]);
		
		this.currentCallout = 1;
		this.observe('next_callout_link', 'click', this.nextCallout.bindAsEventListener(this));
		
		/*this.loadSupportTicker();
		
		/* setup those search boxes */
		this.observe('google_search_box', 'click', this.onSearchFocus.bindAsEventListener(this));
		this.observe('yahoo_search_box', 'click', this.onSearchFocus.bindAsEventListener(this));
		this.observe('msn_search_box', 'click', this.onSearchFocus.bindAsEventListener(this));
		
		/* run the callout next process random number of times to give us a random starting callout 
		var calloutClicks = Math.floor(Math.random()*3); */
		for(var i=0;i<calloutClicks;i++) {
			this.nextCallout();	
		} 
	},
	
	onClick: function(event) {
		var element = event.target || event.srcElement;
		
		if(element.nodeName == 'A') {
			element = element.parentNode;	
		}
		
		if(element.nodeName == 'LI') {		
			if(element.id.indexOf('_')) {
				this.selectTab(element.id.split('_')[1]);
			}
			
			if(event.preventDefault) {
				event.preventDefault();
				event.stopPropagation();
			}
			else {
				event.returnValue = false;
				event.cancelBubble = true;
			}	
		}
	},
	
	selectTab: function(name) {
		if(this.selected != null) {
			document.getElementById('tab_' + this.selected).className = '';
			document.getElementById('content_' + this.selected).style.display = 'none';
		}
		
		document.getElementById('tab_' + name).className = 'activeTabNav';
		document.getElementById('content_' + name).style.display = '';
		
		this.selected = name;	
	},
	
	loadSupportTicker: function() {
		nmciAjax.MakeRequest('/pki_display.aspx', function(result) {
			try {
				document.getElementById("support").innerHTML = result.text;
				addOpeners();
			}
			catch(e) { }	
		}, 'type=' + this.userType);	
	},
	
	onSearchFocus: function(event) {
		var element = event.target || event.srcElement;
		
		switch(element.value) {
			case 'Search Google':
			case 'Search Yahoo!':
			case 'Search MSN':
				element.value = '';
				break;
		}
	},
	
	nextCallout: function(event) {
		document.getElementById('callout_' + this.currentCallout).style.display = 'none';
		
		this.currentCallout++;
				
		if(!document.getElementById('callout_' + this.currentCallout)) {
			this.currentCallout = 1;		
		}
		
		document.getElementById('callout_' + this.currentCallout).style.display = '';
		
		if(event) {
			if(event.preventDefault) {
				event.preventDefault();
				event.stopPropagation();
			}
			else {
				event.returnValue = false;
				event.cancelBubble = true;
			}	
		}
	},
	
	observe: function(element, action, func) {
		if(typeof element == 'string') {
			element = document.getElementById(element);
		}
		
		if(element.addEventListener) {
			element.addEventListener(action, func, false);
		}
		else if(element.attachEvent) {
			element.attachEvent('on' + action, func);
		}	
	}
}

Function.prototype.bindAsEventListener = function(object) {
	var __method = this, args = arguments;
	return function(event) {
		return __method.apply(object, [event || window.event].concat(args));
	}
};