# REG.exe - The Registry Updater

| Task | Method Exmaple |
| ---- | ---- | 
| Home Group Provider | ```Reg.exe Export HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\HomeGroupProvider " & outputFileName & " /y /Reg:64``` | 
| EPD Policies | ```Reg.exe Export HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\EnterpriseDataProtection\Policies " & outputFileName & " /y /Reg:64" ``` | 
| Home Group Listener | ```Reg.exe Export HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\HomeGroupListener " & outputFileName & " /y /Reg:64" ``` | 
| Policy Manager | ```Reg.exe Export HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\PolicyManager\Providers " & outputFileName & " /y /Reg:64" ``` | 
| Export Registry Tree | ```reg export " & regpath & "  " & outputFileName & " /y" ``` |

