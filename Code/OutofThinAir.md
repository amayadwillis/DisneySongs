#Regex Work for Out of Thin Air

1 Find: '^.+' (40 matches)
    Replace: '<ln n="">\0</ln>'
    
2 Find: '\n\n' (20 matches)
    Replace: '</p>\0<p n="">'
    
3 Find: '\[(.+):\]' (18 matches)
    Replace: '<char xml:id=" ">\1</char>'
    
4 Find: '(<char xml:id=") (")(>)(A.+)(</char>)' (8 matches)
    Replace: '\1\4\2\3\4'
    
5 Find: '(<char xml:id=") (")(>)(J.+)(</char>)' (8 matches)
    Replace: '\1\4\2\3\4'

6 Find: '(<char xml:id=") (")(>)(B.+)(</char>)' (2 matches)
    Replace: '\1\4\2\3\4'
