# Registry

#### Constants
```vbscript
Const HKEY_CLASSES_ROOT   = &H80000000
Const HKEY_CURRENT_USER   = &H80000001
Const HKEY_LOCAL_MACHINE  = &H80000002
Const HKEY_USERS          = &H80000003
Const HKEY_CURRENT_CONFIG = &H80000005
Const REG_SZ       = 1
Const REG_EXPAND_SZ    = 2
Const REG_BINARY     = 3
Const REG_DWORD      = 4
Const REG_MULTI_SZ    = 7
Const RegSz = "REG_SZ"
Const RegExpSz = "REG_EXPAND_SZ"
Const RegMultSz = "REG_MULTI_SZ"
```

#### Variables
```vbscript
Dim arrPaths
arrPaths = Array()
arrPaths = Split(<KeyPath>,";")
Dim regProxyKey
regProxyKey = "\Software\Microsoft\Windows\CurrentVersion\Internet Settings" ' example for Internet Setting
Dim regProxyVal
regProxyVal = "ProxyOverride"
```

## Create Registry Object

### Registry Object
Requires:
- strComputer
- strImpersonate

```vbscript
Dim objReg as Object
Set objReg = GetObject("winmgmts:" & strImpersonate & "!\\" & strComputer & "\root\default:StdRegProv")
Set objReg = 
GetObject("winmgmts:\\.\root\default:StdRegProv")
Set objReg = Nothing
```

### Adapters
```vbscript
Dim strKeyPath, adapterSet, adapter
objReg.EnumKey HKEY_LOCAL_MACHINE, strKeyPath, adapterSet
  For Each adapter In adapterSet
    <VBCommands>
  Next
Dim adapterDetailNames, adapterDetailRegValNames
adapterDetailNames = Array("Driver Description", "Adapter Guid", "Hardware ID", "Driver Date", "Driver Version", "Driver Provider")
adapterDetailRegValNames = Array("DriverDesc", "NetCfgInstanceId", "MatchingDeviceId", "DriverDate", "DriverVersion", "ProviderName")
```

## Functions

### Does the Key Exist 
Requires:
- objReg

```vbscript
Function KeyExists(ByVal strHive, ByVal strKeyPath)
' Checks for existence of a registry key
 Dim arrSubKeys
 If objReg.EnumKey(strHive, strKeyPath, arrSubKeys) = 0 Then
  KeyExists = True
 Else
  KeyExists = False
 End If
End Function
```

### Delete Registry Key
Requires:
- objReg
- HKEY_CLASSES_ROOT
- HKEY_CURRENT_USER
- HKEY_LOCAL_MACHINE
- HKEY_USERS
- HKEY_CURRENT_CONFIG
```vbscript
Function DeleteReg(ByVal action, ByVal strHive, ByVal strKeyPath, ByVal strValueName)
'* Function to delete registry keys or values *
'* Options:                  *
'*  KEY = To delete a registry key     *
'*  VALUE = To delete a registry value   *
 Select Case strHive
  Case "HKCR"
   strHive = HKEY_CLASSES_ROOT
  Case "HKCU"
   strHive = HKEY_CURRENT_USER
  Case "HKLM"
   strHive = HKEY_LOCAL_MACHINE
  Case "HKUS"
   strHive = HKEY_USERS
  Case "HKCC"
   strHive = HKEY_CURRENT_CONFIG
 End Select
 If KeyExists(strHive, strKeyPath) Then
  Select Case UCase(action)
   Case "KEY"
    objReg.DeleteKey strHive, strKeyPath
   Case "VALUE"
    objReg.DeleteValue strHive, strKeyPath, strValueName
  End Select
 End If
End Function
```

