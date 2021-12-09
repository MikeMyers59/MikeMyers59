# Index of Folder DOS: Disk Operating System

1. This folder contains DOS Command Line Interface (CLI) notes, snippets and examples.

## Operating System (OS) Environment
| Variable | Description |
| ---- | ---- | 
| %DATE% | System Date | 
| %TIME% | System Time | 
| %PATH% | System Search Path - comma separated folder paths |

## Special Characters
| Character | Description | Example |
| ---- | ---- | ---- |
| < | Input from | |
| > | Output to | |
| >> | Route to | ```SET logfile=<FilePathName>.log```<BR>```ECHO + DATE: %DATE%	+>>%logfile%```<BR>```ECHO + TIME: %TIME%	+>>%logfile%  ``` |
| Pipe \| | Pass to, Chain commands| |
| @ | Ignore console repeat | |
