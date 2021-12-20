Set xmlDoc = CreateObject( "Microsoft.XMLDOM" )
xmlDoc.Async = "False"
xmlDoc.Load( ".\books.xml" )
wscript.echo xmlDoc.xml
