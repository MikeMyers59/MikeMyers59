# Powershell

### Add/Remove secondary en-US keyboard
```powershell
# Add secondary en-US keyboard
$langs = Get-WinUserLanguageList
$langs.Add("en-US")
Set-WinUserLanguageList $langs -Force
# Remove secondary en-US keyboard
$langs = Get-WinUserLanguageList
Set-WinUserLanguageList ($langs | ? {$_.LanguageTag -ne "en-US"}) -Force
```

### Ask for elevated permissions if required
```powershell
If (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]"Administrator")) {
  Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`"" -Verb RunAs
  Exit
}
```

### Comments
```powershell
# Comments Here!
<##
  Multi-line Comments Here!
##>
```

### Display Message to User
```powershell
Write-Host <Message>
Write-Output <Message>
```

### Remove Files
```powershell
Remove-Item <Path>* [ -recurse ]
```

### Restart Computer
```powershell
Write-Host "Press any key to restart your system..." -ForegroundColor Black -BackgroundColor White
$key = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Write-Host "Restarting..."
Restart-Computer
```

### Restrict/Unrestrict AutoLogger directory
```powershell
# Remove AutoLogger file and restrict directory
Write-Host "Removing AutoLogger file and restricting directory..."
$autoLoggerDir = "$env:PROGRAMDATA\Microsoft\Diagnosis\ETLLogs\AutoLogger"
If (Test-Path "$autoLoggerDir\AutoLogger-Diagtrack-Listener.etl") {
  Remove-Item "$autoLoggerDir\AutoLogger-Diagtrack-Listener.etl"
}
icacls $autoLoggerDir /deny SYSTEM:`(OI`)`(CI`)F | Out-Null
# Unrestrict AutoLogger directory
$autoLoggerDir = "$env:PROGRAMDATA\Microsoft\Diagnosis\ETLLogs\AutoLogger"
icacls $autoLoggerDir /grant:r SYSTEM:`(OI`)`(CI`)F | Out-Null
```

### Set an Environmental Variable
```powershell
[Environment]::SetEnvironmentVariable('TEMP', 'C:\Temp', 'User') 
[Environment]::SetEnvironmentVariable('TEMP', 'C:\Temp', 'Machine')
```

### Sleep (Pause)
```powershell
Start-Sleep -s <Seconds>
```

### Install/Uninstall Work Folders Client
```powershell
# Install Work Folders Client
dism /online /Enable-Feature /FeatureName:WorkFolders-Client /Quiet /NoRestart
# Uninstall Work Folders Client
dism /online /Disable-Feature /FeatureName:WorkFolders-Client /Quiet /NoRestart
```

### Restore the files using installation medium 
```powershell
New-Item C:\Mnt -Type Directory | Out-Null
dism /Mount-Image /ImageFile:D:\sources\install.wim /index:1 /ReadOnly /MountDir:C:\Mnt
robocopy /S /SEC /R:0 "C:\Mnt\Program Files\WindowsApps" "C:\Program Files\WindowsApps"
dism /Unmount-Image /Discard /MountDir:C:\Mnt
Remove-Item -Path C:\Mnt –Recurse
```

### Updates are available message
```powershell
takeown /F "$env:WinDIR\System32\MusNotification.exe"
icacls "$env:WinDIR\System32\MusNotification.exe" /deny "$($EveryOne):(X)"
takeown /F "$env:WinDIR\System32\MusNotificationUx.exe"
icacls "$env:WinDIR\System32\MusNotificationUx.exe" /deny "$($EveryOne):(X)"
```

### Use the Shell to use Send Keys
```powershell
$wshell = New-Object -ComObject wscript.shell; $wshell.SendKeys('^{ESCAPE}')
Start-Sleep -s 5  # Pause for the system to catch up.
```

## Applications

### Uninstalling default apps
```powershell
$apps = @(
# default Windows 10 apps
  "Microsoft.3DBuilder"
  "Microsoft.Advertising.Xaml"
  "Microsoft.Appconnector"
  "Microsoft.BingFinance"
  "Microsoft.BingNews"
  "Microsoft.BingSports"
  "Microsoft.BingTranslator"
  "Microsoft.BingWeather"
  "Microsoft.FreshPaint"
  "Microsoft.GamingServices"
  "Microsoft.Microsoft3DViewer"
  "Microsoft.WindowsFeedbackHub"
  "Microsoft.MicrosoftOfficeHub"
  "Microsoft.MixedReality.Portal"
  "Microsoft.MicrosoftPowerBIForWindows"
  "Microsoft.MicrosoftSolitaireCollection"
  "Microsoft.MicrosoftStickyNotes"
  "Microsoft.MinecraftUWP"
  "Microsoft.NetworkSpeedTest"
  "Microsoft.Office.OneNote"
  "Microsoft.People"
  "Microsoft.Print3D"
  "Microsoft.SkypeApp"
  "Microsoft.Wallet"
  "Microsoft.Windows.Photos"
  "Microsoft.WindowsAlarms"
  "Microsoft.WindowsCalculator"
  "Microsoft.WindowsCamera"
  "microsoft.windowscommunicationsapps"
  "Microsoft.WindowsMaps"
  "Microsoft.WindowsPhone"
  "Microsoft.WindowsSoundRecorder"
  "Microsoft.WindowsStore"   # can't be re-installed
  "Microsoft.Xbox.TCUI"
  "Microsoft.XboxApp"
  "Microsoft.XboxGameOverlay"
  "Microsoft.XboxGamingOverlay"
  "Microsoft.XboxSpeechToTextOverlay"
  "Microsoft.YourPhone"
  "Microsoft.ZuneMusic"
  "Microsoft.ZuneVideo"
  "Microsoft.Windows.CloudExperienceHost"
  "Microsoft.Windows.ContentDeliveryManager"
  "Microsoft.Windows.PeopleExperienceHost"
  "Microsoft.XboxGameCallableUI"

# Threshold 2 apps
  "Microsoft.CommsPhone"
  "Microsoft.ConnectivityStore"
  "Microsoft.GetHelp"
  "Microsoft.Getstarted"
  "Microsoft.Messaging"
  "Microsoft.Office.Sway"
  "Microsoft.OneConnect"
  "Microsoft.WindowsFeedbackHub"

#  Creators Update apps
  "Microsoft.Microsoft3DViewer"
  "Microsoft.MSPaint"

#  Redstone apps
  "Microsoft.BingFoodAndDrink"
  "Microsoft.BingHealthAndFitness"
  "Microsoft.BingTravel"
  "Microsoft.WindowsReadingList"

#  Redstone 5 apps
  "Microsoft.MixedReality.Portal"
  "Microsoft.ScreenSketch"
  "Microsoft.XboxGamingOverlay"
  "Microsoft.YourPhone"

#  Non-Microsoft
  "2FE3CB00.PicsArt-PhotoStudio"
  "46928bounde.EclipseManager"
  "4DF9E0F8.Netflix"
  "613EBCEA.PolarrPhotoEditorAcademicEdition"
  "6Wunderkinder.Wunderlist"
  "7EE7776C.LinkedInforWindows"
  "89006A2E.AutodeskSketchBook"
  "9E2F88E3.Twitter"
  "A278AB0D.DisneyMagicKingdoms"
  "A278AB0D.MarchofEmpires"
  "ActiproSoftwareLLC.562882FEEB491" 
# next one is for the Code Writer from Actipro Software LLC
  "CAF9E577.Plex"
  "ClearChannelRadioDigital.iHeartRadio"
  "D52A8D61.FarmVille2CountryEscape"
  "D5EA27B7.Duolingo-LearnLanguagesforFree"
  "DB6EA5DB.CyberLinkMediaSuiteEssentials"
  "DolbyLaboratories.DolbyAccess"
  "DolbyLaboratories.DolbyAccess"
  "Drawboard.DrawboardPDF"
  "Facebook.Facebook"
  "Fitbit.FitbitCoach"
  "Flipboard.Flipboard"
  "GAMELOFTSA.Asphalt8Airborne"
  "KeeperSecurityInc.Keeper"
  "NORDCURRENT.COOKINGFEVER"
  "PandoraMediaInc.29680B314EFC2"
  "Playtika.CaesarsSlotsFreeCasino"
  "ShazamEntertainmentLtd.Shazam"
  "SlingTVLLC.SlingTV"
  "SpotifyAB.SpotifyMusic"
  "TheNewYorkTimes.NYTCrossword"
  "ThumbmunkeysLtd.PhototasticCollage"
  "TuneIn.TuneInRadio"
  "WinZipComputing.WinZipUniversal"
  "XINGAG.XING"
  "flaregamesGmbH.RoyalRevolt2"
  "king.com.*"
  "king.com.BubbleWitch3Saga"
  "king.com.CandyCrushSaga"
  "king.com.CandyCrushSodaSaga"

# apps which cannot be removed using Remove-AppxPackage
  "Microsoft.BioEnrollment"
  "Microsoft.MicrosoftEdge"
  "Microsoft.Windows.Cortana"
  "Microsoft.WindowsFeedback"
  "Microsoft.XboxGameCallableUI"
  "Microsoft.XboxIdentityProvider"
  "Windows.ContactSupport"

# apps which other apps depend on
  "Microsoft.Advertising.Xaml"
)

