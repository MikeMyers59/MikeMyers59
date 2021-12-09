' This is the Common VBScript Module
dim ScriptName = "Common.vbs"
dim ScriptVersion = "1.0";

' Routines for File Operations
Function writeToFile(outFile, contents)
  Set objFSO=CreateObject("Scripting.FileSystemObject")
  Set objFile = objFSO.CreateTextFile(outFile,True)
  objFile.Write contents
  objFile.Close
end function

' Routines for HTML Documents
Function writeOutput(text)
  Set div = document.getElementById("output")
  div.innerText = div.innerText & text
  document.getElementById("right").scrollTop = document.getElementById("right").scrollHeight
end function

' Subroutines for Windows Apps
Sub OpenNotepad()
  CreateObject("WScript.Shell").Run "notepad"
End Sub

' Subroutines for Windows OS
Sub Shutdown()
  CreateObject("WScript.Shell").Run "cmd /c shutdown /s /t 30"
End Sub
    
    
