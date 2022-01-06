# Excel

![Excel Logo 1](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Excel%20Logo%201.png) ![Excel Logo 2](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Excel%20Logo%202.png)  
- [The Excel Addict](http://www.theexceladdict.com/)

## Constants, Predefined 
| Constant | Type | Value | Description |  
| -- | -- | -- | -- |  
| xlOpenXMLWorkbookMacroEnabled | File Format | -- | -- |  

## Keyboard Shortcuts 
| Action | Shortcut |  
| -- | -- |  
| Select Entire Row |[SHIFT] + [SPACE] |  
| Quick Sum() a Column or Row|[Alt] + =  |  
| Display Formula (With Dependencies Highlighted)|[F2] <BR> Double Click Cell|  
| Display Screen Key Tips |[ALT] |  
| Display Home Ribbon Screen Key Tips |[ALT] + H |  
| Display Insert Ribbon Screen Key Tips |[ALT] + N |  
| Display Backstage (File) Screen Key Tips |[ALT] + F |  
| Display Screen Tips |[ALT] |  
| Quick Copy Top Row through Range (Data/Formula & Style)|[CTRL] + D |  
| Select Entire Column|[CTRL] + [SPACE] |  
| Open Context Menu|[SHIFT] + [F10] |

## Processes
| Action | Description |  
| -- | -- |  
| Convert Text Data to Columns|Data > Text to Columns |  
| Start Excel in Safe Mode|Hold CTRL key and click on Excel icon <br> In the Windows Start Menu’s Search Box, type Excel /s and enter. |  
| Set Number to minimum number of displayed digits|Select cell(s). Expand Number from the Home Ribbon (click arrow). Select Custom then add #,#00 in Type field for a minimum of two digit display with optional comma separation for larger numbers. <br> ![Process 01](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Process%2001.png) |  

## Script Examples
  
### Create a File Based on Spreadsheet Information
```vba
Sub SaveCustFile()  
  Dim strWkbkName As String  
  strWkbkName  = ActiveWorkbook.Sheets("Sheetl").Cells(2,3).Value & " "  
  strWkbkName = strWkbkName  & ActiveWorkbook.Sheets("Sheetl").Cells(2,4).Value  
  ActiveWorkbook.SaveAs  Environ$("UserProfile") & "\Documents\" & strWkbkName  
  FileFormat := xlOpenXMLWorkbookMacroEnabled  
End Sub
```
  
  