foreach ($app in $apps) {
  Write-Output "Trying to remove $app"
  Get-AppxPackage -Name $app -AllUsers | Remove-AppxPackage -AllUsers
  Get-AppXProvisionedPackage -Online |
  Where-Object DisplayName -EQ $app |
  Remove-AppxProvisionedPackage -Online
}

# Prevents Apps from re-installing
$cdm = @(
  "ContentDeliveryAllowed"
  "FeatureManagementEnabled"
  "OemPreInstalledAppsEnabled"
  "PreInstalledAppsEnabled"
  "PreInstalledAppsEverEnabled"
  "SilentInstalledAppsEnabled"
  "SubscribedContent-314559Enabled"
  "SubscribedContent-338387Enabled"
  "SubscribedContent-338388Enabled"
  "SubscribedContent-338389Enabled"
  "SubscribedContent-338393Enabled"
  "SubscribedContentEnabled"
  "SystemPaneSuggestionsEnabled"
)

New-FolderForced -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager"
foreach ($key in $cdm) {
  Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\ContentDeliveryManager" $key 0
}

New-FolderForced -Path "HKLM:\SOFTWARE\Policies\Microsoft\WindowsStore"
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\WindowsStore" "AutoDownload" 2

# Prevents "Suggested Applications" returning
New-FolderForced -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\CloudContent"
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\CloudContent" "DisableWindowsConsumerFeatures" 1
```

### 3DBuilder
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.3DBuilder").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.3DBuilder" | Remove-AppxPackage
```

