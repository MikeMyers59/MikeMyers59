# Printers

## Common Constants, Declarations and Variables
```vbscript
Dim strInstalledPrinters
Dim strInstalledPrinterServers
Dim arrInstalledPrinters
Dim arrInstalledPrinterServers
```

## Examples

#### Find Installed Printers
Requires:

- objPrinters

```vbscript
Function FindInstalledPrinters()
' Function: FindInstalledPrinters
' Descript: Builds an array of printer names that 
' the CU has mapped/installed.
 Dim intIndex, strTemp, strPrinterName, strPrinterServer,
   strInstalledPrinters, strInstalledPrinterServers, _
   arrInstalledPrinters, arrInstalledPrinterServers
 strInstalledPrinters = ""
 strInstalledPrinterServers = ""
 arrInstalledPrinters = Array()
 arrInstalledPrinterServers = Array()
 For intIndex = 1 to (objPrinters.Count - 1) Step 2
  strPrinterName = objPrinters( intIndex )
  strInstalledPrinters = strInstalledPrinters & "|" & strPrinterName
  If Left( strPrinterName, 2 ) = "\\" Then 
'Printer is network printer
   If Instr( 1, Mid( strPrinterName, 3), "\", TextCompare ) > 0 Then 
' Printer is definitely network mapped
    strTemp = Split( Mid( strPrinterName, 3), "\" )(0)
    If Instr( 1, strTemp, ".", TextCompare ) > 0 Then
' Printer is using DNS name of server
     strPrinterServer = Split( strTemp, "." )(0)
    Else
     strPrinterServer = strTemp
    End If
    strInstalledPrinterServers = strInstalledPrinterServers & "|" & strPrinterServer
   End If
  End If
 Next
 strInstalledPrinters = Mid( strInstalledPrinters, 2)
 If Len( strInstalledPrinterServers ) > 2 Then
    strInstalledPrinterServers = Mid( strInstalledPrinterServers, 2 )
  End If
  arrInstalledPrinters = Split( strInstalledPrinters, "|" )
  arrInstalledPrinterServers = Split( strInstalledPrinterServers, "|" )
End Function
```

#### Move Mapped Printer
Requires:

- objNetwork
- RemovePrintMap
- SetDefaultPrinter

```vbscript
Function MovePrinterMap( strCurrentPrintMap, strRemapPath )
' Function: MovePrinterMap
' Descript: Moves a printer mappings from one server to another.
' Input(s): strPrintMap - the full printer mapping \\server\printer
 objNetwork.AddWindowsPrinterConnection strRemapPath
 If Err Then
  Err.Clear
 Else
  RemovePrintMap strCurrentPrintMap
  If InStr( 1, strCurrentPrintMap, strDefaultPrinter, TextCompare ) > 0 Then
   SetDefaultPrinter strRemapPath
  End If
 End If
End Function
```

#### Remove Mapped Printer
Requires:

- objShell
- PrintersRegKey

```vbscript
Function RemovePrintMap( strPrintMap )
' Function: RemovePrintMap
' Descript: Removes a printer mapping
' Input(s): strPrintMap - The print map to remove
 objShell.RegDelete( PrintersRegKey & Replace( strPrintMap, "\", "," ) & "\" )
 If Err Then
  Err.Clear
 End If
End Function
```

#### Move Printer Server
Requires:

- objNetwork
- RemovePrintMap
- SetDefaultPrinter

```vbscript
Function MovePrintServer( strRightServer, strPrintMap )
' Function: MovePrintServer
' Descript: Moves a printer mappings from one 
' server to another.
' Input(s):
'   strRightServer - the new server
'   strPrintMap - the full printer mapping 
'          \\server\printer
 Dim bolDidRemap, arrPrinterMap, strNewPrintMap
 bolDidRemap = True
 arrPrinterMap = Split( strPrintMap, "\" )
 strNewPrintMap = "\\" & strRightServer & "\" & arrPrinterMap( UBound( arrPrinterMap ) )
  objNetwork.AddWindowsPrinterConnection strNewPrintMap
 If Err Then
  Err.Clear
 Else
  RemovePrintMap strPrintMap
  If InStr( 1, strPrintMap, strDefaultPrinter, TextCompare ) > 0 Then
   SetDefaultPrinter strNewPrintMap
  End If
 End If
End Function
```

