<!DOCTYPE html>
<html lang="ru_RU">
<head  manifest="default.appcache">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no">

	<meta property="og:description" content="ByMind v 2.0">
	<meta property="og:image" content="http://bymind.ru/v2.0/v2.jpg">
	<meta property="og:site_name" content="ByMind">
	<meta property="og:title" content="">
	<meta property="og:type" content="article">
	<meta property="og:url" content="http://bymind.ru/v2.0">

	<meta itemprop="image" content="http://bymind.ru/v2.0/v2.jpg">

	<meta name="twitter:card" content="summary">
	<meta name="twitter:site" content="@ByMind">
	<meta name="twitter:title" content="Introduction - ByMind v2.0">
	<meta name="twitter:description" content="Разумная веб-студия">
	<meta name="twitter:creator" content="bymind">
	<meta name="twitter:image:src" content="http://bymind.ru/v2.0/v2.jpg">
	<meta name="twitter:domain" content="bymind.ru">

	<link rel="shortcut icon" href="http://bymind.ru/favicon.ico">
	<link rel="icon" href="http://bymind.ru/favicon.ico">
	<link rel="icon" type="image/gif" href="http://bymind.ru/favicon.gif">
	<meta http-equiv="Cache-Control" content="max-age=3600, must-revalidate" >
	<meta name='yandex-verification' content='7e196adfeb623ccd' />
	<link rel="image_src" href="http://bymind.ru/v2.0/v2.jpg">

	<link rel="manifest" href="/manifest.json">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333">
	<meta name="apple-mobile-web-app-title" content="ByMind">
	<meta name="application-name" content="ByMind">
	<meta name="msapplication-TileColor" content="#050404">
	<meta name="theme-color" content="#050404">


	<title>Introduction - ByMind</title>
	<link rel="stylesheet" href="/v2.0/bootstrap.css">
	<style>

	/* --------------------------------- FONTS --------------------------------- */
	@font-face {
	 font-family: 'seg-l';
	 src: local('☺'), url('fonts/segoeuil.ttf') format('truetype'), url('fonts/segoeuil.woff') format('woff'), url('fonts/segoeuil.eot?') format('eot'), url('fonts/segoeuil.svg#seg-l') format('svg'); font-weight: normal; font-style: normal; }
	@font-face {
	 font-family: 'seg-sl';
	 src: local('☺'), url('fonts/segoeuisl.ttf') format('truetype'), url('fonts/segoeuisl.woff') format('woff'), url('fonts/segoeuisl.eot?') format('eot'), url('fonts/segoeuisl.svg#seg-sl') format('svg'); font-weight: normal; font-style: normal; }
	@font-face {
	 font-family: 'seg-li';
	 src: local('☺'), url('fonts/seg-li.ttf') format('truetype'), url('fonts/seg-li.woff') format('woff'), url('fonts/seg-li.eot?') format('eot'), url('fonts/seg-li.svg#seg-li') format('svg'); font-weight: normal; font-style: normal; }
	@font-face {
	 font-family: 'hel-l';
	 src: local('☺'), url('fonts/helioslightc.ttf') format('truetype'), url('fonts/helioslightc.woff') format('woff'), url('fonts/helioslightc.eot?') format('eot'), url('fonts/helioslightc.svg#hel-l') format('svg'); font-weight: normal; font-style: normal; }
	@font-face {
	 font-family: 'hel-t';
	 src: local('☺'), url('fonts/heliosthinc.ttf') format('truetype'), url('fonts/heliosthinc.woff') format('woff'), url('fonts/heliosthinc.eot?') format('eot'), url('fonts/heliosthinc.svg#hel-t') format('svg'); font-weight: normal; font-style: normal; }
	@font-face {
	 font-family: 'hel';
	 src: local('☺'), url('fonts/heliosc.ttf') format('truetype'), url('fonts/heliosc.woff') format('woff'), url('fonts/heliosc.eot?') format('eot'), url('fonts/heliosc.svg#hel') format('svg'); font-weight: normal; font-style: normal; }