### Alarms
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.WindowsAlarms").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.WindowsAlarms" | Remove-AppxPackage
```

### App Connector
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.AppConnector").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.AppConnector" | Remove-AppxPackage
```

### Bing Finance
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.BingFinance").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.BingFinance" | Remove-AppxPackage
```

### Bing News
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.BingNews").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.BingNews" | Remove-AppxPackage
```

### Bing Sports
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.BingSports").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.BingSports" | Remove-AppxPackage
```

### Bing Weather
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.BingWeather").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.BingWeather" | Remove-AppxPackage
```

### Camera
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.WindowsCamera").InstallLocation)\AppXManifest.xml 
Get-AppxPackage "Microsoft.WindowsCamera" | Remove-AppxPackage
"
```

### Candy Crush Soda Saga
```powershell
Get-AppxPackage "king.com.CandyCrushSodaSaga" | Remove-AppxPackage
```

### Comms Phone
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.CommsPhone").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.CommsPhone" | Remove-AppxPackage
```

### Communications Apps
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.windowscommunicationsapps").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "microsoft.windowscommunicationsapps" | Remove-AppxPackage
```

### Connectivity Store
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.ConnectivityStore").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.ConnectivityStore" | Remove-AppxPackage
```

### Explorer
```powershell
Stop-Process -name explorer
Start-Process -name explorer
```

### Feedback Hub
```powershell
Get-AppxPackage "Microsoft.GetHelp" | Remove-AppxPackage
```

### Get Help
```powershell
Get-AppxPackage "Microsoft.GetHelp" | Remove-AppxPackage
```

### Get Started
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.Getstarted").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.Getstarted" | Remove-AppxPackage
```

### Maps
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.WindowsMaps").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.WindowsMaps" | Remove-AppxPackage
```

### Messaging
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.Messaging").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.Messaging" | Remove-AppxPackage
```

### Microsoft Office Hub
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.MicrosoftOfficeHub").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.MicrosoftOfficeHub" | Remove-AppxPackage
```

### Microsoft Solitaire Collection
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.MicrosoftSolitaireCollection").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.MicrosoftSolitaireCollection" | Remove-AppxPackage
```

### Mixed Reality Portal
```powershell
Get-AppxPackage "Microsoft.MixedReality.Portal" | Remove-AppxPackage
```

### NET 3.5
```powershell
# Install .NET 3.5
::Dism.exe /online /enable-feature /featurename:NetFX3 /source:%current%sxs\ /LimitAccess
Dism.exe /online /enable-feature /featurename:NetFX3 /All /LimitAccess /source:D:\sources\sxs /LimitAccess
```

### OneDrive
```powershell
# Install OneDrive
$onedrive = "$env:SYSTEMROOT\SysWOW64\OneDriveSetup.exe"
If (!(Test-Path $onedrive)) {
  $onedrive = "$env:SYSTEMROOT\System32\OneDriveSetup.exe"
}
Start-Process $onedrive –NoNewWindow
# Uninstall OneDrive (WINDOWS WILL NOT SYSPREP WITHOUT IT!)
Stop-Process -Name OneDrive -ErrorAction SilentlyContinue
Start-Sleep -s 3
$onedrive = "$env:SYSTEMROOT\SysWOW64\OneDriveSetup.exe"
If (!(Test-Path $onedrive)) {
  $onedrive = "$env:SYSTEMROOT\System32\OneDriveSetup.exe"
}
Start-Process $onedrive "/uninstall" -NoNewWindow -Wait
Start-Sleep -s 3
Stop-Process -Name explorer -ErrorAction SilentlyContinue
Start-Sleep -s 3
Remove-Item "$env:USERPROFILE\OneDrive" -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item "$env:LOCALAPPDATA\Microsoft\OneDrive" -Force -Recurse -ErrorAction SilentlyContinue
Remove-Item "$env:PROGRAMDATA\Microsoft OneDrive" -Force -Recurse -ErrorAction SilentlyContinue
If (Test-Path "$env:SYSTEMDRIVE\OneDriveTemp") {
  Remove-Item "$env:SYSTEMDRIVE\OneDriveTemp" -Force -Recurse -ErrorAction SilentlyContinue
}
If (!(Test-Path "HKCR:")) {
  New-PSDrive -Name HKCR -PSProvider Registry -Root HKEY_CLASSES_ROOT | Out-Null
}
Remove-Item -Path "HKCR:\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" -Recurse -ErrorAction SilentlyContinue
Remove-Item -Path "HKCR:\Wow6432Node\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" -Recurse -ErrorAction SilentlyContinue
```
```powershell
# This script will remove and disable OneDrive integration.
Import-Module -DisableNameChecking $PSScriptRoot\..\lib\New-FolderForced.psm1
Import-Module -DisableNameChecking $PSScriptRoot\..\lib\take-own.psm1
# Remove OneDrive
if (Test-Path "$env:systemroot\System32\OneDriveSetup.exe") {
  & "$env:systemroot\System32\OneDriveSetup.exe" /uninstall
}
if (Test-Path "$env:systemroot\SysWOW64\OneDriveSetup.exe") {
  & "$env:systemroot\SysWOW64\OneDriveSetup.exe" /uninstall
}
# Removing OneDrive leftovers
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "$env:localappdata\Microsoft\OneDrive"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "$env:programdata\Microsoft OneDrive"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "$env:systemdrive\OneDriveTemp"
# check if directory is empty before removing:
If ((Get-ChildItem "$env:userprofile\OneDrive" -Recurse | Measure-Object).Count -eq 0) {
  Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "$env:userprofile\OneDrive"
}
# Disable OneDrive via Group Policies
New-FolderForced -Path "HKLM:\SOFTWARE\Wow6432Node\Policies\Microsoft\Windows\OneDrive"
Set-ItemProperty -Path "HKLM:\SOFTWARE\Wow6432Node\Policies\Microsoft\Windows\OneDrive" "DisableFileSyncNGSC" 1
# Remove Onedrive from explorer sidebar
New-PSDrive -PSProvider "Registry" -Root "HKEY_CLASSES_ROOT" -Name "HKCR"
mkdir -Force "HKCR:\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}"
Set-ItemProperty -Path "HKCR:\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" "System.IsPinnedToNameSpaceTree" 0
mkdir -Force "HKCR:\Wow6432Node\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}"
Set-ItemProperty -Path "HKCR:\Wow6432Node\CLSID\{018D5C66-4533-4307-9B53-224DE2ED1FE6}" "System.IsPinnedToNameSpaceTree" 0
Remove-PSDrive "HKCR"
# Remove additional OneDrive leftovers"
foreach ($item in (Get-ChildItem "$env:WinDir\WinSxS\*onedrive*")) {
  Takeown-Folder $item.FullName
  Remove-Item -Recurse -Force $item.FullName
}
```

### OneNote
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.Office.OneNote").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.Office.OneNote" | Remove-AppxPackage
```

