<?php
ob_start( 'ob_gzhandler' );

	include($_SERVER["DOCUMENT_ROOT"]."/core/core/core.php");

?>

<!doctype html>
<html lang="ru">
<head manifest="default.appcache">

	<?php echo $metas; ?>
	<meta name="keywords" content="hotblog, hot blog, bymind, by mind, By Mind, студия By Mind, создать сайт, Заказать сайт Заказать хороший сайт Сайт заказать недорого Сайт заказать цена Где заказать сайт недорого Где можно заказать сайт недорого Заказать разработку сайта Продающий сайт заказать Заказать веб сайт Заказать сайт визитку недорого">
	<meta name="description" content="Привет! Это блог. Тут говорят. Говорят о веб-разработке, создании сайтов и прочей интернет-лабуде.">

	<title>HotBlog | By Mind &mdash; делаем сайты с умом!</title>


	<link rel="stylesheet" href="/css/main1.css">

	<?php echo $styleHotBlog; ?>

	<?php echo $jScripts; ?>


</head>
<body>
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
