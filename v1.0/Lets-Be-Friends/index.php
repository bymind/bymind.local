<?php
ob_start( 'ob_gzhandler' );
	include($_SERVER["DOCUMENT_ROOT"]."/core/core/core.php");


?>

<!doctype html>
<html lang="ru">
<head>

	<?php echo $metas; ?>
	<meta name="keywords" content="bymind, by mind, By Mind, студия By Mind, создать сайт, Заказать сайт Заказать хороший сайт Сайт заказать недорого Сайт заказать цена Где заказать сайт недорого Где можно заказать сайт недорого Заказать разработку сайта Продающий сайт заказать Заказать веб сайт Заказать сайт визитку недорого">
	<meta name="description" content="Привет! Ваш сайт великолепен и приносит доход! Нет?.. Самое время это исправить! Закажите разработку сайта у нас и получайте стабильный доход после индивидуальной разработки сайта под ваши уникальные нужды.">

	<title>Контакты | By Mind &mdash; делаем сайты с умом!</title>




	<link rel="stylesheet" href="/css/main1.css">

	<?php echo $styleContacts;?>

	<?php echo $jScripts; ?>


</head>
<body id='swipeit'>
	<div class="spinner-box">
					<div class="spinner"></div>
	</div>
<div class="coverer">

</div>

	<div id="content">
		<?php include $navigation; ?>

		<div id="content-block">


<?php

	include ('content.php');

 ?>

		</div>
	</div>


</body>
</html>
