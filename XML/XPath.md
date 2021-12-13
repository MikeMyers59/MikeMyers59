# XPath

## XPath in VBA
Instead of traversing the elements/nodes in your XML using the .ChildNodes/.FirstChild/NextChild properties we can also use XPath. XPath is a query language used for selecting XML nodes in an XML document. It is represented by a single string. It allows you to extract any number of nodes (0 or more) which match the specified XPath query.   
If you want to learn XPath I can recommend this overview: https://www.w3schools.com/xml/xpath_syntax.asp  
Now let’s jump into an example:  

#### Example 1: Extract all Lists
```vbscript
Sub TestXML()
  Dim XDoc As Object
  Set XDoc = CreateObject("MSXML2.DOMDocument")
  XDoc.async = False: XDoc.validateOnParse = False
  XDoc.Load (ThisWorkbook.Path & "\test.xml")
  Set lists = XDoc.SelectNodes("//DistributionLists/List")
  Set XDoc = Nothing
End Sub
```
#### Example 2: Extracting all TO fields
```vbscript
Set toFields = XDoc.SelectNodes("//DistributionLists/List/TO")
End Sub
```
#### Example 3: Extracting the first and last Name field
```vbscript
Set firstNameField = XDoc.SelectNodes("//DistributionLists/List[0]/Name")
Set lastNameField = XDoc.SelectNodes("//DistributionLists/List[2]/Name")
```
#### Example 3: Extracting all child List nodes (Name, TO, CC, BCC)
```vbscript
Set listChildrenField = XDoc.SelectNodes("//DistributionLists/List/*")
```

#### XML Attributes in VBA
Let’s tackle one last example – attributes. Let’s slightly modify the XML above and include an example attribute named attribute.
```xml
<?xml version="1.0" encoding="utf-8"?>
	<DistributionLists>
	  <List>
	    <Name attribute="some">Recon</Name>
```
Using XPath (or traversing the DOM) we can easily extract the attribute as shown below.
```vbscript
Set firstNameField = XDoc.SelectNodes("//DistributionLists/List[0]/Name")
Debug.Print firstNameField(0).Attributes(0).Text
'Result: "some".
```
#### Creating XML documents
Creating documents is also quite straight forward in VBA. 
```vbscript
Dim XDoc As Object, root As Object, elem As Object
Set XDoc = CreateObject("MSXML2.DOMDocument")
Set root = XDoc.createElement("Root")
XDoc.appendChild root
'Add child to root
Set elem = XDoc.createElement("Child")
root.appendChild elem
'Add Attribute to the child
Dim rel As Object
Set rel = XDoc.createAttribute("Attrib")
rel.NodeValue = "Attrib value"
elem.setAttributeNode rel
'Save the XML file
XDoc.Save "C:\my_file.xml"
```
      
