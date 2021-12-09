# IP Configuration & Status (IPCONFIG)
| Action | Example | 
| ---- | ---- | 
| Display DNS | ```ipconfig /displaydns ``` | 
| Display All | ```ipconfig /all ```|

# NBTStat
- nbtstat -c
- nbtstat -n

# NET
- net config rdr
- net config srv
- net share

# Network Command Shell (NETSH)

| Action | Example | 
| ---- | ---- | 
| Dump NetIO State | ```netsh interface teredo show state```<BR>```netsh interface httpstunnel show interface```<BR>```netsh interface httpstunnel show statistics``` | 
| Dump the connection security configuration | ```netsh advfirewall monitor show consec  ```| 
| Dump the connection security rules  | ```netsh advfirewall consec show rule name=all verbose ``` | 
| Dump the connection security rules from Dynamic Store | ```netsh advfirewall monitor show consec rule name=all ``` | 
| Dump the firewall configuration | ```netsh advfirewall monitor show firewall ``` | 
| Dump the firewall rules  | ```netsh advfirewall firewall show rule name=all verbose ``` | 
| Dump the firewall rules from Dynamic Store  | ```netsh advfirewall monitor show firewall rule name=all  ``` | 
| Dump the Windows Firewall Configuration | ```netsh advfirewall monitor show currentprofile  ``` | 
| Dump Winsock LSP catalog | ```netsh winsock show catalog ``` | 
| Net Events Info | ```netsh wfp show netevents file=" & outputFileName & " 1> " & logFileName & " 2>&1" ``` | 
| Show State Info | ```netsh wfp show state file=" & outputFileName & " 1> " & logFileName & " 2>&1" ``` | 
| System Ports Info | ```netsh wfp show sysports file=" & outputFileName & " 1> " & logFileName & " 2>&1" ``` | 
| WFP Info | ```netsh wfp show filters file=" & outputFileName ``` | 
| Winsock Log | ```netsh.exe winsock show catalog ``` | 
| WLAN Report | ```netsh wlan show wlanreport ``` | 

**Others:**
```DOS
netsh int ipv6 show neigh, logFileName
netsh namespace show effective
netsh namespace show policy
netsh wlan show all
netsh lan show interfaces
netsh lan show settings
netsh lan show profiles
netsh mbn show interfaces
netsh mbn show profile name=* interface=*
netsh mbn show readyinfo interface=*
netsh mbn show capability interface=*
```

# Network Configuration (NETCFG)
| Action | Example | 
| ---- | ---- | 
| Create Binding Map | ```netcfg -m``` |   

# PING
| Action | Example | 
| ---- | ---- | 
| Test Loopback | ```ping 127.0.0.1 -n 15 [ > NUL ]``` | 
  
# Trace the Route (TRACRT)
