/** 	nmci-gen.js
-------------------------------------------------------------------------------*/


/** 	nmciCommon 
---------------------------------------------------------------------------*/
function nmciCommon() {
	this.GetElementsComputedStyle = function(theObject, theCssProperty, theMozCssProperty){     		
		if(theMozCssProperty == null){
			theMozCssProperty = theCssProperty;
		}
		
        	if(theObject.currentStyle){
			return eval("theObject.currentStyle." + theCssProperty);				
		}
		else {
			return document.defaultView.getComputedStyle(theObject, null).getPropertyValue(theMozCssProperty);
		}
	};
	
	this._GlobalVarCount = 0;
	this._GlobalVarArray = new Array();
	
	this.AddGlobalVar = function (theValue) {
		var aTmpCount = this._GlobalVarCount;
		this._GlobalVarArray[aTmpCount] = theValue;		
		
		this.GlobalVarCount++;
		
		return aTmpCount;
	}
	
	this.GetGlobalVar = function (theIndex) {
		try {
			return this._GlobalVarArray[theIndex];
		}
		catch(e){
			return null;
		}
	}		
	
	this.SetGlobalVar = function (theIndex, theValue){
		try {
			this._GlobalVarArray[theIndex] = theValue;			
			return true;
		}
		catch(e){
			return false;
		}
	}
	
	this.Vars = this._GlobalVarArray;
	
	this.HideObj = function (theObject){
		theObject.style.display = "none";			
	}	
	
	this.ShowObj = function (theObject){
		theObject.style.display = "";			
	}	
	
	this.getElementsByClassName = function (theClassName, theParentNode, theNodeName){
		var aObjects = new Array();
		
		if(theParentNode == null)
			theParentNode = document;
		if(theNodeName == null)
			theNodeName = '*';
			
		var aAllObjects = theParentNode.getElementsByTagName(theNodeName);
		var aAllObjectsCount = aAllObjects.length;
		
		var aRegExpPattern = new RegExp("(^|\\s)" + theClassName + "(\\s|$)");
		
		for (i = 0, j = 0; i < aAllObjectsCount; i++) {
			if(aRegExpPattern.test(aAllObjects[i].className)){
				aObjects[j] = aAllObjects[i];
				j++;
			}
		}
		
		return aObjects;
	};
	
	this.GetTime = function () {
		var aCurrentTime = new Date();
		
		var aHours = aCurrentTime.getHours();		
		var aMins = aCurrentTime.getMinutes();
		
		if (aMins < 10) {
			aMins = "0" + aMins;				
		}
				
		var anAMPM = "AM";
		
		if(aHours >= 12) {
			aHours = aHours - 12;
			anAMPM = "PM";			
		}
		
		return aHours + ":" + aMins + anAMPM;
	};
	
	//nmciTabs	
	this._TabSets = new Array();
	this._TabSetsCount = 0;
	
	//ajaxPointer	
	this.ajax = null;
	
	//prepare a string for passing through QueryString (removes all &'s)
	this.UrlFormat = function(theString) {	
		if(theString.indexOf("&") > -1 || theString.indexOf("+") > -1 || theString.indexOf("\n") > -1) {
			var aNewString = "";
					
			for(var i=0;i<theString.length;i++) {
				var aTmpStr = theString.substr(i,1);
				
				if(aTmpStr == "&") {
					aNewString += "$AND$";
				}
				else if(aTmpStr == "+") {
					aNewString += "$PLUS$";
				}
				else if(aTmpStr == "\n") {
					aNewString += "$LF$";
				}
				else {
					aNewString += aTmpStr;				
				}
			}	
			
			return aNewString;
		}
		else {
			return theString;			
		}
	};
	
	this.UrlDecode = function(theString) {
		var aTmpStr = theString;
		
		while(aTmpStr.indexOf("$AND$") >= 0) {
			aTmpStr = aTmpStr.replace("$AND$", "&");
		}
		
		while(aTmpStr.indexOf("$PLUS$") >= 0) {
			aTmpStr = aTmpStr.replace("$PLUS$", "+");
		}
		
		while(aTmpStr.indexOf("$LF$") >= 0) {
			aTmpStr = aTmpStr.replace("$LF$", "\n");
		}
		
		return aTmpStr;
	};
}

