' These are the Common Procedures and Variables used throughout my VBScripting Projects

' Constants Defined
Const conPi = 3.1415926
Const conQuote = """"
Const ForReading = 1
Const ForAppending = 8
Const OverwriteExisting = True
Const DeleteReadOnly = True

' Procedures

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

Sub CenterWindow(intWidth, intHeight)
  window.moveTo screen.availWidth\2 - intWidth\2, screen.availHeight\2 - intHeight\2
End Sub

Sub LogEntry(strMessage)
' Log event every time a link is activated using: 
' onClick= "LogEntry(<strLinkName>)"
  Set objTxtLog = CreateObject("WScript.Shell")
  objTxtLog.Run(""".\\Log Book.txt.lnk""")
  Pause(1)  ' Allow it to open before proceding!
  objTxtLog.SendKeys strMessage
  set objTxtlog = nothing
End Sub

Sub Pause(datSeconds)
  Dim datEndTime, intCounter
  datEndTime = Second(Time()) + datSeconds
  Do While Second(Time()) < datEndTime
    intCounter = intCounter + 1  ' Gives the process something to do.
  Loop
End Sub

Sub ResizeWindow (winWidth, winHeight)
  window.resizeTo winWidth, winHeight
End Sub

Sub RelocateWindow (winHorizontal, winVertical)
  window.moveTo winHorizontal, winVertical
End Sub

Sub RunProgram(strProgramName)
  Set objShell = CreateObject("Wscript.Shell")
  objShell.Run """" & strProgramName & """"
End Sub
