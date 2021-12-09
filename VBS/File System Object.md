# File System Object (FSO)

```javascript
  Dim objFso : Set objFso = CreateObject("Scripting.FileSystemObject")
  If Not objFso.FileExists("<FilePathName>") Then
    MsgBox "Error, file not found: <FilePathName>",16,"File Exists Check"
    Self.close()
  End If
```

