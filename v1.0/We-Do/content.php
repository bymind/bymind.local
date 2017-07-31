<?php 
isset($_POST["ajax"])||(defined('_MN')) or die('Ошибка');

 ?>


<script>
$('head link:last').remove();
$('head').append('<link rel="stylesheet" href="/css/wedo-page.css">');
$('title').text('Услуги | By Mind — веб-дизайн и разработка сайтов');
$('.coverer').html('<div class="bg-black"></div>');

$('div.nothing').click(function(event) {
    goConnect();
    return false;
});

$('div.item-wedo:not(.nothing)').click(function(event) {
   $orderAim = $(this).find('h1').text();
    goConnect();
    setTimeout(function(){
        $('textarea').val("Тема: "+$orderAim+"\r\n");
    },500);
    return false;
});

if (menu_opened){
	$('.open-nav').click();
}


</script>

<div class="content-wrapper">

				<div class="title">Let's do it!<span>И что почем?</span></div>

				<div class="blocks">
					<div id="blocks-inner">
                        <div class="item-wedo">
                            <h1 class="title-wedo">Сайт-визитка</h1>
                                <p class="text-wedo">
                                    Маленький сайт, состоящий из одной страницы. Главная информация о компании или физическом лице, описание услуг, контакты
                                </p>
                            <span class="price-wedo">от 5 000 руб</span>
                        </div>

                        <div class="item-wedo">
                            <h1 class="title-wedo">Landing page</h1>
                                <p class="text-wedo">
                                    Так называемая посадочная страница. Создается для целевых посетителей, которые с большой вероятностью совершат нужное действие, например, заказ.
                                </p>
                            <span class="price-wedo">от 10 000 руб</span>
                        </div>

                        <div class="item-wedo">
                            <h1 class="title-wedo">Небольшой сайт</h1>
                                <p class="text-wedo">
                                    Более развернутый вариант сайта-визитки, состоящий из 3-5 страниц. Содержит информацию о компании или человеке, контакты, услуги и еще что-нибудь.
                                </p>
                            <span class="price-wedo">от 15 000 руб</span>
                        </div>

                        <div class="item-wedo">
                            <h1 class="title-wedo">Промо-сайт</h1>
                                <p class="text-wedo">
                                    Создается для того, чтобы впечатлить юзера, показать ему все преимущества продукта или услуги в красочной, запоминающейся форме.
                                </p>
                            <span class="price-wedo">от 25 000 руб</span>
                        </div>

                        <div class="item-wedo">
                            <h1 class="title-wedo size2">Интернет-магазин</h1>
                                <p class="text-wedo">
                                    Название говорит само за себя. Каталог товаров с возможностью заказа, корзина, редактирование товаров, возможность безнала, обработка поступивших заказов.
                                </p>
                            <span class="price-wedo">от 40 000 руб</span>
                        </div>

                        <div class="item-wedo">
                            <h1 class="title-wedo">Корпоративный</h1>
                                <p class="text-wedo">
                                    Официальное представительство компании в интернете. Обычно это серьезный дизайн, вывереный функционал и строгое соответствие корпоративному стилю.
                                </p>
                            <span class="price-wedo"> от 45 000 руб</span>
                        </div>

                        <div class="item-wedo">
                            <h1 class="title-wedo">Портал</h1>
                                <p class="text-wedo">
                                    Интернет-портал создается с учетом большого количества функций, в основном направленных на общение юзеров. Коммуникационный инструмент.
                                </p>
                            <span class="price-wedo">от 50 000 руб</span>
                        </div>

                        <div class="item-wedo">
                            <h1 class="title-wedo uniq">Уникальный <span>функционал</span></h1>
                                <p class="text-wedo uniq">
                                    Специфические разработки, креативные идеи, собственные сервисы, стартапы.
                                </p>
                            <span class="price-wedo uniq">от 75 000 руб</span>
                        </div>

                        <div class="item-wedo nothing">
                            <h1 class="title-wedo nothing">Ничего не подошло?</h1>
                                <p class="text-wedo nothing">
                                    Все равно сделаем!
                                    Свяжитесь с нами и все дела!
                                </p>
                            <span class="price-wedo"></span>
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