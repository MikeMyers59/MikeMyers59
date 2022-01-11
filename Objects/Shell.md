# Shell Object

The Shell Object requires WScript, the script execution module of Windows.

## Declare the Shell
```vbscript
Dim objShell as Object
Set objShell = WScript.CreateObject("WScript.Shell") 
Set objShell = CreateObject("WScript.Shell")
Set objShell = Nothing
```

## Properties & Methods
CurrentDirectory
ExpandEnvironmentStrings(<EnvVarName>)
RegWrite <Key>, <Data>, <ValueType>
RegRead(<Hive> & "\" & <Key> & "\" & <Service> & "\" & <Value>)
Run <ScriptName>, 0, True 
Run("%comspec% /c " & strLogonServer & strScript ), 1, True

## Examples
**Note**: These all require objShell.

### Common Constants & Variables
```vbscript
Dim LogPath 
  LogPath = <LogPathName>
  LogPath = objShell.ExpandEnvironmentStrings("%ALLUSERSPROFILE%") & "\Logs"
Dim myDirectory : myDirectory = objShell.CurrentDirectory
Dim ScriptPath : ScriptPath = Left(WScript.scriptfullname, Len(WScript.scriptfullname) - Len(WScript.scriptname))
Dim ScriptName : ScriptName = Left(WScript.scriptname, Len(WScript.scriptname) - 4)
Dim windir : windir = objShell.ExpandEnvironmentStrings("%windir%\system32\")
```

## Delimit Environmental Variable Name
```vbscript
Function DelimEnvVar(EnvVar)
 If Not Left(EnvVar, 1) = "%" Then _
  EnvVar = "%" & EnvVar
 If Not Right(EnvVar, 1) = "%" Then _
  EnvVar = EnvVar & "%"
 DelimEnvVar = EnvVar
End Function
```

## Get Current Browser Exception List 
```vbscript
Function GetCurrentExceptionList()
  On Error Resume Next
  strCurrentExceptList = UCase(objShell.RegRead("HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings\ProxyOverride"))
End Function
```

## Get Environment Path
Requires:
- DelimEnvVar

```vbscript
Function GetEnvPath(ByVal envVar, ByVal strName)
'* Input(s): Environmental Variable (% not required),
'* Log folder name (Blank defaults to \EMT)
'* Return(s): String
 Dim finalPath
 DelimEnvVar(envVar)
 finalPath = objShell.ExpandEnvironmentStrings(envVar) & "\"
 If Not strName = "" Then _
  finalPath = finalPath & strName
 If Not Right(finalPath, 1) = "\" Then _
  finalPath = finalPath & "\"
 PullEnvPath = finalPath
End Function
```

### Run a DOS Command
```vbscript
Dim cmd
cmd = " cmd /c <DOSCommand>" & [" >> " & <FileName> ]
objShell.Run cmd, 0, True
```

## 
```vbscript
objShell.ShellExecute(<FilePathName>.hta", "", "", "open", "1");
objShell.Run "<FileName>.exe c:\scripts\test.txt"
```

## Run a Program
```vbscript
Function RunProgram(strCommandLine, bolWait)
  RunProgram = objShell.Run(strCommandLine, 0, bolWait) 
End Function 
```

### Run IPCONFIG /ALL
```vbscript
cmd = "cmd /c ipconfig /all >> " & outputFile.Name
objShell.Run cmd, 0, True
```

