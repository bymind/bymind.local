$(document).ready(function() {
				linked = false;
			$reg = /.+@.+\..+/i;
			$connected = false;
			$("input[name=phone]").inputmask("+7(999)999-99-99");
			menu_opened = false;
			var is_fixed = false;
			$mailCliked = false;
			onceLoad = false;
			styleRemoved = false;
			touchJustEnded = false;
			$phoneCliked = false;
			isTyped = false;
			var h = $('.head-line').height();
			window.onscroll = function() {
				if ($(window).scrollTop() > (h/3))  {
					if (!$connected){
						$('.head-line').addClass('scrolled');
						if (menu_opened) {
					$('.open-nav').css({
					opacity: '.7',
					left: '80px',
					'transform':'none',
					'-webkit-transform':'none',
					'-moz-transform':'none',
					'-o-transform':'none',
					background: 'url(/images/close-menu.png) center center no-repeat rgba(0,0,0,.3)'
					});
				}
					}


				} else if ($(window).scrollTop() <= (h/3) ) {
					$('.head-line').removeClass('scrolled');

						if (menu_opened) {
					$('.open-nav').css({
					opacity: '.7',
						left: '0px',
						'transform':'rotate(-90deg)',
						'-webkit-transform':'rotate(-90deg)',
						'-moz-transform':'rotate(-90deg)',
						'-o-transform':'rotate(-90deg)',
						background: 'url(/images/close-menu.png) center center no-repeat rgba(0,0,0,.3)'
					});
				}
				}
			}


			$('.open-nav').click(function(event) {

				vibrator(30);

				if (!menu_opened){
					$('#side-menu').animate({left:'0px'}, 500);
					$('.copyright').css('left', '0');
					if ($(window).scrollTop() === 0) {
						$(this).css({
						opacity: '.7',
						left: '0px',
						'transform':'rotate(-90deg)',
						'-webkit-transform':'rotate(-90deg)',
						'-moz-transform':'rotate(-90deg)',
						'-o-transform':'rotate(-90deg)',
						background: 'url(/images/close-menu.png) center center no-repeat rgba(0,0,0,.3)'
						});
					} else {
					$(this).css({
					opacity: '.7',
					left: '80px',
					background: 'url(/images/close-menu.png) center center no-repeat rgba(0,0,0,.3)'
					});
					}
					$('#for-swipe').css('display', 'block');
					$('#for-swipe').css('opacity', '1');

					menu_opened = true;

				} else {
					$('#side-menu').animate({left:'-100px'}, 500);
					$('.copyright').css('left', '100px');
					$(this).css({
					opacity: '1',
					left: '0px',
					'transform':'none',
					'-webkit-transform':'none',
					'-moz-transform':'none',
					'-o-transform':'none',
					background: 'url(/images/open-menu.png) center center no-repeat rgba(0,0,0,.3)'
					});
					$('#for-swipe').css('opacity', '0');
					$('#for-swipe').css('display', 'none');
					menu_opened = false;
				}

});
/////////////////////////////////////////////////////  SWIPE /////////////////////////////////////////////




$bodyEl = document.getElementsByTagName('body')[0];
$winW = $(window).width();
/*isOpenTouchEnd = false;*/

$bodyEl.addEventListener('touchstart', function(event) {
    touch = event.changedTouches[0];
    touchstartX = touch.pageX;
    touchstartY = touch.pageY;
    $scrollStart = $('body').scrollTop();
}, false);

/*$bodyEl.addEventListener('touchend', function(event) {
	touch = event.changedTouches[0];
    touchendX = touch.pageX;
    touchendY = touch.pageY;
    $scrollStop = $('body').scrollTop();
    openMenu();
}, false);*/

$bodyEl.addEventListener('touchcancel', function(event) {
	/*if  (!isOpenTouchEnd) {*/
	touch = event.changedTouches[0];
    touchendX = touch.pageX;
    touchendY = touch.pageY;
    touchJustEnded = true;
    $scrollStop = $('body').scrollTop();
    openMenu(); /*}else {
    	isOpenTouchEnd = false;
    }*/
}, false);

function openMenu() {
	toRight = ((touchendX > touchstartX)&&( ((Math.abs($scrollStop - $scrollStart))*3) < (Math.abs(touchendX - touchstartX)) )&&($winW<=320)&&((touchendX - touchstartX)>=50)) ? true : false;
    if (toRight) {
        $('.open-nav').click();
        /*touchJustEnded = false;
        isOpenTouchEnd = false;*/
    }
}


$el = document.getElementById('for-swipe');

/*isTouchEnd = false;*/

$el.addEventListener('touchstart', function(event) {
    touch = event.changedTouches[0];
    touchstartX = touch.pageX;
    touchstartY = touch.pageY;
}, false);

$el.addEventListener('touchend', function(event) {
	touch = event.changedTouches[0];
    touchendX = touch.pageX;
    touchendY = touch.pageY;
    /*touchJustEnded = true;
    isTouchEnd = true;*/
    closeMenu();
}, false);

$el.addEventListener('touchcancel', function(event) {
	/*if  (!isTouchEnd){*/
	touch = event.changedTouches[0];
    touchendX = touch.pageX;
    touchendY = touch.pageY;
   /* touchJustEnded = true;*/
    closeMenu(); /*} else {
    	isTouchEnd = false;
    }*/
}, false);

function closeMenu() {
	toLeft = ((touchendX < touchstartX)&&( ((Math.abs(touchendY - touchstartY))*2) < (Math.abs(touchendX - touchstartX)) )) ? true : false;
    if (toLeft) {
        $('.open-nav').click();
        /*touchJustEnded = false;
        isTouchEnd = false;*/
    }
}


$el.addEventListener('mouseup',function(event) {
	$('.open-nav').click();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.legend>div').click(function(event) {
	$('div.selected').removeClass('selected');
	$(this).addClass('selected');
});

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


$('.copyright').click(function(event) {
	vibrator(20);
});

});


