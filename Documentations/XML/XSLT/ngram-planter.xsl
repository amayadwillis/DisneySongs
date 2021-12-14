<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    exclude-result-prefixes="xs math"
    version="3.0">
    
    <xsl:mode on-no-match="shallow-copy"/>
   
    <xsl:variable name="aladdinColl" as="document-node()+" select="collection('../Aladdin/?select=*.xml')"/>
    <xsl:variable name="beautyColl" as="document-node()+" select="collection('../BeautyAndTheBeast/?select=*.xml')"/>
   
    <xsl:variable name="alNgramsDoc" as="document-node()" select="doc('../AladdinNgrams.xml')"/>
    <xsl:variable name="beNgramsDoc" as="document-node()" select="doc('../BeautyNgrams.xml')"/>


<xsl:template name="ngramTagger" as="item()*">
    <xsl:param name="currText" as="text()" required="yes"/>
    <xsl:param name="ngrams" as="xs:string+" required="yes"/>
    <xsl:variable name="currString" as="xs:string" select="$currText ! normalize-space()"/>
            <xsl:analyze-string select="$currString" regex="{$ngrams}" flags="i">
                <xsl:matching-substring>
                    <ngram><xsl:value-of select="."/></ngram>
                </xsl:matching-substring>
                <xsl:non-matching-substring>
                    <xsl:sequence select="."/>
                </xsl:non-matching-substring>
        </xsl:analyze-string>  
</xsl:template>



    <xsl:template match="/">
        <xsl:for-each select="$aladdinColl//xml"> 
            <xsl:variable name="afilename" as="xs:string">
                <xsl:value-of select="tokenize(current() ! base-uri(), '/')[last()]"/>
            </xsl:variable>
            <xsl:result-document method="xml" indent="yes" href="../Aladdin-Ngram/{$afilename}">
                <xml>
                        <xsl:apply-templates/>

                </xml>
            </xsl:result-document>
        </xsl:for-each>
       <xsl:for-each select="$beautyColl//xml">
            <xsl:variable name="bfilename" as="xs:string">
                <xsl:value-of select="tokenize(current() ! base-uri(), '/')[last()]"/>
            </xsl:variable>
            <xsl:result-document method="xml" indent="yes" href="../Beauty-Ngram/{$bfilename}">
                <xml><xsl:apply-templates/></xml>
            </xsl:result-document>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="ln/text()">
        <xsl:param name="currText" as="text()" select="current()"/> 
        <xsl:choose>
            <xsl:when test="for $i in $alNgramsDoc//ngram ! string() return $currText[matches(. ! normalize-space(), $i)]">
                <xsl:variable name="a-ngrams" as="xs:string+">
                    <xsl:for-each select="$alNgramsDoc//ngram">
                        <xsl:if test="$currText[matches(. ! normalize-space(), current())]">
                            <xsl:value-of select="current() ! string()"/>
                        </xsl:if>
                    </xsl:for-each> 
                </xsl:variable>
     
                <xsl:call-template name="ngramTagger">
                    <xsl:with-param name="ngrams" as="xs:string+" select="$a-ngrams"/>
                    <xsl:with-param name="currText" as="text()" select="$currText"/>
                </xsl:call-template>
            
            </xsl:when>
            <xsl:when test="for $i in $beNgramsDoc//ngram ! string() return $currText[matches(. ! normalize-space(), $i)]">
                <xsl:variable name="b-ngrams" as="xs:string+">
                    <xsl:for-each select="$beNgramsDoc//ngram">
                        <xsl:if test="$currText[matches(. ! normalize-space(), current())]">
                            <xsl:value-of select="current() ! string()"/>
                        </xsl:if>
                    </xsl:for-each> 
                </xsl:variable>
                
                <xsl:call-template name="ngramTagger">
                    <xsl:with-param name="ngrams" as="xs:string+" select="$b-ngrams"/>
                    <xsl:with-param name="currText" as="text()" select="$currText"/>
                </xsl:call-template>
                
            </xsl:when>
            <xsl:otherwise>
               <xsl:value-of select="."/>
            </xsl:otherwise>
        </xsl:choose>  
    </xsl:template>
    
   <!-- <xsl:template match="ln/text()" mode="beauty">
        <xsl:param name="currText" as="text()" select="current()"/> 
        <xsl:choose>
            <xsl:when test="for $i in $beNgramsDoc/ngram ! string() return $currText[matches(. ! normalize-space(), $i)]">
                <xsl:variable name="b-ngrams" as="xs:string+">
                    <xsl:for-each select="$beNgramsDoc//ngram">
                        <xsl:if test="$currText[matches(. ! normalize-space(), current())]">
                            <xsl:value-of select="current() ! string()"/>
                        </xsl:if>
                    </xsl:for-each> 
                </xsl:variable>
                
                <xsl:call-template name="ngramTagger">
                    <xsl:with-param name="ngrams" as="xs:string+" select="$b-ngrams"/>
                    <xsl:with-param name="currText" as="text()" select="$currText"/>
                </xsl:call-template>
                
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="."/>
            </xsl:otherwise>
        </xsl:choose>  
    </xsl:template>-->
    
</xsl:stylesheet>