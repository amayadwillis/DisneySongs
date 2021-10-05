<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0"
    xmlns="http://www.tei-c.org/ns/1.0"
    version="3.0">
    
    <xsl:mode on-no-match="shallow-copy"/>
    
    <xsl:template match="person">
        <xsl:choose>
            <xsl:when test="person/@xml:id = (preceding-sibling::person/@xml:id|following-sibling::person/@xml:id)">
            <xsl:apply-templates/>
        </xsl:when>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>