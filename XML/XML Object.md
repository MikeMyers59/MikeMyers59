# XML Object 

The XML document will provide you with the root of the entire DOM (of type `XDoc.DocumentElement`). Each DocumentElement (XML DOM node) facilitates the following node references:

- [W3Schools DOM Node](https://www.w3schools.com/xml/dom_node.asp)

**This page assumes:**  
	• The XML file was loaded as follows:
  
```VBSCript
  Set xmlDoc = CreateObject("msxml2.DOMDocument.6.0")
  xmlDoc.async = false
  xmlDoc.load ".\books.xml"                   ' Load the XML Data File
```

• Index starts at 0 for all properties.  
• xmlDoc can be replaced by a different variable name for node lists such as xmlNodeList, or any other way at the programmer's discretion. 
Addressing the XML data example:

```vbscript
txt = xmlDoc.getElementsByTagName("title")(0).childNodes(0).text
xmlDoc.getElementsByTagName("title")(0).childNodes
```

## Properties

| Property | Description | MSXML 3.0 | MSXML 6.0 |  
| ---- | ---- | :----: | :----: |  
| async = [True  \|  False ] |  True – allows processing to start early [Default] <BR> False – prevents further processing until load is completed <BR> Load entire Document before moving on, usage: <XMLObjectName>.async = False <br> `Set objXMLDoc = CreateObject("Microsoft.XMLDOM")`  <BR> `objXMLDoc.async = False` |   |   |  
| attributes | the attributes nodes  |   |   |  
| documentElement | Set Root = objXMLDoc.documentElement |   |   |  
| firstChild | the first child node, first node lower in the DOM hierarchy | | |  
| GetAtribute(<intIndex>) | returns an attribute's value | | |  
| lastChild <XDoc.DocumentElement> | the last child node, last node lower in the DOM hierarchy | | |  
| length | the number of nodes in a list | | |  
| nextSibling | next sibling node i.e. node on the same level in the DOM hierarchy, having the same parent node  | | |  
| nodeName | the name <br> * nodeName is read-only <BR> * nodeName of an element node is the same as the tag name <BR> * nodeName of an attribute node is the attribute name <BR> * nodeName of a text node is always #text <BR> * nodeName of the document node is always #document   | | |  
| nodeValue | the value <BR> * nodeValue for element nodes is undefined  <BR> * nodeValue for text nodes is the text itself  <BR> * nodeValue for attribute nodes is the attribute value  | N/A | |  
| parentNode | the parent node, one node higher in the DOM hierarchy | | |  
| previousSibling <XDoc.DocumentElement> | previous sibling node i.e. node on the same level in the DOM hierarchy, having the same parent node | | |  
| text | the value <br> * text - the value of the node (the text itself) for MSXML 2.0 & 3.0  | Y | Y |  
| validateOnParse | Don't Validate, usage: <br> `<XMLObjectName>.validateOnParse = False` <BR> `xmldoc.validateOnParse = true;` | | |  
| xml | XML file formatted, usage: `MsgBox <XMLObjectName>.XML` | Y | |  


## Methods

| Method | Description | MSXML 3.0 | MSXML 6.0 |  
| ---- | ---- | :----: | :----: |  
| appendChild(\<xmlNode>)|insert a child node |Y| |  
| createElement(\<intIndex>)| ` Set objRoot = xmlDoc.CreateElement("config")` | | |  
| createProcessingInstruction(\<strProcess>, \<strVersion>)| `Set objIntro = xmlDoc.CreateProcessingInstruction("xml", "version='1.0'")` | | 
| getAttributeNode(\<strAtributeName>)|returns an attribute node| | 
| getElementsByTagName(<strElementName>) | `getElementsByTagName("title")(0)` - get the first <title> element For MSXML 6.0 <BR> `Set NodeList = Root.getElementsByTagName("interface")` <br>get all elements with a specified tag name| N/A | |
| insertBefore \<objNode>, \<objLocationNode>| `xmlDoc.InsertBefore objIntro, xmlDoc.ChildNodes(0)`  | |  
| load(\<strFileName>)|Load an XML file into the XML Parser| | |  
| loadXML(\<strFileName>)| | | |  
| removeChild(\<xmlNode>)|remove a child node |Y| |  
| save \<strPathFileName>| `xmlDoc.Save scriptDir & "\Testfile.xml"` | | |  
| selectSingleNode(\<strElementTree>)| `Set node = xmlDoc.selectSingleNode("//a2")` | | |  


Key to this table: 
  
- xmlDoc - the XML DOM object created by the parser; name used by programmer may differ.    
- \<intIndex> - Index that starts at 0 for the first node; for JavaScript & Jscript indexing use the [ & ] instead of the ( & ).  
