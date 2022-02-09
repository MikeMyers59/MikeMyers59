# SSI: Server Side Includes

SSI's are directions to the Web Server to include additonal code/script/markup into an outgoing HTML files for the user. 
**Note**: CSS also allows SSI, but is limited! 

# SSI Commands  

### #CONFIG  
Set your configuration requirements.  
| Element | Type | Description |  
| --- | --- | --- |   
| \%A | timefmt | Full day of Week Name |  
| \%B | timefmt | Full Month Name |  
| \%d | timefmt | Day of the Month `[1-31]` |  
| \%Y | timefmt | Year in the form `[0,1,2]999` |  

### #ECHO  
The Echo command copies directly into the document at the location inserted.  

# Examples

## Add Dates into the Document
Set the format of your date in a #CONFIG and then use #ECHO to place the formated date into the document.  
**Note**: This only works through the server, so testing local files will not create this data.  
```html
<!--#config timefmt="%A" -->
<!--#echo var="DATE_LOCAL"--> <br />
<!--#config timefmt="%A, %B %d, %Y" -->
<!--#echo var="DATE_LOCAL"-->
<!--#config timefmt="%Y" -->
<!--#echo var="LAST_MODIFIED" -->
```

### If-Endif Enclosures
```html
<!--[if gte IE 9]>
<![endif]-->
<!--[if lt IE 9]>  
<![endif]-->
```
Roadmaps:
```html
<!--#include virtual="/homepages/organizations/OMTweb/footer.html" -->
<!--[if { lt | lte | gte | gt | ! | none }  mso { 9 | 10 | none }]--> …<!--[endif]-->
<!--[if { lt | lte | gte | gt | ! | none } ppt]-->…<!--[endif]-->
<!--[if { lt | lte | gte | gt | ! | none } IE { 7 | 8 | 9 }]>…<!--[endif]-->
```

### SSI Operators
| Operator | Description |  
| --- | --- |  
| ! | Not |  
| gt | Greater Than |  
| gte | Greater Than or Equal |  
| lt | Less Than |  
| lte | Less Than or Equal |  
| none | none |  

### #Include
Use these to include markup snippets stroed in another file. This allows for a modular design that is contrlled by the server. 
```html
<!--#include virtual="/include/header/stylesheet.html" -->
<!--#include virtual="/homepages/departments/999/custom/site-stylesheet.html" -->
<!--#include virtual="/homepages/departments/999/custom/navbar.html" -->
```
## Variables
REMOTE_USER:  <!--#echo var="REMOTE_USER" -->
Current Time:  <!--#echo var="DATE_LOCAL"-->

