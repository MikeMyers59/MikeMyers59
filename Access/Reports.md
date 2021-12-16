# Access Reports

|Action | Icon |
| --- | :---: |
|Print the report| ![Print Report](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Print%20Icon.gif) |
|Zoom into a region of the report| ![Report Zoom](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Report%20Zoom.gif) |
|Display the report as one, two or multiple pages| ![Page Display Format](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Display%20Selection.gif) |
|Zoom into or out of the report| ![Zoom Level](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Zoom%20Level.gif) |
|Transfer the report into MS Word| ![Transfer to Word](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Word%20Transfer.gif) |
|Close the report| ![Close](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Close.gif) |


## Example Code

#### Basic Report Call
```vba
Private Sub rptReportName_Click()
On Error GoTo Err_rptReportName_Click
    Dim stDocName As String
    stDocName = "Report Name"
' Report to Preview Mode
    DoCmd.OpenReport stDocName, acPreview
' Report to Printer
'   DoCmd.OpenReport stDocName
Exit_rptReportName_Click:
    Exit Sub
Err_rptReportName_Click:
    MsgBox Err.Description
    Resume Exit_rptReportName_Click
End Sub
```

