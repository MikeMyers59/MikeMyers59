# Browser Object

## Open a Browser with Content
Requires:
- objShell

| Browser | Procedure |  
| ---- | ---- |  
| Google Chrome | ```Function openChrome(strURL)``` <br> ```  objShell.run("""C:\Program Files (x86)\Google\Chrome\Application\chrome.exe""" + strURL)``` <br> ```End Function ``` | 
| Microsoft Edge | ```Function openEdge(strURL)``` <br> ```  objShell.run("microsoft-edge:" + strURL)``` <br> ```End Function``` | 
| Mozilla FireFox | ```Function openFireFox(strURL)``` <br> ```  objShell.run("""C:\Program Files (x86)\Mozilla Firefox\firefox.exe""" + strURL)``` <br> ```End Function  ```  |  

## Get Browser ID
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

