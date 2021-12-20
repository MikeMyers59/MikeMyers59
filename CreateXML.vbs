'*****************************************************************
'** Script: CreateXML.vbs
'** Version: 1.0
'** Created: 01/12/2009 9:51PM
'** Author: Adriaan Westra
'** E-mail: 
'** Purpose / Comments:
'** Create xml file for photo album
'**
'*****************************************************************

On Error Resume next
Dim Version : Version = "1.0" ' Script version
Dim Author : Author = "A. Westra"
Dim objXML    'XML Document object
Dim root      'Root element of the xml document
Dim newNode   ' XML Node object
Dim cNode     ' XML (child) Node object   
Dim cNodeText ' XML Text Node object


'*****************************************************************
'** Make sure the script is started with cscript
If InStr(wscript.FullName, "wscript.exe") > 0 Then
  MsgBox "Please run this script with cscript.exe." & Chr(13) & _
  "For example : cscript " & WScript.ScriptName & " /?", _ 
  vbExclamation, WScript.ScriptName
  WScript.Quit(1)
'Else
'  MsgBox "Passes wscript Test."
End If

'*****************************************************************
'** Get commandline parameters
Set Args = Wscript.Arguments

If Args.Count = 0 Then
  strImageDir = InputBox("Please give the directory name " & _
  "to process : ",wscript.scriptname, strPath)
'  MsgBox "Processing: " & strImageDir
Else
   If InStr(Args(0),"/?") > 0 Or InStr(UCase(Args(0)),"/H") > 0 _ 
   Or InStr(UCase(Args(0)),"/HELP") > 0 Then
      DisplayHelp
      Wscript.quit(0)
   Else
      strImageDir = Args(0)
   End if
End if

Set objXML = CreateObject("Msxml2.DOMDocument.6.0")
objXML.setProperty "SelectionLanguage", "XPath"


'*****************************************************************
'** Determine if the file exists
strXMLFile = strImageDir & "\album.xml"
Set objFSO = CreateObject("Scripting.FileSystemObject")
If objFSO.FileExists(strXMLFile) Then
'*****************************************************************
'** Read the XML File
   MsgBox "File exists."
   objXML.load(strXMLFile)
Else
'*****************************************************************
'** Create the XML File
   objXML.loadXML("<xml><PhotoAlbum></PhotoAlbum></xml>")
End If
'*****************************************************************
'** Process directory
Set objImgDir = objFSO.GetFolder(strImageDir)
MsgBox "Processing Directory."
For each objFile in objImgDir.Files
    If IsJPG(objFile.Name) Then
       arrTemp = split(objFile.Name, ".")
       strNode = arrTemp(0)
       
       '*****************************************************************
       '** Determine if the node exists
       If Not XmlNodeExists(strChildNode, objXML) Then
       '*****************************************************************
       '** Get the root element of the xml document 
          Set root = objXML.documentElement
       '*****************************************************************
       '** Create the new node
          Set newNode = objXML.createNode(1, strNode, "")
          root.appendChild newNode 
          Set cNode = objXML.createNode(1, "alt", "")
          Set cNodeText = objXML.createNode(3, "", "")
          cNodeText.Text = strNode
          cNode.appendChild cNodeText
          newNode.appendChild cNode
          newNode.appendData("---")
          Set cNode = objXML.createNode(1, "Title", "")
          Set cNodeText = objXML.createNode(3, "", "")
          cNodeText.Text = strNode
          cNode.appendChild cNodeText
          newNode.appendChild cNode  
          newNode.appendData("---")
       End If
    End If
Next
'*****************************************************************
'** Save the xml file
objXML.save(strXMLFile)
MsgBox "XML File Saved."

'*****************************************************************
'** End the script
wscript.quit

'*****************************************************************
'** Function: XmlNodeExists
'** Version:  1.0
'** Created:  1/12/2009 12:14PM
'** Author:   Adriaan Westra
'** E-mail:			
'**
'** Purpose / Comments:
'**   Determines if a node exists in XML
'**
'** Arguments     :
'**	strNode  :Name of the XML node
'**	oXML     :XMl DOM Object
'*****************************************************************
Function XmlNodeExists( strNode, oXML )
 On Error Resume next
 Set oNode = oXML.selectSingleNode(strNode)  
 strNodetype = oNode.nodetype 
 If err.number = 0 Then
   XmlNodeExists = True
 Else
   XmlNodeExists = False
 End if
End Function
'*****************************************************************
'** Sub: DisplayHelp                                              
'** Version: 1.0                                                  
'** Created: 24-03-2003 8:22                                      
'** Author: Adriaan Westra                                        
'** E-mail:                                                       
'**                                                               
'** Purpose / Comments:                                           
'** Display help for script                                       
'**                                                               
'** Arguments :                                                   
'*****************************************************************
Sub DisplayHelp()                                                 
   strComment = string(2,"*")                                     
   strCmntLine = String(79, "*")                                  
   wscript.echo strCmntline                                       
   wscript.echo strComment                                        
   wscript.echo strComment & " Online help for " & _              
      Wscript.scriptname & " version : " & Version                
   wscript.echo strComment                                        
   wscript.echo strComment & " Usage : cscript " & _              
      Wscript.scriptname & " directoryname"                       
   wscript.echo strComment                                        
   wscript.echo strComment & " Purpose : Create XML file " & _     
    "for all images in given directory."    
   wscript.echo strComment                                        
   wscript.echo strComment & " Author : " & Author                
   wscript.echo strComment & " E-mail : " & Email                 
   wscript.echo strComment                                        
   wscript.echo strCmntline                                       
End Sub                                                           
'*****************************************************************
'** Function: IsJPG                                               
'** Version: 1.0                                                  
'** Created: 12/29/2008 11:01PM                                   
'** Author: Adriaan Westra                                        
'** E-mail:                                                       
'**                                                               
'** Purpose / Comments:                                           
'** Determine if file is jpg image                                
'**                                                               
'** Arguments :                                                   
'** strFilename : name of the file to check                                                                 
'*****************************************************************
Function IsJPG(strFilename)                                       
   Set objRegExp = New RegExp   
   objRegExp.Pattern = "\w.jpg"                                   
   objRegExp.IgnoreCase = True                                                               
   IsJPG = objRegExp.Test(strFileName)                            
End Function                               