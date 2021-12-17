<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
        <link href="aladdin.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>Musically Disney</h1>
        <!--#include virtual="aladdin_header.html" -->
        <ul class="navbar">
            <li class="navbar"><a href="index.html" class="nav">Main</a></li>
            <li class="navbar"><a href="aladdin.html" class="nav">Home</a></li>
            <li class="navbar"><a href="aladdinMovie.php" target="blank"> Songs </a></li>
            <li class="navbar"><a href="personography-aladdin.html" class="nav">Personography</a></li>
            <li class="navbar"><a href="aladdin_analysis.html" class="nav">Network</a></li> 
		</ul>
 
        <table id="phpList">
        <tr>
        <td>
       <?php
    require_once("config.php");
    $contents = REST_PATH . "/db/disneySongs-queries/php-aladdin_movies.xql";
    $result = file_get_contents($contents);
    echo $result;
?>
</td>
<td>
   <section id="iframe"><iframe src="aladdin/ArabianNights-Live.html" name="titles" height="1300" width="1000" class="iframe"/></section>
   </td>
   </tr>
   </table>
    </body>
</html>