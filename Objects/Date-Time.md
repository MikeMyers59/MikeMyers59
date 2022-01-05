# Date-Time Object

## Date Picker
Alternates:
```dos
mscomct2.ocx (MonthView control ): CLSID:20DD1B9E-87C4-11D1-8BE3-0000F8754DA1 (in Win 10 under SysWOW64)
MSCAL.OCX (MS Calendar Control 8.0/Office 10): CLSID:8E27C92B-1264-101C-8A2F-040224009C02 (not in Win10)
```

#### Date Picker 2
```html
<html>
<head>
<title>Date Pulldowns</title>
<HTA:APPLICATION
ID="HTAUI"
APPLICATIONNAME="Date Pulldowns"
SCROLL="no"
SINGLEINSTANCE="yes"
WINDOWSTATE="maximized">
</head>
<SCRIPT language="VBScript">
Dim fromDate, toDate
Sub Window_Onload
self.Focus()
self.ResizeTo 400,200
self.MoveTo 400,150
End Sub
Sub DisplayDatesSub
fromDate = CStr(FromDTP.Month) & "/" & CStr(FromDTP.Day) & "/" & _
CStr(FromDTP.Year)
toDate = CStr(ToDTP.Month) & "/" & CStr(ToDTP.Day) & "/" & _
CStr(ToDTP.Year)
MsgBox "From:" & vbTab & fromDate & vbCrlf & "To:" & vbTab & toDate
End Sub
</SCRIPT>

<BODY STYLE="font:6 pt arial; color:white;
filter:progid:DXImageTransform.Microsoft.Gradient
(GradientType=1, StartColorStr='#000000', EndColorStr='#0000FF')">
<font face="serif" size="3"><b>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
FROM:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;
TO:
<br>
<OBJECT ID="FromDTP" WIDTH=125 HEIGHT=25
CLASSID="CLSID:20DD1B9E-87C4-11D1-8BE3-0000F8754DA1">
<PARAM NAME="CalendarTitleBackColor" VALUE="-2147483646">
<PARAM NAME="CalendarTitleForeColor" VALUE="-2147483639">
</OBJECT>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<OBJECT ID="ToDTP" WIDTH=125 HEIGHT=25
CLASSID="CLSID:20DD1B9E-87C4-11D1-8BE3-0000F8754DA1">
<PARAM NAME="CalendarTitleBackColor" VALUE="-2147483646">
<PARAM NAME="CalendarTitleForeColor" VALUE="-2147483639">
</OBJECT>
<p>
<input id=DisplayDatesButton type="button" value="Display Dates"
name="DisplayDates_button"
onClick="DisplayDatesSub">
<p>
</BODY>
</html>
  ```
#### Date Picker 3
```html
<html>
<script language="vbscript"> 
Self.resizeTo 294,215 
</script> 
<HEAD> 
<script language="jscript"> 
function SeedDate(DateIN) 
  { 
  document.oClnd.Value = "4/01/05"; 
  } 
</script> 
<HTA:APPLICATION 
  APPLICATIONNAME="" ID="oCalend" BORDER="thin" 
  BORDERSTYLE="normal" CAPTION="yes" CONTEXTMENU="yes" 
  INNERBORDER="no" MAXIMIZEBUTTON="no" MINIMIZEBUTTON="yes" 
  NAVIGABLE="no" SCROLL="no" SCROLLFLAT="yes" 
  SELECTION="yes" SHOWINTASKBAR="yes" SINGLEINSTANCE="yes" 
  SYSMENU="yes" VERSION="" WINDOWSTATE="normal"> 
<TITLE> 
Calendar 
</TITLE> 
</HEAD> 
<BODY topmargin=0 bottommargin=0 leftmargin=0 rightmargin=0 
onLoad="SeedDate('04/05/2005')"> 
<object id="oClnd" height="25" width="100" 
classid="clsid:20DD1B9E-87C4-11D1-8BE3-0000F8754DA1"> 
</object> 
</BODY> 
</HTML> 
```
![Date Pcker 2-3](https://github.com/MikeMyers59/MikeMyers59/blob/main/Objects/Date-Time%2001.png)


## Date Picker 4
```html
<HTML>
<HEAD> 
<HTA:APPLICATION 
  APPLICATIONNAME="" ID="oCalend" BORDER="thin" 
  BORDERSTYLE="normal" CAPTION="yes" CONTEXTMENU="yes" 
  INNERBORDER="no" MAXIMIZEBUTTON="no" MINIMIZEBUTTON="yes" 
  NAVIGABLE="no" SCROLL="no" SCROLLFLAT="yes" 
  SELECTION="yes" SHOWINTASKBAR="yes" SINGLEINSTANCE="yes" 
  SYSMENU="yes" VERSION="" WINDOWSTATE="normal"> 
<TITLE>Calendar</TITLE>
<script language="vbscript"> 
Self.resizeTo 294,215 
</script>
</HEAD> 
<BODY topmargin=0 bottommargin=0 leftmargin=0 rightmargin=0> 
<object id=oClnd classid="clsid:20DD1B9E-87C4-11D1-8BE3-0000F8754DA1"> 
</object> 
</BODY></HTML> 
  ```
The Calendar  
![Date Pcker 4](https://github.com/MikeMyers59/MikeMyers59/blob/main/Objects/Date-Time%2002.png)  

