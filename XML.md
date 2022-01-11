# Extensible Markup Language (XML)

**Adriaan Westra**
- [Save information to an XML file](http://www.westphil.nl/systemadministration/vbscript/index.php?name=createxml)
- [Get information from an XML file](http://www.westphil.nl/systemadministration/vbscript/index.php?name=getxmlelement)

**Microsoft** 
-	[Access Typed XML Values](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms753712%28v%3dvs.85%29)  
-	[Author XML Data Islands](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms763762%28v%3dvs.85%29)  
-	[Author XML Documents](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms757020%28v%3dvs.85%29)
- [Author XML Elements](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms766385%28v%3dvs.85%29)  
-	[Author XML Schemas](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms760255%28v%3dvs.85%29)  
- [XML Document Map](https://docs.microsoft.com/en-us/previous-versions//ms256153(v=vs.85))  
- [XML DOM](https://docs.microsoft.com/en-us/previous-versions/aa468547(v=msdn.10))  
- [XML Extended Data Type](https://docs.microsoft.com/en-us/previous-versions/dynamics/ax-2012/reference/gg920029(v=ax.60))
- [XPath Reference](http://msdn.microsoft.com/en-us/library/ms256115(v=vs.110).aspx)
-	[Use Data Types Within XML Documents](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms764635%28v%3dvs.85%29)  
-	[Use the C++ XML Data Source Object](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms763816%28v%3dvs.85%29)  
-	[Use the Master/Detail Feature with the C++ XML Data Source Object](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms755618%28v%3dvs.85%29)  
-	[Use the XML Object Model](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms759093%28v%3dvs.85%29)  
-	[Use XML Namespaces](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms754539%28v%3dvs.85%29)  

**Note**: Some of the tutorials demonstrate common Extensible Markup Language (XML) authoring and development tasks. You will be able to read the lessons in Windows® Internet Explorer and other browsers, but the interactive elements and demos require Internet Explorer.  

**PC Magazine**
- [PC Mag (XML)](www.pcmag.com/xml/)   

**QuackIt**
- [XML/DTD/XSLT/XPath Documents](https://www.quackit.com/xml/tutorial/xml_documents.cfm)  

**W3Schools**:  
- [XML](http://w3schools.sinsixx.com/xml/default.asp.htm)  
- [XSLT](http://www.w3schools.com/xsl/default.asp)  

**Wikipedia**
- [XUL](https://en.wikipedia.org/wiki/XUL) XML User Interface Language for Mozilla cross-platform applications that resembles the mechanism of HTML Applications.  
- [XULRunner](https://en.wikipedia.org/wiki/XULRunner) - an environment for Mozilla cross-platform applications that resembles the mechanism of HTML Applications.  

**[XML FIles](http://www.xmlfiles.com/)**  

**[XML Design Patterns](http://xmlpatterns.com/)** - very interesting info for developers.  

**[XML Everywhere](http://www.xmleverywhere.com/)** - XML applications, news, and links.  

**[SitePoint](http://www.sitepoint.com/cat/xml)**, XML/XSLT/Web services section - nice articles.  


**[ZVon](http://www.zvon.org/)**
- tutorials, references, [tools](http://www.zvon.org/index.php?nav_id=tools&mime=html), and [examples repository](http://www.zvon.org/HowTo/Output/index.html).  

**[Extensible Markup Language (XML)](https://www.xml.com/)** is a simple flexible text format that can be used as the basis for creating new markup languages that can be used in document publishing and data exchange. XML is based on a series recommendations published by the working groups of the World Wide Web Consortium (W3C) and is therefore well suited (though not limited) to use in Web-based applications.  
-	XML was created by the W3C to provide data exchange, mindshare and overcome the limitations of HTML.  
-	XML describes a class of data objects called XML documents which are stored on computers, and partially describes the behavior of programs which process these objects.  
-	XML is a set of rules for defining semantic tags that break a document into parts and identify the different parts of the document.  
-	XML documents are made up of storage units called entities, which contain either text (character data and markup) or binary data.   
-	XML provides a mechanism to impose constraints on the storage layout and logical structure of documents.  
-	XML allows various professions (e.g. music, chemistry, math) to develop their own domain-specific markup languages allowing individuals in the field to exchange information independently of hardware and software.  
-	XML is ideal for large and complex documents because the data is structured allowing the user to specify a vocabulary that defines the elements in the document as well as the relationship between the elements. This makes it easier to integrate XML documents with applications.  

XML is not designed to stand alone as a solution to enterprise data needs. In order to use XML effectively, most applications will need to rely on a number of complementary technologies. For this example, I will use to use an XML data file and provide some insight into the uses of XML.  
XML is a cross-platform standard and can be executed in a number of environments. However, due to the immaturity of XML tools at the time of this writing, it is difficult to use XML anywhere except within a server-based solution. To keep these examples simple, this sample application will use the Microsoft XML parser and output the results within HTML files you can run on your machine. I chose this combination because the only requirements for these examples will be the Microsoft Internet Explorer 5 browser (which includes the XML parser). These samples can easily be placed on any server platform and output as standard HTML for delivery to any client. For instance, the code will require very little modification to use the Sun Java parser within a Java servlet.  
Information in XML format is typically referred to as a document. XML documents are made up of storage units called entities, which contain either text (character data and markup) or binary data.   
The ability to combine data with information describing its structure makes XML so incredibly useful as a data exchange technology. XML is ideal for large and complex documents because the data is structured allowing the user to specify a vocabulary that defines the elements in the document as well as the relationship between the elements.  

## XML differs from HTML in three major respects  
-	Information providers can define new tag and attribute names at will  
-	Document structures can be nested to any level of complexity  
-	Any XML document can contain an optional description of its grammar for use by applications that need to perform structural validation  

Current Web-based search engines search based on the content of HTML tags. This may result in the search engine returning thousands or even hundreds of thousands of hits. With XML, search engines will be able to search on unambiguous tags which will allow the search engine to only return meaningful results.  
Every XML document consists of a logical structure and a physical structure. They may be the same.  
-	**Logical structure** - Hierarchy of information based on a single root element  
-	**Physical structure** - A single logical XML document can be made up of a number of distinct entities  

These entities can reside on different computers at different locations  

    ### Advantages of XML:  
    -	Create your own tags to describe your content  
    -	Easy to create structured documents  
    -	To describe, deliver, and exchange structure data between applications  
    -	Hardware/software independent  
    -	More powerful than HTML  
    -	Less complicated than SGML  

    ### Benefits of XML:  
    -	More meaningful searches  
    -	Separation of content and format  
    -	Development of flexible Web applications  
    -	Open standards  
    -	Flexible format for different use  
      o	Wire format for Web delivery  
      o	Transfer format for sharing data  
      o	Persistent data format for disk storage  

A **well-formed XML document** is syntactically correct according to XML 1.0 standards.  

A **valid XML document** is also well-formed and will validate against the DTD.  

## XML does not stand alone  
XML is not a single standard, it consists of four core standards as well as numerous other standards. The core standards are:  

![XML 01](MikeMyers59/MikeMyers59/Pics/XML 01.png)

-	**eXtensible Markup Language (XML)** which contains the rules for describing the structure of XML documents 
      XML is based on truly international standards:  
      -	XML is derived from SGML (ISO 8879)  
      -	XSL is derived from DSSSL (IO/IEC 10179)  
        o	CSS - Cascading Style Sheets  
        o	XLL is derived from HyTime (ISO/IEC 10744)  
        o	TEI - Text Encoding Initiative  
-	**Document Object Model (DOM)** which contains the rules for interfacing the components of XML documents with other applications.  
-	**eXtensible Linking Language (XLL)** which contains the rules for linking XML documents; XLL actually consists of four components:  
    o	**XPointer**  
    o	**XLink**  
    o	**XML Path Language (XPath)** 1.0, a current W3C XML standard used by XSLT and other XML programming vocabularies to query and filter data stored in XML documents  
    o	**XInclude**  
-	**eXtensible Query Language (XQL)**  
-	**eXtensible Stylesheet Language (XSL)** & **Extensible Stylesheet Language Transformations (XSLT)** , a current W3C XML style sheet language standard. XSLT is recommended for transforming XML documents.  
-	**XML Schema definition language (XSD)** which contains the rules for presenting XML documents. XML Schemas can be used to validate other XML documents.  

As the Web evolves from its current status as an information repository to a vehicle for business-to-business and business-to-consumer electronic commerce, XML allows developers to build flexible standards-based Web applications which will support this evolution.  
**NOTE**: XML Queries are case sensitive, so capitalization must match the XML tags exactly. The part of the query between parentheses is a list of choices, separated by "pipe" characters (\|). 

### Document Structure
![XML 03](MikeMyers59/MikeMyers59/Pics/XML 03.png) 
Current structure of typical paper/electronic document.  
A document can be broken into four separate components.   
-	Content contains the actual document text, the implicit or explicit rules for processing that data, and the actual context of pieces or text relating to the document as a whole.  
-	Presentation references how the document will be presented to users or applications.  
-	References contain links to other documents.  

Interface provides the rules for interfacing the document with applications.  

### XML Document Structure
![XML 04](MikeMyers59/MikeMyers59/Pics/XML 04.png)
-	Processing Instructions
-	Elements
-	Entity References
-	Comments

## Using the XML Data  
The XML processor or parser separates the information embedded in tags from the actual tags and feeds this to an application. For example, <Name>John Doe</Name>, after parsing, “John Doe” would be fed to the XML application.  
In addition, the XML parsers check the XML document for syntactical correctness (well-formedness) and optional validates the document against an associated DTD.
Currently there are several low and no-cost XML parsers available.  
The XML application is any application which processes parsed XML data as input or produces an XML document or documents as output.  

![XML 02](MikeMyers59/MikeMyers59/Pics/XML 02.png)  

### Creating an XML File  
Typical Order of an XML File Creation  
1.	CreateProcessing Instruction()  
2.	InsertBefore   
3.	Create Root   
  a.	CreateElement()  
  b.	AppendChild <objRootNode>  
4.	Create Child Nodes, repeat these steps for all new elements  
  a.	CreateElement()  
  b.	AppendChild <objChildNode>  
5.	Save the File   

## Examples

### Common Constants &Variables  
```vbscript  
Dim strFilePathName as String, _
  strXpath as String, strQuery as String
strFilePathName = "D:\someplace\somefile.xml"
' XPath: Using Root Collection with Child DVD:
strXPath = "/Collection/DVD "
' Query Root Collection with Child DVD and 
' SubChild Title as follows
strQuery = "/Collection/DVD/Title"
' For showing two of DVD’s subchilds Title & Genres:
strQuery = "/Collection/DVD/ ( Title | Genres )"
```  

### Documents  
```vbscript
Dim objXMLDoc As Object
' for msxml ver 2
Set objXMLDoc = CreateObject("Microsoft.XMLDOM")
' for msxml ver 3
Set variable_name = CreateObject("MSXML2.DOMDocument")
' Enable reference to Microsoft XML 6.0 to use: 
'  MSXML2.DOMDocument 
Dim objXMLDoc As New MSXML2.DOMDocument
Set objXMLDoc = CreateObject("MSXML2.DOMDocument")
```  
### Nodes  
Requires:  
- objXMLDoc  
- strQuery  

```vbscript
Dim colNodes as Object, objNode as Object
Set colNodes = objXMLDoc.selectNodes( strQuery )
For Each objNode in colNodes
 <VBCommands>
Next
```  
### Load an XML File  
Requires:  
- objXMLDoc  

```vbscript  
Sub LoadXMLFile(FileName as String)
 objXMLDoc.Async = False
 objXMLDoc.Load(FileName)
 If (objXMLDoc.parseError.errorCode <> 0) Then
  Set oErr = objXMLDoc.ParseError
  WScript.Echo "Could not load file " & sFilePath _
    & " , error: " & oErr.Reason
  WScript.Quit
 End If
 MsgBox objXMLDoc.xml
 <VBCommands> ' Process the data
End Sub
```  

### Looping Through Nodes  
Requires:  
- objXMLDoc  
- strXPath  

```vbscript  
Dim objNames, obj
Set objNames = objXMLDoc.DocumentElement.SelectNodes(strXPath)
For Each obj in objNames
 with obj
  <VBCommands>
 end with
Next
```  

### Merge XML Documents  
Requires:  
- objXMLDoc  

```vbscript  
Sub MergeXML()
 Dim objXml2 As New MSXML2.DOMDocument
 objXMLDoc.loadXML ("<SomeRootElement><Input></Input></SomeRootElement>")
 objXmlDoc2.loadXML ("<Output><SomeElement></SomeElement></Output>")
 objXMLDoc.FirstChild.appendChild objXmlDoc2.selectSingleNode("//Output")
 objXMLDoc.Save ("c:\NewXml.xml")
 Set objXmlDoc2 = Nothing
 Set objXMLDoc = Nothing
End Sub
```  

### Get the elements matching the tag  
Requires:  
- objXMLDoc  

```vbscript  
Dim objElements as Object, el as Object
Set objElements = objXMLDoc.getElementsByTagName(<ElementName>)
' ## Iterate over the elements and print their 
' Text property
For Each el In objElements
 <VBCommands>
Next
```  

