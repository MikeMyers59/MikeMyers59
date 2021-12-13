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