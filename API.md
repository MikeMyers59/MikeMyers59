# Application Program Interface (API)
#### or How to access Dynamic Link Libraries (DLLs)!

# Dynamic Link Libraries (DLLs)
Place these API declarations and Constants at the top of your Form in the General Declarations area.

## ADVAPI32

#### Get User Name
```vba
' x86 Version
Private Declare Function apiGetUserName Lib "advapi32.dll" Alias _
    "GetUserNameA" (ByVal lpBuffer As String, nSize As Long) As Long
```

## COMDLG32

#### Get Open File Name
```vba
' x86 Version
Declare Function apiGetOpenFileName Lib "comdlg32.dll" _
    Alias "GetOpenFileNameA" (OFN As tagOPENFILENAME) As Boolean
```

#### Get Save File Name
```vba
' x86 Version
Declare Function apiGetSaveFileName Lib "comdlg32.dll" _
    Alias "GetSaveFileNameA" (OFN As tagOPENFILENAME) As Boolean
```

#### Comm Dlg Extended Error
```vba
' x86 Version
Declare Function CommDlgExtendedError Lib "comdlg32.dll" () As Long
```

## Kernel32

#### Get Computer Name
```vba
' x86 Version
Private Declare Function apiGetComputerName Lib "kernel32" Alias _
  GetComputerNameA" (ByVal lpBuffer As String, nSize As Long) As Long
``` 

## SHELL32

#### [Shell Execute](http://msdn.microsoft.com/en-us/library/bb762153(v=vs.85).aspx)
```vba
' 32 Bit declare
Private Declare Function ShellExecute Lib "shell32.dll" Alias_
  "ShellExecuteA" (ByVal hwnd As Long, ByVal lpOperation As_
  String, ByVal lpFile As String, ByVal lpParameters As String,_
  ByVal lpDirectory As String, ByVal nShowCmd As Long) As Long
  
' 64 Bit declare
Private Declare PtrSafe Function ShellExecute Lib "shell32.dll"_
  Alias "ShellExecuteA" (ByVal hwnd As LongPtr, ByVal_
  lpOperation As String, ByVal lpFile As String, _
  ByVal lpParameters As String, ByVal lpDirectory As String,_
  ByVal nShowCmd As Long) As LongPtr
```
Example Usage:
```vba
Sub RunYourProgram()
  Dim RetVal As Long
  On Error Resume Next
  RetVal = apiShellExecute(0&, "open", "<full path to program>", _
                          "<arguments>", _
                          "<run in folder>", _
                          SW_SHOWMAXIMIZED)
End Sub
```

## User32

#### Common Constants
```vba
Const MF_GRAYED = &H1&
Const MF_BYCOMMAND = &H0&
Const SC_CLOSE = &HF060&
```

#### Get Systrem Menu
```vba
' x86 Version
Public Declare Function GetSystemMenu _
   Lib "user32.dll" (ByVal hwnd As Long, _
   ByVal bRevert As Long) As Long
```

#### Enable Menu Item
```vba
' x86 Version
Public Declare Function EnableMenuItem _
   Lib "user32.dll" (ByVal hMenu As _
   Long, ByVal wIDEnableItem As Long, ByVal wEnable As Long) As Long
```

#### Get Menu Item Info
```vba
' x86 Version
Public Declare Function GetMenuItemInfo _
   Lib "user32.dll" Alias _
   "GetMenuItemInfoA" (ByVal hMenu As Long, ByVal un As Long, ByVal b As _
   Long, lpMenuItemInfo As MENUITEMINFO) As Long
```

#### Open Clipboard
```vba
' x86 Version
Private Declare Function OpenClipboard _
   Lib "user32.dll" _
   (ByVal hWnd As Long) As Long
```

#### Empty Clipboard
```vba
' x86 Version
Private Declare Function EmptyClipboard _
   Lib "user32.dll" () As Long
```

#### Close Clipboard
```vba
' x86 Version
Private Declare Function CloseClipboard _
   Lib "user32.dll" () As Long
```

# Examples

## Clear the Clipboard
This code will clear the Clipboard in Access 2000 using 3 API calls to the User32 Library:

-	OpenClipboard(0&)
-	EmptyClipboard
- CloseClipboard

```vba
Private Sub cmdClip_Click()
 On Error GoTo Err_cmdClip_Click
' Open, Empty and Close Clipboard
' No Clipboard API error handling
 OpenClipboard(0&)
 EmptyClipboard
 CloseClipboard
 MsgBox "ClipBoard Cleared!"
Exit_cmdClip_Click:
 Exit Sub
Err_cmdClip_Click:
 MsgBox Err.Description
 Resume Exit_cmdClip_Click
End Sub
```

## Disable the Windows Close Button
This code below will disable the X button of the Windows Application window.
Place it in a separate module and you can disable it by;
```vba
SetEnabledState(False)
```
And Enable it by;
```vba
SetEnabledState(True)
```

```vba
Public Function SetEnabledState(blnState As Boolean)
  Call CloseButtonState(blnState)
End Function

Sub CloseButtonState(boolClose As Boolean)
'Disable the Close Button Option
 Dim hWnd As Long, wFlags As Long, _
     hMenu As Long, result As Long  
 hWnd = Application.hWndAccessApp
 hMenu = GetSystemMenu(hWnd, 0)
 If Not boolClose Then
  wFlags = MF_BYCOMMAND Or MF_GRAYED
 Else
  wFlags = MF_BYCOMMAND And Not MF_GRAYED
 End If
 result = EnableMenuItem(hMenu, SC_CLOSE, wFlags)
End Sub
```

