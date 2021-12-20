# Access

## VBA 

#### Testing Objects
```vba
Sub WishVBAHadOverloads(ByVal Obj As Object)
  If TypeOf Obj Is TableDef Then 
    Dim Def As TableDef
    Set Def = Obj
    ' work with Def... 
    Exit Sub
  End If
  If TypeOf Obj Is Form Then 
    Dim Frm As Form
    Set Frm = Obj
    ' work with Frm... 
    Exit Sub
  End If
  Err.Raise 999, "WishVBAHadOverloads", "Bad argument type - expected a TableDef or Form"
End Sub 
```

