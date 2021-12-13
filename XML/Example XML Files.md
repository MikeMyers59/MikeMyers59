# Example XML Files

## Books Example

#### Books XML File ( See [Books.xml](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Books/Books.xml) )  
```xml
  <?xml version="1.0"?>  
  <books>  
     <book id="bk001">  
        <author>Writer</author>  
        <title>The First Book</title>  
        <genre>Fiction</genre>  
        <price>44.95</price>  
        <pub_date>2000-10-01</pub_date>  
        <review>An amazing story of nothing.</review>  
     </book>  
     <book id="bk002">  
        <author>Poet</author>  
        <title>The Poet's First Poem</title>  
        <genre>Poem</genre>  
        <price>24.95</price>  
        <review>Least poetic poems</review>
     </book>  
  </books>
```

#### Load the Document  
```vbscript
  <script language=VBScript>
    Set xmlDoc = CreateObject("msxml2.DOMDocument.6.0")
    xmlDoc.async = false
    xmlDoc.load ".\books.xml"
    <VBCommands>
  </script>
```
**Note:** This assumes the Script and the XML file are in the same directory

#### Access the components within the file  
| Component | Contents | Notes | 
| ---- | ---- | ---- |  
| `xmlDoc.childNodes(0).xml` | ` <?xml version="1.0"?> ` | Displays the **Process ID** |  
| `xmlDoc.childNodes(1).xml` | `  <books> ` <BR> ... <Br> `</books> ` | Displays the root or record set **Books** |  
| `xmlDoc.childNodes(1).childNodes(1).xml` | `<book id="bk002"> ` <br> ... <br> `</book> ` | This displays the **second book** in the Books record set. |  
| `xmlDoc.childNodes(1).childNodes(1).childNodes(0).text` | Poet | This displays the second book **Author**. <BR> `<author>Poet</author>`|  
| `xmlDoc.childNodes(1).childNodes(1).childNodes(1).text` | The Poet's First Poem | This displays the text for the second book's **Title**.  <BR> `<title>The Poet's First Poem</title>`  |  
| `xmlDoc.childNodes(1).childNodes(1).childNodes(2).text` | Poem | This displays the text for the second book's **Genre**.  <BR> `<genre>Poem</genre>` |  
| `xmlDoc.childNodes(1).childNodes(1).childNodes(3).text` | 24.95 | This displays the text for the second book's  **Price**.  <BR> `<price>24.95</price>` |  
| `xmlDoc.childNodes(1).childNodes(1).childNodes(5).text` | Least poetic poems | This displays the text for the second book's  **Review**.  <BR> `<review>Least poetic poems</review>` |    
| `Set xmlDocRoot = xmlDoc.childNodes(1)` <BR> `xmlDocRoot.childNodes(1).childNodes(0).text ` | Poet | This sets a new root within the document. This also displays the second book **Author**. <BR> `<author>Poet</author>` |  
| `Set xmlDocRoot = xmlDoc.childNodes(1)` <br> `Set xmlDocRecord = xmlDocRoot.childNodes(1)` <BR> `xmlDocRecord.childNodes(0).text` | Poet | This sets a new root within the document and then sets an individual Record. This also displays the second book **Author**. <BR> `<author>Poet</author>` <br> This method can be used with a loop to process each record using the chlidNodes(<Index>) to set each record within the loop. |  
| `Set xmlDocRoot = xmlDoc.childNodes(1)` <br> `Set xmlDocRecord = xmlDocRoot.childNodes(1)` <BR> `xmlDocRecord.author.text` | Undefined | This method sets a root and record as above, but uses **author** to attempt to access the node. Using 'xmlDocRecord.childNodes(author).text' is the proper usage. |    

##### Count the Number of Books
```vbscript
  ' Set the Root (List) for the Record Set and loops through the set
  Set xmlDocList = xmlDoc.getElementsByTagName("book")     Count = 0
  for each Elem in xmlDocList
    count = count + 1 
  next
  MsgBox "Records in set: " & count
```
Results in `Records in set: 2` being displayed in the message box.

