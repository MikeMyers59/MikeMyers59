# XML Error Handling

## Handling MSXML Errors
MSXML provides text error messages. This makes it unnecessary to include a table of MSXML error codes in this documentation. The following examples show how to retrieve a text error message from MSXML:

- [Error Handling with SAX](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/cc507425%28v%3dvs.85%29).
- [Error Handling with DOM](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/cc507435%28v%3dvs.85%29).

For DOMErrorHandling JScript example, you will need the following:

- MSXML version 6.0. To download MSXML 6.0, go to MSDN.
- Notepad and Windows Scripting Host. For instructions on how to create JScript application, see [Set Up My JScript Project](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms755475%28v%3dvs.85%29).
- To add the source code and run your DOMErrorHandling JScript application, see [DOMErrorHandling JScript example](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/cc507440%28v%3dvs.85%29).

Source Listing for DOMErrorHandling.js
Copy the data in the following listing. Save the file as DOMErrorHandling.js.
```javascript
var xmlDoc = new ActiveXObject("Msxml2.DOMDocument.6.0");
xmlDoc.async = false;
xmlDoc.load("books.xml");
if (xmlDoc.parseError.errorCode != 0) 
{
   WScript.Echo(xmlDoc.parseError.reason);
} 
else 
{
   WScript.Echo(xmlDoc.documentElement.xml);
}
```
Test File with one missing element </review> on last book:
```xml
<?xml version="1.0"?>  
<books>  
  <book id="bk001">  
    <author>Writer</author>  
    <title>The First Book</title>  
    <genre>Fiction</genre>  
    <price>44.95</price>  
    <pub_date>2000-10-01</pub_date>  
    <review>An amazing story of nothing.</review>  
  </book>  
  <book id="bk002">  
    <author>Poet</author>  
    <title>The Poet's First Poem</title>  
    <genre>Poem</genre>  
    <price>24.95</price>  
    <review>Least poetic poems  
  </book>  
</books>  
```