### People
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.People").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.People" | Remove-AppxPackage
```

### Phone
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.WindowsPhone").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.WindowsPhone" | Remove-AppxPackage
```

### Photos
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.Windows.Photos").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.Windows.Photos" | Remove-AppxPackage
```

### Screen Sketch
```powershell
Get-AppxPackage "Microsoft.ScreenSketch" | Remove-AppxPackage
```

### Skype App
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.SkypeApp").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.SkypeApp" | Remove-AppxPackage
```

### Sound Recorder
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.WindowsSoundRecorder").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.WindowsSoundRecorder" | Remove-AppxPackage
```

### Sway
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.Office.Sway").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.Office.Sway" | Remove-AppxPackage
```

### Twitter
```powershell
Get-AppxPackage "9E2F88E3.Twitter" | Remove-AppxPackage
```

### Wallet
```powershell
Get-AppxPackage "Microsoft.Wallet" | Remove-AppxPackage
```

### Windows Media Player (WMP)
```powershell
# Install Windows Media Player
dism /online /Enable-Feature /FeatureName:MediaPlayback /Quiet /NoRestart 
# Uninstall Windows Media Player
dism /online /Disable-Feature /FeatureName:MediaPlayback /Quiet /NoRestart
```

### Xbox App
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.XboxApp").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.XboxApp" | Remove-AppxPackage
```

### Xbox Game Overlay
```powershell
Get-AppxPackage "Microsoft.XboxGameOverlay" | Remove-AppxPackage
```

### Xbox Identity Provider
```powershell
Get-AppBackgroundTask "Microsoft.XboxIdentityProvider" | Remove-AppPackage
```

### Xbox Speech To Text Overlay
```powershell
Get-AppxPackage "Microsoft.XboxSpeechToTextOverlay" | Remove-AppxPackage
```

### Xbox TCUI
```powershell
Get-AppxPackage "Microsoft.Xbox.TCUI" | Remove-AppxPackage
```

### Zune Music
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.ZuneMusic").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.ZuneMusic" | Remove-AppxPackage
```

### Zune Video
```powershell
Add-AppxPackage -DisableDevelopmentMode -Register "$($(Get-AppXPackage -AllUsers "Microsoft.ZuneVideo").InstallLocation)\AppXManifest.xml"
Get-AppxPackage "Microsoft.ZuneVideo" | Remove-AppxPackage
```

## Certificates
You can find the actual Certificates registry entries under:
| Certificates|Registry Key Path|CP File |  
| --- | --- | --- |  
| User| `HKEY_CURRENT_USER\SOFTWARE\Microsoft\SystemCertificates\`|`certmgr.msc` |  
| Local Machine|`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SystemCertificates\`|`certlm.msc` |  

```powershell
#Delete a Certificate by thumbprint
Get-ChildItem Cert:\LocalMachine\My\D20159B7772E33A6A33E436C938C6FE764367396 | Remove-Item