function sendMail(){
	if ($('input#mail').val()!=''){
		if (!$mailCliked){
		$('button#mail').css({
		width: '95%',
		'border-radius':'10px'
	});
	$('button#mail div.sended').css({
		width: '80%',
		opacity:'1',
		'line-height': $('button#mail div.sended').parent().height()+'px',
		height: $('button#mail div.sended').parent().height(),
		padding: '1px 0',
		'box-sizing': 'content-box'
	});
	if (!$reg.test($('input#mail').val())){
		$('button#mail div.sended span').css({
		opacity: '1'
	});
		$('button#mail div.sended span').html('Это разве почта? =Р');
	} else if ($reg.test($('input#mail').val())){
		$('button#mail div.sended span').css({
		opacity: '1'
	});
		$('button#mail div.sended span').html('Спасибо! Ждите письмо. =)');

	$.post('/magic/sendmail.php', $('form#main').serialize(), function (response) {
		$('button#mail div.sended span').html(response);
		yaCounter24731942.reachGoal('MAIL_SENDED');
	});
	}

	$mailCliked = true;
} else if ($mailCliked){
	if ($reg.test($('input#mail').val())){
		$('input#mail').val('');
	}

		$('button#mail').removeAttr('style');
	$('button#mail div.sended').css({
		width: '0%',
		opacity:'0'
	});
	$('button#mail div.sended span').css({
		opacity: '0'
	});



	$mailCliked = false;
}
	}

	return false;
}


function sendPhone(){
	if ( ($('input#phone').val()!='')&&( !(/_/.test($('input#phone').val())) ) ){
			if (!$phoneCliked){
		$('button#phone').css({
		width: '95%',
		'border-radius':'10px'
	});
	$('button#phone div.sended').css({
		width: '80%',
		opacity: '1',
		'line-height': $('button#mail div.sended').parent().height()+'px',
		height: $('button#mail div.sended').parent().height(),
		padding: '1px 0',
		'box-sizing': 'content-box'
	});
	$('button#phone div.sended span').css({
		opacity: '1'
	});

	$('button#phone div.sended span').html('Спасибо! Созвонимся0. =)');

	$.post('/magic/sendmail.php', $('form#main').serialize(), function (response) {
		$('button#phone div.sended span').html(response);
		yaCounter24731942.reachGoal('PHONE_SENDED');
	});


	$phoneCliked = true;
} else if ($phoneCliked){

		$('button#phone').removeAttr('style');

	$('button#phone div.sended').css({
		width: '0%',
		opacity: '0'
	});

	$('button#phone div.sended span').css({
		opacity: '0'
	});
	$('input#phone').val('');

	$phoneCliked = false;
}
	}


}

