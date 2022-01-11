# RegEx: Regular Expressions

## Resources

- [RegExr](https://regexr.com/)
- [RegExper](https://regexper.com/)
- [RegEx101](https://regex101.com/)

## Declare a RegEx Object
```vbscript
Dim objRegEx
Set objRegEx = New RegExp
  objRegEx.Pattern = <RegExPattern>
  objRegEx.Multiline = { True | False }
  objRegEx.IgnoreCase = { True | False }
  objRegEx.Global = { True | False }
Set objRegEx = Nothing
```


## Examples

### Common Constants & Variables
```vbscript
Const strSplitDelimREX = "([.][a-zA-Z]{1,} )|([.][a-zA-Z]{1,}" & chr(34) & "{1,} )"
Const strParamDelimREX = "^(" & chr(34) & "[A-Za-z]:\\)"
```

### Do a RegEx Compare
Requires:
- objRegEx

```vbscript
Function doRegEx(ByVal isMatch, ByVal strPattern, ByVal strInput)
' Input(s): Boolean to determine what to return, 
'           Input string to check
' Return(s) : Boolean or String based on input boolean
  Dim strMatch, varReturn
  objRegEx.Pattern = strPattern
  objRegEx.IgnoreCase = True
  If isMatch Then
    varReturn = objRegEx.Test(strInput)
  Else
    Dim regExMatches
    Set regExMatches = objRegEx.Execute(strInput)
    For Each strMatch in regExMatches
      varReturn = strMatch.Value
      Exit For ' Only care about the first match!
    Next
  End If
  doRegEx = varReturn
End Function
```

### Matches Object
Requires:
- objRegEx
- outputFile

```vbscript
Dim colMatches, Match
Set colMatches = objRegEx.Execute(<RegExQuery>)
  For Each match in colMatches
    match.Value
  Next
  colMatches.Count 
Set colMatches = Nothing
```

### Replace Text with RegEx
Requires:
- objRegEx

```vbscript
Function ReplaceText(strIn, strPattern, strReplace)
  objRegEx.Pattern = strPattern
  objRegEx.IgnoreCase = True
  ReplaceText = objRegEx.Replace(strIn, strReplace)
End Function
```

### Validate String with RegEx
Requires:
- objRegEx

```vbscript
Function ValidateString(ByVal RegX, ByVal strInput)
  Dim leftOvers
  ValidateString = True
  objRegEx.Pattern = RegX
  objRegEx.Global = True
  objRegEx.IgnoreCase = True
  leftOvers = objRegEx.Replace(strInput,"")
  If Not leftOvers = "" Then
    ValidateString = False
  End If
End Function
```

