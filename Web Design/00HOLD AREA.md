# HOLD AREA

[DynamicDrive](http://dynamicdrive.com) - samples of DHTML  
[FullCalendar](http://fullcalendar.io/)   
[Harvest](http://getharvest.com) - Select Box Enhancer for jQuery and Prototype  
[jQuery TE](http://jqueryte.com/)   
[jQueryUI](http://jqueryui.com)  
[lightslider](https://github.com/sachinchoolur/lightslider)   
[Mike Hall](http://www.brainjar.com)  
[persian-datepicker](http://babakhani.github.io/PersianWebToolkit/docs/datepicker)   
[SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter)  
[StackTRaceJS](https://www.stacktracejs.com/)   
[TextPad](http://www.textpad.com/)

| Acronym | Description |  
| --- | --- |  
| HSTS | HTTP Strict Transport Security |  

```css
  a:link {color:#0000A0; text-decoration:underline}
  a:visited {color:#66097B; text-decoration:underline}
  a:active {color:#66097B; text-decoration:underline}
  a:hover {color:#ff0000}
```

### Calendar 
Cut and paste this into the BODY of your document to display a calendar:

```html
<SCRIPT LANGUAGE="JavaScript">
//This script and many more are available online from
//The JavaScript Source!! http://javascriptsource.com
monthnames = new Array(
"January",
"Februrary",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"Decemeber");
var linkcount=0;
function addlink(month, day, href) {
var entry = new Array(3);
entry[0] = month;
entry[1] = day;
entry[2] = href;
this[linkcount++] = entry;
}
Array.prototype.addlink = addlink;
linkdays = new Array();
monthdays = new Array(12);
monthdays[0]=31;
monthdays[1]=28;
monthdays[2]=31;
monthdays[3]=30;
monthdays[4]=31;
monthdays[5]=30;
monthdays[6]=31;
monthdays[7]=31;
monthdays[8]=30;
monthdays[9]=31;
monthdays[10]=30;
monthdays[11]=31;
todayDate=new Date();
thisday=todayDate.getDay();
thismonth=todayDate.getMonth();
thisdate=todayDate.getDate();
thisyear=todayDate.getYear();
thisyear = thisyear % 100;
thisyear = ((thisyear < 50) ? (2000 + thisyear) : (1900 + thisyear));
if (((thisyear % 4 == 0) 
&& !(thisyear % 100 == 0))
||(thisyear % 400 == 0)) monthdays[1]++;
startspaces=thisdate;
while (startspaces > 7) startspaces-=7;
startspaces = thisday - startspaces + 1;
if (startspaces < 0) startspaces+=7;
document.write("<table border=2 bgcolor=white ");
document.write("bordercolor=black><font color=black>");
document.write("<tr><td colspan=7><center><strong>" 
+ monthnames[thismonth] + " " + thisyear 
+ "</strong></center></font></td></tr>");
document.write("<tr>");
document.write("<td align=center>Su</td>");
document.write("<td align=center>M</td>");
document.write("<td align=center>Tu</td>");
document.write("<td align=center>W</td>");
document.write("<td align=center>Th</td>");
document.write("<td align=center>F</td>");
document.write("<td align=center>Sa</td>"); 
document.write("</tr>");
document.write("<tr>");
for (s=0;s<startspaces;s++) {
document.write("<td> </td>");
}
count=1;
while (count <= monthdays[thismonth]) {
for (b = startspaces;b<7;b++) {
linktrue=false;
document.write("<td>");
for (c=0;c<linkdays.length;c++) {
if (linkdays[c] != null) {
if ((linkdays[c][0]==thismonth + 1) && (linkdays[c][1]==count)) {
document.write("<a href=\"" + linkdays[c][2] + "\">");
linktrue=true;
      }
   }
}
if (count==thisdate) {
document.write("<font color='FF0000'><strong>");
}
if (count <= monthdays[thismonth]) {
document.write(count);
}
else {
document.write(" ");
}
if (count==thisdate) {
document.write("</strong></font>");
}
if (linktrue)
document.write("</a>");
document.write("</td>");
count++;
}
document.write("</tr>");
document.write("<tr>");
startspaces=0;
}
document.write("</table></p>");
</SCRIPT>
</CENTER>
```

### Cookies
```javascript
function acceptsCookies() {
  document.cookie = 'Welcome!';
  return (document.cookie === '');
}
```

### Functions in CSS
```css
alpha(opacity=30)
attr(data-full)
calc(100vh - 114px)
linear-gradient(top,white 0,#f2f2f2 100%)
rect(auto,50px,auto,-50px)
```

#### Namespace
| Namespace ID | Description |  
| --- | --- |  
| -ms-|MS Internet Explorer <10|  
| -moz-|FireFox <16|  
| -o-|Opera <12|  
| -webkit-|Chrome & Safari|  
| sif-|Spreadsheet Icon Font|  

#### Links & Shortcuts

Open Web Page in Internet Explorer	
```dos
"C:\Program Files\Internet Explorer\iexplore.exe" <URL>
```
Start In: 
```dos
"C:\Program Files\Internet Explorer"
```

### RE: Regular Expressions

```javascript
.match( /app:(.*)/i )
.match( /^hcp:/i )
.match( /^http:/i )) // This link is for Internet Explorer, so don't strip away the query string.
.match( /\.hlp/i   )
.match( /\.chm/i   )
.replace(" ","%20")
```

### Selectors

| Action | Selector |  
| --- | --- |  
| Using Not ID as a selector | `[id^="<IDSegment>"]` |  
| Using role as a selector | `[role="<RoleID>"]` |  

### Strings

#### Remove Leading Spaces from Form Element
```javascript
function trimLeadingSpaces(formElement){		
	while (''+formElement.value.charAt(0)==' '){
		formElement.value=formElement.value.substring(1,formElement.value.length);
	}		 
}
```

### URL
```javascript
var pageURL = window.document.location.toString();
var docURL = document.location.href;
```

### Variables & Constants

```javascript
var newLineChar = String.fromCharCode(10);
var char34 = String.fromCharCode(34);
```

### Window
```javascript
function closePage() {
  window.close();
}
```