/* --------------------------------- FONTS --------------------------------- */


	html,body {
		margin: 0;
		min-height: 100%;
		display: block;
		min-width: 100%;
		position: relative;
		font-size: 16px;
		background: transparent;
	}
	html{
		height:100%;
		background-color: #111;
	}
	h1{
		font-size: 1.6em;
	}
	.center{
		text-align: center;
	}
	.abs-wh100{
		height: 100%;
		position: absolute;
		width: 100%;
	}
	.white{
		color: white;
	}
	.f-s-l{
		font-family: 'seg-l', sans-serif;
	}
	.f-s-sl{
		font-family: 'seg-sl', sans-serif;
	}
	.f-s-li{
		font-family: 'seg-li', sans-serif;
	}
	.f-h{
		font-family: 'hel', sans-serif;
	}
	.f-h-l{
		font-family: 'hel-l', sans-serif;
	}
	.f-h-t{
		font-family: 'hel-t', sans-serif;
	}
	.f-light{
		font-weight: lighter;
	}
	.f-normal{
		font-weight: normal;
	}
	.f-bold{
		font-weight: bold;
	}
	.trailer {
		display: block; width: 100%; height: 100%;
		position: fixed;
		top: 0; right: 0; bottom: 0; left: 0;
		overflow: hidden;
	}
	#video{
		position: absolute;
		top: 0;
		left: 0;
		min-width: 100%;
		min-height: 100%;
		width: auto; height: auto;
	}
	.white-big{
		font-size: 20px;
		color: #fff;
		text-align: center;
	}
	.prelay{
		position: fixed;
		width: 100%;
		height: 100%;
		display: block;
    background-color: #111;
    z-index: -50;
    transition: all 1s ease-in-out;
	}
	.on0{
		opacity: .0 !important;
	}
	.on2{
		opacity: .2 !important;
	}
	.on4{
		opacity: .4 !important;
	}
	.on7{
		opacity: .7 !important;
	}
	.on8{
		opacity: .8 !important;
	}
	.on10{
		opacity: 1 !important;
	}

	.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(pattern.png) left top;
    /* background: rgba(0, 0, 0, 0.8); */
    z-index: -10;
    transition: all 1s ease-in-out;
  }
  .video-plumb{
	position: fixed;
	width: 100%;
	height: 100%;
	display: block;
	z-index: -50;
  }
  .overmain{
  	position: relative;
    display: table;
    width: 100%;
    height: 100%;
    padding: 10vh 0;
  }
  .logo{
  	position: relative;
  	width: 100%;
  	height: 100px;
  	margin: auto;
  	background-image: url(logo-main-white.svg);
  	background-size: contain;
  	background-position: center;
  	background-repeat: no-repeat;
  	transition: all 1s ease-in-out;
  }
  .t-cell-middle{
  	display: table-cell;
  	vertical-align: middle;
  }
  .t-row-middle{
  	display: table-row;
  	vertical-align: middle;
  }
  .bm-title{
  	transition: all 1.5s ease-in-out;
  }
  .bm-v2{
  	/* font-family: monospace;*/
  	font-size: 2.5em;
  	transition: all 1s ease-in-out;
  }
  .pb-5vh{
  	padding-bottom: 5vh !important;
  }
  .pb-20vh{
  	padding-bottom: 20vh !important;
  }
  .pb-30vh{
  	padding-bottom: 30vh !important;
  }
  .pb-40vh{
  	padding-bottom: 40vh !important;
  }
  .pb-60vh{
  	padding-bottom: 60vh !important;
  }
  .pt-5vh{
  	padding-top: 5vh !important;
  }
  .pt-10vh{
  	padding-top: 10vh !important;
  }
  .pt-30vh{
  	padding-top: 30vh !important;
  }
  .pt-60vh{
  	padding-top: 60vh !important;
  }
	</style>
</head>
<body>
	<div class="prelay"></div>
	<div class="overlay on0"></div>

<div class="container-fluid abs-wh100">
	<div class="overmain">
		<div class="main t-row-middle">
			<div class="t-cell-middle">
				<div class="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
					<div class="logo on0"></div>
				</div>
			</div>
		</div>
		<div class="t-row-middle center">
			<div class="t-cell-middle">
				<h1 class="white f-h-t f-normal bm-v2 on0">v2.0</h1>
			</div>
		</div>
		<div class="content t-row-middle center">
			<div class="t-cell-middle">
				<h1 class="white f-h-t f-normal bm-title on0">Coming soon</h1>
			</div>
		</div>
	</div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="/v2.0/bootstrap.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.1/mobile-detect.min.js"></script>
<script src="/js/jquery.backgroundvideo.min.js"></script>
<script>
    $(document).ready(function() {
    	var md = new MobileDetect(window.navigator.userAgent);
    	$ww = $(window).width();
    	$wh = $ww/(1.7);
    	$mediaFolder = "/v2.0/media/";
    	$mediaFileName = "programming-ide";
    	if (md.os() == null) {
	      var videobackground = new $.backgroundVideo($('body'), {
	        "align": "centerXY",
	        "width": 1280,
	        "height": 720,
	        "path": $mediaFolder,
	        "poster": $mediaFolder+$mediaFileName+".jpg",
	        "filename": $mediaFileName,
	        "types": ["mp4","ogg","webm"]
	      });
    		transOpacity(2000, 'on8', 'on2', 'pb-40vh', 'pt-10vh');
    	} else {
    		showBgForMobile('gif');
    		transOpacity(1500, 'on4', 'on0', 'pb-30vh', 'pt-5vh');
    	}

    });

    function showBgForMobile(format){
    	$('body').prepend('<div class="video-plumb"></div>');
    	$('.video-plumb').css({
    		background: 'url('+$mediaFolder+$mediaFileName+'.'+format+') no-repeat',
    		"background-position": 'center',
    		"background-size": 'cover'
    	});
    }

    function transOpacity(x, n, nn, pb, pt){
    	$('.overmain').addClass(pb).addClass(pt);
    	$('html').css({
    		"background-image": 'url('+$mediaFolder+$mediaFileName+'.jpg)',
    		"background-size": 'cover',
    		"background-position": 'center',
    		"background-repeat": 'no-repeat'
    	});;
    	setTimeout(function(){
    		setTimeout(function(){
		    	setTimeout(function(){
			    	setTimeout(function(){
  				    	$('.overlay').removeClass('on0').addClass(n);
  				    	$('.prelay').addClass(nn);
  			    	},x);
	  				$('.bm-title').removeClass('on0').addClass('on10');
		    	},x);
	  			$('.bm-v2').removeClass('on0').addClass('on10');
    		}, x);
  			$('.logo').removeClass('on0').addClass('on10');
    	},x);
    }
  </script>
   <script type="text/javascript">
  (function (d, w, c) {
      (w[c] = w[c] || []).push(function() {
          try {
              w.yaCounter24731942 = new Ya.Metrika({id:24731942,
                      webvisor:true,
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      trackHash:true});
          } catch(e) { }
      });

      var n = d.getElementsByTagName("script")[0],
          s = d.createElement("script"),
          f = function () { n.parentNode.insertBefore(s, n); };
      s.type = "text/javascript";
      s.async = true;
      s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

      if (w.opera == "[object Opera]") {
          d.addEventListener("DOMContentLoaded", f, false);
      } else { f(); }
  })(document, window, "yandex_metrika_callbacks");
  </script>
  <noscript><div><img src="//mc.yandex.ru/watch/24731942" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
</body>
</html>