#Delete a Certificate by subject/serialnumber/issuer/whatever
Get-ChildItem Cert:\LocalMachine\My |
Where-Object { $_.Subject -match 'Frode F' } |
Remove-Item
```

## Registry

### Enable/Disable Firewall
```powershell
# Enable Firewall
Set-NetFirewallProfile -Profile * -Enabled True
# Disable Firewall
Set-NetFirewallProfile -Profile * -Enabled False
```

### Enable/Disable IPv6
```powershell
# Enable IPv6
Remove-ItemProperty -path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip6\Parameters" -Name "DisabledComponents" -Type "DWORD" -Value "0xffffffff"
# Disable IPv6
Set-ItemProperty -path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip6\Parameters" -Name "DisabledComponents" -Type "DWORD" -Value "0xffffffff"
```

### Enable/Disable Location Tracking
```powershell
# Enable Location Tracking
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Sensor\Overrides\{BFA794E4-F964-4FDB-90F6-51056BFE4B44}" -Name "SensorPermissionState" -Type DWord -Value 1
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\lfsvc\Service\Configuration" -Name "Status" -Type DWord -Value 1
# Disable Location Tracking
Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Sensor\Overrides\{BFA794E4-F964-4FDB-90F6-51056BFE4B44}" -Name "SensorPermissionState" -Type DWord -Value 0
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Services\lfsvc\Service\Configuration" -Name "Status" -Type DWord -Value 0
```

### Enable/Disable Lock screen
```powershell
# Enable Lock screen
Remove-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows\Personalization" -Name "NoLockScreen"
# Disable Lock screen
If (!(Test-Path "HKLM:\Software\Policies\Microsoft\Windows\Personalization")) {
  New-Item -Path "HKLM:\Software\Policies\Microsoft\Windows\Personalization" | Out-Null
}
Set-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows\Personalization" -Name "NoLockScreen" -Type DWord -Value 1
```

### Enable/Disable OneDrive
```powershell
# Enable OneDrive
Remove-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\OneDrive" -Name "DisableFileSyncNGSC"
# Disable OneDrive
If (!(Test-Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\OneDrive")) {
  New-Item -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\OneDrive" | Out-Null
}
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\OneDrive" -Name "DisableFileSyncNGSC" -Type DWord -Value 1
```

### Enable/Disable Remote Assistance
```powershell
# Enable Remote Assistance
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Remote Assistance" -Name "fAllowToGetHelp" -Type DWord -Value 1
# Disable Remote Assistance
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Remote Assistance" -Name "fAllowToGetHelp" -Type DWord -Value 0
```

### Enable/Disable Remote Desktop
```powershell
# Enable Remote Desktop w/o Network Level Authentication
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Terminal Server" -Name "fDenyTSConnections" -Type DWord -Value 0
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" -Name "UserAuthentication" -Type DWord -Value 0
# Disable Remote Desktop
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Terminal Server" -Name "fDenyTSConnections" -Type DWord -Value 1
Set-ItemProperty -Path "HKLM:\System\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp" -Name "UserAuthentication" -Type DWord -Value 1
```

### Enable/Disable sharing mapped drives between users
```powershell
# Enable sharing mapped drives between users
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System" -Name "EnableLinkedConnections" -Type DWord -Value 1
# Disable sharing mapped drives between users
Remove-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System" -Name "EnableLinkedConnections"
```

### Enable/Disable SmartScreen Filter
```powershell
# Enable SmartScreen Filter
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "SmartScreenEnabled" -Type String -Value "RequireAdmin"
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\AppHost" -Name "EnableWebContentEvaluation"
# Disable SmartScreen Filter
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "SmartScreenEnabled" -Type String -Value "Off"
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\AppHost" -Name "EnableWebContentEvaluation" -Type DWord -Value 0
```

### Enable/Disable Sticky keys prompt
```powershell
# Enable Sticky keys prompt
Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\StickyKeys" -Name "Flags" -Type String -Value "510"
# Disable Sticky keys prompt
Set-ItemProperty -Path "HKCU:\Control Panel\Accessibility\StickyKeys" -Name "Flags" -Type String -Value "506"
```

### Enable/Disable Telemetry
```powershell
# Enable Telemetry
Remove-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows\DataCollection" -Name "AllowTelemetry"
# Disable Telemetry
Write-Host "Disabling Telemetry..."
Set-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows\DataCollection" -Name "AllowTelemetry" -Type DWord -Value 0
```

### Enable/Disable WiFi Sense
```powershell
# Enable Wi-Fi Sense
Set-ItemProperty -Path "HKLM:\Software\Microsoft\PolicyManager\default\WiFi\AllowWiFiHotSpotReporting" -Name "Value" -Type DWord -Value 1
Set-ItemProperty -Path "HKLM:\Software\Microsoft\PolicyManager\default\WiFi\AllowAutoConnectToWiFiSenseHotspots" -Name "Value" -Type DWord -Value 1
# Disable Wi-Fi Sense
If (!(Test-Path "HKLM:\Software\Microsoft\PolicyManager\default\WiFi\AllowWiFiHotSpotReporting")) {
  New-Item -Path "HKLM:\Software\Microsoft\PolicyManager\default\WiFi\AllowWiFiHotSpotReporting" -Force | Out-Null
}
Set-ItemProperty -Path "HKLM:\Software\Microsoft\PolicyManager\default\WiFi\AllowWiFiHotSpotReporting" -Name "Value" -Type DWord -Value 0
Set-ItemProperty -Path "HKLM:\Software\Microsoft\PolicyManager\default\WiFi\AllowAutoConnectToWiFiSenseHotspots" -Name "Value" -Type DWord -Value 0
```

### Enable/Disable Windows Defender
```powershell
# Enable Windows Defender
Remove-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows Defender" -Name "DisableAntiSpyware"
# Disable Windows Defender
Set-ItemProperty -Path "HKLM:\Software\Policies\Microsoft\Windows Defender" -Name "DisableAntiSpyware" -Type DWord -Value 1
```

### Enable/Disable Windows Update automatic restart
```powershell
# Enable Windows Update automatic restart
Set-ItemProperty -Path "HKLM:\Software\Microsoft\WindowsUpdate\UX\Settings" -Name "UxOption" -Type DWord -Value 0
# Disable Windows Update automatic restart
Set-ItemProperty -Path "HKLM:\Software\Microsoft\WindowsUpdate\UX\Settings" -Name "UxOption" -Type DWord -Value 1
```

### Lower/Raise UAC level
```powershell
# Lower UAC level
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System" -Name "ConsentPromptBehaviorAdmin" -Type DWord -Value 0
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System" -Name "PromptOnSecureDesktop" -Type DWord -Value 0
# Raise UAC level
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System" -Name "ConsentPromptBehaviorAdmin" -Type DWord -Value 5
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\Policies\System" -Name "PromptOnSecureDesktop" -Type DWord -Value 1
```

### Remove or reset default open action for bmp, gif, jpg and png
```powershell
If (!(Test-Path "HKCR:")) {
  New-PSDrive -Name HKCR -PSProvider Registry -Root HKEY_CLASSES_ROOT | Out-Null
}
Remove-Item -Path "HKCR:\Paint.Picture\shell\open" -Recurse
Remove-ItemProperty -Path "HKCR:\giffile\shell\open" -Name "MuiVerb"
Set-ItemProperty -Path "HKCR:\giffile\shell\open" -Name "CommandId" -Type String -Value "IE.File"
Set-ItemProperty -Path "HKCR:\giffile\shell\open\command" -Name "(Default)" -Type String -Value "`"$env:SystemDrive\Program Files\Internet Explorer\iexplore.exe`" %1"
Set-ItemProperty -Path "HKCR:\giffile\shell\open\command" -Name "DelegateExecute" -Type String -Value "{17FE9752-0B5A-4665-84CD-569794602F5C}"
Remove-Item -Path "HKCR:\jpegfile\shell\open" -Recurse
Remove-Item -Path "HKCR:\pngfile\shell\open" -Recurse
```

### Restrict/Unrestrict Windows Update P2P
```powershell
# Restrict Windows Update P2P only to local network
Set-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\DeliveryOptimization\Config" -Name "DODownloadMode" -Type DWord -Value 1
If (!(Test-Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\DeliveryOptimization")) {
	New-Item -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\DeliveryOptimization" | Out-Null
}
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\DeliveryOptimization" -Name "SystemSettingsDownloadMode" -Type DWord -Value 3
# Unrestrict Windows Update P2P
Remove-ItemProperty -Path "HKLM:\Software\Microsoft\Windows\CurrentVersion\DeliveryOptimization\Config" -Name "DODownloadMode"
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\DeliveryOptimization" -Name "SystemSettingsDownloadMode"
```

### Set Photo Viewer as default for bmp, gif, jpg and png
```powershell
If (!(Test-Path "HKCR:")) {
  New-PSDrive -Name HKCR -PSProvider Registry -Root HKEY_CLASSES_ROOT | Out-Null
}
ForEach ($type in @("Paint.Picture", "giffile", "jpegfile", "pngfile")) {
  New-Item -Path $("HKCR:\$type\shell\open") -Force | Out-Null
  New-Item -Path $("HKCR:\$type\shell\open\command") | Out-Null
  Set-ItemProperty -Path $("HKCR:\$type\shell\open") -Name "MuiVerb" -Type ExpandString -Value "@%ProgramFiles%\Windows Photo Viewer\photoviewer.dll,-3043"
  Set-ItemProperty -Path $("HKCR:\$type\shell\open\command") -Name "(Default)" -Type ExpandString -Value "%SystemRoot%\System32\rundll32.exe `"%ProgramFiles%\Windows Photo Viewer\PhotoViewer.dll`", ImageView_Fullscreen %1"
}
```

### Set Task Bar Icons Size
```powershell
# Show large icons in taskbar
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "TaskbarSmallIcons"
# Show small icons in taskbar
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "TaskbarSmallIcons" -Type DWord -Value 1
```

### Set Windows to Dark Mode
```powershell
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes" /f
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes" /v "AppsUseLightTheme" /t "REG_DWORD" /d "0" /f
reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes" /v "SystemUsesLightTheme" /t "REG_DWORD" /d "0" /f
reg add "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes" /f
reg add "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /f
reg add "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "AppsUseLightTheme" /t "REG_DWORD" /d "0" /f
reg add "HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "SystemUsesLightTheme" /t "REG_DWORD" /d "0" /f
reg add "HKEY_USERS\.DEFAULT\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes" /f
reg add "HKEY_USERS\.DEFAULT\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /f
reg add "HKEY_USERS\.DEFAULT\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "AppsUseLightTheme" /t "REG_DWORD" /d "0" /f
reg add "HKEY_USERS\.DEFAULT\SOFTWARE\Microsoft\Windows\CurrentVersion\Themes\Personalize" /v "SystemUsesLightTheme" /t "REG_DWORD" /d "0" /f
```

### Show Drive Letters First
```powershell
Set-ItemProperty -path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer" -Name "ShowDriveLettersFirst" -Type "DWORD" -Value "4"```

