# Conventions Used in Code, Notes

## Include in Every Module

| Language | Include |  
| --- | --- |  
| JavaScript | `` |  
| VBScript | `Dim strMethodName ` <BR> `strMethodName = <ModuleName>` <BR> `Dim scriptPath` <BR> `scriptPath = Left(WScript.scriptfullname, Len(WScript.scriptfullname) - Len(WScript.scriptname)) ` <BR> `Dim scriptName` <BR> `scriptName = Left(WScript.scriptname, Len(WScript.scriptname) - 4) ` <BR> `Dim datSystemLaunch` <BR> `datSystemLaunch = Now` <BR> `Dim datToday` <BR> `datToday = Date2Str(Now) ` <BR> `Dim strTempFolder` <BR> `strTempFolder = objShell.ExpandEnvironmentStrings( "%UserProfile%" )` |  

Here’s how the modules should be organized:

-	Public/Private/Constant declarations in alphabetical order by type  
-	Public/Private Procedure Declarations in alphabetical order [Declares]  
- Functions in alphabetical order  
-	Subs in in alphabetical order    
-	Event Handlers in event order and then in object order

