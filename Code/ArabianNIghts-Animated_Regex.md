# Regex work for Arabian Nights

1 Find: '^.+' (28 matches)
    Replace: '<ln n="">\0</ln>'
    
2 Find: '\n\n' (4 matches)
    Replace: '</p>\0<p n="">'
