<?php
include 'db.php';
?>
<!DOCTYPE html>
<html lang=ru>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>HOME PAGE</title>
	
	<link rel="stylesheet" type="text/css" href="css/css_index.css">
	
	<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<script src="jquery-2.2.3.js"></script>

</head>

<body>

<?php  
include('header.php')

?>

<section id="ras">

	<aside id="rasa">

<?php

$query = "SELECT * FROM post";

	if ($result = $mysqli->query($query)) {

		echo "	<h2>ОТзывы</h2>";	
    	$row = $result->fetch_all(MYSQLI_ASSOC);
    	echo '<ul id="">'; 

    	foreach ($row as $val):{
    		echo ' <li>';

    		
    		echo $val['id'];
    		echo $val['idotp'];
    		echo $val['text'];
    		echo $val['date'];

    		

    		echo '</li>';
    		echo '</br>';
    		echo '</br>';



    		   		
    	} endforeach;
	}
	echo '</ul>';


	$result->close();


?>


<?
	if($lg){
		
			echo <<< _END
	<aside id="addpost">
	
		<form   action="addp.php" method="post" >
		
		<p><textarea name="comment"  ></textarea></p>		
		
		<input type="submit" value="add"></p>
		</form>
	
	</aside>
_END;
	
	}
	?>




	
	
	</aside>

</section>





<script src="js/modal.js"> </script>

<script src="jquery-2.2.3.js"></script>
</body>
</html>




