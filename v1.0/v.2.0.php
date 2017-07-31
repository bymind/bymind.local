<!DOCTYPE html>
<html lang="ru_RU">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no">
	<title>Introducion - ByMind</title>
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
  .pb-30vh{
  	padding-bottom: 30vh !important;
  }
  .pb-20vh{
  	padding-bottom: 20vh !important;
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
	<div class="video"></div>
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
    	console.log( md.mobile() );          // 'Sony'
    	console.log( md.phone() );           // 'Sony'
    	console.log( md.tablet() );          // null
    	console.log( md.userAgent() );       // 'Safari'
    	console.log( md.os() );              // 'AndroidOS'
    	console.log( md.is('iPhone') );      // false
    	console.log( md.is('bot') );         // false
    	console.log( md.version('Webkit') );         // 534.3
    	console.log( md.versionStr('Build') );       // '4.1.A.0.562'
    	console.log( md.match('playstation|xbox') ); // false
    	$ww = $(window).width();
    	$wh = $ww/(1.7);
    	$mediaFolder = "media/";
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
    		console.log(videobackground);
    		transOpacity(2000, 'on8', 'on4', 'pb-60vh', 'pt-10vh');
    	} else {
    		showBgForMobile('gif');
    		transOpacity(1500, 'on4', 'on0', 'pb-30vh', 'pt-5vh');
    	}

    });

    function write(x){
    	$('body').append('<div class="white-big">'+x+'</div><br>');
    }

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
</body>
</html>