'Create an XML File using a Template:
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
     Split("[Variable1] [Variable2] [Variable3]") _
   , Split("abra cadabra sesame") _
) 
Dim r : Set r = New RegExp
r.Global = True
r.Pattern = "\[[^\]]+\]" 
Dim sT : sT = Join(Array( _
      "<?xml version=""1.0""?>" _
    , "<config>" _
    , " <modules>" _
    , "  <[Variable1]>" _
    , "   <active>true</active>" _
    , "   <codePool>[Variable2]</codePool>" _
    , "   <version>[Variable3]</version>" _
    , "  </[Variable1]>" _
    , " </modules>" _
    , "</config>" _
    ), vbCrLf)

WScript.Echo sT
WScript.Echo r.Replace(sT, GetRef("fnRepl"))