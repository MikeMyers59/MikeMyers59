' This is the Common VBScript Module
dim ScriptName = "Common.vbs"
dim ScriptVersion = "1.0";

' Constants
Const conPi = 3.1415926
Const conQuote = """"
Const ForReading = 1
Const ForAppending = 8
Const OverwriteExisting = True
Const DeleteReadOnly = True

' Routines for Browsers
Function openChrome(strURL)
  set shell = CreateObject("WScript.Shell")
  shell.run("""C:\Program Files (x86)\Google\Chrome\Application\chrome.exe""" + strURL)
End Function

Function openEdge(strURL)
  set shell = CreateObject("WScript.Shell")
  shell.run("microsoft-edge:" + strURL)
End Function

Function openFireFox(strURL)
  set shell = CreateObject("WScript.Shell")
  shell.run("""C:\Program Files (x86)\Mozilla Firefox\firefox.exe""" + strURL)
End Function

' Routines for Date, Time & Timing
Sub Pause(datSeconds)
  Dim datEndTime, intCounter
  datEndTime = Second(Time()) + datSeconds
  Do While Second(Time()) < datEndTime
    intCounter = intCounter + 1  ' Gives the process something to do.
  Loop
End Sub

' Routines for File Operations
Function writeToFile(outFile, contents)
  Set objFSO=CreateObject("Scripting.FileSystemObject")
  Set objFile = objFSO.CreateTextFile(outFile,True)
  objFile.Write contents
  objFile.Close
end function

Sub LogEntry(strMessage)
' Log event every time a link is activated using: 
' onClick= "LogEntry(<strLinkName>)"
  Set objTxtLog = CreateObject("WScript.Shell")
  objTxtLog.Run(""".\\Log Book.txt.lnk""")
  Pause(1)  ' Allow it to open before proceding!
  objTxtLog.SendKeys strMessage
  set objTxtlog = nothing
End Sub

' Routines for HTML Documents
Function writeOutput(text)
  Set div = document.getElementById("output")
  div.innerText = div.innerText & text
  document.getElementById("right").scrollTop = document.getElementById("right").scrollHeight
end function

' Subroutines for the Window Object
Sub CenterWindow(intWidth, intHeight)
  window.moveTo screen.availWidth\2 - intWidth\2, screen.availHeight\2 - intHeight\2
End Sub

Sub ResizeWindow (winWidth, winHeight)
  window.resizeTo winWidth, winHeight
End Sub

Sub RelocateWindow (winHorizontal, winVertical)
  window.moveTo winHorizontal, winVertical
End Sub

' Subroutines for Windows Apps
Sub OpenNotepad()
  CreateObject("WScript.Shell").Run "notepad"
End Sub

' Subroutines for Windows OS
Sub EjectCDTray()
  CONST CDROM = 4
  For each d in CreatObject (“Scripting.FileSystemObject”).Drives
    If d.DriveType = CDROM then
      CreateObject(“shell.Application”).Namespace(17).Parsename(d.DriveLetter & “:\”.invokeVerb(“E&ject”)
    End If
  Next
End Sub

Sub Shutdown()
  CreateObject("WScript.Shell").Run "cmd /c shutdown /s /t 30"
End Sub

Sub RunProgram(strProgramName)
  Set objShell = CreateObject("Wscript.Shell")
  objShell.Run """" & strProgramName & """"
End Sub     
    
