Set xmlDoc = CreateObject("Msxml2.DOMDocument.6.0")  

Set objRoot = xmlDoc.CreateElement("Root")  'Once per document
xmlDoc.appendChild objRoot  

Set objRecord = xmlDoc.CreateElement("tag") ' Once per Entry
objRoot.appendChild objRecord

Set objName = xmlDoc.CreateElement("a")  ' Once for each Entry
objName.Text = "a"
objRecord.appendChild objName  

Set objName = xmlDoc.CreateElement("b")  ' Once for each Entry
objName.Text = "b"
objRecord.appendChild objName

Set objName = xmlDoc.CreateElement("c")  ' Once for each Entry
objName.Text = "c"
objRecord.appendChild objName

Set objIntro = xmlDoc.CreateProcessingInstruction("xml", "version='1.0'")
xmlDoc.InsertBefore objIntro, xmlDoc.ChildNodes(0)

' Save the document
xmlDoc.Save scriptDir & ".\Testfile.xml"