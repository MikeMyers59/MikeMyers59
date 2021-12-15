# Navigator Object [AKA: Browser or User Agent]

#### Navigator Object Hierarchy
Most of the built-in objects in JavaScript are part of the Navigator Object Hierarchy. The Navigator Object Hierarchy is built from a single base object called the window object, as illustrated in the following outline. 
    Navigator
    --Window
    ----Document (DOM/HTML)
    ------Anchors
    ------Forms
    ----Location
    ----History

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

## Navigator Coding Examples

#### Open a Browser with Content
Requires:
- objShell

| Browser | Procedure |  
| ---- | ---- |  
| Google Chrome | ```Function openChrome(strURL)``` <br> ```  objShell.run("""C:\Program Files (x86)\Google\Chrome\Application\chrome.exe""" + strURL)``` <br> ```End Function ``` | 
| Microsoft Edge | ```Function openEdge(strURL)``` <br> ```  objShell.run("microsoft-edge:" + strURL)``` <br> ```End Function``` | 
| Mozilla FireFox | ```Function openFireFox(strURL)``` <br> ```  objShell.run("""C:\Program Files (x86)\Mozilla Firefox\firefox.exe""" + strURL)``` <br> ```End Function  ```  |  

#### Get Browser ID
Sets window.BROWSER
Values:
|Value|Browser|
| --- | --- | 
|C|Chrome |   
| F|FireFox |   
| I|Internet Explorer |   
| S|Safari |   

```javascript
function getBrowserID() {
  try {
     var b =  window.navigator.userAgent.toLowerCase();
     if( b.indexOf( "chrome/"   ) > 0 ) window.BROWSER = "C";
     else
       if( b.indexOf( "firefox"   ) > 0 ) window.BROWSER = "F";
       else
         if( b.indexOf( "safari/"   ) > 0 ) window.BROWSER = "S";
          else window.BROWSER = "I";
  }
  catch( e ) {
     window.BROWSER = "I";  // Default to IE
  }
  return window.BROWSER;
}
```

