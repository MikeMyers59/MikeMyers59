# WSscript (and CScript)

## Create WScript Objects

### Environment
```vbscript 
Dim objSystemEnv as Object 
Set objSystemEnv = objShell.Environment( "PROCESS" )
  strPath = objSystemEnv("PATH") 
  objSystemEnv("PATH") = strPath
Set objSystemEnv = Nothing
```

### Machine
```vbscript  
Dim objMachine as Object
Set objMachine = GetObject("WinNT://" & strComputer)
```

### Process Environment
```vbscript  
Dim objEnvironment
Set objEnvironment = objShell.Environment("Process")
```

### User Environment
```vbscript  
Dim objUserEnv
Set objUserEnv = objShell.Environment("User")
```

### Services
```vbscript  
Dim arrServices, strService
arrServices = Array()
  objReg.EnumKey HKEY_LOCAL_MACHINE, strKey, arrServices
  For Each strService In arrServices
    <VBCommands>
  Next
```

### User (Computer)
```vbscript 
Dim objUser as Object
Dim objInfoUser as Object
'Renaming Admin
Set objInfoUser = GetObject("WinNT://" & strComputer & "/Administrator,user")
set objUser = oMachine.MoveHere(objInfoUser.ADsPath, "GDMTech1")
'Renaming Guest
Set objInfoUser = GetObject("WinNT://" & strComputer & "/Guest,user")
set objUser = objMachine.MoveHere(objInfoUser.ADsPath, "Administrator")
'Resetting Guest Password
Set objUser = GetObject("WinNT://" & strComputer & "/Administrator,user")
objUser.SetPassword "&*UIer78aB#4"
objUser.SetInfo
'Disabling Guest Account
Set objUser = GetObject("WinNT://" & strComputer & "/Administrator")
objUser.AccountDisabled = True
objUser.SetInfo
'Delete TempAccount
Set objMachine = GetObject("WinNT://" & strComputer)
objMachine.Delete "user", "TempAccount"
'Disable AutoAdminLogon
Dim strKeyPath as String, strStringValueName as String
strKeyPath = "SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon"
strStringValueName = "AutoAdminLogon"
objReg.DeleteValue HKEY_LOCAL_MACHINE, strKeyPath, strStringValueName
```

### Text File (Log)
```vbscript 
Dim objTxtLog as Object
Set objTxtLog = CreateObject("WScript.Shell")
set objTxtlog = nothing
```

### Log an Entry to a Text File
Requires:
- objTxtLog
- Pause
```vbscript 
Sub LogEntry(strMessage)
' Log event every time a link is activated using: 
' onClick= "LogEntry(<strLinkName>)"
 objTxtLog.Run(""".\\Log Book.txt.lnk""")
 Pause(1) ' Allow it to open before proceding!
 objTxtLog.SendKeys strMessage
End Sub
```

