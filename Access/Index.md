# Access 

This contains notes, snippets & examples

Access calls:

- a column a *Field*
- a row a *Record*
- a database a *Record Set*.

## Application Examples

#### Quit the Application
```vba
This procedure is to be used only on the main form (switchboard)
Private Sub cmdQuitApp_Click()
On Error GoTo Err_cmdQuitApp_Click
' Close Access and all Databases.
  DoCmd.Quit
Exit_cmdQuitApp_Click:
  Exit Sub
Err_cmdQuitApp_Click:
  MsgBox Err.Description
  Resume Exit_cmdQuitApp_Click
End Sub
```