### Registry Values Match
Requires:
- objReg
- GetHiveName
- InprocServer32 
- JRECurPath
```vbscript
Function ValueMatch(ByVal strHive, ByVal strKeyPath, ByVal strVal, ByVal strSearch)
'* Function to search the registry and add  *
'* Java plugins to an array         *
'* Input(s): Hive constant, Key path, Value, *
'* Search string               *
'* Output(s): Arrays based on keys found   *
 Dim hiveName, strValText, arrSubKeys, _
   Subkey, valueVer, strValPath, value
 hiveName = GetHiveName(strHive)
 If strVal = "" Then
  strValText = "(Default)"
 Else
  strValText = strVal
 End If
 WScript.Echo("Searching registry >> KEY: " & hiveName & "\" & strKeyPath & "\" & " >> VALUE: " & strValText & " >> STRING: " & strSearch & vbLf)
 objReg.EnumKey strHive, strKeyPath, arrSubKeys
 For Each Subkey In arrSubKeys
  objReg.getStringValue strHive, strKeyPath & "\" & Subkey, "", valueVer
  WScript.Echo(valueVer)
  ReDim Preserve arrJavaUsrVer(UBound(arrJavaUsrVer) + 1)
  arrJavaUsrVer(UBound(arrJavaUsrVer)) = valueVer
  strValPath = strKeyPath & "\" & Subkey & "\" & InprocServer32
  WScript.Echo(strValPath)
  objReg.getStringValue strHive, strValPath, "", value
  value = Replace(value, JRECurPath & "\bin\", "")
  WScript.Echo(strValText & " = " & value & vbLf)
  ReDim Preserve arrJavaPlugins(UBound(arrJavaPlugins) + 1)
  arrJavaPlugins(UBound(arrJavaPlugins)) = value
 Next
End Function
```

### Exclude Registry Keys
Requires:
- objReg
```vbscript
Function KeyExcludes(ByVal strName)
'* Function to exclude key terms from the *
'* registry search            *
'* Input(s): String to exclude      *
'* Output(s): Boolean if key term is   *
'*      found in the string     *
 If InStr(strName, "Mozilla") <> 0 Then
  KeyExcludes = True
 Else
  KeyExcludes = False
 End If
End Function
```

### Get Hive Name
Requires:
- objReg
- HKEY_CLASSES_ROOT
- HKEY_CURRENT_USER
- HKEY_LOCAL_MACHINE
- HKEY_USERS
- HKEY_CURRENT_CONFIG
```vbscript
Function GetHiveName(inHive)
 Select Case inHive
  Case HKEY_CLASSES_ROOT
   GetHiveName = "HKCR"
  Case HKEY_CURRENT_USER
   GetHiveName = "HKCU"
  Case HKEY_LOCAL_MACHINE
   GetHiveName = "HKLM"
  Case HKEY_USERS
   GetHiveName = "HKUS"
  Case HKEY_CURRENT_CONFIG
   GetHiveName = "HKCC"
 End Select
End Function 
```

### Registry Search
Requires:
- objReg
- GetHiveName
- KeyIncludes
- KeyExcludes
```vbscript
Function RegistrySearch(ByVal strHive, ByVal strKeyPath)
'* Function to search the registry and add *
'* Java plugins to an array        *
'* Input(s): Hive constant, Key path,   *
       Value, Search string     *
'* Output(s): Arrays based on keys found  *
 Dim hiveName, arrSubKeys, Subkey, value, _
   strValText, strVal, arrValueNames, _
   arrValueTypes, v
 hiveName = GetHiveName(strHive)
 If strVal = "" Then
  strValText = "(Default)"
 Else
  strValText = strVal
 End If
 objReg.EnumKey strHive, strKeyPath, arrSubKeys
 If VarType(arrSubKeys) = 8204 Then
  If Not UBound(arrSubKeys) = 0 Then
   For Each Subkey In arrSubKeys
    If KeyIncludes(Subkey) Then
     If Not KeyExcludes(Subkey) Then
      WScript.Echo("= " & hiveName & "\" & strKeyPath & "\" & Subkey & vbLf)
      ReDim Preserve arrKeysToDel(UBound(arrKeysToDel) + 1)
      arrKeysToDel(UBound(arrKeysToDel)) = "key" & Chr(182) & hiveName & Chr(182) & strKeyPath & "\" & Subkey & Chr(182) & ""
     End If
    End If
    If Not strKeyPath = "" Then
     RegistrySearch(strHive, strKeyPath & "\" & Subkey)
    Else
     RegistrySearch(strHive, Subkey)
    End If
   Next
  End If
 End If
 objReg.EnumValues strHive, strKeyPath, arrValueNames, arrValueTypes
 If VarType(arrValueNames) = 8204 Then
  If Not UBound(arrValueNames) = 0 Then
   For v=0 To UBound(arrValueNames)
    If KeyIncludes(arrValueNames(v)) Then
     If Not KeyExcludes(strKeyPath & "\" & arrValueNames(v)) Then
      WScript.Echo("= " & hiveName & "\" & strKeyPath & " [" & arrValueNames(v) & "]" & vbLf)
      ReDim Preserve arrKeysToDel(UBound(arrKeysToDel) + 1)
      arrKeysToDel(UBound(arrKeysToDel)) = "value" & Chr(182) & hiveName & Chr(182) & strKeyPath & Chr(182) & arrValueNames(v)
     End If
    End If
    objReg.getStringValue strHive, strKeyPath, arrValueNames(v), value
    If KeyIncludes(value) Then
     If Not KeyExcludes(strKeyPath & "\" & arrValueNames(v) & "\" & value) Then
      WScript.Echo("= " & hiveName & "\" & strKeyPath & " [" & arrValueNames(v) & "] (" & value & ")" & vbLf)
      ReDim Preserve arrKeysToDel(UBound(arrKeysToDel) + 1)
      arrKeysToDel(UBound(arrKeysToDel)) = "value" & Chr(182) & hiveName & Chr(182) & strKeyPath & Chr(182) & arrValueNames(v)
     End If
    End If
   Next
  End If
 End If
End Function
```