function goConnect(){
	startWhatch();
	$connected = true;
	$oldh = $('div.head-line').height();
	$oldt = $('div.head-line').css('top');
	$topH = $('body').scrollTop();
	$('div.head-line').animate({height:'100%', top:'0'}, 200, function(){
		$('html,body').animate({scrollTop:0}, 200);
		$(this).css('position', 'absolute');
		$('div.head-line').append('<div class="connect-form"><form action="" id="connect-form"><input id="name" name="name" type="text" placeholder="Имя" /><input id="mail" type="email" name="mail" placeholder="Почта" /><div class="textarea-wrapper"><textarea name="mess" id="mess" placeholder="Сообщение" ></textarea></div></form><div class="cross" title="Закрыть"></div><div class="send-form" title="Отправить"></div><script>$("div.cross").click(function(event) {closeForm();}); $("div.send-form").click(function(event) {	sendConnect();}); </script></div>');

	});
	$('div.logo').css('margin', '0px auto');
	$('div.open-nav').animate({
			opacity:0},
			500, function() {
			$(this).css('z-index', '4');
		});
	setTimeout(function(){
		$('div.cross').css('transform', 'rotate(90deg)');
		$('div.connect-form').css('opacity', '1');

	},350);

	return false;
}

function closeForm(){
	stopWatch();
	$connected = false;
	$('div.cross').css('transform', 'rotate(0deg)');
	$('div.connect-form').animate({
		opacity: '0'},
		200, function() {
		$('div.connect-form').remove();
		$('div.head-line').animate({height: $oldh, top: $oldt}, 200, function(){
			$('div.logo').removeAttr('style');
			$('div.head-line').removeAttr('style');
		});
	});
	$('html,body').animate({scrollTop:$topH}, 200);
	$('div.open-nav').css('z-index', '5');
	$('div.open-nav').animate({opacity:1},200);
}

function goConnect2(){
	startWhatch();
	$connected = true;
	$oldh = $('div.head-line').height();
	$oldt = $('div.head-line').css('top');
	$topH = $('body').scrollTop();
	$('div.head-line').animate({height:'100%', top:'0'}, 200, function(){
		$('html,body').animate({scrollTop:0}, 200);
		$(this).css('position', 'absolute');
		$('div.head-line').append('<div class="spinner"></div>');
		$.ajax({
			type: "POST",
   			url: location.href + '/goConnect2.php',
   			data: "ajax=1",
		        success: function(data) {
		        	$('div.head-line').find('div.spinner').remove();
		            $('div.head-line').append(data);
		        }
    	});

	});
	$('div.logo').css('margin', '0px auto');
	$('div.open-nav').animate({
			opacity:0},
			500, function() {
			$(this).css('z-index', '4');
		});
	setTimeout(function(){
		$('div.cross').css('transform', 'rotate(90deg)');
		$('div.connect-form').css('opacity', '1');

	},350);

	return false;
}

function goSkype(){
	startWhatch();
	$connected = true;
	$oldh = $('div.head-line').height();
	$oldt = $('div.head-line').css('top');
	$topH = $('body').scrollTop();
	$('div.head-line').animate({height:'100%', top:'0'}, 200, function(){
		$('html,body').animate({scrollTop:0}, 200);
		$(this).css('position', 'absolute');
		$('div.head-line').append('<div class="spinner"></div>');
		$.ajax({
			type: "POST",
   			url: location.href + '/goSkype.php',
   			data: "ajax=1",
		        success: function(data) {
		        	$('div.head-line').find('div.spinner').remove();
		            $('div.head-line').append(data);
		            $('div.connect-form').append('<div class="cross" title="Закрыть"></div><script>$("div.cross").click(function(event) {closeForm();});</script>');
		        }
    	});


	});
	$('div.logo').css('margin', '0px auto');
	$('div.open-nav').animate({
			opacity:0},
			500, function() {
			$(this).css('z-index', '4');
		});
	setTimeout(function(){
		$('div.cross').css('transform', 'rotate(90deg)');
		$('div.connect-form').css('opacity', '1');

	},350);

	return false;
}


function startWhatch(){
	goWatch = setInterval(function(){
		if (($('textarea').val()!='')&&($('form#connect-form input#name').val()!='')&&($('form#connect-form input#mail').val()!='')){
			isTyped = true;
		} else {
			isTyped = false;
		}
		if (isTyped){
			$('div.send-form').css('visibility', 'visible');
			$('div.send-form').css('opacity', '1');
			$('div.send-form').css('transform', 'rotate(0deg)');
		} else {
			$('div.send-form').css('visibility', 'hidden');
			$('div.send-form').css('opacity', '0');
			$('div.send-form').css('transform', 'rotate(-90deg)');
		}
	}, 500);
}

function stopWatch(){
	clearInterval(goWatch);
}

