# JAVA

This folder contains notes, sippets and examples.

## Examples

#### Common Constants, Declarations & Variables
```vbscript
Dim strJava32Reg, strJava32Plug, strJava64Reg, strJava64Plug
strJava32Reg = "SOFTWARE\Wow6432Node\JavaSoft\Java Web Start"
strJava32Plug = "SOFTWARE\Wow6432Node\JavaSoft\Java Plug-in\"  
strJava64Reg = "SOFTWARE\JavaSoft\Java Web Start"
strJava64Plug = "SOFTWARE\JavaSoft\Java Plug-in\"
Dim localLow, baselineFile, baselinePath
localLow = PullEnvPath("USERPROFILE","") & "Appdata\LocalLow\Sun\Java\Deployment\security\"
baselineFile = "baseline.versions"
baselinePath = localLow & baselineFile
```

#### Remove JAVA
Requires:

- DeleteReg
- SearchInstalls
- RegistrySearch
- HKEY_LOCAL_MACHINE
- HKEY_CLASSES_ROOT

```vbscript
ReDim arrNoDupes(0)
ReDim arrKeysToDel(0)
Dim d, a
Dim JavaPresent : JavaPresent = false
JavaPresent = SearchInstalls(HKEY_LOCAL_MACHINE, "SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall", "DisplayName", "Java")
JavaPresent = SearchInstalls(HKEY_LOCAL_MACHINE, "SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall", "DisplayName", "Java")
If JavaPresent Then
'.Add Keys to array
 Call RegistrySearch(HKEY_CLASSES_ROOT, "CLSID")
 Call RegistrySearch(HKEY_CLASSES_ROOT, "Wow6432Node\CLSID")
 Call RegistrySearch(HKEY_LOCAL_MACHINE, "")
 If Not UBound(arrKeysToDel) = 0 Then
  For d=1 To UBound(arrKeysToDel)
   WScript.Echo "[" & d & "]" & arrKeysToDel(d)
   a = Split(arrKeysToDel(d), Chr(182))
   Call DeleteReg(a(0), a(1), a(2), a(3))
  Next
 End If
End If
```

#### Return the Plug In
Requires:

- objDictionary
- arrNoDupes

```vbscript
Function ReturnPlugin(arrArg, action)
'* Input(s): Array, Options as string               *
'* Options:                                         *
'*  RETURN = Returns the left over value to string  *
'*  ARR = Returns the left over values to the       *
'*     arrNoDupes array                             *
'* Output(s): Array or String based on coresponding *
'*      option                                      *
 Dim strItem, strKey, intItems, i
 For Each strItem In arrArg
  If Not objDictionary.Exists(strItem) Then
   objDictionary.Add strItem, strItem  
  End If
 Next
 intItems = objDictionary.Count - 1
 ReDim arrArg(intItems)
 i = 0
 For Each strKey In objDictionary.Keys
  arrArg(i) = strKey
  i = i + 1
 Next
 Select Case UCase(action)
  Case "RETURN"
   For Each strItem In arrArg
    ReturnPlugin = strItem
   Next
  Case "ARR"
   Erase arrNoDupes
   For Each strItem In arrArg
    ReDim Preserve arrNoDupes(UBound(arrNoDupes) + 1)
    arrNoDupes(UBound(arrNoDupes)) = strItem
   Next
 End Select
End Function
```

#### Get JAVA Version
Requires:

- GetRegSZValue
- GetVersion
- HKEY_LOCAL_MACHINE

```vbscript
Function GetJavaVer(strWeb, strPlugin)
'* Description : Gets the Java paths on the seat
'* Input(s)  : Web Start Key, Plugin Key
'* Return(s) : Version Number
 Dim strJavaHomeReg, strJavaReg, strJavaPlug, javaRegVal, javaHomePath, strJava
 javaRegVal = GetRegSZValue(HKEY_LOCAL_MACHINE, strWeb, "CurrentVersion")
 strJavaHomeReg = strPlugin & javaRegVal
 javaHomePath = GetRegSZValue(HKEY_LOCAL_MACHINE, strJavaHomeReg, "JavaHome")
 strJava = javaHomePath & "\bin\java.exe"
 GetJavaVer = GetVersion(strJava)
End Function
```

#### JAVA Baseline
Requires:

- objFSO
- baselinePath 
- localLow
- strJava32Reg
- strJava32Plug
- strJava64Reg
- strJava64Plug
- HKEY_LOCAL_MACHINE
- CorrectBaseline
- CreatePath
- GetJava
- KeyExists

```vbscript
Sub JavaBaseline()
 Dim strJavaHomeReg, javaVer, javaRegVal, javaHomePath, strJava
 If KeyExists(HKEY_LOCAL_MACHINE, strJava32Reg) And KeyExists(HKEY_LOCAL_MACHINE, strJava64Reg) Then
  javaVer = GetJava(strJava64Reg, strJava64Plug)
  If (objFSO.FolderExists(localLow)) Then
   CorrectBaseline(baselinePath, javaVer)
  Else
   CreatePath(localLow)
   CorrectBaseline(baselinePath, javaVer)
  End If  
 ElseIf KeyExists(HKEY_LOCAL_MACHINE, strJava32Reg) And Not KeyExists(HKEY_LOCAL_MACHINE, strJava64Reg) Then
  javaVer = GetJava(strJava32Reg, strJava32Plug)
  If (objFSO.FolderExists(localLow)) Then
   CorrectBaseline(baselinePath, javaVer)
  Else
   CreatePath(localLow)
   CorrectBaseline(baselinePath, javaVer)
  End If  
 Else
  WScript.Quit 1
 End If
End Sub
```

#### Correct Baseline
Requires:

- objFSO
- BaselinePermissions

```vbscript
Sub CorrectBaseline(fullpath, javaversion)
'* Description: Creates the Java Baseline 
'* File and sets permissions
'* Input(s): Full Path of file, Version of Java
 Dim objFile
 If (objFSO.FileExists(fullpath)) Then
  BaselinePermissions(fullpath, "WRITE")
  Set objFile = objFSO.CreateTextFile(fullpath, true)
  objFile.Write (javaversion & vbCrLf)
  objFile.Close
  BaselinePermissions(fullpath, "READ")
 Else
  Set objFile = objFSO.CreateTextFile(fullpath, true)
  objFile.Write (javaversion & vbCrLf)
  objFile.Close
  BaselinePermissions(fullpath, "READ")
 End If
End Sub
```

#### Log a Hex Array
Requires:

- LogEvent

```vbscript
Function LogHexArray( hexArray )
' Function: LogHexArray
' Descript: Logs contents of hex array to log file as 
'      formatted structure.
' Input(s): Array of Hex chars 
 On Error Resume Next
 Dim intCounter, strHex, j
 strHex = ""
 For j = 0 To UBound(hexArray)
  intCounter = intCounter + 1
  if (intCounter = 14) or (j = UBound(hexArray)) then
   strHex = strHex & "&H" & hex(hexArray(j))
   LogEvent strHex
' Reinit vars
   strHex = ""
   intCounter = 0 
  else
   strHex = strHex & "&H" & hex(hexArray(j)) & "," 
  end if 
 Next
End Function
```

