# Index of HTA: HTML Applications 

1. This folder contains HTA related Notes, Snippets and Examples.

Includes:

- XMLParser.hta - research project to convert Kindle Books XML file to viewable information

An [HTML Application (HTA)](https://docs.microsoft.com/en-us/previous-versions/ms536473%28v%3dvs.85%29) is a Microsoft Windows program whose source code consists of HTML, Dynamic HTML, and one or more scripting languages supported by Internet Explorer, such as VBScript or JScript. By default, HTAs are rendered as per "standards-mode content in IE7 Standards mode and quirks mode content in IE5 (Quirks) mode", but this can be altered using X-UA-Compatible headers. The HTA engine (mshta.exe) is dependent on Internet Explorer. Starting from [Windows Vista](https://en.wikipedia.org/wiki/Windows_Vista), a user can remove [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer) from Windows, which will cause the HTA engine to stop working.

# Hold Area

Fresh an HTA 
```javascript
  function refresh(htaPath){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    var appUri = fso.GetParentFolderName(location.href);
    var appPath = appUri.substr("file:///".length).split("/").join("\\");
    var fileName = fso.GetFileName(location.href);
    htaFull = appPath+"\\"+fileName
    WS = new ActiveXObject("WScript.Shell");
    var wsresult= WS.Run(htaFull,1,false);
  }
```

