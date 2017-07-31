<?php
ob_start( 'ob_gzhandler' );
	include($_SERVER["DOCUMENT_ROOT"]."/core/core/core.php");
?>

<!doctype html>
<html lang="ru">
<head manifest="default.appcache">

	<?php echo $metas; ?>
	<meta name="keywords" content="bymind, by mind, By Mind, студия By Mind, создать сайт, Заказать сайт Заказать хороший сайт Сайт заказать недорого Сайт заказать цена Где заказать сайт недорого Где можно заказать сайт недорого Заказать разработку сайта Продающий сайт заказать Заказать веб сайт Заказать сайт визитку недорого">
	<meta name="description" content="Привет! Ваш сайт великолепен и приносит доход! Нет?.. Самое время это исправить! Закажите разработку сайта у нас и получайте стабильный доход после индивидуальной разработки сайта под ваши уникальные нужды.">

	<title>By Mind &mdash; делаем сайты с умом!</title>

	<link rel="stylesheet" href="/css/main1.css">
	<link rel="stylesheet" href="/css/main1.css">
	<style>
	@font-face {
	  font-family: 'Material Icons';
	  font-style: normal;
	  font-weight: 400;
	  src: local('Material Icons'), local('MaterialIcons-Regular'), url(http://bymind.ru/fonts/mi.woff2) format('woff2');
	}

	.material-icons {
	  font-family: 'Material Icons';
	  font-weight: normal;
	  font-style: normal;
	  font-size: 24px;
	  line-height: 1;
	  letter-spacing: normal;
	  text-transform: none;
	  display: inline-block;
	  white-space: nowrap;
	  word-wrap: normal;
	  direction: ltr;
	  -webkit-font-feature-settings: 'liga';
	  -webkit-font-smoothing: antialiased;
	}
	</style>
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

		<div id="content-block" onload="isLoaded();">

<?php

	include ('content.php');

 ?>

		</div>
	</div>

</body>
</html>
