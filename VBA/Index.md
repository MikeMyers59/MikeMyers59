# Visual Basic for Applications (VBA)  

A program, database, document, or special capability exposes (makes available) its objects through an object library. The object library contains an organized set of names that VBA can refer to when it wants to manipulate an object. 

Public or Private defines the scope of the procedure, constant or variable. A Public procedure, constant or variable has global scope (is available to all other objects). A Private procedure, constant or variable is visible to only the module in which it’s defined.

## Syntax
| Action | Script |
| --- | --- |
| Create a dialog box and prints to it, then awaits user response| MsgBox <br> `<ReturnVar> = MsgBox(prompt[, buttons] [, title] [, helpfile, context])`  |  
| Create a dialog box, then awaits user input|InputBox |  
| Print to a browser Immediate window|Console.Print |  
| Print to CMD or PowerShell script window|WScript.Echo |  
| Print to VBE’s  Immediate window|Debug.Print |  

#### A Common Function Railroad Map
```vba
[ Private | Private ] Function <FunctionName>( <ParamList> ) [as <DataType> ]
  <VBCommands>
  <FunctionName> = <VariableName>
  [ Exit Function ]
  [<MoreVBCommands>
  <FunctionName> = <VariableName>]
End Sub
```

#### A Common Subroutine Railroad Map
```vba
[ Private | Private ] Sub <RoutineName>( <ParamList> )
  <VBCommands>
  [ Exit Sub ]
  [<MoreVBCommands>]
End Sub
```

## Examples

#### Reset a List or Combo Box 
Requires:

- lstRecords
- ListWhere
- ListOrderBy

```vba
Sub ResetList()
 Dim strSQL As String, strWhere As String, strOrderBy As String
 strSQL = <SQLQueryOpener>
 strWhere = ListWhere()
 strOrderBy = ListOrderBy()
 strSQL = strSQL & strWhere & strOrderBy
 MsgBox strSQL
 lstRecords.RowSource = strSQL
End Sub
```

Common Call:
```vba
Private Sub cbo<Name>_AfterUpdate()
 ResetListBox
End Sub
```

