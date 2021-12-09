# To Do:

1. Create HTML Table from XML, then export to Excel?  https://github.com/clarketm/TableExport 
2. Remove any COMMAS (Author/Publisher) not required to separate fields.
3. Parse Authors – to “First Name Last Name” and add & for additional Authors. 
4.	Parse Publishers – to “First Name Last Name” and add & for additional Publishers. 
5.	Test with multiple authors & publishers.
6.	Export to file as TSV, CSV (after fixing authors & publishers) or JSON?
7.	Let user select input file and output file.

Do I Need these:
```html
    <meta name="app-name" content="<APPName>">
    <meta name="csrf-token" content="hK8wkEcK6m3DDeIJOhWvy2s+5zeIvBYZXawsMXrohFqmAAAAAGGn748AAAAB">
```

# Notes:

## Sorting Options Pulling from Kindle Cloud Reader
| Sort By | Options |
| ---- | ----|
| sortType | recency <BR> title <BR> author <BR> acquisition_desc (Purchase Order) <BR> acquisition_asc (Reverse Purchase Order) |
| originType | COMICS#library <BR> EBOOK#library <BR> EBOOK_SAMPLE#library |
| Other Search Keys? | Author – how are these stored?  |


## Kindle Books XML Format (Modified)
Root Node:	```<add_update_list>```
Book Nodes:	```<meta_data>…</meta_data>```
Using Just the add_update_list section with an XML DOCID:
| Child Node Index | Node ID | Notes |
| ---- | ---- | ---- | 
| 0 | ASIN | Amazon’s Standard Identification Number (Primary Key) |
| 1 | title | May contain a series, commas, and colons |
| 2 | authors | May contain multiple entries (<author pronunciation="">…</author>), commas and colons |
| 3 | publishers | May contain multiple entries (<publisher>…</publisher>), commas and colons |
| 4 | publication_date | Left(<Node>,10) trimming required. |
| 5 | purchase_date | Left(<Node>,10) trimming required. |
| 6 | textbook_type |  |
| 7 | cde_contenttype | EBOK|
| 8 | content_type | MIME: application/x-mobipocket-ebook |

Use this VBScript to access:
```vbscript
    Set xmlDocRoot = xmlDoc.childNodes(1)
  ' Get to the add_update_list
    Set xmlDocRecord = xmlDocRoot.childNodes(1)
  ' Set the Root for the Record Set 
    Set xmlDocList = xmlDoc.getElementsByTagName("meta_data
```
With the full package as saved by Kindle for PC:
| Node Index | Node ID | Notes |
| ---- | ---- | ---- | 
| 0 | ?xml | <?xml version="1.0"?> |
| 1 | response |  |
| 2 | sync_time | |
| 3 | cache_metadata |  |
| 4 | add_update_list | Broken down above |

Use this VBScript to access:
```vbscript
    Set xmlDocRoot = xmlDoc.childNodes(1)
  ' Get to the add_update_list
    Set xmlDocRecord = xmlDocRoot.childNodes(4)  
  ' Set the Root for the Record Set 
    Set xmlDocList = xmlDoc.getElementsByTagName("meta_data")
```

