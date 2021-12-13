# MSXML: Microsoft XML Core Services  

#### Resources:  
- API History: https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms762314(v%3dvs.85)  
- MSXML SDK: http://msdn.microsoft.com/en-us/library/ms763742(v=VS.85).aspx
- XML Standards Reference: http://go.microsoft.com/fwlink/?linkid=205245%26clcid=0x409
- https://support.microsoft.com/en-us/help/269238/list-of-microsoft-xml-parser-msxml-versions 
- https://en.wikipedia.org/wiki/MSXML 
- http://blogs.msdn.com/b/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx

Microsoft XML Core Services (MSXML) provides a comprehensive set of W3C compliant XML APIs for building high-performance XML-based applications. The detail variations, clarifications, and extensions to certain final approved web standards supported by MSXML 3.0 and MSXML 6.0.

• [MSXML SDK Overview](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms760399%28v%3dvs.85%29): Learn more about what MSXML is and how to get started using it in your applications.  
• [XML for MSXML](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms753716%28v%3dvs.85%29): Learn more MSXML-specific information about XML.  
• [XSLT for MSXML](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms759204%28v%3dvs.85%29): Learn more MSXML-specific information about XSLT.  
• [XML Schemas (XSD) for MSXML](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms755479%28v%3dvs.85%29): Learn more MSXML-specific information about XML Schemas (XSD).  
• DOM: Learn more about the DOM is and how to use the MSXML implementation of it in your applications.  
• [Helper APIs for MSXML](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms754641%28v%3dvs.85%29): Learn more about APIs that the MSXML implementation provides to help with DOM and other XML related APIs.  
• [SAX2](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms762776%28v%3dvs.85%29): Learn more about what the SAX is and how to use the MSXML implementation of it in your applications.  
• [SOM](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms761367%28v%3dvs.85%29): Learn more about the support for SOM available in MSXML 4.0.  
  
MSXML provides a set of services that allow customers who use JScript, VBScript and Microsoft Visual Studio (2005 and later versions) to build high-performance XML based applications that provide a high level of interoperability with other applications that adhere to the XML 1.0 standard.  

