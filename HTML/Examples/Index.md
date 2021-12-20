# HTML Examples

#### Use Table to display a Date & Clock
Requires images for digits 0-9, blank, colon, am & pm. The digit & blank images should all have the same height & width for proper viewing stability. The am & pm images should also be the same size. 

- Twelve Hour Clock.html
- Twelve Hour Clock with Seconds.html
- Date & 12 Hour Clock with Seconds.html

**Note**: Image names may need to be changed, either in the script or the file name.

#### Get HKU Registry Value
```JavaScript
Function GetHKURegistryValue(entryName)
  Dim strKeyPath
  Dim strEntryName, strReadValue
  Dim strLocalDC
  Dim subKey, arrSubKeys
  Dim volatileKey
  strKeyPath = ""
  objReg.EnumKey HKU, strKeyPath, arrSubKeys
  For Each subkey In arrSubKeys
    volatileKey = subKey & "\Volatile Environment"
    objReg.GetStringValue HKU, volatileKey, "USERNAME", strReadValue
    If (strReadValue <> "") Then
      If (strReadValue = UserName) Then
        objReg.GetStringValue HKU, volatileKey, entryName, strReadValue
        MsgBox "Read current value of " & entryName & " = " & strReadValue, True
        GetHKURegistryValue = strReadValue
        Exit For
      End If
    End If
  Next
End Function
```

#### Get User Log Folder
```JavaScript
Function GetUserLogFolder(strUserName)
  Dim strKeyPath
  Dim strEntryName, strReadValue
  Dim subKey, arrSubKeys
  Dim volatileKey
  strKeyPath = ""
  objReg.EnumKey HKU, strKeyPath, arrSubKeys
'go through all user
  For Each subkey In arrSubKeys
    volatileKey = subKey & "\Volatile Environment"
    objReg.GetStringValue HKU, volatileKey, "USERNAME", strReadValue
'subkey exits
    If (strReadValue <> "") Then
'Set log folder and exit if found matched name
      If (strReadValue = strUserName) Then
        objReg.GetStringValue HKU, volatileKey, "LOCALAPPDATA", strReadValue
        GetUserLogFolder = strReadValue
        Exit For
      End If
    End If
  Next
End Function
```

### Link to Exit Page
```JavaScript
var Testing = true;
function Exit() {
  if !Testing {
    window.open("ThankYouForVisiting.html");
  }
}
```

#### Got to URL
```javascript
function go(url) {
  opener.location.href = url;
}
```

#### Small Caendar
```HTML
<!---BEGIN CALENDAR--->
<table border=0 cellpadding=0 cellspacing=0 bgcolor="#3333ff" align=center><tr><td>

<SCRIPT LANGUAGE="JavaScript"><!--
function fBuildCal(iYear,iMonth) {
	var aMonth=new Array();
	aMonth[0]=new Array('S','M','T','W','T','F','S');
	aMonth[1]=new Array(7);
	aMonth[2]=new Array(7);
	aMonth[3]=new Array(7);
	aMonth[4]=new Array(7);
	aMonth[5]=new Array(7);
	aMonth[6]=new Array(7);
	var dCalDate=new Date(iYear,iMonth,1);
	var iDayOfFirst=dCalDate.getDay();
	var iDaysInMonth= 32 - new Date(iYear, iMonth, 32).getDate();
	var iVarDate=1;
	for(var d=iDayOfFirst;d<7;d++) {
		aMonth[1][d]=iVarDate;
		iVarDate++;
	}
	for(var w=2;w<7;w++) {
		for(var d=0;d<7;d++) {
			if(iVarDate<=iDaysInMonth) {
				aMonth[w][d]=iVarDate;
				iVarDate++;
		      }
		}
	}
	return aMonth;
}

function fDrawCal(iYear,iMonth) {
	var myMonth;
	var MonthName=new Array('January','February','March','April','May','June','July','August','September','October','November','December');
	// get layout
	myMonth=fBuildCal(iYear,iMonth);
	// start table
	document.write("<table border=0 cellpadding=0 cellspacing=0 bgcolor=\"#3333ff\" align=center><tr><td>");
	document.write("<table border=0 width=185 bgcolor=\"#3333FF\" align=center>");
	// headline row: month name with link
	document.write("<tr bgcolor=\"#ffffff\"><td colspan=7 align=center>");
	document.write("<font size=2 face=\"Arial\"><a href=\"cgi-bin/calendar.cgi?Month=" + eval(iMonth+1) + "&Year=" + iYear + "\"><b>" + MonthName[iMonth] + "</b></a></font></td></tr>");
	// day of week row
	document.write("<tr>");
	for(d = 0; d < 7; d++) {
		document.write("<td align=center><font size=1 face=\"Arial\" color=#ffffff><b>" + myMonth[0][d] + "</b></font></td>");
	}
	document.write("</tr>");
	// remaining rows
	for(w = 1; w < 7; w++) {
		document.write("<tr>")
		for(d = 0; d < 7; d++) {
			document.write("<td  align=center valign='top' id=calCell'>");
			if(!isNaN(myMonth[w][d])) {
				document.write("<font size=1 face=\"Arial\" color=#ffffff>" + myMonth[w][d] + "</font>");
			} else {
				document.write("<font size=1> </font>");
			}
			document.write("</td>")
		}
		document.write("</tr>");
	}
	document.write("</table></td></tr></table>")
}

var dDate=new Date();
var dCurMonth=dDate.getMonth();
var dCurYear=dDate.getFullYear();
fDrawCal(dCurYear,dCurMonth);
</script>

<SCRIPT LANGUAGE="JavaScript">
function y2k(number) { return (number < 1000) ? number + 1900 : number; }
var today = new Date();
var date = new Date(y2k(today.getYear()),today.getMonth() + 1, today.getDate());
document.write("<font size=2 face=\"Arial\"><center><a href=\"cgi-bin/calendar.cgi?Month=" + eval(date.getMonth() + 1) + "&Year=" + y2k(date.getYear()) + "\">Next Month's Calendar</a></center></font>");
</script>
```