##### Display to Book List
```vbscript
  ' Set the Root for the Record Set (Make a list of element 
  ' book within books)
  Set xmlDocList = xmlDoc.getElementsByTagName("book") 
  count = 0
  txtOutput = ""
  for each Elem in xmlDocList
  count = count + 1
    txtOutput = txtOutput & "Book(" & count & "): " & Elem.childNodes(1).text & vbCrLfElem.childNodes(1).text & vbCrLf              
    txtOutput = txtOutput & "By: " & Elem.childNodes(0).text & vbCrLf               
    txtOutput = txtOutput & "Genre: " & Elem.childNodes(2).text & vbCrLf
    txtOutput = txtOutput & "Price: " & Elem.childNodes(3).text & vbCrLf
    txtOutput = txtOutput & "Review: " & Elem.childNodes(4).text & vbCrLf & vbCrLf
  next
  MsgBox txtOutput
```
Results Displayed:  
  ![Books in Message](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Books/Book%20List%20Message.png)

### Display the Books inside an HTA/HTML Document
```vbscript
  <H3>List of Books: </H3>
  <p id="demo">
  <script language=VBScript>
  ' Load the XML Data File
    Set xmlDoc = CreateObject("msxml2.DOMDocument.6.0")
    xmlDoc.async = false
    xmlDoc.load ".\books.xml"
  ' Select the Node list
    Set xmlDocList = xmlDoc.getElementsByTagName("book")
  ' Loop through the list and present information to the web 
  ' page
    count = 0
    txtOutput = ""
    for each Elem in xmlDocList
      count = count + 1
      txtOutput = txtOutput & "<B>Book(" & count & "): </B>"_
                  & Elem.childNodes(1).text & " - "
      txtOutput = txtOutput & "By: " & Elem.childNodes(0).text_
                  & "<br>"
      txtOutput = txtOutput & "Genre: " & _
                  Elem.childNodes(2).text & " - "
      txtOutput = txtOutput & "Price: " & _
                  Elem.childNodes(3).text & "<br>"
      txtOutput = txtOutput & "Review: " & _
                  Elem.childNodes(4).text & "<br><br>"
    next
  ' Outputs directly to the HTML document
    document.write txtOutput
  </script>
  </p>
```
Results display in the browser as:  
  ![Books Displayed in an HTA or HTML Document](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Books/Book%20List%20in%20HTA%20Document.png)  

This code is available in the [Books.hta](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Books/Books.hta) for you to try.

## Parts Example
  
#### The [Part.xml](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Parts/Parts.xml) File (Excerpt shown)
```xml
  <?xml version="1.0"?>  
  <parts>
    <part>
      <partnumber>A1000</partnumber>
      <description>Flat washer</description>
      <quantity>1000</quantity>
    </part>
    <part>
      <partnumber>S2300</partnumber>
      <description>Machine screw</description>
      <quantity>1000</quantity>
    </part>
    <part>
      <partnumber>M2400</partnumber>
      <description>Nail</description>
      <quantity>500</quantity>
    </part>
  </parts>
```

#### List the Parts in a Document
```html
  <H3>List of Parts:</H3>
  <p id="demo">
  <!-- Script for Playing with XML -->
  <script language=VBScript>
  ' Load the XML Data File
    Set xmlDoc = CreateObject("msxml2.DOMDocument.6.0")
    xmlDoc.async = false
    xmlDoc.load ".\parts.xml"
  ' Set the Root for the Record Set
    Set xmlDocList = xmlDoc.getElementsByTagName("part")
    count = 0
    txtOutput = ""
    for each Elem in xmlDocList
      count = count + 1
      txtOutput = txtOutput & "<B>Part(" & count & "): </B>" & Elem.childNodes(0).text & " - "
      txtOutput = txtOutput & Elem.childNodes(1).text & "<BR>"
      txtOutput = txtOutput & "Quantity Available: " & Elem.childNodes(2).text & "<BR><HR>"
    next
    document.write txtOutput  ' Outputs directly to the HTML document
  '  MsgBox txtOutput  
  </script>
  </p>
```

Results displayed:    
![Parts List in a HTA or HTML Document](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Parts/Parts%20List%20in%20a%20Document.png)

