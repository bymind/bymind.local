<?php 
isset($_POST["ajax"])||(defined('_MN')) or die('Ошибка');
 ?>


<script>
$('meta[name=keywords]').attr('content', 'сайт дизайн готовый готовый шаблон дизайна сайта разработка разработку сайта сайт готовый bymind, by mind, By Mind, студия By Mind, создать сайт, Заказать сайт Заказать хороший сайт Сайт заказать недорого Сайт заказать цена Где заказать сайт недорого Где можно заказать сайт недорого Заказать разработку сайта Продающий сайт заказать Заказать веб сайт Заказать сайт визитку недорого');
$('meta[name=description]').attr('content', 'Привет! Давай сделаем тебе ахренительный сайт?');
$('head link:last').remove();
$('title').text('Веб-студия By Mind — веб-дизайн и разработка сайтов');


$('button#mail').click(function(event) {
	sendMail();
	return false;
});

$('button#phone').click(function(event) {
	sendPhone();
	return false;
});

$('button.connect').click(function(event) {
	goConnect();
	return false;
});

$('div.var1').click(function(event) {
	goConnect();
	return false;
});

$('div.var2').click(function(event) {
	goConnect2();
	return false;
});

var sputnikLaunch = new Date();
$h = sputnikLaunch.getHours();
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


$('head').append('<link rel="stylesheet" href="/css/main'+$h+'-page.css">');

if (menu_opened){
	$('.open-nav').click();
}

$("input[name=phone]").inputmask("+7(999)999-99-99");


</script>
<div class="content-wrapper">

				<div class="title">Welcome!<span>Делаем сайты. <nobr>Просто.</nobr></span></div>

				<div class="blocks">
					<div class="left"><span><h1>
						Да, мы тоже  <a class='ajax' href="/Well-Done/"   data-title='Портфолио' >делаем сайты</a>.<span class='to-right'>Но мы делаем их с умом.</span>
					</h1></span>
					<p>
						Мы не предлагаем Вам купить готовый сайт, готовый шаблон дизайна для сайта или сделать веб-сайт в конструкторе. Это всё бред. Я никогда не поверю, что Вы хотите быть таким же, как все. Если Вам нужен сайт, который ничем не отличается от миллионов других - я Вас очень прошу, навсегда забудьте о веб-студии By Mind. <p>
						<p>
							<br>
						</p>
						<p>
Если Вы хотите выделяться уникальным дизайном, если Вы хотите индивидуальную разработку сайта именно для Вас и Ваших целей - тогда Вы по адресу. У нас Вы можете <span><a class='ajax' href="/We-Do/"   data-title='Услуги и цены' ><nobr>заказать разработку сайта</nobr></a></span> с нуля, включая дизайн, верстку, кодинг и даже размещение на хостинге.
						</p>
					
					</div>

					<div class="right">
						<span class="title"><h1>
							Оставьте Ваши контакты<br><small>и мы сами с Вами свяжемся</small>
						</h1></span>

						<form action="" id="main">
							<div class="wrapper-input">
								<input type="email" id='mail' name='mail' placeholder='Куда Вам написать?'>
								<button id='mail'><div class="sended"><span></span></div></button>
							</div>
								<span class="or">или</span>
							<div class="wrapper-input">
								<input type="tel" id='phone' name='phone' placeholder='Куда Вам позвонить?'>
								<button id="phone"><div class="sended"><span></span></div></button>
							</div>
								<span class="or">или</span>
							<button class="connect">Напишите нам</button>				
						</form>
					</div>

					<div class="links">
						<div class="folio"><a class="ajax" href="/Well-Done/"><span>Портфолио</span>Зацени <strong>портфолио</strong>, там у нас все лучшие дизайны сайтов и уже работающие проекты.</a></div>
						<div class="price"><a class="ajax" href="/We-Do/"><span>Услуги и цены</span>Офигей от <strong>цен</strong>, сайт у нас стоит дешевле, чем твоя обувь.</a></div>
						<div class="contact"><a class="ajax" href="/Lets-Be-Friends/"><span>Контакты</span><strong>Спроси</strong> у нас всё, что хочешь, ответим на любой вопрос.</a></div>
					</div>

					<div class="paragraph">
						<span class='cit'>Цитата</span>
						<div class="man">
						<div class="author-photo"></div>
						<span class='author'>Кеша Пуделев<br><span>разработчик By Mind</span></span>
						</div>
						<span style='text-indent:30px;display:block'>
						Видели в интернете ГС (г@вно-сайты)? Точно видели. А видели их в ТОПе поисковой выдачи? Меня такие события заставляют думать, что всё тлен и люди никогда не будут делать что-то для людей. Только для денег. И сайты тоже. За день создается ГС, еще за день выводится в топ, и потом заставляет нормальных людей плеваться от обилия рекламы и получать культурный шок от отвратительного дизайна.</span>
						
					
						<br><span style='text-indent:30px;display:block'>
							Естественно, я никогда не делал, не делаю и не буду делать такие сайты. У меня от них давление повышается. Конкретно бомбит. Поэтому я задался целью увеличить средний показатель культурной ценности сайтов в Рунете, и именно по этой причине я берусь только за настоящие, полезные и красивые проекты.
						</span>
						<br><span style='text-indent:30px;display:block'>
							Я люблю создавать красивые сайты. Нарисовать красивый веб-дизайн, разработать удобный сайт, помочь заказчику достичь его целей &mdash; именно эти задачи мы тут решаем. Я горжусь нашими проектами и сплю спокойно, зная, что мы помогаем как нашим заказчикам, так и посетителям сайтов наших клиентов получать нужную информацию и достигать поставленных целей. Да, мы зарабатываем, но мы зарабатываем на том, что любим &mdash; и в этом наше преимущество. Я лично заинтересован в каждом проекте.
						</span>
						<br><span style='text-indent:30px;display:block'>
							Мы в ответе за то, что нарисовали, спроектировали и накодили.
						</span>
						
					</div>

				</div>
				
			</div>

	

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