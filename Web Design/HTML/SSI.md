# SSI: Server Side Includes

SSI's are directions to the Web Server to include additonal code/script/markup into an outgoing HTML files for the user. Some examples:  

# SSI Commands  

### #CONFIG  
Set your configuration requirements.  
| Element | Type | Description |  
| --- | --- | --- |   
| \%A | timefmt |  |  
| \%B | timefmt |  |  
| \%d | timefmt |  |  
| \%Y | timefmt | Year in the form 9999 |  

### #ECHO  
The Echo command copies directly into the document at the location inserted.  

# Examples

## Add Dates into the Document
Set the format of your date in a #CONFIG and then use #ECHO to place the formated date into the document.  
**Note**: This only works through the server, so testing local files will not create this data.  
```html
<!--#config timefmt="%A" -->
<!--#echo var="DATE_LOCAL"--> <br />
<!--#config timefmt="%B %d, %Y" -->
<!--#echo var="DATE_LOCAL"-->
```

### #Include
Use these to include markup snippets stroed in another file. This allows for a modular design that is contrlled by the server. 
```html
<!--#include virtual="/include/header/stylesheet.html" -->
<!--#include virtual="/homepages/departments/999/custom/site-stylesheet.html" -->
<!--#include virtual="/homepages/departments/999/custom/navbar.html" -->
```

