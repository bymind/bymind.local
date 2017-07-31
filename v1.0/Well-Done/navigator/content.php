<?php 
isset($_POST["ajax"])||(defined('_MN')) or die('Ошибка');
 ?>

<script>
$('head link:last').remove();
//$('head').append('<link rel="stylesheet" href="/css/welldone-page.css">');
$('head').append('<link rel="stylesheet" href="/css/welldone-page-navigator.css">');
$('title').text('Портфолиo > НАВИГАТОР | By Mind — веб-дизайн и разработка сайтов');
$('.coverer').html('');



if (menu_opened){
	$('.open-nav').click();
}



</script>

<div class="content-wrapper">
	<div class="top-text">
				<div class="title">НАВИГАТОР<span>Сервис доставки услуг</span></div>
				<div class="design-icon" title='Дизайн'></div>

				<div class="task"><span>Задача:</span> Создать сервис доставки на дом всевозможных услуг, от маникюров-педикюров до юристов.</div>
				<div class="done"><span>Сделано:</span> Разработаны алгоритмы функционирования системы, создан прототип, дизайн главной страницы сайта, создан дизайн сайта для мобильных устройств с учетом адаптивной вёрстки. </div>
				<div class="notice">К сожалению, заказчик исчез, так что проект не будет завершён.</div>
	
	</div>
	<div class="top-text-teeth"></div>
	<div class="home-page">
		<div class="title">Макет главной</div>
		<div class="screen1 invisible" ><div class="screen1-to-full"><div class="round"></div></div>
			<div class="notice1 notices"></div>
			<div class="notice2 notices"></div>
			<div class="notice3 notices"></div>
		</div>

	</div>

			
				
</div>

<script>
$(function(){
	if (onceLoad)
	isLoaded();

showProj('all');

$('div.href').click(function(event) {
	$(this).parent().find('a.ajax').click();
});

setTimeout(function(){
	$('div.items-block div.item:eq(1)').css('background-color', 'rgb(219, 99, 97)');
	$('div.items-block div.item:eq(1)').find('span').css('opacity', '1');
},500);

$('.legend>div').click(function(event) {
	$('div.selected').removeClass('selected');
	$toShow = $(this).attr('class');
	$(this).addClass('selected');
	showProj($toShow);
});
});

checkScreen1 = setInterval(function(){
	if (($('body').scrollTop() > 100)||( $(window).height <= ($('body').height +100))) {
		$('div.screen1').addClass('visible');
		$('div.screen1').removeClass('invisible');
		clearInterval(checkScreen1);
	}
}, 500);

checkScreen2 = setInterval(function(){
	if (($('body').scrollTop() > 280)||( $(window).height <= ($('body').height +100)))  {
		showNotices();
		clearInterval(checkScreen2);
	}
}, 500);

function showNotices(){
	setTimeout(function(){
		$('.notice1').animate({opacity:1}, 500);
		setTimeout(function(){
			$('.notice2').animate({opacity:1}, 500);
			setTimeout(function(){
				$('.notice3').animate({opacity:1}, 500);
	},300);
	},300);
	},300);
}

$('div.screen1-to-full').click(function(event) {
	window.open('/Well-Done/navigator/images/home-page.png');
});

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

$('html,body').scrollTop(0);


</script>


	<?php echo $bottomscripts; ?>