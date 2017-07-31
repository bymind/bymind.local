<?php 
isset($_POST["ajax"])||(defined('_MN')) or die('Ошибка');
 ?>

<script>
$('head link:last').remove();
$('head').append('<link rel="stylesheet" href="/css/welldone-page.css">');
$('title').text('Портфолио | By Mind — веб-дизайн и разработка сайтов');
$('.coverer').html('');


if (menu_opened){
	$('.open-nav').click();
}



</script>
<!-- 
<script language="JavaScript" type="text/javascript" src="/js/main.js"></script> -->

<div class="content-wrapper">
				<div class="title">Well done!<span>Портфолио работ</span></div>

				<div class="blocks" style='height: 1000px;'>

					<div class="legend">
						<div class="design">
							<div class="icon"></div>
							<div class="text">дизайн</div>
						</div>
						<div class="dev">
							<div class="icon"></div>
							<div class="text">разработка</div>
						</div>
						<div class="inweb">
							<div class="icon"></div>
							<div class="text">в сети</div>
						</div>
						<div class="all selected">
							<div class="icon"></div>
							<div class="text">все</div>
						</div>
					</div>

					<div class="projects">						
						<div class="item">
							<div class="points">
								<div class="design-icon"></div>
							</div>
							<div class="title">Навигатор</div>
							<div class="undertitle">Сервис доставки услуг</div>
							<div class="desc"><span class="bull">•</span> макет главной страницы<br><span class="bull">•</span> макет мобильной главной страницы</div>
							<a class='ajax' href="/Well-Done/navigator/" ></a>
							<div class="navigator href"></div>
						</div>
						<!-- <div class="item">
							<div class="points">
								<div class="design-icon"></div>
								<div class="dev-icon"></div>
								<div class="inweb-icon"></div>
							</div>
							<div class="title">Русфинансавто</div>
							<div class="undertitle">Продажа автомобилей и спецтехники</div>
							<div class="desc"><span class="bull">•</span> страница-лендинг<br><span class="bull">•</span> каталог товаров<br><span class="bull">•</span> админка</div>
							<a class='ajax' href="/Well-Done/rfa/" ></a>
							<div class="rfa href"></div>
						</div> -->

						
						
					</div>
				
				</div>
				
</div>


<!-- Yandex.Metrika counter -->
<!-- /Yandex.Metrika counter -->

<script>
$(function(){
	if (onceLoad)
	isLoaded();

showProj('all');

$('div.href').click(function(event) {
	$(this).parent().find('a.ajax').click();
});

$('.legend>div').click(function(event) {
	$('div.selected').removeClass('selected');
	$toShow = $(this).attr('class');
	$(this).addClass('selected');
	showProj($toShow);
});
});


$('html,body').scrollTop(0);


</script>

<script>
$(function(){
	if (onceLoad)
	isLoaded();

});

	$topH = 0;
	$('.cross').click();
	$('html,body').scrollTop(0);

	$('a.ajax').click(function() {
		if (!linked)
		{linked = true;
		        var url = $(this).attr('href');
		        $('body').prepend('	<div class="spinner-box"><div class="spinner"></div></div>');
		        if (!styleRemoved)
		        $('head style:last').remove();
		        styleRemoved = true;
		        $.ajax({
		            url:     url + '/content.php',
		            type: "POST",
		   			data: "ajax=1",
		            success: function(data){
		                $('#content-block').html(data);
		               linked = false;
		            }
		        });
		
		        if(url != window.location){
		            window.history.pushState(null, null, url);
		        }
		
		        return false;} else { return false;};
    });

</script>


	<?php echo $bottomscripts; ?>