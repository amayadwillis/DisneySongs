<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
        <link href="bnb.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>Songs</h1>
        <!--#include virtual="bnbNavBar.html" -->   
       <?php
    require_once("config.php");
    $contents = REST_PATH . "/db/disneySongs-queries/php-bnb-movies.xql";
    $result = file_get_contents($contents);
    echo $result;
?>
   <section id="iframe"><iframe src="beauty/SomethingThere.html.html" name="titles" height="500" width="1000" class="iframe"/></section>
    </body>
</html>
