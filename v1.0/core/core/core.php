<?php

header('Content-Type: text/html; charset=UTF-8');

	define( '_MN', 1 );


	$metas = file_get_contents($_SERVER["DOCUMENT_ROOT"]."/core/headers/metas.php");


	$jScripts = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/headers/javascripts.php");


	$navigation = $_SERVER["DOCUMENT_ROOT"]."/core/controls/menu.php";

	$h = (int)(date('H'));
	if (($h >= 2)&&($h<=5)) {
		$h = 2;
	}
	if (($h >= 6)&&($h<=9)) {
		$h = 6;
	}
	if (($h >= 10)&&($h<=13)) {
		$h = 10;
	}
	if (($h >= 14)&&($h<=17)) {
		$h = 14;
	}
	if (($h >= 18)&&($h<=21)) {
		$h = 18;
	}
	if (($h >= 22)||($h<2)) {
		$h = 22;
	}

	$styleMain = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/styles/main".$h.".php");


	$styleWellDone = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/styles/welldone.php");

	$styleHotBlog = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/styles/hotblog.php");

	$styleWeDo = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/styles/wedo.php");

	$styleContacts = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/styles/contacts.php");

	$imgPreload = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/core/imgpreload.php");

	$bottomscripts = file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/core/metrika.php");

	$bottomscripts .= file_get_contents ($_SERVER["DOCUMENT_ROOT"]."/core/core/analyticstracking.php");



 ?>