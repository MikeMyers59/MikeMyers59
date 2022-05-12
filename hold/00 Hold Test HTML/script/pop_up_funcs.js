var helpwin = null;
var winVar = null; // general pop up window
var winCal = null; // calendar pop up window
var relMouseX = 0; // x position of mouse relative to window
var relMouseY = 0; // y position of mouse relative to window


function doPopupAsyncPostback(sender, postBackString) {
	var v = function () {
		if (superSender != null)
			superSender.close();
		Sys.WebForms.PageRequestManager.getInstance().remove_endRequest(v);
	}
	superSender = sender;
	Sys.WebForms.PageRequestManager.getInstance().add_endRequest(v);
	eval(postBackString);
}

// pops up window with specific settings
function popWinDefine(newWin, winName, url, screenX, screenY, showLoc, showTool, showDir, showMenu, showScroll, resizable, showStatus, width, height) {
	if (newWin != null && !newWin.closed) // if window exists and is not closed change the url to the given url
		newWin.location.href = url;
	else { // otherwise open the window
		var newWin = window.open(url, winName,
			'location=' + showLoc + ',screenX=' + screenX + ',screenY=' + screenY + ',left=' + screenX + ',top=' + screenY + ',toolbar=' + showTool + ',directories=' +
			showDir + ',menubar=' + showMenu + ',scrollbars=' + showScroll + ',resizable=' + resizable + ',status=' + showStatus + ',width=' + width + ',height=' + height);
	}

	var newWinLocationHash = "string";
	try {
		newWinLocationHash = typeof (newWin.location.hash);
	} catch (ex) {
		// because permission denied on newWin.location.hash if URL is different domain
	}
	if ((newWin == null) || (typeof (newWin) == "undefined") || (newWinLocationHash != "string" && newWinLocationHash != "unknown")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
		return;
	}

	newWin.focus(); // focus window
}

