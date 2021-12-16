# Visual Basic fro Applications (VBA)

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

