# HyperText Application (HTA)

## HTA:Application  
The HTA:APPLICATION element requires a closing tag.
```html
<HTA:APPLICATION ... ></HTA:APPLICATION>
```
Because the HTA:APPLICATION element is an empty tag, it can also be closed using the following shortcut.
```html
<HTA:APPLICATION ...  />
```
Note   When using the shortcut, the forward slash must be preceded by a blank space.
HTAs do not support the AutoComplete in HTML forms feature, or the window.external object.
Basic HTA Format:
```html
<HTML>

<HEAD>
  <HTA: APPLICATION></HTA:APPLICATION>
  <TITLE> HTA Title </TITLE>
</HEAD>

<SCRIPT type="text/javascript"> 
  script goes here 
</SCRIPT>

<BODY> 
  html elements go here 
</BODY>

</HTML>
```
Script Call to run an HTA: `runas /user:<user name> "mshta.exe <full path to HTA file>"`
  
|Attribute|Options|Description |  
| -- | -- | -- |  
| APPLICATIONNAME|<ApplicationName>|Sets or gets the name of the HTML Application (HTA). |  
| BORDER|thick|thin|dialog|none|Sets or gets the type of window border for the HTML Application (HTA). When border is set to none, neither the window border, the program icon, the title bar, nor the Minimize and Maximize buttons display. Choosing the thick window border adds a size grip and sizing border for resizing the window. |  
| BORDERSTYLE|normal|complex| |  
| raised|static|sunken|Sets or gets the style set for the content border in the HTML Application (HTA) window. |  
| CAPTION|yes|no|Sets or gets a Boolean value that indicates whether the window is set to display a title bar or a caption, for the HTML Application (HTA). |  
|  |commandLine|Gets the argument used to launch the HTML Application (HTA). |  
| CONTEXTMENU|yes|no|Sets or gets a string value that indicates whether the context menu is displayed when the right mouse button is clicked. |  
| ICON|<PathIconName>.ico|Sets or gets the name and location of the icon specified in the HTML Application (HTA). |  
| ID|<ApplicationIDName>|Used to identify the application for script calls. |  
| INNERBORDER|yes|no|Sets or gets a string value that indicates whether the inside 3-D border is displayed. |  
| MAXIMIZEBUTTON|yes|no|Sets or gets a Boolean value that indicates whether a Maximize button is displayed in the title bar of the HTML Application (HTA) window. |  
| MINIMIZEBUTTON|yes|no|Sets or gets a Boolean value that indicates whether a Minimize button is displayed in the title bar of the HTML Application (HTA) window. |  
| NAVIGABLE|yes|no|Sets or gets a string value that indicates whether linked documents are loaded in the main HTML Application (HTA) window or in a new browser window. |  
| SCROLL|yes|no|auto|Sets or gets a string value that indicates whether the scroll bars are displayed. |  
| SCROLLFLAT|yes|no|Sets or gets a string value that indicates whether the scroll bar is 3-D or flat. |  
| SELECTION|yes|no|Sets or gets a string value that indicates whether the content can be selected with the mouse or keyboard. |  
| SHOWINTASKBAR|yes|no|Sets or gets a value that indicates whether the HTML Application (HTA) is displayed in the Windows taskbar. |  
| SINGLEINSTANCE|yes|no|Sets or gets a value that indicates whether only one instance of the specified HTML Application (HTA) can run at a time. |  
| SYSMENU|yes|no|Sets or gets a Boolean value that indicates whether a system menu is displayed in the HTML Application (HTA). |  
| VERSION|<VersionNumber>|Sets or gets the version number of the HTML Application (HTA). |  
| WINDOWSTATE|maximize|minimize|normal|Sets or gets the initial size of the HTA window. |  
  
**Note**: Default values are bolded.

## A Common File Example
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<HTML lang="en">
<HEAD>
  <TITLE>Mike's HTA Demo</TITLE>
  <HTA:APPLICATION 
   ID="oHTA"
   APPLICATIONNAME="myApp"
	 BORDER="thin"
	 BORDERSTYLE="normal"
	 CAPTION="yes"
	 ICON="graphics/face01.ico"
	 MAXIMIZEBUTTON="yes"
	 MINIMIZEBUTTON="yes"
	 SHOWINTASKBAR="no"
	 SINGLEINSTANCE="no"
	 SYSMENU="yes"
	 VERSION="1.0"
	 WINDOWSTATE="normal"
  />

  <SCRIPT language="JavaScript">
  /* This function also gets the value of commandLine, which cannot be set as an attribute  */
   
  function fnShowProp()   {
    sTempStr = 
               "applicationName  = " + oHTA.applicationName + "\n" + 
               "border           = " + oHTA.border          + "\n" +
               "borderStyle      = " + oHTA.borderStyle     + "\n" + 
               "caption          = " + oHTA.caption         + "\n" +
               "commandLine      = " + oHTA.commandLine     + "\n" +
               "icon             = " + oHTA.icon            + "\n" +
               "maximizeButton   = " + oHTA.maximizeButton  + "\n" +
               "minimizeButton   = " + oHTA.minimizeButton  + "\n" + 
               "showInTaskBar    = " + oHTA.showInTaskBar   + "\n" +
               "singleInstance   = " + oHTA.singleInstance  + "\n" +  
               "sysMenu          = " + oHTA.sysMenu         + "\n" + 
               "version          = " + oHTA.version         + "\n" + 
               "windowState      = " + oHTA.windowState     + "\n" ;
	  
    oPre.innerText = sTempStr;		  
  }
  </SCRIPT>

