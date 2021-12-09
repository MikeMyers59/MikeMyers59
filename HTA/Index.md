# Index of HTA: HTML Applications 

1. This folder contains HTA related Notes, Snippets and Examples.

Includes:

- XMLParser.hta - research project to convert Kindle Books XML file to viewable information

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