function popWinBlockDetect(sURL, sName, sFeatures) {
	var popWinOut = window.open(sURL, sName, sFeatures);
	var popWinOutLocationHash = "string";
	try {
		popWinOutLocationHash = typeof (popWinOut.location.hash);
	} catch (ex) {
		// because permission denied on popWinOut.location.hash if URL is different domain
	}
	if ((popWinOut == null) || (typeof (popWinOut) == "undefined") || (popWinOutLocationHash != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
	return popWinOut;
}




// pops up window with default settings for a given width and height
function popWin(url, width, height) {
	return popWinDefine(winVar, 'winVar', url, 10, 10, 0, 0, 0, 0, 1, 0, 0, width, height);
}

function popWinResizeable(url, width, height, windowName) {
	return popWinDefine(winVar, windowName, url, 10, 10, 0, 0, 0, 0, 1, 1, 0, width, height);
}

// pops up calendar window with set size in given position, use onload="trackMouse()" to track mouse to relative to window
function showCal(url, screenX, screenY) {
	popWinDefine(winCal, 'winCal', url, screenX, screenY, 0, 0, 0, 0, 0, 0, 0, 255, 250);
}

// pops up window for printing in which the toolbar is needed
function showPrint(url, width, height) {
	popWinDefine(winVar, 'winVar', url, 10, 10, 0, 0, 0, 1, 1, 1, 0, width, height);
}


// browser independent function to get an element on the page
function getObject(obj) {
	var theObj;
	if (document.all)
		return document.all(obj);
	if (document.getElementById)
		return document.getElementById(obj);
	else
		for (var i = 0, j = document.forms.length; i < j; i++)
			if (document.forms[i].elements[obj] != null)
				return document.forms[i].elements[obj];
	return null;
}

function popupWinByName(URL, height, width, windowName) {
	window.open(URL, windowName,
			"location=0,screenX=5,screenY=5,left=5,top=5,toolbar=0,directories=0,"+						// window features
			"menubar=0,scrollbars=1,resizable=1," +
			"width=" + width + ",height=" + height);
}

function CloseWindow() {
	if (!window.isWidget) {
		window.close();
	}
}

function CloseWindowDlg(dlgId, iframeId) {
	if (!window.isWidget) {
		window.close();
	}
	else {
		$find(dlgId + '_MPE').hide();
	}
}

function popupWinDlg(dlgId, iframeId, URL, height, width) {
	if (window.isWidget) {
		$get(iframeId).src = URL;
		$find(dlgId + '_MPE').show();
	}
	else {
		popWin(URL, width, height);
	}
}

function popupWin(URL, height, width) {
	if (helpwin != null && !helpwin.closed) {
		helpwin.location.href = URL;
	}
	else {
		helpwin = window.open(URL, "helpwin",
			"location=0,screenX=5,screenY=5,left=5,top=5,toolbar=0,directories=0,"+						// window features
			"menubar=1,scrollbars=1,resizable=1," +
			"width=" + width + ",height=" + height);

		if ((helpwin == null) || (typeof (helpwin) == "undefined") || !(helpwin.location)) {
			// pop-up blocker detected
			alert(popupBlockCorpMsg);
			return;
		}
	}
	helpwin.focus();
	//return helpwin;
}

function popupWinWithPageRefreshOnClose(URL, height, width) {
    popupWin(URL, height, width);
    setTimeout(ParentCheckpopupWinIsClosed, 2000);
}

function ParentCheckpopupWinIsClosed() {
    if (helpwin == null)
        return;
    if (helpwin.closed) {
        location.reload(true);
    }
    else {
        setTimeout(ParentCheckpopupWinIsClosed, 2000);
    }
}


var windows = {};
function popupWinNew(URL, windowName, height, width) {
	if (windowName != undefined && windowName != null) {
		windowName = windowName.toString().replace(/\s+/g, '').replace(/-/g, ''); //stripout all whitespace, tab, new line, and hyphen characters in window name so it works IE9
	}

	var namedWindow = (windowName != undefined) && (windowName != '_blank');

	if (namedWindow && window[windowName] != undefined && window[windowName] != null && !window[windowName].closed) {
		window[windowName].location.href = URL;
		window[windowName].focus();
		return;
	}

	if (!namedWindow) windowName = '_blank';
	var myWin = (height == undefined || width == undefined)
        ? window.open("about:blank", windowName)
        : window.open("about:blank", windowName,
                "location=0,screenX=5,screenY=5,left=5,top=5,toolbar=0,directories=0," +
                "menubar=1,scrollbars=1,resizable=1," + "width=" + width + ",height=" + height);

	if ((myWin == null) || myWin == undefined || !(myWin.location)) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
		return;
	}
	else {
		myWin.location.href = URL;
		myWin.focus();

		if (namedWindow) windows[namedWindow] = myWin;
	}
}

function popupPdfWinNew(URL, windowName, height, width) {
	if (windowName != undefined && windowName != null) {
		windowName = windowName.toString().replace(/\s+/g, '').replace(/-/g, ''); //stripout all whitespace, tab, new line, and hyphen characters in window name so it works IE9
	}

	var namedWindow = (windowName != undefined) && (windowName != '_blank');

	if (namedWindow && window[windowName] != undefined && window[windowName] != null && !window[windowName].closed) {
		window[windowName].location.href = URL;
		window[windowName].focus();
		return;
	}

	if (!namedWindow) windowName = '_blank';
	var myWin = (height == undefined || width == undefined)
		? window.open(URL, windowName)
		: window.open(URL, windowName,
			"location=0,screenX=5,screenY=5,left=5,top=5,toolbar=0,directories=0," +
			"menubar=1,scrollbars=1,resizable=1," + "width=" + width + ",height=" + height);

	if ((myWin == null) || myWin == undefined || !(myWin.location)) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
		return;
	}
	else {
		myWin.focus();
		if (namedWindow) windows[namedWindow] = myWin;
	}
}

function popupTitle(url, name, full, lw, lh) {
	var height, width;
	var fullscreen = "";
	var resize = 1;
	full = (typeof (full) == "undefined") ? 0 : full;

	if ((typeof (lh) != "undefined" && lh > 0) && (typeof (lw) != "undefined" && lw > 0)) {
		height = lw;
		width = lh;
		resize = 0;
	}
	else if (full == 1) {
		height = window.screen.availHeight;
		width = window.screen.availWidth;
		fullscreen = "";
	}
	else {
		height = (600 > window.screen.availHeight) ? window.screen.availHeight : 650;
		width = (800 > window.screen.availWidth) ? window.screen.availWidth : 850;
	}
	var pop = window.open("clientLms/result.htm", "_blank", "location=0,toolbar=0,directories=0,menubar=0,scrollbars=1, resizable=" + resize + ",titlebar=0,width=" + width + ",height=" + height + ", innerWidth=" + width + ", innerHeight=" + height + ", screeX=0, screenY=0,top=0,left=0" + fullscreen);

	if ((pop == null) || (typeof (pop) == "undefined")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
		return null;
	}

	pop.resizeTo(width, height);
	pop.location = url;
	pop.focus();

	return pop;
}