function sendConnect(){
	if (!$reg.test($('form#connect-form input#mail').val())) {
		$('form#connect-form input#mail').addClass('wrong');
		setTimeout(function(){
			$('form#connect-form input#mail').removeClass('wrong');
		},800);
	} else {
		$.post('\/magic/sendconnect.php', $('form#connect-form').serialize(), function (response) {
		$('div.connect-form').html(response);
		$('div.connect-form').css({'background': 'rgba(0,0,0,.2)', 	'font-size': '1.5em'});
		yaCounter24731942.reachGoal('BIG_FORM_SENDED');
	});
	}
}

function goSwapFavicon(){
	setInterval(function(){
		$('link[rel$=icon]').remove();
		$('head').append( $('<link rel="shortcut icon" type="image/x-icon"/>' ).attr( 'href', "/favicon-red.ico" ) );
		setTimeout(function(){
			$('link[rel$=icon]').remove();
			$('head').append( $('<link rel="shortcut icon" type="image/x-icon"/>' ).attr( 'href', "/favicon.ico" ) );
		},2000);
	},15000)
}



function setSelectedMenu(){
	var length = $('div.items-block div.item').length;
	var flag = false;
	for (var i = 1; i <= length; i++) {
		// if ($('div.items-block div.item:eq('+i+') a').attr('href')===location.pathname)
			if	(!(location.pathname.indexOf($('div.items-block div.item:eq('+i+') a').attr('href'))))
		{

			$('div.items-block div.item:eq('+i+')').css('background-color', 'rgb(219, 99, 97)');
			$('div.items-block div.item:eq('+i+') span').css('opacity', '.7');
			flag = true;
		} else {
			$('div.items-block div.item:eq('+i+')').removeAttr('style');
			$('div.items-block div.item:eq('+i+') span').removeAttr('style');
		}
	};
	 if (!flag){
	 	$('div.items-block .item').removeAttr('style');
	 	$('div.items-block .item span').removeAttr('style');
	 }

}

function showProj(toShow){
	if (toShow == 'all'){
		$('.projects>.item').show('200', function() {
			$(this).addClass('showed');
		});
	} else
	if (toShow == 'design'){
		$('.justS').removeClass('justS');
		$('.design-icon').parent().parent().addClass('justS');
		$('.showed:not(.justS)').hide('200', function() {
			$(this).removeClass('showed');
		});
		$('.design-icon').parent().parent().show('200', function() {
			$(this).addClass('showed');
		});
	} else
	if (toShow == 'dev'){
		$('.justS').removeClass('justS');
		$('.dev-icon').parent().parent().addClass('justS');
		$('.showed:not(.justS)').hide('200', function() {
			$(this).removeClass('showed');
		});
		$('.dev-icon').parent().parent().show('200', function() {
			$(this).addClass('showed');
		});
	} else
	if (toShow == 'inweb'){
		$('.justS').removeClass('justS');
		$('.inweb-icon').parent().parent().addClass('justS');
		$('.showed:not(.justS)').hide('200', function() {
			$(this).removeClass('showed');
		});
		$('.inweb-icon').parent().parent().show('200', function() {
			$(this).addClass('showed');
		});
	}
}

$(window).bind('popstate', function() {
    $.ajax({
        url:     location.href + '/content.php',
        type: "POST",
   		data: "ajax=1",
        success: function(data) {
            $('#content-block').html(data);


        }
    });
});


/*function startListenSwipe(){
	var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var gesuredZone = document.getElementById('for-swipe');

gesuredZone.addEventListener('touchstart', function(event) {
    touchstartX = event.screenX;
    touchstartY = event.screenY;
}, false);

gesuredZone.addEventListener('touchend', function(event) {
    touchendX = event.screenX;
    touchendY = event.screenY;
    handleGesure();
}, false);

function handleGesure() {
    var swiped = 'swiped: ';
    if (touchendX < touchstartX) {
        alert(swiped + 'left!');
    }
    if (touchendX > touchstartX) {
        alert(swiped + 'right!');
    }
    if (touchendY < touchstartY) {
        alert(swiped + 'down!');
    }
    if (touchendY > touchstartY) {
        alert(swiped + 'left!');
    }
    if (touchendY == touchstartY) {
        alert('tap!');
    }
}
}*/


function isLoaded(){

	$('.spinner-box').animate({
		opacity: 0},
		500, function() {
		$(this).remove();
	});

	setSelectedMenu();

}

$(window).load(function() {
	isLoaded();
	onceLoad  = true;
});

function vibrator(x=20)
{
	navigator.vibrate(x);
}