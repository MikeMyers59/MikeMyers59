# File Syatem Operations (FSO) Object

## File Browser Example  
Make sure you change the variables in Window_OnLoad to set the correct command line tool and you will need to set the correct AllowFileExt as well.  
Finally, you can use this tool to protect your HTA source code and make them *.EXE executables (32-bit or 64-bit).  
```vbscript
Dim SourceDir, FullName, arrFN
Dim ToolFileName
Dim CommandFile
Const AllowFileExt = "CSV"
Const Width = 500
Const Height = 130
' get the directory of the HTA
FullName = Replace(hta_utility.commandLine, Chr(34), "")  
arrFN = Split(FullName, "\")  
FileName = arrFN(Ubound(arrFN))  
SourceDir = Replace(FullName, FileName, "")  
 
Function FileExists(filename)
    Set fso = CreateObject("Scripting.FileSystemObject")    
    If (fso.FileExists(filename)) Then
       FileExists = True
    Else
       FileExists = False
    End If
    Set fso = Nothing
End Function
 
Sub DoResize
    'resize   
    window.resizeTo Width, Height
    screenWidth = Document.ParentWindow.Screen.AvailWidth
    screenHeight = Document.ParentWindow.Screen.AvailHeight
    posLeft = (screenWidth - Width) / 2
    posTop = (screenHeight - Height) / 2     
    'move to centerscreen
    window.moveTo posLeft, posTop
End Sub
  
Sub Window_OnLoad
  DoResize
  ' set tool file paths
  ToolFileName = SourceDir & "CSV.vbs"
  CommandFile = "cscript.exe" & " " & Chr(34) & ToolFileName & Chr(34)
End Sub
 
' Script to process the file
Sub OnClickButtonButton1()
  If FileExists(ToolFileName) Then
    If FileExists(file.value) Then
        Set fso = CreateObject("Scripting.FileSystemObject")    
        If (UCase(fso.GetExtensionName(file.value)) = AllowFileExt) Then
            Set obj = CreateObject("WScript.Shell")
            obj.Run CommandFile & " " & Chr(34) & file.value & Chr(34), 0, True
            MsgBox "Done"
            Set obj = Nothing
        Else
            MsgBox ToolFileName & " is not " & AllowFileExt
        End If          
        Set fso = Nothing
    Else
        MsgBox "File Not Found: " & file.value
    End If
  Else
    MsgBox ToolFileName & " not found!"
  End If
End Sub
```

Call the script:
```html
<input type="file" name="file" value="file"/>
<input type="button" name="Button1" id="Button1" value="Process" onclick="OnClickButtonButton1">
```