function popupHelpWin(height, width) {
	// Get the tab values from the form in the header
	var moduleID = document.helpLinkValues.elements["module_id"].value;
	var functionID = document.helpLinkValues.elements["function_id"].value;
	var URL = "../help/Search.aspx?searchControl:moduleDropDownQry=" + moduleID + "&searchControl:functionDropDownQry=" + functionID


	if (helpwin != null && !helpwin.closed) {
		helpwin.location.href = URL;
	}
	else {
		helpwin = window.open(URL, "helpwin",
			"location=0,screenX=5,screenY=5,left=5,top=5,toolbar=0,directories=0,"+						// window features
			"menubar=0,scrollbars=1,resizable=1," +
			"width=" + width + ",height=" + height);

		if ((helpwin == null) || (typeof (helpwin) == "undefined") || (typeof (helpwin.location.hash) != "string")) {
			// pop-up blocker detected
			alert(popupBlockCorpMsg);
			return;
		}
	}
	helpwin.focus();
}

function URLEncode(str) {

	var ms = "%25#23 20?3F<3C>3E{7B}7D[5B]5D|7C^5E~7E`60&26"
	var msi = 0
	var i, c, rs, ts
	while (msi < ms.length) {
		c = ms.charAt(msi)
		rs = ms.substring(++msi, msi + 2)
		msi += 2
		i = 0
		while (true) {
			i = str.indexOf(c, i)
			if (i == -1) break
			ts = str.substring(0, i)
			str = ts + "%" + rs + str.substring(++i, str.length)
		}
	}
	return str
}

