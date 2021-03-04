#Regex Work for Out of Thin Air

1 Find: '^.+' (40 matches)
    Replace: '<ln n="">\0</ln>'
    
2 Find: '\n\n' (20 matches)
    Replace: '</lg>\0<lg n="">'
    
3 Find: '\[(.+):\]' (18 matches)
    Replace: '<char ref="\1">\1</char>'