</HEAD>

<BODY>

<SCRIPT language="VBScript">
    Sub TestSub
        Msgbox "Testing 1-2-3."
    End Sub
</SCRIPT>

<P>The attribute values for this HTA are listed below. Click the button to get the corresponding property values.</P>

<PRE CLASS="clsCode">&lt;HTA:APPLICATION 
   ID="oHTA"
   APPLICATIONNAME="myApp"
	 BORDER="thin"
	 BORDERSTYLE="normal"
	 CAPTION="yes"
	 ICON="graphics/face01.ico"
	 MAXIMIZEBUTTON="yes"
	 MINIMIZEBUTTON="yes"
	 SHOWINTASKBAR="no"
	 SINGLEINSTANCE="no"
	 SYSMENU="yes"
	 VERSION="1.0"
	 WINDOWSTATE="maximize"
  &gt;
  </PRE>

  <BUTTON onclick="fnShowProp()">Retrieve HTA Property Values</BUTTON>
  <PRE ID="oPre">  
    <!-- This provides area for the output of the fnShowProperty() script -->
  </PRE>
  <HR>
  <BUTTON onClick="TestSub()">Run Script</BUTTON> 
  <HR>
  <BUTTON onclick="window.close()">Quit Application</BUTTON>
</BODY>
</HTML>
```

## Examples

### Access the HTA Instances attributes and display in the display 

Create the HTA Object ID in the HTA element in the Head section.
```html
<HTA:APPLICATION ID="objHTA" … >
```
In the HTML's Body Section
```html
<!-- How to execute the jsShowProp() script -->
<BUTTON onclick="jsShowProp()">Retrieve HTA Property Values</BUTTON>

<!-- Display Area designation for the fnShowProp() function -->
<PRE ID="objPre"> </PRE>
```
The Script in the Head section.
```javascript
<SCRIPT language="VBScript">
/* This function also gets the value of commandLine,
    which cannot be set as an attribute  */
function jsShowProp(){
  sTempStr = "applicationName  = " + objHTA.applicationName + "\n" + 
             "border           = " + objHTA.border          + "\n" +
             "borderStyle      = " + objHTA.borderStyle     + "\n" + 
             "caption          = " + objHTA.caption         + "\n" +
             "commandLine      = " + objHTA.commandLine     + "\n" +
             "icon             = " + objHTA.icon            + "\n" +
             "maximizeButton   = " + objHTA.maximizeButton  + "\n" +
             "minimizeButton   = " + objHTA.minimizeButton  + "\n" + 
             "showInTaskBar    = " + objHTA.showInTaskBar   + "\n" +
             "singleInstance   = " + objHTA.singleInstance  + "\n" +  
             "sysMenu          = " + objHTA.sysMenu         + "\n" + 
             "version          = " + objHTA.version         + "\n" + 
             "windowState      = " + objHTA.windowState     + "\n" ;
	  
  objPre.innerText = sTempStr;		  
}
</SCRIPT>
```

### Minimize/Maximize an HTA Window  
The Script in the Head section
```html
<SCRIPT type="text/javascript">
function jsMinWin( ) {
	try {
		objMinimizeWindow.Click( );
	}
	catch ( err ) {
		alert( err.message );
	}
}

function jsMaxWin( ) {
	try {
		objMaximizeWindow.Click( );
	}
	catch ( err ) {
		alert( err.message );
	}
};
</SCRIPT>
```

The Object in the Body (Last Items)
```html
<!-- These are for the required minimize/Maximize function objects -->
<OBJECT Id="objMinimizeWindow" CLASSID="clsid:adb880a6-d8ff-11cf-9377-00aa003b7a11">
    <param NAME="command" VALUE="minimize">
</OBJECT>
<OBJECT id="objMaximizeWindow" classid="clsid:adb880a6-d8ff-11cf-9377-00aa003b7a11">
  <param name="command" value="maximize" />
</OBJECT>
```


Call the scripts:
```html
<BUTTON onClick="javascript:jsMinWin();">Minimize Application</BUTTON>
<BUTTON onClick="javascript:jsMaxWin();">Maximize Application</BUTTON>
```

Use these for VBScript calls:
```html
<INPUT type="hidden" name="MaximizeWindow" id="MaximizeWindow" onClick="javascript:jsMaxWin();" />
<INPUT type="hidden" name="MinimizeWindow" id="MinimizeWindow" onClick="javascript:jsMinWin();" />
```
```vbscript
"vbscript:MinimizeWindow.click" 
"vbscript:MaximizeWindow.click"
```

