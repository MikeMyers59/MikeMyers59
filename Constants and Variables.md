# Constants and Variables

#### Declare Constant
```vbscript
{Public | Private | Dim } <varName> [As <Type>]
```

#### Declare Variables
```vbscript
Const <Name> [As <Type> ]= <Value>
```

## Some Common Constants
| Type | Examples |
| --- | --- |  
| Special Characters | `Const conDblQuote = """"` |
| File System Operations | `Const ForReading = 1` <BR> `Const ForAppending = 8` <BR> `Const OverwriteExisting = True` <BR> `Const DeleteReadOnly = True` |  
| Numbers | `Const conPi as Double = 3.14159265` |
| Registry | `Const HKEY_LOCAL_MACHINE = &H80000002` | 

## Common Variables
| Type | Examples |
| --- | --- |  
| Date Time | `Dim dtScriptLaunch ` <br> `dtScriptLaunch = Now() ' Tracks date/time of script start` | 
| File System | `Dim strCurDir ‘ <BR> `strCurDir = objShell.CurrentDirectory` | 
| WMI Services | `strImpersonate = "{impersonationLevel=impersonate}"` <BR> `strImpersonate = ""  ' No impersonation used` <br> `strComputer = "."` <BR> `strComputer = objNetwork.ComputerName` | 
  
  
