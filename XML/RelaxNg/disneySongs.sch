<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2"
    xmlns:sqf="http://www.schematron-quickfix.com/validator/process"
    xmlns="http://purl.oclc.org/dsdl/schematron">
    
    <pattern>
        <rule context="*[@ref]">
            <assert test="starts-with(@ref, '#')">This attribute must begin with a hashtag #.</assert>
            
        </rule>
    </pattern> 
    <pattern>
        <rule context="*[@role]">
            <assert test="starts-with(@role, '#')">This attribute must begin with a hashtag #.</assert>
            
        </rule>
    </pattern>
</schema>