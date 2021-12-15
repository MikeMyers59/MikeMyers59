# Index for HTML Folder

This folder contains HTML notes, snippets ans examples.

## Referencing File locations in HTML
| File Location | Source Call |
| ---- | ---- |
| Current Directory | src="<FileName>" |
| Current Directory’s subdirectory “scripts” | src="/scripts/<FileName>” |
| Parent’s “src” Subdirectory | src="../src/<FileName>” |

## Troubleshooting & Testing HTML with Browser Console

Use ```console.log()``` to add output data to the console to check process steps.

For XML try these checks to compare output:
- ```console.log(xml.toXMLString())```
- ```console.log(xml.toString())```

## META Elements

| Usage | Meta Element | Notes | 
| --- | --- | --- | 
| SEO Key Words | `<META name="Keywords" content="<SEOKeywords>">` | Used by spiders & robots to identify the sight in search engines |  
| Edge Browser | `<META http-equiv="X-UA-Compatible" content="IE=edge">` |  |  
| IE 5 | `<META http-equiv="X-UA-Compatible" content="IE=5" >` | displayed in IE5 Standards |   
| IE 9 | `<META http-equiv="X-UA-Compatible" content="IE=9" >` | displayed in IE9 Standards mode when Internet Explorer 9 or higher is installed on the system <BR> SVG can be used in HTAs |  
| IE 11 | `<META http-equiv="X-UA-Compatible" content="IE=11.0000" >` | isplayed in IE11 Standards  |  
| MSHTML 11 | `<META name="GENERATOR" content="MSHTML 11.00.10570.1001">` |  |  
| Set Code Page | `<META http-equiv="Content-Type" content="text/html; charset=utf-8">` |  |  

## BODY Element

#### Handle Events in the Body Element
| Event | Example |  
| --- | --- |  
| Block the Context Menu | `onContextMenu="return false"` |  
| On Load - Start Up Function| `onLoad="<ProcedureCall>();"` |  
| On Load - Greeting | `onLoad="alert('Welcome!');"` |  
| On Unload | `onUnload="alert('Goodbye!');"` |  

## FORM Elements
| Element | Description | Examples | 
| --- | --- | --- | 
| `<FIELDSET> ... </FIELDSET>` | provides the ability to group related elements within a form |  |  
| `<FORM> ... </FORM>` | The whole form container |  |  
| `<INPUT> ... </INPUT>` | Defines the control elements of a form which includes the following control types: <br> - text <br> - password <br> - checkbox <br> - radio <br> - hidden <br> - submit |  |  
| `<LABEL> ... </LABEL>` | lets you caption control elements |  |  
| `<LEGEND> ... </LEGEND>` | lets you caption a field set group of elements |  |  
| `<SELECT> ... </SELECT>` | lets users choose from a range of options in the form as a drop down box |  |  
| `<TEXTAREA> ... </TEXTAREA>` | input control is good for capturing short pieces of information |  |  

#### Set Page Constants in a Form
```html
<INPUT type="hidden" name="background_color" value="#FFFFFF">
<INPUT type="hidden" name="text_color" value="#000000">
<INPUT type="hidden" name="link_color" value="#0000FF">
<INPUT type="hidden" name="visited_link_color" value="#8000FF">
<INPUT type="hidden" name="active_link_color" value="#0000FF">
```

#### Event & Contact Form
Form View[Form View](MikeMyers59/MikeMyers59/00Pics/Event and Contact Form View.png)

HTML
```html
<FORM action="" method="post" class="contact">
  <FIELDSET>
    <LEGEND>Tell us About Your Event</legend>
    <DIV>
      <LABEL for="contactname" 
class="fixedwidth">Contact Name</LABEL>
      <INPUT type="text" name="contactname" id="contactname" />
    </DIV>
    <DIV>
      <LABEL for="telephone" 
class="fixedwidth">Telephone Number</LABEL>
      <INPUT type="text" name="telephone" id="telephone" />
    </DIV>
    <DIV>
      <LABEL for="email" 
class="fixedwidth">Email Address</LABEL>
      <INPUT type="text" name="email" id="email" />
    </DIV>
    <DIV>
      <LABEL for="eventname" 
class="fixedwidth">What's the event called?</LABEL>
      <INPUT type="text" name="eventname" id="eventname" />
    </DIV>
    <DIV>
      <LABEL for="eventdate" 
class="fixedwidth">When's the event happening?</LABEL>
      <INPUT type="text" name="eventdate" id="eventdate" />
    </DIV>
    <DIV>
      <P>Please provide any other details you think will be useful to us in the text area below (it may save us calling or emailing you, and help avoid delays).</P>
      <LABEL for="details" class="fixedwidth">More details (as much as you think we'll need!)</LABEL>
      <TEXTAREA id="details" name="details" cols="30" rows="7"></TEXTAREA>
    </DIV>
    <DIV class="buttonarea">
      <INPUT type="submit" value="Send Us the Info" />
   </DIV>
  </FIELDSET>
</FORM>
```
CSS
```css
form.contact label.fixedwidth {
  display: block;
  width: 240px;
  float: left;
}
form.contact .buttonarea {
  text-align: center;
  padding: 4px;
  background-color: #0066ff;
}
form.contact .buttonarea input {
  background: navy;
  color: white;
  font-weight: bold;
  padding: 5px;
  border: 1px solid white;
}
```

