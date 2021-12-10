# Windows Procedures


| Process | Notes |
| ---- | ---- | 
| [Windows VPN](https://docs.microsoft.com/en-us/mem/intune/protect/microsoft-tunnel-overview)  | (AKA: Microsoft Tunnel) |
| Add, remove, or change a PIN | Settings > Accounts > Sign-in Options and click Windows Hello PIN |
| Get your BitLocker recovery key | 1. https://onedrive.com/recoverykey: Sign in with the same Microsoft account to retrieve the key <BR> 2. Bitlocker Management Tools in Control Panel: Right-click the drive icon in File Explorer, click Manage BitLocker, and then click Back Up Your Recovery Key |
| Safe Mode (WinRE) | Troubleshoot > Advanced Options > Startup Settings. From that screen, click Restart to display the classic startup menu with three entries for Safe Mode, including options for Safe Mode with Networking and Safe Mode with Command Prompt |
| Safe Mode Restart (Win10) | Settings > Update & Security > Recovery, and then click Restart Now under the Advanced Startup heading |
| Safe Mode Restart (Lock Screen) | Click the Power icon in the lower right corner and then hold down Shift as you click Restart for Safe Mode. |
  
### Perform a health check
Poor performance can also be attributed to hardware issues. Start by checking your PC’s fans aren’t overheating using [Speccy Portable](www.ccleaner.com/speccy/builds) – your desktop should typically run at under 50-degrees Celsius except when performing demanding tasks, while laptops are around 10 degrees hotter. Power off to perform a visual inspection of your vents and fans, brushing away any dust, plus rearrange cables if possible to improve the air flow.  
Failing hard drives can be a problem, too: Speccy can provide you with basic info via its Storage tab or download and install [HDDScan](www.hddscan.com) to perform more extensive tests. Test your CPU for potential stability problems using [Prime95](www.mersenne.org/download) – download and unzip it, then launch the program and select Just Stress Testing, leaving the default options to check your CPU is functioning correctly over an extended period. 

1. Clean up your PC: Next, open Settings and navigate to System > Storage to click ‘Free up space now’ to run Windows’ new disk clean-up tool.
2. Check for Malware
3. Decrapify: [IObit Uninstaller](www.iobit.com/en/advanceduninstaller.php), which lets you remove Windows apps as regular desktop programs.
4. Clear up Privacy Data: [PrivaZer](https://privazer.com) 
5. Run Memory Checks: MemTest86 or Windows Memory Diagnostic



  
