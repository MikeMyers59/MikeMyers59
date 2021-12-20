# Disk Operating System (DOS)

#### Commadn Prompt (CMD) Executable Files

- .com
- .exe
- .bat
- .cmd

## Commandlets

#### MSHTML

Make a commandlet to run your HTA.

1. Create a new text file and open with Notepad.
2. Type into the text file (you may have to use quotes if the path to the .hta has spaces) '%WINDIR%\system32\mshta.exe "FULLPATH_OF_HTA\FILENAME.hta"'
3. Save the text file, then change the extension from .txt to .cmd

## Environmental Variables

| Variable Name | Description |  
| ---- | --- |
| %WINDIR% | Typically `C:\Windows\System` unless you chose to install it somewhere else. |

