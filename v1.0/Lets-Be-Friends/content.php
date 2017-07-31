<?php 
isset($_POST["ajax"])||(defined('_MN')) or die('Ошибка');

// Код страницы определяется здесь


 ?>

<script>
$('head link:last').remove();
$('head').append('<link rel="stylesheet" href="/css/contacts-page.css">');
$('title').text('Контакты | By Mind — веб-дизайн и разработка сайтов');
$('.coverer').html('');
$('div.var1').click(function(event) {
	goConnect();
	return false;
});

$('div.var2').click(function(event) {
	goConnect2();
	return false;
});

$('div.var3').click(function(event) {
	goSkype();
	return false;
});

if (menu_opened){
	$('.open-nav').click();
}


</script>

<?php 

define('_SKPE',1);
	include($_SERVER["DOCUMENT_ROOT"]."/core/core/skype.php");
 ?>

<div class="content-wrapper">

				<div class="title">Let's be friends!<span>Давайте дружить!</span></div>

				<div class="blocks">
					<span class="title">Привет!<br>С нами можно связаться любым удобным для Вас способом.</span>

					<div class='vars'> 
						<div class="var1">
							<div class="icon"></div>
							<div class="text">
								<span>Вариант&nbsp;1:</span><br>
								Напишите&nbsp;нам<br>прямо&nbsp;отсюда
							</div>
						</div>
						<div class="var2">
							<div class="icon"></div>
							<div class="text">
								<span>Вариант&nbsp;2:</span><br>
								Напишите&nbsp;нам<br>со&nbsp;своей&nbsp;почты
							</div>
						</div>
						<div class="var3">
							<div class="icon"></div>
							<div class="text">
								<span>Вариант&nbsp;3:</span><br>
								Напишите&nbsp;нам<br>в&nbsp;Skype
							</div>
						</div>
					</div>
				</div>
				
			</div>

			<!-- Yandex.Metrika counter -->

<!-- /Yandex.Metrika counter -->

<script>
$(function(){
	if (onceLoad)
	isLoaded();
});

$('html,body').scrollTop(0);
</script>


	<?php echo $bottomscripts; ?>