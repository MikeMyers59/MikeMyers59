This folder contains the Music XML Examples Files

The XSL file is where the true power of XML starts to make itself obvious. XSL uses the concept of templates to output XML elements. The main template, identified by `<xsl:template match="/">`, matches all elements in the document node passed into the style sheet. This main template starts with standard HTML for a table row of album information. A special XSL method is used to loop through all the album elements within the music collection node. The `<xsl:for-each.../>` construct loops over the items matched against the select attribute which, in this case, is given the value “music collection/album”. For each album, the `<xsl:value-of…/>` construct outputs the desired data for the current album. This XSL file uses multiple templates to break up the code and make it easier to perform modifications.
A call is made within the album loop to apply the additional templates. The command that does this is `<xsl:apply-templates/>`. The second template, `<xsl:template match="track">`, is applied every time a track tag is encountered within the current album. This template outputs the information regarding the current track using the `<xsl:value-of.../>` tags!  

There are three Files
| File | Notes |  
| ---- | ---- |  
| MyMusic.hta | Uses the VBScript listed below. |  
| MyMusic.html | Uses JavaScript in a browser. |  
| MyMusic2.html | Uses JavaScript in a browser. |  

### The XML File
```xmxl
<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/TR/WD-xsl">
<xsl:template match="/">
<xsl:for-each select="musiccollection/album">
<TR valign="top">
<TD><xsl:value-of select="jukeboxnumber"/></TD>
<TD><xsl:value-of select="musiccategory"/></TD>
<TD><xsl:value-of select="artist"/></TD>
<TD><xsl:value-of select="title"/></TD>
<TD>
<TABLE BORDER="0" width="100%">
<xsl:apply-templates/>
</TABLE>
</TD>
</TR>
</xsl:for-each>
</xsl:template>
<xsl:template match="track">
<TR>
<TD><xsl:value-of select="@number"/></TD>
<TD><xsl:value-of select="title"/></TD>
<TD align="right"><xsl:value-of select="length"/></TD>
</TR>
</xsl:template>
</xsl:stylesheet>
```

### The Script
```vbscript
<SCRIPT language="VBScript">
' Note: for XSL to work, use msxml 3.0 only!
  set xmlParse = CreateObject("msxml2.DOMDocument.3.0")
  xmlParse.async = "false"
  xmlParse.load(".\Mymusic Test\mymusic.xml")
' MsgBox xmlParse.xml
  set xmlFormat = CreateObject("msxml2.DOMDocument.3.0")
  xmlFormat.async = "false"
  xmlFormat.load(".\Mymusic Test\mymusic.xsl")
' MsgBox xmlFormat.xml

sub produceXML
' MsgBox "Test produceXML() call"
    tempHTML = " "
    tempHTML = "<TABLE BORDER=1><TR><TD>Juke Box</TD><TD>Category</TD>"
    tempHTML = tempHTML  & "<TD>Artist</TD><TD>Album</TD><TD>Tracks</TD></TR>"
    tempHTML = tempHTML  & xmlParse.transformNode(xmlFormat) + "</TABLE>"
    set htmOutput = document.all.item("xmlData")
    htmOutput.innerHTML = tempHTML
end sub
</SCRIPT>
```
Call with 'onload="VBScript:produceXML"' in 'BODY' tag and add this '<DIV id="xmlData"></DIV>' into the body to receive the data.  

Results in this:  
![MyMusic Display in Document](https://github.com/MikeMyers59/MikeMyers59/blob/main/XML/Music/MyMusic%20Document%20Display.png)

