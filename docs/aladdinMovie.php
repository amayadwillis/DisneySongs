<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
        <link href="aladdin.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <h1>Aladdin Songs</h1>
        <!--#include virtual="aladdin_header.html" -->
        		<ul class="navbar">
            <li class="navbar"><a href="index.html" class="nav">Main</a></li>
		    <li class="navbar"><a href="team.html">About the Team</a></li> 
		    <li class="navbar"><a href="project.html">About the Project</a></li>
            <li class="navbar"><a href="aladdinMovie.php" class="nav">Aladdin Songs</a></li>
            <li class="navbar"><a href="personography-aladdin.html" class="nav">Aladdin Personography</a></li>
		    <li class="dropdown">
		        <a href="javascript:void(0)" class="dropbtn">Documentation and Analysis</a>
		        <div class="dropdown-content">
		            <a href="documentation.html">Documentation</a>
		            <a href="collectionAnalysis.html">Collection Analysis</a>
		            <a href="indiAnalysis.html">Individual Analysis</a>
		        </div>
		    </li>	 
		</ul>  
        <table>
        <tr>
        <th>
       <?php
    require_once("config.php");
    $contents = REST_PATH . "/db/disneySongs-queries/php-aladdin-movies.xql";
    $result = file_get_contents($contents);
    echo $result;
?>
</th>
<th>
   <section id="iframe"><iframe src="aladdin/AWholeNewWorld-Live.html" name="titles" height="1300" width="1000" class="iframe"/></section>
   </th>
   </tr>
   </table>
    </body>
</html>

