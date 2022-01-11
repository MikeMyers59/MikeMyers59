# Date-Time Object

## Examples

### Convert Date to String
```vbscript
Function Date2Str(datDate)
  Date2Str = Year(datDate) & Right("0" & Month(datDate), 2) & Right("0" & Day(datDate), 2)
End Function
```

### Convert Julian Date to Standard Date
```vbscript
Function JDateToDate(JDate As String) As Long
 Dim TheYear As Integer, TheDay As Integer, _
   TheDate As Long
 TheYear = CInt(Left(JDate, 2))
 If TheYear < 30 Then
  TheYear = TheYear + 2000
 Else
  TheYear = TheYear + 1900
 End If
 TheDay = CInt(Right(JDate, 3))
 TheDate = DateSerial(TheYear, 1, TheDay)
 JDateToDate = TheDate
End Function
```

### Convert Standard Date to Julian Date
```vbscript
Function DateToJDate(TheDate As Long) As String
 Dim TheYear As Integer, TheDays As Integer, _
   JDate As String
 TheYear = Year(TheDate)
 TheDays = DateDiff("d", DateSerial(TheYear, 1, 0), TheDate)
 JDate = Right(Format(TheYear, "0000"), 2) & Format(TheDays, "000")
 DateToJDate = JDate
End Function
```

### Display Current Time
```vbscript
dim Timepart as Time
Timepart = TimeValue(now())
```

### Pause
```vbscript
Sub Pause(datSeconds)
 Dim datEndTime, intCounter
 datEndTime = Second(Time()) + datSeconds
 Do While Second(Time()) < datEndTime
' Give the process something to do.
  intCounter = intCounter + 1 
 Loop
End Sub
```

### Split Date/Time into an Array
```vbscript
Dim arrDateTime as Array, satrDate as String, strDateTime as String
' (0) is date, (1) is time
arrDateTime = Split(<DateTimeString>, " ") 
strDate = DateSerial(Left(arrDateTime(0), 4), 1, Right(arrDateTime(0), 3))
strDateTime = CDate(strDate & " " & arrDateTime(1))
```

### Test Is in Future
```vbscript
Function IsInFuture(strDate)
  IsInFuture = (Now < CDate(strDate))
End Function
```

### Test Is it a Leap Year?
Just add this to the Month of February's days in month!
```vbscript
Dim IsLeapYear As Integer 
' Add this value to the Days for February
' Check for leap year and if February is current month
If ((vsbYear.Value Mod 4 = 0 And vsbYear.Value Mod 100 <> 0) Or vsbYear.Value Mod 400 = 0) Then
 IsLeapYear = 1
Else
 IsLeapYear = 0
End If
```

### Use Date Time Formatting
Requires:
- Zero Fill 
```vbscript
Dim datFormattedTime
Dim datFormattedDate
' Format MM/DD/YYYY
datFormattedDate = Month(<DateTime>) & "/" & Day(<DateTime>) & "/" & Year(<DateTime>)
' Format YYYY-MM-DD (Sortable)
datFormattedDate = Year(<DateTime>)& "-" & Month(<DateTime>) & "-" & Day(<DateTime>)
' Format HH:MM:SS
datFormattedTime = Hour(<DateTime>) & ":" & Minute(<DateTime>) & ":" & Second(<DateTime>)
```