var nmci = new nmciCommon();

/* 	nmciAjax : 11/7/05, recoded 3/9/06
	: Use MakeRequest to initiate an ajax call
	: Use Enable/Disable Traffic Control to enable/disable whether to only process the last request sent
---------------------------------------------------------------------------*/
function nmciAjaxEngine(){
	this._aRequestCounter = 0;
	
	this.Requests = new Array();
	
	this._aReturnFunctions = new Array();
	
	this._aTrafficControl = false;
	this._aLastRequestSent = null;
	
	this.EnableTrafficControl = function(){
		this._aTrafficControl = true;
	};
	
	this.DisableTrafficControl = function(){
		this._aTrafficControl = false;
	};
	
	this.MakePostRequest = function (theUrl, theReturnFunction, theVars){
		var aNewRequest = new _nmciAjaxRequest();
		var aNewReqId = this._aRequestCounter;	
				
		this.Requests[aNewReqId] = aNewRequest;
		
		this._aReturnFunctions[aNewReqId] = theReturnFunction;
		
		var aSuccessFlag = aNewRequest.Connect(theUrl, "POST", theVars, aNewReqId);
		
		if(!aSuccessFlag){
			this._aReturnFunctions[theRequest](aNewRequest);
		}
		
		this._aLastRequestSent = aNewReqId;		
		this._aRequestCounter++;	
		
		return aNewReqId;			
	};
	
	this.MakeRequest = function (theUrl, theReturnFunction, theVars){
		var aNewRequest = new _nmciAjaxRequest();
		var aNewReqId = this._aRequestCounter;	
				
		this.Requests[aNewReqId] = aNewRequest;
		
		this._aReturnFunctions[aNewReqId] = theReturnFunction;
		
		var aSuccessFlag = aNewRequest.Connect(theUrl, "GET", theVars, aNewReqId);
		
		if(!aSuccessFlag){
			this._aReturnFunctions[theRequest](aNewRequest);
		}
		
		this._aLastRequestSent = aNewReqId;		
		this._aRequestCounter++;	
		
		return aNewReqId;	
	};
	
	this._CallReturnFunction = function (theRequest, theAjaxObj){
		if(this._aTrafficControl){
			if(theRequest == this._aLastRequestSent){
				this._aReturnFunctions[theRequest](theAjaxObj);
			}
		}
		else {
			this._aReturnFunctions[theRequest](theAjaxObj);
		}		
	};
}

var nmciAjax = new nmciAjaxEngine();

nmci.ajax = nmciAjax;