### Find & Remove Bad Sub Keys
Requires:
- objShell
- objReg
```vbscript
Sub FindRemoveBadSubkeys(ByVal strHive, ByVal strKey)
'* Description: Enumerates and removes subkeys if 
'* a percent (%) sign is found
'* Input(s): Hive shortname, Key path
 Dim strSubkey
 Dim arrSubkeys : arrSubkeys = Array()
 objReg.EnumKey HKEY_LOCAL_MACHINE, strKey, arrSubkeys
 If IsArray(arrSubkeys) Then
  For Each strSubkey In arrSubkeys
   If InStr(strSubkey, "%") <> 0 Then
    objShell.RegDelete strHive & "\" & strKey & "\" & strSubkey & "\"
    intSubkeyCount = intSubkeyCount + 1
   End If
   FindRemoveBadSubkeys(strHive, strKey & "\" & strSubkey)
  Next
 End If
End Sub

Example Calls:
' Remove Java Registry Keys
Dim strJavaSoft64, strJavaSoft32
strJavaSoft64 = "Software\JavaSoft"
strJavaSoft32 = "SOFTWARE\Wow6432Node\JavaSoft"
FindRemoveBadSubkeys("HKLM", strJavaSoft64)
FindRemoveBadSubkeys("HKLM", strJavaSoft32)
```

### Get Registry Size Value
Requires:
- objReg
```vbscript
Function GetRegSZValue(ByVal strHive, ByVal strKey, ByVal strVal)
'* Description: Reads a REG_SZ value from the 
'* registry
'* Input(s): Hive, Key Path, Value
'* Return(s): String
 Dim strData
 objReg.GetStringValue strHive, strKey, strVal, strData
 GetRegSZValue = strData
End Function
```

### Dump a tree under a registry path into a file
Requires:
- objShell
```vbscript
Sub DumpRegKey(outputFileName,regpath)
  On Error Resume Next
  Dim cmd
  cmd = "cmd /c reg export " & regpath & "  " & outputFileName & " /y"
  objShell.Run cmd, 0, True
End Sub
```

### Registry Key Exists
Requires:
- objReg
```vbscript
Function KeyExists(ByVal strHive, ByVal strKeyPath)
  Dim arrSubKeys
  KeyExists = False
  If objReg.EnumKey(strHive, strKeyPath, arrSubKeys) = 0 Then
    KeyExists = True
  End If
End Function
```

### Apply Registry Change
Requires:
- KeyExists
- objReg
```vbscript
Sub ApplyRegistryChange(ByVal strHive, ByVal strKey, ByVal strVal, ByVal strValue)
  If Not KeyExists(strHive, strKey) Then
    objReg.CreateKey strHive, strKey
  End If
  objReg.SetStringValue strHive, strKey, strVal, strValue
End Sub
```

#### Registry Properties & Methods
| Method/Property| Roadmap | Description |
| --- | --- | --- |
| DeleteKey| |  |  
| DeleteValue| |  |  
| EnumKey| |  |  
| EnumValues| |  |  
| GetDWordValue| |  |  
| GetStringValue| |  |  
SetMultiStringValue|objReg.SetMultiStringValue HKEY_LOCAL_MACHINE, <KeyPath>, <Value>, <PathsArray> 

  
