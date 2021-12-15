# Conventions Used in Code, Notes

## Include in Every Module

| Language | Include |  
| --- | --- |  
| JavaScript | `` |  
| VBScript | ``Dim strMethodName ` <BR> `strMethodName = <ModuleName>` <BR> ‘Dim scriptPath` <BR> `scriptPath = Left(WScript.scriptfullname, Len(WScript.scriptfullname) - Len(WScript.scriptname)) ` <BR> `Dim scriptName` <BR> `scriptName = Left(WScript.scriptname, Len(WScript.scriptname) - 4) ` <BR> `Dim datSystemLaunch` <BR> `datSystemLaunch = Now` <BR> `Dim datToday` <BR> `datToday = Date2Str(Now) ` <BR> `Dim strTempFolder` <BR> `strTempFolder = objShell.ExpandEnvironmentStrings( "%UserProfile%" )` |  

