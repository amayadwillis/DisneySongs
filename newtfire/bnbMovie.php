<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
        <link href="bnb.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>Musically Disney</h1>
        <!--#include virtual="aladdin_header.html" -->
        <ul class="navbar">
            <li class="navbar"><a href="index.html" class="nav">Main</a></li>
            <li class="navbar"><a href="beauty.html" class="nav">Home</a></li>
            <li class="navbar"><a href="bnbMovie.php" target="blank"> Songs </a></li>
            <li class="navbar"><a href="personography-bnb.html" class="nav">Personography</a></li>	 
		</ul>
 
        <table id="phpList">
        <tr>
        <th>
       <?php
    require_once("config.php");
    $contents = REST_PATH . "/db/disneySongs-queries/php-bnb_movies.xql";
    $result = file_get_contents($contents);
    echo $result;
?>
</th>
<th>
   <section id="iframe"><iframe src="beauty/Aria-live.html" name="titles" height="1300" width="1000" class="iframe"/></section>
   </th>
   </tr>
   </table>
    </body>
</html>
