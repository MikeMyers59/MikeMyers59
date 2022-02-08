:: @ECHO off
set "dir1=e:\Fonts"

cls
FOR %%X in ("%dir1%\*.TTF") DO (
echo %%~nxX 
xcopy %%~nxX c:\windows\Fonts /Y /I 
reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts" /v "%%~nxX" /t REG_SZ /d %%~nxX /f


)





