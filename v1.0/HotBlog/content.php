<?php 
isset($_POST["ajax"])||(defined('_MN')) or die('Ошибка');
 ?>

<script>
$('head link:last').remove();
$('head').append('<link rel="stylesheet" href="/css/hotblog-page.css">');
$('title').text('Блог | By Mind — веб-дизайн и разработка сайтов');
$('.coverer').html('');


if (menu_opened){
	$('.open-nav').click();
}



</script>

<div class="content-wrapper">
				<div class="title">Hot blog<span>Горяченькое =)</span></div>

				<div class="blocks" style='height: 1000px;'>

					Никто ничего не написал<br>:(

				
				</div>
				
</div>

<script>
$(function(){
	if (onceLoad)
	isLoaded();
});

$('html,body').scrollTop(0);


</script>

<?php echo $bottomscripts; ?>