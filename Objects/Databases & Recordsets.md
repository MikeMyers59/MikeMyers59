# Databases & Recordsets

## Declare the Application
```vbscript
Static objAccess As Access.Application
Set objAccess = New Access.Application
Set objAccess = Nothing
```

### Properties & Methods of Application
CommandBars (Count, Name)
Control
DBEngine
DisplayAlerts
OpenCurrentDatabase
Visible

## Declare the Command Bar
Dim objComandBar As Object
Set objComandBar = Application.CommandBars(<MenuName>)
Set objComandBar = Nothing
```vbscript
```

## Declare the Control
```vbscript
Dim objControl As Object
For Each objControl In objComandBar.Controls
 objControl.Enabled = { True | False }
Next objControl
Set objControl = Nothing
```

## Declare the CurrentDB
```vbscript
The Current Database
Currentdb.name ' The Database path & pile name
```

## Declare the Databases
```vbscript
Dim db As DAO.Database
Set db = CurrentDb()
Set db = objAccess.DBEngine.OpenDatabase(<DbName>, False, False)
Set db = Nothing
```

### Proeprties & Methods of Database
Close

## Declare the Record Sets
```vbscript
Dim rs As ADODB.Recordset
Set rs = New ADODB.Recordset
Set rs = db.OpenRecordset(<TableName>)
Set rs = Nothing
```

### Properties & Methods of Record Sets
BOF
Close
EOF
Fields() - a Tables Column Identifier
MoveLast
MoveFirst
MoveNext

## Examples

### Checks a record set for no data before launching a form
```vbscript
Dim intValue as Integer
intValue = DCount(<FieldName>,<QueryName>)
If intValue = 0 then
 MsgBox "Sorry, no data to view!", vbCritical, "No Data"
Else
 DoCmd.OpenForm <FormName>
End if 
```

### Get DB Path
```vbscript
Function GetDBPath()
 Dim strPath As String, intFor As Integer
 strPath = CurrentDb.Name
' Step backwards from string end to first \
 For intFor = Len(strPath) To 1 Step -1
  If Mid(strPath, intFor, 1) = "\" Then
' Remove the filename
   GetDBPath = Left(strPath, intFor)
   Exit For
  End If
 Next
' MsgBox strPath
End Function
```

### Hide Tool Bars
```vbscript
Dim i as Integer
For i = 1 To objAccess.CommandBars.Count
 If objAccess.CommandBars(i).Name <> "Menu Bar" Then
  DoCmd.ShowToolbar objAccess.CommandBars(i).Name, acToolbarNo
 End If
Next i
```

### Loop to End of File in Record Set
```vbscript
Do While Not rs.EOF
 <VBCommands>
Loop
```

### Open a Database
```vbscript
Dim AccessAppPath, ReturnVar
AccessAppPath = "C:\Program Files\Microsoft Office\Office<Version>\msaccess.exe"
ReturnVar = Shell AccessAppPath & "<DBPathFileName>", vbMaximizedFocus
```
#### Alternate Open a Database
Requires:
- objAccess

```vbscript
Dim strDbName As String 
strDbName = <PathFileName>
objAccess.Visible = True
objAccess.OpenCurrentDatabase strDbName
```

### Test for Empty Record Set
```vbscript
If rs.EOF and rs.BOF Then
 <VBCommands>
Endif
```

### Test for Unopened Record Set
```vbscript
If rs.State = adStateOpen Then
 <VBCommands>
Endif
```

### Test for RS Availability
```vbscript
If IsObject(rs) Then
 If rs Is Nothing Then
  <VBCommands>
 End If
End If
```

### Loop to End of File in Record Set
```vbscript
Do While Not rs.EOF
 <VBCommands>
Loop
```

### 
```vbscript
```

### 
```vbscript
```
