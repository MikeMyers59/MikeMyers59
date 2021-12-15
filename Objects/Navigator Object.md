# Navigator Object [AKA: Browser or User Agent]

## Common Constants, Declarations and Variables
|CDV Name|Description |  
| --- | --- |  
| Navigator | `Dim objNav as Object` <BR> `set objNav = window.navigator` <BR> `set objNav = Nothing` |  

## Navigator Properties 
|Name|Description |  
| --- | --- |  
| appName|The name of the application in which the page is loaded represented as a string (i.e. "Netscape"). |  
| AppVersion|The version information of the current browser as a string in the form "2.0 (Win16; I)" where 2.0 is the version number, Win16 is the platform, and I indicates the international version (as opposed to U for the domestic version). |  
| appcodeName|The code name of the current browser (i.e. "Mozilla"). |  
| MimeTypes|An array of objects reflecting the MIME types supported by the browser. The mimeTypes property is discussed in more detail in Chapter 14. |  
| Plugins|An array of objects reflecting the plug-ins installed in the browser. The plugins property is discussed in more detail in Chapter 14. |  
| UserAgent|The user agent for the current browser as a string in the form "Mozilla/ 2.0 (Win16; I)". |  

