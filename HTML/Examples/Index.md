# HTML Examples

#### Use Table to display a Date & Clock
Requires images for digits 0-9, blank, colon, am & pm. The digit & blank images should all have the same height & width for proper viewing stability. The am & pm images should also be the same size. 

- Twelve Hour Clock.html
- Twelve Hour Clock with Seconds.html
- Date & 12 Hour Clock with Seconds.html

**Note**: Image names may need to be changed, either in the script or the file name.

#### Get HKU Registry Value
```JavaScript
Function GetHKURegistryValue(entryName)
  Dim strKeyPath
  Dim strEntryName, strReadValue
  Dim strLocalDC
  Dim subKey, arrSubKeys
  Dim volatileKey
  strKeyPath = ""
  objReg.EnumKey HKU, strKeyPath, arrSubKeys
  For Each subkey In arrSubKeys
    volatileKey = subKey & "\Volatile Environment"
    objReg.GetStringValue HKU, volatileKey, "USERNAME", strReadValue
    If (strReadValue <> "") Then
      If (strReadValue = UserName) Then
        objReg.GetStringValue HKU, volatileKey, entryName, strReadValue
        MsgBox "Read current value of " & entryName & " = " & strReadValue, True
        GetHKURegistryValue = strReadValue
        Exit For
      End If
    End If
  Next
End Function
```

#### Get User Log Folder
```JavaScript
Function GetUserLogFolder(strUserName)
  Dim strKeyPath
  Dim strEntryName, strReadValue
  Dim subKey, arrSubKeys
  Dim volatileKey
  strKeyPath = ""
  objReg.EnumKey HKU, strKeyPath, arrSubKeys
'go through all user
  For Each subkey In arrSubKeys
    volatileKey = subKey & "\Volatile Environment"
    objReg.GetStringValue HKU, volatileKey, "USERNAME", strReadValue
'subkey exits
    If (strReadValue <> "") Then
'Set log folder and exit if found matched name
      If (strReadValue = strUserName) Then
        objReg.GetStringValue HKU, volatileKey, "LOCALAPPDATA", strReadValue
        GetUserLogFolder = strReadValue
        Exit For
      End If
    End If
  Next
End Function
```

### Link to Exit Page
```JavaScript
var Testing = true;
function Exit() {
  if !Testing {
    window.open("ThankYouForVisiting.html");
  }
}
```

#### Got to URL
```javascript
function go(url) {
  opener.location.href = url;
}
```