function _nmciAjaxRequest() {
	var aHttpObj;
	var aOpenRequest = false;
	
	this.xml = null;
	this.text = null;
	this._EngineReqId = null;
	this.BadRequest = false;
		
	this._aReturnFunction = null;
	
  	try { 
		aHttpObj = new ActiveXObject("Msxml2.XMLHTTP"); 
	}
  	catch (e) { 
		try { 
			aHttpObj = new ActiveXObject("Microsoft.XMLHTTP"); 
		}
  		catch (e) { 
			try { 
				aHttpObj = new XMLHttpRequest(); 
			}
  			catch (e) { 
				aHttpObj = false; 
			}
		}
	}
 	
	if (!aHttpObj) {
		this.BadRequest = true;
		return false;
	}
	
	this.Connect = function(theUrl, theMethod, theVars, theAjaxEngineNum) {    		
		if(theAjaxEngineNum != null){
			this._EngineReqId = theAjaxEngineNum;
		}
		else {
			return false;
		}	
		
		if (!aHttpObj) {
			return false;
		}
		
		if(theVars == null){
			theVars = "";	
		}
    	
		aOpenRequest = false;
    	theMethod = theMethod.toUpperCase();

	    try {
	    	if (theMethod == "GET") {
				//alert(theUrl + "?" + theVars);
				aHttpObj.open(theMethod, theUrl + "?" + theVars, true);					
	        	theVars = "";
			}
	      	else {
				aHttpObj.open("POST", theUrl, true);
	        	aHttpObj.setRequestHeader("Method", "POST " + theUrl + " HTTP/1.1");
	        	aHttpObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	      	}
	      
		  	aHttpObj.onreadystatechange = function() {
	        	if (aHttpObj.readyState == 4 && !aOpenRequest) {
	          		aOpenRequest = true;
					nmciAjax.Requests[theAjaxEngineNum].xml = aHttpObj.responseXML;
					nmciAjax.Requests[theAjaxEngineNum].text = aHttpObj.responseText;				
									
					nmciAjax._CallReturnFunction(theAjaxEngineNum, nmciAjax.Requests[theAjaxEngineNum]);
	        	}
			};
	     
			aHttpObj.send(theVars);
		}
	    catch(e) { 			
			this.BadRequest = true;
			return false; 
		}
	
    	return true;		
	};
	
	this.HasError = function(){
		if(this.BadRequest){
			return true;
		}
		else if(this.GetNodeCount("errors") > 0 || this.GetNodeCount("error_id") > 0){
			return true;
		}
		else {
			return false;
		}
	};
	
	this.ParseRows = function(theRowNode){
		if(theRowNode == null) {
			theRowNode = "row";	
		}
		
		var aNewLabel = theRowNode.toLowerCase();
		
		var aTmpArray = this.xml.getElementsByTagName(theRowNode);
		
		eval("this." + aNewLabel + " = new Array()");
		
		for(var i=0;i<aTmpArray.length;i++){
			var aNewColArray = new _nmciParseCols(aTmpArray[i]);
			
			eval("this." + aNewLabel + "[i]=aNewColArray")
		}	
	};
	
	this.GetNodeCount = function(theNode){
		var aNodes = this.xml.getElementsByTagName(theNode);
		return aNodes.length;
	};
	
	this.GetValue = function(theNode, theRow){
		if(theRow == null){
			theRow = 0;
		}
		
		if(this.xml != null){
			var aNodes = this.xml.getElementsByTagName(theNode);
	
			if(aNodes.length == 0 || theRow > aNodes.length-1){
				return "";
			}
			else {
				return aNodes[theRow].text;
			}
		}
		else {
			return "";
		}
	};
	
	this.GetAttribute = function(theNode, theAttribute, theRow) {
		if(theRow == null){
			theRow = 0;
		}
		
		if(this.xml != null){
			var aNodes = this.xml.getElementsByTagName(theNode);
			
			if(aNodes.length == 0 || theRow > aNodes.length-1){
				return "";
			}
			else {
				try {
					return aNodes[theRow].getAttribute(theAttribute);
				}	
				catch(e) {
					return "";
				}			
			}
		}
		else {
			return "";
		}
	};
  
	return this;
}

function _nmciParseCols(theRowObj){
	var aLen = theRowObj.childNodes.length;
	for(var i=0;i<aLen;i++){
		var aLabel = theRowObj.childNodes[i].nodeName.toLowerCase();
		if(aLabel == "#text" || aLabel == "#cdata-section"){
			this.text = theRowObj.childNodes[i].text;
		}
		else {
			eval("this." + aLabel + " = theRowObj.childNodes[i].text");	
		}
	}
}

function show(theObjectName) {
	try {
		document.getElementById(theObjectName).style.display = "";	
	}
	catch(e) { }
}

function hide(theObjectName) {
	try {
		document.getElementById(theObjectName).style.display = "none";	
	}
	catch(e) { }
}

function setClass(theObjectName, theClassName) {
	try {
		document.getElementById(theObjectName).className = theClassName;
	}
	catch(e) { }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
  Text Getter (used to make mozilla work like IE)
*/
if (navigator.product == "Gecko") 
{
	Text.prototype.__defineGetter__( "text", function ()
	{
	   return this.nodeValue;
	} );
	
	Node.prototype.__defineGetter__( "text", function ()
	{
	   var cs = this.childNodes;
	   var l = cs.length;
	   var sb = new Array( l );
	   for ( var i = 0; i < l; i++ )
	      sb[i] = cs[i].text;
	   return sb.join("");
	} );
}

