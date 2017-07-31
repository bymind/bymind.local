<?php

$title = substr(htmlspecialchars(trim("Ручная перетяжка салона Вашего авто")), 0, 1000); 

$to = 'keshapudelev@ya.ru'; 

$from = 'back@bymind.ru';

$mess = file_get_contents('index.html');

?>

<pre>
	<?php 
		//var_dump($mess);
	 ?>
</pre>

<?php

mail($to, $title, $mess, "Content-type: text/html; charset=utf-8\r\nFrom: ".$from); 

?>