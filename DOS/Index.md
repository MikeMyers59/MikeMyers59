# Index of Folder DOS: Disk Operating System

1. This folder contains DOS Command Line Interface (CLI) notes, snippets and examples.

## Comments & Screen Displays (REM & ECHO)
| Action | Description |
| ---- | ---- | 
| Comment | ```REM <Put Comments Here> ```| 
| Turn Off Common Screen Output | ```@ECHO off ```| 
| Comment on Screen to User | ```ECHO <Put Status to User Here> ```| 

## Log to a File
```dos
  SET logfile=<FilePathName>.log
  ECHO +-----------------------------------------------+>>%logfile%
  ECHO + DATE: %DATE%				+>>%logfile%
  ECHO + TIME: %TIME%				+>>%logfile%
  ECHO +-----------------------------------------------+>>%logfile%
```

## Operating System (OS) Environment
| Variable | Description |
| ---- | ---- | 
| %DATE% | System Date | 
| %TIME% | System Time | 
| %PATH% | System Search Path - comma separated folder paths |

# Run Scripts
- ```Call <ScriptName>```
- ```powershell –command <PowerShellScript>```

## Special Characters
| Character | Description | Example |
| ---- | ---- | ---- |
| . | Current Directory | |
| .. | Parent Directory | |
| < | Input from | |
| > | Output to | |
| >> | Route to | ```SET logfile=<FilePathName>.log```<BR>```ECHO + DATE: %DATE%	+>>%logfile%```<BR>```ECHO + TIME: %TIME%	+>>%logfile%  ``` |
| Pipe \| | Pass to, Chain commands| |
| @ | Ignore console repeat | |