function popupCalendar(filename) {
	var anotherWindow;
	anotherWindow = window.open(filename, "Calendar", "height=275,width=255,resizable=no,status=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");

	if ((anotherWindow == null) || (typeof (anotherWindow) == "undefined") || (typeof (anotherWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
		return;
	}

	anotherWindow.focus();
}

function popupSearch(filename) {
	var newWindow;
	newWindow = window.open(filename, "Search", "height=500,width=700,resizable=yes,status=no,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");

	if (newWindow)
		newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || !(newWindow.location)) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function popupPSQPreview(filename) {
	var newWindow;
	newWindow = window.open(filename, "PSQPreview", "height=500,width=1000,resizable=yes,status=no,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");

	if (newWindow)
		newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || !(newWindow.location)) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function popupSearchNamedWindow(filename, windowName) {
	var newWindow;
	newWindow = window.open(filename, windowName, "height=500,width=700,resizable=yes,status=no,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");

	if (newWindow)
		newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || (typeof (newWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function popupSetSize(filename, sheight, swidth) {
	var sheight, swidth
	if (String(sheight).length <= 0 || String(sheight) == "undefined")
		sheight = 300
	if (String(swidth).length <= 0 || String(swidth) == "undefined")
		swidth = 300

	var newWindow;
	newWindow = window.open(filename, "SetSize", "height=" + sheight + ",width=" + swidth + ",resizable=yes,status=yes,scrollbars=yes,dependent=yes,toolbar=no,menubar=yes,location=yes,left=0,top=0");
	newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || (typeof (newWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}
function popupCategories(filename) {
	var newWindow;
	newWindow = window.open(filename, "Categories", "height=300,width=800,resizable=yes,status=no,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");
	newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || (typeof (newWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function popupAnswers(filename) {
	var newWindow;
	newWindow = window.open(filename, "", "height=500,width=800,resizable=yes,status=no,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");
	newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || (typeof (newWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function popupQuestionSelection(filename) {
	var newWindow;
	newWindow = window.open(filename, "Questions", "height=600,width=400,resizable=yes,status=no,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");
	newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || (typeof (newWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function popupTestQuestions(filename) {
	var newWindow;
	newWindow = window.open(filename, "", "height=500,width=800,resizable=yes,status=no,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");
	newWindow.focus();

	if ((newWindow == null) || (typeof (newWindow) == "undefined") || (typeof (newWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}
function popupSearchLevels(filename, formName, divisionTextboxName) {
	var levelWindow
	var fullfilename

	fullfilename = filename + "&division_name=" + URLEncode(document.forms[formName].elements[divisionTextboxName].value);
	levelWindow = window.open(fullfilename, "Search", "height=460,width=350,resizable=no,status=yes,scrollbars=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");
	levelWindow.focus();

	if ((levelWindow == null) || (typeof (levelWindow) == "undefined") || (typeof (levelWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function returnDate(formName, monthField, dayField, yearField, monthValue, dayValue, yearValue) {
	window.opener.document.forms[formName].elements[monthField].options[monthValue].selected = true;
	window.opener.document.forms[formName].elements[dayField].options[dayValue].selected = true;
	window.opener.document.forms[formName].elements[yearField].value = yearValue;
	window.close();
}
function ShowReport(filename, sheight, swidth) {
	var reportWindow;
	var sheight, swidth
	if (String(sheight).length <= 0 || String(sheight) == "undefined")
		sheight = 500
	if (String(swidth).length <= 0 || String(swidth) == "undefined")
		swidth = 700

	// to fix defect #17588 (print version of some reports are coming out instead of excel versions - this is because the # is never URL encoded and therefore cutting off the "print=0" URL param)
	filename = filename.replace("#", "%23");

	reportWindow = window.open(filename, "Report", "height=" + sheight + ",width=" + swidth + ",scrollbars=yes,resizable=yes,status=yes,dependent=yes,toolbar=no,menubar=yes,location=no,left=0,top=0,width=700,height=500");
    setTimeout(function () { reportWindow.focus() }, 1);    	

	if ((reportWindow == null) || (typeof (reportWindow) == "undefined") || (typeof (reportWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
	}
}

function popupCalendar(filename, sheight, swidth) {
	var reportWindow;
	var sheight, swidth
	if (String(sheight).length <= 0 || String(sheight) == "undefined")
		sheight = 230
	if (String(swidth).length <= 0 || String(swidth) == "undefined")
		swidth = 300
	reportWindow = window.open(filename, "Report", "height=" + sheight + ",width=" + swidth + ",scrollbars=yes,resizable=yes,status=yes,dependent=yes,toolbar=no,menubar=yes,location=no,left=0,top=0,width=300,height=230");

	if ((reportWindow == null) || (typeof (reportWindow) == "undefined") || (typeof (reportWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
		return;
	}

	reportWindow.focus();

}

function ShowExcel(filename) {
	var anotherWindow;
	anotherWindow = window.open(filename, "Excel", "height=250,width=320,scrollbars=yes,resizable=yes,status=yes,dependent=yes,toolbar=no,menubar=no,location=no,left=0,top=0");

	if ((anotherWindow == null) || (typeof (anotherWindow) == "undefined") || (typeof (anotherWindow.location.hash) != "string")) {
		// pop-up blocker detected
		alert(popupBlockCorpMsg);
		return;
	}

	anotherWindow.focus();
}

function clearField(formName, fieldname) {
	window.document.forms[formName].elements[fieldname].value = "";
}
var allChecked = new Object();
function checkAll(formName, elementName, fireEvent) {
	allChecked[elementName] = !allChecked[elementName];
	for (var i = 0; i < document.forms[formName].elements.length; i++)
		if (document.forms[formName].elements[i].type == 'checkbox')
			if (document.forms[formName].elements[i].name.indexOf(elementName) == 0)
				if (document.forms[formName].elements[i].checked != allChecked[elementName]) {
					document.forms[formName].elements[i].checked = allChecked[elementName];
					if (fireEvent)
						document.forms[formName].elements[i].onclick();
				}
}

function checkAllBySender(formName, element, fireEvent) {
	var name = element.ParentNode.attributes("name"); //document.getElementById(elementID).getAttribute("name");
	checkAll(formName, name, fireEvent);
}
