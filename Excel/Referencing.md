# Excel Referencing

| To Reference | Methods |  
| -- | -- |  
| a cell on the current sheet |<CellReference> <BR> <RangeName> <BR> `D2` means relative column + relative row reference. <BR> `$D2` means absolute column + relative row reference. <BR> `$D$2` means absolute column + absolute row reference. |  
| a cell in another sheet within the same workbook|<SheetName>!<CellReference> |  
| <RangeName> |  
| a cell in another sheet within the different workbook|<WorkBookName>!<SheetName>!<CellReference> |  
| <RangeName> |  

**Note**: Range Names are unique within a workbook, so worksheet referencing is not required.
