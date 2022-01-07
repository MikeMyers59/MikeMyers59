# Excel Date-Time  

## Date-Time Calculations  

### Calculate Time Difference in Days  
```vba
=NOW()-<StartDate>
```

### Calculate Time Difference in Years, Months & Days  
(Returns a String and assumes start date in A2 with end date in B2)  
```vba
=CONCATENATE(DATEDIF(A2,B2,"Y"), IF(DATEDIF(A2,B2,"Y")=1, " year, "," years, "),DATEDIF(A2,B2,"YM"), IF(DATEDIF(A2,B2,"YM")=1," month, "," months, "),DATEDIF(A2,B2,"MD"), IF(DATEDIF(A2,B2,"MD")=1, " day"," days"))
```

### Calculate Time Difference in Years, Months & Days 
(Returns a Date-Time for each individual cell and assumes start date in A2 with end date in B2)  
```vba
=DATEDIF(A2,B2,"Y") ' Returns Years
=DATEDIF(A2,B2,"YM")' Returns whole Months within Current Year
=DATEDIF(A2,B2,"MD")' Returns Days within Current Month
```

### Add File Path to Print Out Footer  
```vba
Sub FooterPath()
  ActiveSheet.PageSetup.LeftFooter = ActiveWorkbook.FullName
End Sub
```
Or use (for Excel 2002 & later):  
`&[Path]`
