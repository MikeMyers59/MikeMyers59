# Employees Example: Dynamically Populate an HTML Table with XML Data

Once you know how to retrieve XML data from a server, the next step is to learn how to display that data in the browser. One way to use XML data is to populate an HTML table with it. Follow these 12 steps to learn how it's done.

1. Start with an initial HTML document that has the following in the body of the page: 
```xml
<table id="MainTable">
<tbody id="BodyRows"></tbody>
</table>
```

2.	The XML document that we'll load into this HTML has the following structure. Note that the nodes for Employees 3 through 6 are collapsed in the following image.
    ![Employees XML File](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Employees/EmployeesXMLExample.png)
    
3. 1.	After the page loads, use JavaScript to run a function called `buildTable()`, which in turn will run a function to populate the table rows. 
```javascript
window.addEventListener("load", function() {
	getRows();
});
```

4.	Write the `getRows()` function to retreive the XML data using AJAX. If the request succeeds, run a function called `showResult()`.
```javascript
function getRows() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("get", "Employees", true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			showResult(this);
		}
	};
	xmlhttp.send(null);
}
```

5. Write showResult(), which will take the AJAX response as a parameter. 
```javascript
function showResult(xmlhttp) {

}
```

6. Inside the `showResult()` function, extract the XML document from the response object parameter. 
```javascript
function showResult(xmlhttp) {
	var xmlDoc = xmlhttp.responseXML.documentElement;
}
```

7. Write a new function called `removeWhiteSpace()`, which will remove all non-visible characters from the XML and make it easier for us to parse. 
```javascript
function removeWhitespace(xml) {
	var loopIndex;
	for (loopIndex = 0; loopIndex < xml.childNodes.length; loopIndex++)
		{
		var currentNode = xml.childNodes[loopIndex];
		if (currentNode.nodeType == 1)
		{
				removeWhitespace(currentNode);
		}
		if (!(/\S/.test(currentNode.nodeValue)) && (currentNode.nodeType == 3))
		{
			xml.removeChild(xml.childNodes[loopIndex--]);
		}
	}
}
```

8. Call `removeWhiteSpace()`, passing in the XML document. 
```javascript
function showResult(xmlhttp) {
	var xmlDoc = xmlhttp.responseXML.documentElement;
	removeWhitespace(xmlDoc);
}
```

9. Select the data in the XML document using `getElementsByTagName`. 
```javascript
function showResult(xmlhttp) {
	var xmlDoc = xmlhttp.responseXML.documentElement;
	removeWhitespace(xmlDoc);
	var rowData = xmlDoc.getElementsByTagName("Employees");
}
```

10. Call a new function named `addTableRowsFromXmlDoc()`, which will accept the XML data and the element where results should be output as parameters. 
```javascript
function showResult(xmlhttp) {
	var xmlDoc = xmlhttp.responseXML.documentElement;
	removeWhitespace(xmlDoc);
var outputResult = document.getElementById("BodyRows");
	var rowData = xmlDoc.getElementsByTagName(rowElement);
	addTableRowsFromXmlDoc(rowData,outputResult);
}
```


11. Write the `addTableRowsFromXmlDoc()` function as follows. 
```javascript
function addTableRowsFromXmlDoc(xmlNodes,tableNode) {
	var theTable = tableNode.parentNode;
	var newRow, newCell, i;
	console.log ("Number of nodes: " + xmlNodes.length);
	for (i=0; i<xmlNodes.length; i++) {
		newRow = tableNode.insertRow(i);
		newRow.className = (i%2) ? "OddRow" : "EvenRow";
		for (j=0; j<xmlNodes[i].childNodes.length; j++) {
			newCell = newRow.insertCell(newRow.cells.length);
			if (xmlNodes[i].childNodes[j].firstChild) {
				newCell.innerHTML = xmlNodes[i].childNodes[j].firstChild.nodeValue;
			} else {
				newCell.innerHTML = "-";
			}
			console.log("cell: " + newCell);
		}
	}
	theTable.appendChild(tableNode);
}
```
This function loops through the passed-in XML nodeList, adding a new table row for each node in the list. It then sets the class name of the row. The inner loop iterates through all the child nodes (e.g, Salesperson, Title, etc.) of the current node (e.g, the current Employee), creating a table data cell for each. 

12. 12.	Run the script by opening it in a web browser. You can test it locally, without a server, by creating a file named Employees.xml and changing the URL in the XMLHttpRequest open() method to Employees.xml. Your finished HTML page and script should look like this: 
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>test handle response</title>
  <script>
    window.addEventListener("load", function() {
      getRows();
    });

    function getRows() {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("get", "Employees.xml", true);
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          showResult(this);
        }
      };
      xmlhttp.send(null);
    }

    function showResult(xmlhttp) {
      var xmlDoc = xmlhttp.responseXML.documentElement;
      removeWhitespace(xmlDoc);
      var outputResult = document.getElementById("BodyRows");
      var rowData = xmlDoc.getElementsByTagName("Employee");

      addTableRowsFromXmlDoc(rowData,outputResult);
    }

    function addTableRowsFromXmlDoc(xmlNodes,tableNode) {
      var theTable = tableNode.parentNode;
      var newRow, newCell, i;
      console.log ("Number of nodes: " + xmlNodes.length);
      for (i=0; i<xmlNodes.length; i++) {
        newRow = tableNode.insertRow(i);
        newRow.className = (i%2) ? "OddRow" : "EvenRow";
        for (j=0; j<xmlNodes[i].childNodes.length; j++) {
          newCell = newRow.insertCell(newRow.cells.length);
          if (xmlNodes[i].childNodes[j].firstChild) {
            newCell.innerHTML = xmlNodes[i].childNodes[j].firstChild.nodeValue;
          } else {
            newCell.innerHTML = "-";
          }
          console.log("cell: " + newCell);
        }
        }
        theTable.appendChild(tableNode);
    }

    function removeWhitespace(xml) {
      var loopIndex;
      for (loopIndex = 0; loopIndex < xml.childNodes.length; loopIndex++)
      {
        var currentNode = xml.childNodes[loopIndex];
        if (currentNode.nodeType == 1)
        {
          removeWhitespace(currentNode);
        }
        if (!(/\S/.test(currentNode.nodeValue)) && (currentNode.nodeType == 3))
        {
          xml.removeChild(xml.childNodes[loopIndex--]);
        }
      }
    }

  </script>

  <style>
    table {
    }
    td {
      padding: 2px;
      border: 1px solid #dadada;
    }
    .EvenRow {
      background-color: yellow;
    }

  </style>
</head>
<body>
<table id="MainTable">
  <tbody id="BodyRows"></tbody>
</table>
</body>
</html>
```

When run, the script will produce the following output in a browser:
![Employees XML to HTML Table Results](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Employees/EmployesXMLResults.png)

