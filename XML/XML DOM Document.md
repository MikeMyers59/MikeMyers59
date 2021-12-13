# XML DOM Document

The MSXML2.DOMDocument object allows you to easily traverse through an XML structure an extract any XML node and/or attribute needed. Let’s look at the example below.
Below we start by loading the XML document. Notice that I am selecting the load to be performed synchronously and not validation be carried out on parsing the document. Feel free to change these options if needed.
```vbscript
Sub TestXML()
  Dim XDoc As Object, root as Object
  Set XDoc = CreateObject("MSXML2.DOMDocument")
  XDoc.async = False: XDoc.validateOnParse = False
  XDoc.Load (ThisWorkbook.Path & "\test.xml")
  Set root = XDoc.DocumentElement
  '... 
End Sub
```

Alternatively load an XML from a string:
```vbscript
Sub TestXML()
  Dim XDoc As Object, root as Object
  Set XDoc = CreateObject("MSXML2.DOMDocument")
  XDoc.async = False: XDoc.validateOnParse = False
  XDoc.LoadXML ("<root><child></child></root>")
  Set root = XDoc.DocumentElement
  '... 
End Sub
```

That’s it. You have loaded the XML document into memory into the DOMDocument object. The document has been parsed and you can easily traverse the enclosed elements. See next section.

### ChildNodes

Let’s start by extracting the first list and printing it’s XML and text contents. The basics to moving around the XML DOM is using ChildNodes. 
```vbscript
Sub TestXML()
  Dim XDoc As Object
  Set XDoc = CreateObject("MSXML2.DOMDocument")
  XDoc.async = False: XDoc.validateOnParse = False
  XDoc.Load (ThisWorkbook.Path & "\test.xml")
  'Get Document Elements
  Set lists = XDoc.DocumentElement
  'Get first child ( same as ChildNodes(0) )
  Set getFirstChild = lists.FirstChild
  'Print first child XML
  Debug.Print getFirstChild.XML
  'Print first child Text
  Debug.Print getFirstChild.Text
  Set XDoc = Nothing
End Sub
```
This is the result
```vbscript
'Print first child XML
<List>
  <Name>Recon</Name>
  <TO>John;Bob;Rob;Chris</TO>
  <CC>Jane;Ashley</CC>
  <BCC>Brent</BCC>
</List>
'Print first child Text
Recon John;Bob;Rob;Chris Jane;Ashley Brent
```
  
## Traversing through the whole XML in VBA
Now that we got the basics let’s print out the whole contents of the XML DOM including the basenames (node names).
```vbscript
Sub TestXML()
Dim XDoc As Object
Set XDoc = CreateObject("MSXML2.DOMDocument")
XDoc.async = False: XDoc.validateOnParse = False
XDoc.Load (ThisWorkbook.Path & "\test.xml")
'Get Document Elements
Set lists = XDoc.DocumentElement
'Traverse all elements 2 branches deep
For Each listNode In lists.ChildNodes
  Debug.Print "---Email---"
  For Each fieldNode In listNode.ChildNodes
    Debug.Print "[" & fieldNode.BaseName & "] = [" & fieldNode.Text & "]"
  Next fieldNode
Next listNode
Set XDoc = Nothing
End Sub
```
This is the result:
```
---Email---
[Name] = [Recon]
[TO] = [John;Bob;Rob;Chris]
[CC] = [Jane;Ashley]
[BCC] = [Brent]
---Email---
[Name] = [Safety Metrics]
[TO] = [Tom;Casper]
[CC] = [Ashley]
[BCC] = [John]
---Email---
[Name] = [Performance Report]
[TO] = [Huck;Ashley]
[CC] = [Tom;Andrew]
[BCC] = [John;Seema]
```
Easy right? Using the basics above we can easily move around the document. But this still seems like a lot of coding right? Well there is an easier way of moving / extracting items using the DOMDocument object – called XPath.

## XML Document example node references
Now that we have a hang of our XML document. Let’s work on a simple example. Below an XML document assigned with references to each node/nodes:
[Example XML Document](https://analystcave.com/vba-xml-working-xml-files/)
```xml
<?xml version="1.0" encoding="utf-8"?>
<DistributionLists>
  <List>
    <Name>Recon</Name>
    <TO>John;Bob;Rob;Chris</TO>
    <CC>Jane;Ashley</CC>
    <BCC>Brent</BCC>
  </List>
  <List>
    <Name>Safety Metrics</Name>
    <TO>Tom;Casper</TO>
    <CC>Ashley</CC>
    <BCC>John</BCC>
  </List>
  <List>
    <Name>Performance Report</Name>
    <TO>Huck;Ashley</TO>
    <CC>Tom;Andrew</CC>
    <BCC>John;Seema</BCC>
  </List>
</DistributionLists>
```

## Typical Usage:
```javascript
if (Web.Application.get_type() == Web.ApplicationType.InternetExplorer) {
  var progIDs = [ 'Msxml2.DOMDocument.6.0', 'Msxml2.DOMDocument.3.0' ]; 
‘ MSXML5.0, MSXML4.0 and Msxml2.DOMDocument all have issues - be careful when using.  Details below.
  for (var i = 0; i < progIDs.length; i++)
  {
    try {
          var xmlDOM = new ActiveXObject(progIDs[i]);
           return xmlDOM;
        }
    catch (ex) {}
  }
  return null;
}
```
Additional Usage:
```
var xmlDOM = new ActiveXObject('Msxml2.DOMDocument.3.0'); ' JavScript or JScript
var xmlDOM = CreateObject('Msxml2.DOMDocument.3.0') ' VBScript
```
or
```
var xmlDOM = new ActiveXObject('Msxml2.DOMDocument.6.0'); ' JavScript or JScript
var xmlDOM = CreateObject('Msxml2.DOMDocument.6.0') ' VBScript
```
