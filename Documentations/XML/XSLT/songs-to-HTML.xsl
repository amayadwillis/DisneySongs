<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl"
    exclude-result-prefixes="xs math xd"
    version="3.0">
    
    
    <xsl:output method="xhtml" html-version="5" omit-xml-declaration="yes" 
        include-content-type="no" indent="yes"/>
    
    <xsl:variable name="aladdinColl" as="document-node()+" select="collection('../Aladdin')"/>
    <xsl:variable name="beautyColl" as="document-node()+" select="collection('../BeautyAndTheBeast')"/>
    
    <xsl:template match="/">
        
      <xsl:for-each select="$aladdinColl//xml"> 
          <xsl:variable name="filename" as="xs:string">
              <xsl:value-of select="tokenize(current() ! base-uri(), '/')[last()] ! substring-before(., '.xml') ! replace(., '[()]', '')"/>
          </xsl:variable>
          <!-- Current set to Aladdin. To CHANGE this, change the for-each @select, 
              AND the line below to match the appropriate output file directory. 
          ALSO change <script> line to point to bnbhighlight.js -->
        <xsl:result-document method="xhtml" indent="yes" href="../../../docs/aladdin/{$filename}.html">
        
        <html>
            <head>
                <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
                <title><xsl:apply-templates select="current()/metadata/title ! normalize-space()"/></title>
                <link href="../aladdin.css" rel="stylesheet" type="text/css"/>
                <script src="../highlighting.js">/**/</script>
                <!--for BNB, change to bnbhighlight.js -->
            </head>
            
            <body>
                <!--ebb: Here is your server-side include for the menu bar. -->
                <xsl:comment>#include virtual="aladdin_header.html" </xsl:comment>
                
                <h2 id="{$filename}"><xsl:apply-templates select="current()/metadata/title ! normalize-space()"/></h2>
                
                <!-- ************************************ -->
                <!--JS highlighting fieldset to go here!  -->
                <!-- ************************************-->
                <!--ebb: Should this be another server side include? -->
              
              <xsl:apply-templates select="current()//song"/>
 
                
            </body>
     
        </html>
            
        </xsl:result-document></xsl:for-each>
    </xsl:template>
    
    
    <xsl:template match="lg">
        <div class="lg">
            <xsl:apply-templates/>
        </div> 
    </xsl:template>
    
    <xsl:template match="ln">
        <p class="ln" id="ln-{@n}"><span class="lineNum"><xsl:value-of select="@n"/></span><xsl:text>  </xsl:text><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="char">
        <span class="{@ref ! substring-after(., '#') ! lower-case(.)}"><xsl:apply-templates/></span>
    </xsl:template>
  
    
</xsl:stylesheet>