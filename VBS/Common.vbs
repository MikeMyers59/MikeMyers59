// This is the Common VBScript Module
dim ScriptName = "Common.vbs"
dim ScriptVersion = "1.0";

// Subroutines for Windows Apps
Sub OpenNotepad()
  CreateObject("WScript.Shell").Run "notepad"
End Sub

// Subroutines for Windows OS
Sub Shutdown()
  CreateObject("WScript.Shell").Run "cmd /c shutdown /s /t 30"
End Sub
    
    