MSXML APIs are exposed programmatically as [Component Object Model (COM)](http://msdn.microsoft.com/library/ms680573(vs.85).aspx) objects. Developers can program against MSXML objects from C++ or from scripting languages such as JScript and VBScript. Like all COM components, MSXML objects are programmatically instantiated by CLSID or ProgID. Each version of MSXML exposes its own set of CLSIDs and ProgIDs. Different versions of MSXML support slightly different sets of functionality. Later sections describe different MSXML versions.  

Microsoft XML Core Services (MSXML) allows customers to build high-performance XML-based applications that provide a high degree of interoperability with other applications that adhere to the XML 1.0 standard.  

Among the core services MSXML provides is developer support for the following:  

• The Document Object Model (DOM), a standard library of application programming interfaces (APIs) for accessing XML documents.  
• Helper APIs to assist with programming for the XML namespace or the HyperText Transfer Protocol (HTTP) when it is used to send data directly between Web servers.  
• XML Schema Definition (XSD). Earlier MSXML versions such as MSXML 3.0, 4.0, and 5.0 as support the XML Data Reduced schema definition language (XDR), which was introduced by Microsoft to support XML schema working needs before XSD became a W3C standard. Support for XDR is removed from MSXML 6.0.  
• The Simple API for XML (SAX), a programmatic alternative to DOM-based processing.  
• The Schema Object Model (SOM), an additional set of APIs for accessing XML Schema documents programmatically that was available in MSXML 4.0 and later.  

XML Digital Signatures support, which provides the ability to sign and verify XML document data through digital encryption. This support is only available in MSXML 5.0 for Microsoft Office Applications.

### MSXML Releases  
[Using the right version of MSXML in Internet Explorer](http://blogs.msdn.com/xmlteam/archive/2006/10/23/using-the-right-version-of-msxml-in-internet-explorer.aspx)  
Refer to List of Microsoft XML Parser (MSXML) versions for detailed information, including version numbers for each release.  

File: `msxml?.dll` where ? is blank, 3, 4, 5, & 6 for each respective version.  

| Version | Ships With | Notes |  
| ---- | ---- | ---- |  
| MSXML 1.0 | Internet Explorer 4.0  | ---- |  
| MSXML 2.0 | Internet Explorer 5.0 | CLSIDs and ProgIDs that this version exposed have been subsumed by MSXML 3.0. |  
| MSXML 2.5 | Internet Explorer 5.01 and MDAC 2.5. | CLSIDs and ProgIDs that this version exposed have been subsumed by MSXML 3.0. |  
| MSXML 2.6 | Microsoft SQL Server 2000 and MDAC 2.6. | ---- |  
| MSXML 3.0 | All supported Microsoft Windows operating systems | MSXML 3.0 is the most broadly deployed version of MSXML. It contains several browser-based technologies for backward compatibility and legacy support. When MSXML 6.0 is not available MSXML 3.0 is generally the best fallback version, even though it does not support all of the same features as MSXML 6.0. <BR> The lifecycle and service mode of MSXML 3.0 is subject to the hosting Microsoft Windows operating system. For more information, see [Microsoft Help and Support](http://support.microsoft.com/select/?target=hub). <br> **Use this version as fallback.** |  
| MSXML 4.0 | Shipped as an independent web release to add features and improve performance. | Support ended April 2014; superseded by MSXML 6.0. Customers must upgrade their applications that use MSXML 4.0 to use MSXML 6.0 instead to remain secure. <BR> **Do not use – it can’t be guaranteed to be installed.** |  
| MSXML 5.0 | Microsoft Office 2003 Microsoft Office 2007 | Originally designed specifically for applications targeting the Microsoft Office product family. Use outside of Microsoft Office products is not recommended. The lifecycle and service mode for MSXML 5.0 is subject to the Microsoft Office product it was shipped with. For more information about lifecycle of Microsoft Office products, see [Microsoft Help and Support](http://support.microsoft.com/select/?target=hub) <BR> **Do not use – it can’t be guaranteed to be installed; for Microsoft Office Applications was targeted specifically at Office scenarios** |  
| MSXML 6.0 | Shipped as an in-box component on Microsoft Windows XP SP3, Microsoft Windows Vista, and later operating systems. It was also shipped as a web release to support redistribution on Microsoft Windows XP SP2 and Windows Server 2003 SP1. Download MSXML 6.0 for these systems from the [Microsoft download center](http://www.microsoft.com/downloads/details.aspx?familyid=d21c292c-368b-4ce1-9dab-3e9827b70604%26displaylang=en) | MSXML 6.0 is the latest MSXML product from Microsoft. It provides improved W3C compliance and increased compatibility with System.XML in Microsoft .Net Framework. The lifecycle and service mode of MSXML 6.0 is subject to the hosting Microsoft Windows OS. For more information about the Windows Operating System lifecycle, see [Microsoft Help and Support](http://support.microsoft.com/select/?target=hub). <BR> **Use this version first.** |  

## MSXML with Internet Explorer
By default, Internet Explorer (IE) performs **XSL transformation** through MIME viewer. For IE8 and earlier versions, **MSXML 3.0** provides the underlying MIME view and XSL processor. Starting with IE9, IE switches to its own MIME viewer and uses **MSXML 6.0** as underlying XSL processor for applying style sheet templates.  

Another scenario that invokes MSXML in IE is when applications calls responseXML from XMLHttpRequest Object, IE returns an **MSXML 3.0 DOM** object so that the application can use features in **MSXML 3.0** to parse the result.  

To use features of non-default versions of MSXML from within Internet Explorer you must use scripting, when an XML DOM object is instantiated using the appropriate version-specific ProgID.  

For more information, see [Initiate XSLT in a Script](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms762796%28v%3dvs.85%29).  

**Try MSXML6 and fallback to MSXML3:**  MSXML6 has some improvements that aren’t in **MSXML3** such as support for XSD schema, and improved stability, performance, and security.  So your app may try out **MSXML6** if it is on the box and then “fallback” gracefully.  Just remember to test your app with **MSXML6** and with **MSXML3** so you aren’t surprised when you release your application.  Here’s a quick example:

```vbscript
if (Web.Application.get_type() == Web.ApplicationType.InternetExplorer) {
  var progIDs = [ 'Msxml2.DOMDocument.6.0', 'Msxml2.DOMDocument.3.0'];
  for (var i = 0; i < progIDs.length; i++) {
    try {
      var xmlDOM = new ActiveXObject(progIDs[i]);
      return xmlDOM;
    }
    catch (ex){
    }
  }
  return null;
}
```

To switch **MSXML3** to the standard **XPath 1.0** query language set the second-level DOM property Selection Language like this - `xmlDoc.setProperty("SelectionLanguage", "XPath");` see our SDK for more details.

##  CLASS_IDs, GUIDs, and ProgIds
                                     
- ProgIDs: http://windowssdk.msdn.microsoft.com/en-gb/library/ms764622.aspx 

When you create a COM or ActiveX object such as MSXML, you must identify exactly which control you want to create. In the case of MSXML, which has multiple versions, you must create the instance of your control in such a way that you get the correct version of the control that you need. First, you need to know some basic information about how ActiveX controls and COM objects work.  

An ActiveX control is definitively identified by a GUID, which is a very large unique number that is assigned to the control. It is most often expressed as a hexadecimal number. An example of a GUID is 88d96a05-f192-11d4-a65f-0040963251e5. Sometimes the GUID is referred to as the ClassID of the control. However, it is inconvenient to use the GUID to identify and create the control. Instead, there are two other ways to refer to an ActiveX control: 

  - When you are using a scripting language, you can identify the control via its ProgID, which is a form that is quite a bit easier to read by a human. An example of a ProgID is Msxml2.DOMDocument.6.0.  
  - When you are using C++, you can create the control via its symbolic name. This is a name that is defined as a macro in a header file. An example of a symbolic name is CLSID_DOMDocument60. If you use that symbolic name in your C++ program, it resolves to the GUID of the control.  

When you install an ActiveX or COM control, Windows Registry entries are created that identify the correspondence between a GUID, a ProgID, and the location of the component.  

If you are using a scripting language such as JScript or VBScript, when you create your control, the scripting engine will take the ProgID that you specify, look up the GUID in the registry, and create the correct control using its GUID.  
For more details, see [GUID and ProgID Information](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms757837%28v%3dvs.85%29).

## XML DOM Objects  

XML DOM objects. You can use these objects to work with any XML file. Working with these objects requires more efforts and knowledge of XML DOM. However, we suggest that you use these objects to work with XML files.  
                                     
To work with arbitrary XML files, you can use XML DOM objects. These objects provide a COM interface to each element and attribute of the XML document. All interactions with XML files are done through Microsoft XML Core Services (MSXML):  
                                     
• If you have MSXML 3: Msxml2.DOMDocument.3.0  
• If you have MSXML 6: Msxml2.DOMDocument.6.0  
                                     
**Note**: When loading XML files with a document type declaration, you may face the "DTD is prohibited" error. If it happens, modify your script and add a string that will disable the ProhibitDTD property of the created COM object:
                                     
To start working with XML files, create a COM object:
| Language | Script Example |
| ---- | ---- | 
| JavaScript | `var Doc = getActiveXObject("Msxml2.DOMDocument.6.0");` <br> `Doc.setProperty("ProhibitDTD", false);` <br> `Doc.load(".\Data.xml");` | 
| JScript | `eateObject("Msxml2.DOMDocument.6.0");` <br> `Doc.setProperty("ProhibitDTD", false);` <br> `Doc.load(".\Data.xml")` var Doc = Cr;` | 
| Python | `Doc = CreateObject["Msxml2.DOMDocument.6.0"]` <br> `Doc.setProperty("ProhibitDTD",False)` <br> `Doc.load(".\Data.xml")` | 
| VBScript | `Set Doc = CreateObject("Msxml2.DOMDocument.6.0")` <br> `Doc.setProperty("ProhibitDTD", False)` <br> `Doc.load( ".\Data.xml" )` | 

After the file is loaded, you can start processing it in a way you need. 
| Version | Call with |  
| ---- | ---- |  
| Microsoft XML, v6.0 | `MSXML2.DOMDocument60`  |  
| Microsoft XML, v3.0 | `MSXML2.DOMDocument30` <BR> `MSXML2.DOMDocument` |  
	
**Note**: Win10 Professional has all four typically in the SYSWOW64 directory.

| Object Name | MSXML 3.0 | MSXML 6.0 |  
| ---- | ---- | ---- |  
| DOMDocument | CLSID_DOMDocument <br> CLSID_DOMDocument30 | CLSID_DOMDocument60 |  
| FreeThreadedDOMDocument | CLSID_FreeThreadedDOMDocument30 <br> CLSID_FreeThreadedDOMDocument | CLSID_FreeThreadedDOMDocument60 |  
| DSOControl | CLSID_DSOControl <br>  CLSID_DSOControl30 | CLSID_DSOControl60 |  
| XMLSchemaCache | CLSID_XMLSchemaCache <br>  CLSID_XMLSchemaCache30 | CLSID_XMLSchemaCache60 |  
| XSLTemplate | CLSID_XSLTemplate <br> CLSID_XSLTemplate30 | CLSID_XSLTemplate60 |  
| MXHTMLWriter |  | CLSID_MXHTMLWriter60 |  
| MXNamespaceManager |  | CLSID_MXNamespaceManager60 |  
| MXXMLWriter |  | CLSID_MXXMLWriter60 |  
| SAXAttributes |  | CLSID_SAXAttributes60 |  
| SAXXMLReader |  | CLSID_SAXXMLReader60 |  
| XMLHTTP | CLSID_XMLHTTP<br> CLSID_XMLHTTP30 | CLSID_XMLHTTP60
| ServerXMLHTTP |  | CLSID_ServerXMLHTTP60 | 
                                                                        
## MSXML Windows SDK
The overview section provides information on MSXML versions 3.0 through 6.0. All other sections are specific to MSXML 3.0 and 6.0 which are release in box with Windows.

Note that information about the various XML standards that relate to MSXML, but are not specific to Microsoft, is now available in the XMLdocumentation, which is separate from the MSXML SDK.

Declare your new document in VBScript as follows:
```vbscript
Set xmlDoc = CreateObject("Msxml2.DOMDocument.6.0")
```
or
```vbscript
Set xmlDoc = CreateObject("Msxml2.DOMDocument.3.0")
```
For Microsoft® Visual Basic® and C or C++ programmers, the IXMLDOMDocument interface exposes the same members as the DOMDocument object. The IXMLDOMDocument interface also implements standard COM interfaces such as IPersistStreamInit, IPersistMoniker, and IStream. See Also [IXMLDOMDocument to DOMDocument](https://docs.microsoft.com/en-us/previous-versions/windows/desktop/ms756987%28v%3dvs.85%29)