### Show/Hide Computer shortcut on desktop
```powershell
# Show Computer shortcut on desktop
If (!(Test-Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu")) {
  New-Item -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu" | Out-Null
}
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu" -Name "{20D04FE0-3AEA-1069-A2D8-08002B30309D}" -Type DWord -Value 0
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" -Name "{20D04FE0-3AEA-1069-A2D8-08002B30309D}" -Type DWord -Value 0
# Hide Computer shortcut from desktop
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\ClassicStartMenu" -Name "{20D04FE0-3AEA-1069-A2D8-08002B30309D}"
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\HideDesktopIcons\NewStartPanel" -Name "{20D04FE0-3AEA-1069-A2D8-08002B30309D}"
```

### Show/Hide hidden files
```powershell
# Show hidden files
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "Hidden" -Type DWord -Value 1
# Hide hidden files
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "Hidden" -Type DWord -Value 2
```

### Show/Hide known file extensions
```powershell
# Show known file extensions
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "HideFileExt" -Type DWord -Value 0
# Hide known file extensions
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "HideFileExt" -Type DWord -Value 1
```

### Show/Hide Search button / box
```powershell
# Show Search button / box
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Name "SearchboxTaskbarMode"
# Hide Search button / box
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" -Name "SearchboxTaskbarMode" -Type DWord -Value 0
```

