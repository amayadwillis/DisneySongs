<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2"
    xmlns:sqf="http://www.schematron-quickfix.com/validator/process"
    xmlns="http://purl.oclc.org/dsdl/schematron">
    
    <pattern>
        <rule context="*[@xml:id]">
            <assert test="distinct-values(@xml:id)">The xml:id tag must be distinct.</assert>
            
        </rule>
    </pattern>
</schema>