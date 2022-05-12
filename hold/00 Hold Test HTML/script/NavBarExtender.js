/*
DB - The biggest problem with navbars is when there are too many links going across because each tab loses width and so it overlaps and wraps text.
This is a genenric solution to fix this problem.
*/
/// <reference name="MicrosoftAjax.js"/>

NavBarExtender = function () {
	_setIndividualTabWidth = true;
	this._setParentTabToWidth = true;
}

NavBarExtender.prototype = {
	dispose: function () {
		//Add custom dispose actions here
	},

	FixTabs: function () {
		var rptItemCount = this.get_TabCount();
		var totalWidth = 0;
		var dvMainTabMenuElem = this.get_MainTabMenu();
		var tabArray = new Array();
		for (var i = 0; i < rptItemCount; i++) {
			//var divElements = dvMainTabMenuElem.getElementsByTagName('DIV');
			var innerTabsArray = GetAllChildElementsByAttribute(dvMainTabMenuElem, 'tabidx', i);
			if (innerTabsArray.length > 0) {
				for (var innerTabCounter = 0; innerTabCounter < innerTabsArray.length; innerTabCounter++) {
					var tab = innerTabsArray[innerTabCounter];
					var tabBounds = GetDrawingBounds(tab);
					totalWidth += tabBounds.width;
					tabArray[i] = new Object();
					tabArray[i].element = tab;
					tabArray[i].bounds = tabBounds;
					if (_setIndividualTabWidth == true) {
						if (this._setParentTabToWidth == true) {
							tab.parentNode.style.width = tabBounds.width + 'px';
						}
						else {
							tab.style.width = tabBounds.width + 'px';
						}
					}
				}
			}
		}

		if (isIE())
			totalWidth *= 1.02;
		else
			totalWidth *= 1.01;

		this.get_MainTabMenuUpper().style.minWidth = totalWidth + 'px';
		window._navBarSetTo100Percent = true;

		window._navBarTotalWidth = totalWidth;
		this._navBarTotalWidth = totalWidth;
		return totalWidth;
	},

	/*Properties*/
	get_TabCount: function () { return _tabCount; },
	set_TabCount: function (value) { _tabCount = value; },

	get_MainTabMenu: function () { return _mainTabMenu; },
	set_MainTabMenu: function (value) { _mainTabMenu = value; },

	get_MainTabMenuUpper: function () { return _mainTabMenuUpper; },
	set_MainTabMenuUpper: function (value) { _mainTabMenuUpper = value; }
}