### Show/Hide Task View button
```powershell
# Show Task View button
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "ShowTaskViewButton"
# Hide Task View button
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "ShowTaskViewButton" -Type DWord -Value 0
```

### Show/Hide titles in taskbar
```powershell
# Show titles in taskbar
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "TaskbarGlomLevel" -Type DWord -Value 1
# Hide titles in taskbar
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "TaskbarGlomLevel"
```

### Show/Hide tray icons
```powershell
# Show all tray icons
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "EnableAutoTray" -Type DWord -Value 0
# Hide tray icons as needed
Remove-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer" -Name "EnableAutoTray"
```

### Show/Remove Photo Viewer in "Open with..."
```powershell
# Show Photo Viewer in "Open with..."
If (!(Test-Path "HKCR:")) {
  New-PSDrive -Name HKCR -PSProvider Registry -Root HKEY_CLASSES_ROOT | Out-Null
}
New-Item -Path "HKCR:\Applications\photoviewer.dll\shell\open\command" -Force | Out-Null
New-Item -Path "HKCR:\Applications\photoviewer.dll\shell\open\DropTarget" -Force | Out-Null
Set-ItemProperty -Path "HKCR:\Applications\photoviewer.dll\shell\open" -Name "MuiVerb" -Type String -Value "@photoviewer.dll,-3043"
Set-ItemProperty -Path "HKCR:\Applications\photoviewer.dll\shell\open\command" -Name "(Default)" -Type ExpandString -Value "%SystemRoot%\System32\rundll32.exe `"%ProgramFiles%\Windows Photo Viewer\PhotoViewer.dll`", ImageView_Fullscreen %1"
Set-ItemProperty -Path "HKCR:\Applications\photoviewer.dll\shell\open\DropTarget" -Name "Clsid" -Type String -Value "{FFE2A43C-56B9-4bf5-9A79-CC6D4285608A}"
# Remove Photo Viewer from "Open with..."
If (!(Test-Path "HKCR:")) {
  New-PSDrive -Name HKCR -PSProvider Registry -Root HKEY_CLASSES_ROOT | Out-Null
}
Remove-Item -Path "HKCR:\Applications\photoviewer.dll\shell\open" –Recurse
```

### Disable automatic  download and seeding updates to other computers
```powershell
Import-Module -DisableNameChecking $PSScriptRoot\..\lib\New-FolderForced.psm1
```

## Services

### Disable unwanted Windows services
```powershell
# If you do not want to disable
# certain services comment out the corresponding lines below.
$services = @(
  "diagnosticshub.standardcollector.service" # Microsoft (R) Diagnostics Hub Standard Collector Service
  "DiagTrack"     # Diagnostics Tracking Service
  "dmwappushservice"  # WAP Push Message Routing Service (see known issues)
  "lfsvc"         # Geolocation Service
  "MapsBroker"    # Downloaded Maps Manager
  "NetTcpPortSharing" # Net.Tcp Port Sharing Service
  "RemoteAccess"  # Routing and Remote Access
  "RemoteRegistry"  # Remote Registry
  "SharedAccess"  # Internet Connection Sharing (ICS)
  "TrkWks"        # Distributed Link Tracking Client
  "WbioSrvc"      # Windows Biometric Service (required for Fingerprint reader / facial detection)
  "WlanSvc"       # WLAN AutoConfig
  "WMPNetworkSvc" # Windows Media Player Network Sharing Service
  "wscsvc"        # Windows Security Center Service
  "WSearch"       # Windows Search
  "XblAuthManager" # Xbox Live Auth Manager
  "XblGameSave"   # Xbox Live Game Save Service
  "XboxNetApiSvc" # Xbox Live Networking Service
  "ndu"          # Windows Network Data Usage (NDU) Monitor Services which cannot be disabled
  "WdNisSvc"
)
foreach ($service in $services) {
  Write-Output "Trying to disable $service"
  Get-Service -Name $service | Set-Service -StartupType Disabled
}
```

### Enable/Disable Diagnostics Tracking Service
```powershell
# Enable Diagnostics Tracking Service
Set-Service "DiagTrack" -StartupType Automatic
# Stop and disable Diagnostics Tracking Service
Set-Service "DiagTrack" -StartupType Disabled
```

### Enable/Disable Home Group Service
```powershell
# Enable Home Groups services
Set-Service "HomeGroupListener" -StartupType Manual
Set-Service "HomeGroupProvider" -StartupType Manual
# Disable Home Groups services
Set-Service "HomeGroupListener" -StartupType Disabled
Set-Service "HomeGroupProvider" -StartupType Disabled
```

### Enable/Disable Home Group Service
```powershell
# Start Home Groups services
Start-Service "HomeGroupProvider"
Start-Service "HomeGroupListener"
# Stop Home Groups services
Stop-Service "HomeGroupListener"
Stop-Service "HomeGroupProvider"
```

### Stop/Start Diagnostics Tracking Service
```powershell
# Stop Diagnostics Tracking Service
Stop-Service "DiagTrack"
# Start Diagnostics Tracking Service
Start-Service "DiagTrack"
```

## Start Menu

### Modify Default User Start Menu
```powershell
# This script removes all Start Menu Tiles from the default user #
Set-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -Value ' <LayoutModificationTemplate xmlns:defaultlayout="http://schemas.microsoft.com/Start/2014/FullDefaultLayout" xmlns:start="http://schemas.microsoft.com/Start/2014/StartLayout" Version="1" xmlns="http://schemas.microsoft.com/Start/2014/LayoutModification">'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <LayoutOptions StartTileGroupCellWidth="6" />'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <DefaultLayoutOverride>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <StartLayoutCollection>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <defaultlayout:StartLayout GroupCellWidth="6" />'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' </StartLayoutCollection>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' </DefaultLayoutOverride>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <CustomTaskbarLayoutCollection>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <defaultlayout:TaskbarLayout>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <taskbar:TaskbarPinList>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <taskbar:UWA AppUserModelID="Microsoft.MicrosoftEdge_8wekyb3d8bbwe!MicrosoftEdge" />'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' <taskbar:DesktopApp DesktopApplicationLinkPath="%APPDATA%\Microsoft\Windows\Start Menu\Programs\System Tools\File Explorer.lnk" />'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' </taskbar:TaskbarPinList>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' </defaultlayout:TaskbarLayout>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' </CustomTaskbarLayoutCollection>'
Add-Content -Path 'C:\Users\Default\AppData\Local\Microsoft\Windows\Shell\DefaultLayouts.xml' -value ' </LayoutModificationTemplate>'
$START_MENU_LAYOUT = @"
<LayoutModificationTemplate xmlns:defaultlayout="http://schemas.microsoft.com/Start/2014/FullDefaultLayout" xmlns:start="http://schemas.microsoft.com/Start/2014/StartLayout" Version="1" xmlns:taskbar="http://schemas.microsoft.com/Start/2014/TaskbarLayout" xmlns="http://schemas.microsoft.com/Start/2014/LayoutModification">
    <LayoutOptions StartTileGroupCellWidth="6" />
    <DefaultLayoutOverride>
        <StartLayoutCollection>
            <defaultlayout:StartLayout GroupCellWidth="6" />
        </StartLayoutCollection>
    </DefaultLayoutOverride>
