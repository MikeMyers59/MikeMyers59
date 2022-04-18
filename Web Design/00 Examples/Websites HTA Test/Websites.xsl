<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/TR/WD-xsl">
<xsl:template match="/">
<xsl:for-each select="website/Website">
<TR valign="top">
<TD><xsl:value-of select="Name"/></TD>
<TD><xsl:value-of select="Link"/></TD>
<TD><xsl:value-of select="LastAccess"/></TD>
<TD><xsl:value-of select="Notes"/></TD>
<TD>
</TD>
</xsl:template>
</xsl:stylesheet>