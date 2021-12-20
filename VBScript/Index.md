# Visual Basic Script (VBScript)

## Common VBScript (A Sample Template)
```vbscript
Option Explicit
On Error Resume Next
' This is a boiler plate for VB Scripts
'   - Change CommonHoldScript to your own Script Name

' Defining global objects
Dim objShell 
  Set objShell = CreateObject( "WScript.Shell" )
Dim objFSO 
  Set objFSO = CreateObject( "Scripting.FileSystemObject" )
Dim objRegEx 
  Set objRegEx = New RegExp
Dim objLogFile


' Define Global Variables & Constants
Dim strScriptName
  strScriptName = "CommonHoldScript"
Dim strOS
  strOS = "UNKNOWN"  
Dim strLogFileName
  strLogFileName = "CommonHoldScript" & DateCode()  ' assumes extension is handled by opening/logging processes
Dim strLogFolder
' Store the log file in the users Local App Data
  strLogFolder = objShell.ExpandEnvironmentStrings( "%LocalAppData%" ) & "\Logs\" & strLogFileName & "\"
Dim datStartTime
  Set datStartTime = CreateObject("WbemScripting.SWbemDateTime")
  datStartTime.SetVarDate dateadd("n", 0, now)
Dim intExitCode
  intExitCode = 0  ' Normal 

Main:
  DetermineOS( )
' Do the script actions here

CloseOut:
' Close all Objects
  objLogFile.close
  Set objShell = Nothing
  Set objFSO = Nothing
  Set objRegEx = Nothing
' Mark the Time
  Dim datEndTime
    Set datEndTime = CreateObject("WbemScripting.SWbemDateTime")
    datEndTime.SetVarDate dateadd("n", 0, now)
' Log End of Script
' Return Exit Code
WScript.Quit intExitCode


'*******************************************************************************
' Function:  DateCode
' Descript:  Returns the date code in the format YYYY-MM-DD.
Function  DateCode( )
  Dim TempCode, MonthCode, DayCode
  MonthCode = DatePart("m",Date)
  If MonthCode < 10 Then MonthCode = "0" & MonthCode
  DayCode = DatePart("d",Date)
  If DayCode < 10 Then DayCode = "0" & DayCode
  TempCode = DatePart("yyyy",Date) & "-" & MonthCode & "-" & DayCode
  DateCode = TempCode
End Function ' DateCode()


'*******************************************************************************
' Procedure:  CreatePath
' Descript:  Ensures a folder path exists and creates any folders needed.
' Required Objects: objFSO
Sub CreatePath( strFolderPath )
  On Error Resume Next
  Dim arrFolders
    arrFolders = Split( strFolderPath, "\")
  Dim strRoot
    strRoot = arrFolders(0)
  Dim intIndex
  For intIndex = 1 To UBound( arrFolders )
    strRoot = strRoot & "\" & arrFolders(intIndex)
    If Not objFSO.FolderExists( strRoot ) Then objFSO.CreateFolder( strRoot )
  Next
End Sub 'CreatePath( strFolderPath )


'*******************************************************************************
' Procedure:  DetermineOS
' Descript:  Determines the client operating system, sets strClientOS global variable.
Sub DetermineOS( )
On Error Resume Next
  Dim objWMIService 
    Set objWMIService = GetObject( "winmgmts:{impersonationLevel=impersonate}!//./root/cimv2" )
  Dim coloperatingSystems
    Set colOperatingSystems = objWMIService.ExecQuery( "Select * From Win32_OperatingSystem" )
  Dim objOperatingSystem, strVersion
    For Each objOperatingSystem In coloperatingSystems
	    strVersion = objOperatingSystem.Version
	    If Left(strVersion,3) = "5.1" Then
		    strOS = "XP"
	    ElseIF Left(strVersion, 3) = "6.1" Then
		    strOS = "Win7-8-10"
	    End If 'multiple
    Next 'For Each objOperatingSystem In coloperatingSystems
End Sub 'DetermineOS( )
```

