# DoCmd

## DoCmd Methods
| Method | Description |  
| --- | --- | 
| RunMacro ("macroName") |  |  
| [RunSQL](#RunSQL) |  |  
| ShowToolbar |  |  

## RunSQL
The RunSQL method should be avoided to prevent user error from causing errors. To void, use this instead:
```vba
Dim Db As DAO.Database
Set Db = CurrentDb
Db.Execute "DELETE * FROM MyTable", dbFailOnError
Debug.Print Db.RecordsAffected
```