#### Print a Page
```html
<FORM name="form1" method="post" action="">
  <INPUT type="submit" name="Submit" value="Print This Page"
onClick="javascript:window.print();">
</FORM>
```

#### Acces a File Directory
```html
<FORM action="file:///<DriveLetter>|/">
<INPUT type="submit" value="Open <DriveLetter> Disk">
</FORM>
```

#### Search a Site with Google
```html
<!-- SiteSearch Google -->
<FORM method="get" action="http://www.google.com/search">
  <LABEL for="q">Search:</LABEL>
  <INPUT id="q" name="q" size="20" maxlength="255" value=""
type="text" />
  <INPUT name="domains" value=<YourSiteURL>
type="hidden" />
  <INPUT name="sitesearch" value=<YourSiteURL>
checked="checked" id="mysite" type="radio" />
  <LABEL for="mysite">Just this site</LABEL>
  <INPUT name="sitesearch" value="" id="www" type="radio" />
  <LABEL for="www">WWW</LABEL>
  <INPUT name="btnG" value="Go" type="submit" />
</FORM>
<!-- SiteSearch Google -->
<STYLE>
#search {
  position: absolute;
  top: 77px;
  right: 10px;
  font-size: x-small;
  font-weight: bold;
}
</STYLE>
```
#### Determine When to Contact
```html
<DIV> 
  <p>If we need to call you back for any more info, what would be 
the best time to call you on the number supplied?</p> 
  <INPUT type="radio" name="timetocall" id="morning" 
value="Morning" /> 
  <LABEL for="morning">In the morning</LABEL> 
  <BR /> 
  <INPUT type="radio" name="timetocall" id="afternoon" 
value="Afternoon" /> 
  <LABEL for="afternoon">In the afternoon</label> 
  <BR /> 
  <INPUT type="radio" name="timetocall" id="evening" 
value="Evening" /> 
  <LABEL for="evening">In the evening</LABEL> 
  <BR /> 
  <INPUT type="radio" name="timetocall" id="never" value="Never" 
checked="checked" />
  <LABEL for="never">No calls please</LABEL>
</DIV>
```

#### Acknowledge Terms and Conditions
```html
<P>
  <INPUT type="checkbox" name="terms" id="terms" />
  <LABEL for="terms">I have read the <A href=<FilePathName> >Terms and Conditions</A>.</LABEL>
</P>
```

## TABLE Elements
Handling form data is a skill that requires programming in PHP, Perl, or some other server-side language that can manipulate this data. It’s a good job, then, that there are other people out there who have acknowledged that there’s a need for a simple form-processing service.
Table Format![[Table Format](MikeMyers59/MikeMyers59/00Pics/Table Format.png)

| Element | Description | Examples | 
| --- | --- | --- | 
| `<TABLE> ... </TABLE>` | contains the entire table  |  |  
| `<CAPTION> ... </CAPTION>` |  |  |  
| `<TR> ... </TR>` | contains an entire row of a table (hence table row)  |  |  
| `<TH> ... </TH>` | signifies a table header cell  |  |  
| `<TD> ... </TD>` | a general table data cell  |  |  

#### Sample Table
```html
<INPUT TYPE="button" VALUE="Next" ONCLICK="VBScript:tbl.nextPage">
<INPUT TYPE="button" VALUE="First Page" ONCLICK="VBScript:tbl.firstPage">
<TABLE id=tbl datasrc=#xmlParts border=fine DATAPAGESIZE=5 >
 <TR>
  <TD><DIV>Part Number</DIV></TD>
  <TD><DIV>The $Text Results</DIV></TD>
 </TR>
 <TR>
  <TD><DIV datafld="partnumber"></DIV></TD>
  <TD><DIV datafld="$Text"></DIV></TD>
 </TR>
</TABLE>
```

