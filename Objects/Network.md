# Network Object

The Network Object requires WScript.

## Declare Network Object
```vbscript
Dim objNetwork as Object
Set objNetwork = CreateObject("Wscript.Network")
  strUser = objNetwork.UserName 
  objNetwork.MapNetworkDrive strHomeDrive, strHomeShare, False
Set objNetwork = Nothing
```

## Decare Network Drives
```vbscript
Dim objNetworkDrives
Set objNetworkDrives = objNetwork.EnumNetworkDrives
  objNetworkDrives.Item( <Index> )
```

## Network Properties & Methods
AddWindowsPrinterConnection	
ComputerName	
UserName	

