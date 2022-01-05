# Object Shell

## Run a Program  
This create an instance of the Wscript.Shell object and then call the Run method. And in doing so we pass Run a single parameter: the executable file name (notepad.exe) followed by the path to the file we want to open.  
Call the script:  
```html
<BUTTON onclick="RunProgram">Run Program</BUTTON>
```  
Alternate:
```vbscript
Sub RunProgram
  Const NORMAL_WINDOW = 1
  Set objShell = CreateObject("Shell.Application")
  objShell.ShellExecute "notepad.exe", _
    "c:\scripts\test.txt", , , NORMAL_WINDOW
End Sub
```

