Dim strQueryResults
strQueryResults = ""
Set xmlDoc = CreateObject( "Microsoft.XMLDOM" )
xmlDoc.Async = "False"
xmlDoc.Load( ".\books.xml" )
' wscript.echo xmlDoc.xml  ' show that the file actually loaded
strQuery = "/xml/bookstore/book [ price = 30.00 ] / ( title | author )"
Set colNodes = xmlDoc.selectNodes( strQuery )
For Each objNode in colNodes
'  WScript.Echo objNode.nodeName & ": " & objNode.text ' show each step of query individually
  strQueryResults = strQueryResults  & objNode.nodeName & ": " & objNode.text & vbCrLf
Next
Wscript.echo strQueryResults ' show the complete result of query
