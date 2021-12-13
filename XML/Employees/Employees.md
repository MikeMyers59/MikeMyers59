# Employees XML File Example

## File Excerpt for structure
```xml
  <?xml version="1.0"?>
  <Employees>
    <Employee id="1">
      <SalesPerson>Nancy Davolio</SalesPerson>
      <Title>Sales Representative</Title>
      <Birthdate>December 8, 1968</Birthdate>
      <HireDate>May 1 , 1992</HireDate>
      <Extension>5462</Extension>
    </Employee>
  </Employees>
```

## Code to Manipulate the XML

#### Open the XML Document
```vbscipt
    Set docXML = CreateObject("MSXML2.DOMDocument")
    docXML.async = "false"
'    MsgBox "Load Starting"
    docXML.load(".\Employees.xml")
'    MsgBox docXML.xml
    if docXML.xml = "" then 
      MsgBox "An XML Load Error has occurred, check file availability and location." 
      exit sub
    end if 
```

#### Get the Inner text and Inner xml of the XML file
```vbscipt
  msgbox "XML of the file " & vbCrLf & vbCrLf & docXML.xml
  msgbox "Inner text of the xml file: " & vbCrLf & vbCrLf & docXML.text
```

#### Get the details of a single node
```vbscipt
  Set myNode = docXML.SelectSingleNode("/Employees/Employee/SalesPerson")
  Msgbox "XML of the single Node " & vbCrLf & vbCrLf & myNode.xml
  Msgbox "Inner Text of the single Node " & vbCrLf & vbCrLf & myNode.text
  Msgbox "Type of the Node " & vbCrLf & vbCrLf & myNode.nodeType
```
