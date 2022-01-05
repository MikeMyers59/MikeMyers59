# Database Object

## Access a Database

Variation for User input Key
Add user input
```html
Enter Key: <input type=text id='edKey'</input>
```
Replace in DoTest:
```vbscript
var sKey=  document.all.edKey.value;  // get user input
var sSQL="SELECT * FROM Customers"
          +" WHERE CompanyName LIKE '" +sKey+ "%' "
          +" ORDER BY CustomerID"; 
```

The script to do the heavy work:
```vbscript
var goDb;
var gsConnect= "DSN=Northwind;UID=;PWD=";  
var adOpenStatic=   3;   // constants used in oRs.Open(...)
var adLockReadOnly= 1;
var adCmdText=      1;
function DoTest() {
	var sSQL="SELECT * FROM Customers ORDER BY CustomerID";
	//--------------------------------------- open the db connection
	goDb= new ActiveXObject( "ADODB.Connection" );
	goDb.Open( gsConnect );
	//---------------------------------------- open the recordset
	var oRs= new ActiveXObject( "ADODB.Recordset" );
	oRs.Open( sSQL, goDb, adOpenStatic, adLockReadOnly, adCmdText );
var sOutput="<TABLE border=3>";
	while (! oRs.EOF ) {
	   var sOneLine= "<TR>";
	   sOneLine += "<TD>"+ oRs.Fields('CustomerID' ).Value + "</TD>";
	   sOneLine += "<TD>"+ oRs.Fields('CompanyName').Value + "</TD>";
	   sOneLine += "<TD>"+ oRs.Fields('City'       ).Value + "</TD>";
	   sOneLine += "</TR>";
	   sOutput += sOneLine;
	   oRs.MoveNext();
	}
	sOutput += "</TABLE>";
	oDivDisplayArea.innerHTML= sOutput; // show the output
}
```