</LayoutModificationTemplate>
"@

$layoutFile="C:\Windows\StartMenuLayout.xml"

#Delete layout file if it already exists
If(Test-Path $layoutFile)
{
    Remove-Item $layoutFile
}
#Creates the blank layout file
$START_MENU_LAYOUT | Out-File $layoutFile -Encoding ASCII
$regAliases = @("HKLM", "HKCU")
#Assign the start layout and force it to apply with "LockedStartLayout" at both the machine and user level
foreach ($regAlias in $regAliases){
  $basePath = $regAlias + ":\SOFTWARE\Policies\Microsoft\Windows"
  $keyPath = $basePath + "\Explorer" 
  IF(!(Test-Path -Path $keyPath)) { 
    New-Item -Path $basePath -Name "Explorer"
  }
  Set-ItemProperty -Path $keyPath -Name "LockedStartLayout" -Value 1
  Set-ItemProperty -Path $keyPath -Name "StartLayoutFile" -Value $layoutFile
}
#Enable the ability to pin items to Start by disabling "LockedStartLayout"
foreach ($regAlias in $regAliases){
    $basePath = $regAlias + ":\SOFTWARE\Policies\Microsoft\Windows"
    $keyPath = $basePath + "\Explorer" 
    Set-ItemProperty -Path $keyPath -Name "LockedStartLayout" -Value 0
}
# Uncomment the next line to make clean start menu default for all new users
Import-StartLayout -LayoutPath $layoutFile -MountPath $env:SystemDrive\
Remove-Item $layoutFile
```

### Remove a startmenu entry
```powershell
Remove-Item -Force -ErrorAction SilentlyContinue "$env:userprofile\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\<EntryName>.lnk"
```

## Tasks

### Remove a scheduled task
```powershell
Get-ScheduledTask -TaskPath '\' -TaskName <TaskName> -ea SilentlyContinue | Unregister-ScheduledTask -Confirm:$false
```

### Task Kill
Use this command to kill tasks.
```powershell
taskkill.exe [OPTIONS] [TASKName]
```
Kill OneDrive process:	`taskkill.exe /F /IM "OneDrive.exe"`
Kill Explorer process:	`taskkill.exe /F /IM "explorer.exe"`

