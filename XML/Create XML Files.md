# Create an XML file

### Script to Create an XML File ( Available in [Create XML File.vbs](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Create%20XML%20File.vbs)
```vbscipt
Set xmlDoc = CreateObject("Msxml2.DOMDocument.6.0")  
 
Set objRoot = xmlDoc.CreateElement("Root")  'Once per document
xmlDoc.appendChild objRoot  
 
Set objRecord = xmlDoc.CreateElement("tag") ' Once per Entry
objRoot.appendChild objRecord
 
Set objName = xmlDoc.CreateElement("a")  ' Once for each Entry
objName.Text = "a"
objRecord.appendChild objName  
 
Set objName = xmlDoc.CreateElement("b")  ' Once for each Entry
objName.Text = "b"
objRecord.appendChild objName
 
Set objName = xmlDoc.CreateElement("c")  ' Once for each Entry
objName.Text = "c"
objRecord.appendChild objName

Set objIntro = xmlDoc.CreateProcessingInstruction("xml", "version='1.0'")
xmlDoc.InsertBefore objIntro, xmlDoc.ChildNodes(0)

' Save the document
xmlDoc.Save scriptDir & ".\Testfile.xml" 'to current directory
```

Resulting XML File: 
```xml
<Root>
  <tag>
    <a></a>
    <b></b>
    <c></c>
  </tag>
  <tag>
    <a></a>
    <b></b>
    <c></c>
  </tag>
</Root>
```

### Another Script for Creating an XML File
```vbscript
scriptDir = CreateObject("Scripting.FileSystemObject")._
            GetParentFolderName(WScript.ScriptFullName)
Set xmlDoc = CreateObject("Msxml2.DOMDocument.3.0")
Set objRoot = xmlDoc.CreateElement("config")
xmlDoc.AppendChild objRoot
Set objRecord = xmlDoc.CreateElement("modules")
objRoot.AppendChild objRecord
Set objName = xmlDoc.CreateElement("Mageweb_ShippingFilter")
objName.Text = ""
objRecord.AppendChild objName
Set objDate = xmlDoc.CreateElement("AuditDate")
objDate.Text = Date
objRecord.AppendChild objDate
Set objIntro = xmlDoc.CreateProcessingInstruction("xml", "version='1.0'")
xmlDoc.InsertBefore objIntro, xmlDoc.ChildNodes(0)
'For now there is static name of file
xmlDoc.Save scriptDir & "\Testfile.xml"
```
Resulting XML File:  
```xml
<?xml version="1.0"?>
<config>
    <modules>
        <[Variable1]_[Variable2]>
            <active>true</active>
            <codePool>[Variable3]</codePool>
            <version>[Variable4]</version>
        </[Variable1]_[Variable2]>
    </modules>
</config>
```

# Create an XML File using a Template

### Template
```xml
<?xml version="1.0"?>  
<config>
  <modules>
    <[Variable1]_[Variable2]>
      <active>true</active>
      <codePool>[Variable3]</codePool>
      <version>[Variable4]</version>
    </[Variable1]_[Variable2]>
  </modules>
</config>
```

### Script to Create XML File from the Template ( Available in file [Create_XML_File_with_Template.vbs](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Create_XML_File_with_Template.vbs) )
```vbscript
Function fnRepl(sM, nP, sS)
  fnRepl = gdX(sM)
End Function

Function mkDic(aK, aV)
  Dim tmp : Set tmp = CreateObject("Scripting.Dictionary")
  Dim i
  For i = 0 To UBound(aK)
      tmp(aK(i)) = aV(i)
  Next
  Set mkDic = tmp
 End Function

Dim gdX : Set gdX = mkDic( _
    Split("[Variable1] [Variable2] [Variable3] _
           [Variable4]"), Split("abra cada bra sesame")) 
Dim r : Set r = New RegExp
r.Global = True
r.Pattern = "\[[^\]]+\]" 
Dim sT
sT = Join(Array( _
      "<?xml version=""1.0""?>" _
    , "<config>" _
    , " <modules>" _
    , "  <[Variable1]_[Variable2]>" _
    , "   <active>true</active>" _
    , "   <codePool>[Variable3]</codePool>" _
    , "   <version>[Variable4]</version>" _
    , "  </[Variable1]_[Variable2]>" _
    , " </modules>" _
    , "</config>" _
    ), vbCrLf)
WScript.Echo sT
WScript.Echo r.Replace(sT, GetRef("fnRepl"))
```

### Resultant XML File:
```xml
<?xml version="1.0"?>
<config>
 <modules>
  <abra_cada>
   <active>true</active>
   <codePool>bra</codePool>
   <version>sesame</version>
  </abra_cada>
 </modules>
</config>
```
