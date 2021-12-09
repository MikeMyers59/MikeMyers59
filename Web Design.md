# Web Design

| HTML | CSS | Script |
| ---- | ---- | ---- |
| ```<label>Load CSV file: </label><input type="file" id="fileInputCSV" /><br/>``` | | ```var fileInputCSV = document.getElementById('fileInputCSV'); fileInputCSV.addEventListener('change', function (e) { <ProccessFile> } ```|
| ```<label>Load XML file: </label><input type="file" id="fileInputXML" /><br/> ```| | ```var fileInputXML = document.getElementById('fileInputXML'); fileInputXML.addEventListener('change', function (e) { <ProcessFile> } ```|
| ```<input type="button" id="fileExport" hidden="true" />``` | | ```var btnSave = document.getElementById('fileExport'); btnSave.hidden = false; btnSave.value = 'Save as TSV file ->'; document.body.appendChild(btnSave); // export when button clicked btnSave.addEventListener('click', function (e) { <ProcessFile> }); ```|
| ```<table id="result"></table>``` | | ```var table = document.getElementById('result'); table.innerHTML = ""; sheet.forEach(function (el, i) { var row = document.createElement('tr'); el.forEach(function (el, i) { var cell = document.createElement('td'); cell.innerHTML = el.value; row.appendChild(cell); }); table.appendChild(row); }); ```|

  
