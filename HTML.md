# HyperText Markup Language (HTML)  

## Creating a user menu  
```html
<HTML>

<HEAD>
<TITLE>Listing 4.4</TITLE>

<SCRIPT LANGUAGE="JavaScript">
//DEFINE METHOD
function displayInfo() {
  document.write("<H1>Employee Profile: " + this.data[0] + "</H1><HR><PRE>");
  document.writeln("Employee Number: " + this.data[1]);
  document.writeln("Social Security Number: " + this.data[2]);
  document.writeln("Annual Salary: " + this.data[3]);
  document.write("</PRE>");
}

//DEFINE METHOD TO GET EMPLOYEE INFORMATION
function getInfo() {
  var menu="0-Exit/1-Name/2-Emp. #/3-Soc. Sec. #/4-Salary";
  var choice=prompt(menu,"0");
  if (choice != null) {
    if ((choice < 0) || (choice > 4)) {
      alert ("Invalid choice");
      this.getInfo();
    } else {
      if (choice != "0") {
        this.data[choice-1]=prompt("Enter information","");
        this.getInfo();
      }
    }
  }
}

//DEFINE OBJECT (Construct)
function employee() {
  this.data = new Array(4);
  this.displayInfo=displayInfo;
  this.getInfo=getInfo;
}

newEmployee=new employee();
</SCRIPT>

</HEAD>

<BODY>

<SCRIPT LANGUAGE="JavaScript">
  newEmployee.getInfo();
  newEmployee.displayInfo();
</SCRIPT>

</BODY>

</HTML>
```

