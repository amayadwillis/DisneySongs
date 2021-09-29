<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2"
    xmlns:sqf="http://www.schematron-quickfix.com/validator/process"
    xmlns="http://purl.oclc.org/dsdl/schematron">
    
    <sch:pattern id="distinctchecker">
        <sch:rule context="*[@xml:id]">
            <sch:assert test="person[@xml:id] ne (preceding-sibling::person[@xml:id]|following-sibling::person[@xml:id])">The xml:id tag must be distinct.</sch:assert>
            <!-- 09/29/2021: jkc - The schematron is only supposed to check for distinct values but now it is flagging up everything that I know is not duplicating. -->
        </sch:rule>
    </sch:pattern>
</schema>