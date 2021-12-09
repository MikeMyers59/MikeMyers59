# Web Design

| HTML | CSS | Script |
| ---- | ---- | ---- |
| ```<label>Load CSV file: </label><input type="file" id="fileInputCSV" /><br/>``` | | ```var fileInputCSV = document.getElementById('fileInputCSV');```<BR>``` fileInputCSV.addEventListener('change', function (e) { ```<BR>```<ProccessFile>```<BR>``` } ```|
| ```<label>Load XML file: </label><input type="file" id="fileInputXML" /><br/> ```| | ```var fileInputXML = document.getElementById('fileInputXML');```<BR>``` fileInputXML.addEventListener('change', function (e) { ```<BR>```<ProcessFile>```<BR>``` } ```|
| ```<input type="button" id="fileExport" hidden="true" />``` | | ```var btnSave = document.getElementById('fileExport');```<BR>``` btnSave.hidden = false; btnSave.value = 'Save as TSV file ->';```<BR>``` document.body.appendChild(btnSave);```<BR>``` // export when button clicked btnSave.addEventListener('click', function (e) { ```<BR>```<ProcessFile>```<BR>``` }); ```|
| ```<table id="result"></table>``` | | ```var table = document.getElementById('result');```<BR>``` table.innerHTML = "";```<BR>``` sheet.forEach(function (el, i) { var row = document.createElement('tr');```<BR>``` el.forEach(function (el, i) { var cell = document.createElement('td');```<BR>``` cell.innerHTML = el.value;```<BR>``` row.appendChild(cell); });```<BR>``` table.appendChild(row); }); ```|

  
