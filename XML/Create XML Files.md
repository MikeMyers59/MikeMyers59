# Create an XML file


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

### Script to Create XML File from the Template ( Available in file [Create_XML_File_with_Template.vbs]() )
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
