# XML Document Object 

## XML Document
```vbscript
Dim objXmlDoc
Set objXmlDoc = CreateObject("Msxml2.DOMDocument")
  objXmlDoc.loadXML(<FileName>)
Set objXmlDoc = Nothing
```

## Child Nodes Collection
```vbscript
Dim colChildNodes, objNode
Set colChildNodes = objXmlDoc.selectNodes(<NodeCollectionDescription>)
  For Each objNode In colChildNodes
    objNode.text
  Next
Set colChildNodes = Nothing
```

## Node List
```vbscript
Dim objNodeList
Set objNodeList = objXmlDoc.getElementsByTagName(LCase(<NodeName>))
  objNodeList.length
  objNodeList.item(0).text
```

