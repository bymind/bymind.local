
<html>
	<head>
		<meta name="viewport" content="width=900,initial-scale=1.0">
		<meta charset="utf-8">
		<title>Skype-диалог с ByMind</title>
		<link rel="stylesheet" href="/css/main1.css">
		<style>
			html,body{
				padding:0;
				margin: 0;
				background: url(bg.jpg) center center no-repeat !important;
				background-size: cover !important;
				position: fixed !important;
				width: 100%;
				height: 100%;
			}
			div.main{
				position: absolute;
				display: block;
				max-width: 800px;
				width: 100%;
				margin:auto;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				height: 550px;
				font-family: 'seg-l';
				color:#fff;
				font-size:30px;
				line-height: 40px;
				text-align: right;
			}
			div.icons{
				position: relative;
				display: block;
				width: 400px;
				height: 150px;
				margin:0 auto 30px auto;
			}
			div.skype{
				width: 200px;
				height: 150px;
				position: relative;
				background: url(skype.png) 40px center no-repeat;
				float: left;
			}
			div.bymind{
				width: 200px;
				height: 150px;
				position: relative;
				background: url(ava.jpg) 20px center no-repeat;
				float: left;
			}

			div.text-block{
				position: relative;
				width: 100%;
				min-height:280px;
				height:auto;
				background:rgba(0,0,0,.5);
				text-align: center;
				box-sizing:border-box;
				padding:20px;
			}

			div.poink{
				position: relative;
				display: block;
				width: 230px;
				height: 52px;
				background: url(poink.png) center center no-repeat;
				margin: 20px auto 0 auto;
				border-radius: 4px;
				border-bottom: 1px solid rgba(0,0,0,.3);
			}

			div.download{
				position: relative;
				display: inline-block;
				width: 140px;
				height: 31px;
				background: url(download.jpg) center center no-repeat;
				background-size: contain;
				margin: 10px auto -10px auto;
				line-height: 40px;
				border-radius: 4px;
				border-bottom: 1px solid rgba(0,0,0,.3);
			}
			div.download a, div.poink a{
				position: relative;
				display: block;
				width: 100%;
				height: 100%;
				cursor:pointer;
				border-radius: 4px;
			}

			div.download a:hover, div.poink a:hover{
				background: rgba(255,255,255,.1);
			}
			span.noskype{
				font-size: 20px;
			}
			div.back-to-site{
				position: fixed;
				z-index: 2;
				margin:10px;
				width: 150px;
				height: 55px;
				background: rgba(0,0,0,.5);
			}
			div.back-to-site a{
				position: relative;
				display: block;
				width: 100%;
				height: 100%;
				text-align: center;
				color:white;
				font-family:'seg-l';
				font-size:20px;
				text-decoration: none;
				box-sizing:border-box;
				padding:10px;
			}
			div.back-to-site a:hover{
				background:rgba(255,255,255,.1);
			}
			@media screen and (max-width:790px){
				div.main{
				font-size:20px;
				line-height: 30px;
			}
			}
		</style>
		<meta http-equiv="refresh" content="5;skype:ByMindStudio?chat">
	</head>
	<body>
		<div class="main">
			<div class="icons">
				<div class="skype"></div>
				<div class="bymind"></div>
			</div>
			<div class="text-block">
				<div class="text">Через мгновение откроется диалог в Skype.<br>Спасибо Вам за то, что решились нам написать!<br><br>Если диалог не открылся автоматически, нажмите на<br>кнопку ниже и разрешите открыть ссылку через Skype.</div>
				<div class="poink"><a href="skype:ByMindStudio?chat"></a></div>
			</div>
			<span class="noskype">У Вас еще нет Skype?</span>
				<div class="download"><a href="http://www.skype.com/ru/download-skype/" target="_blank"></a></div>
		</div>
		<div class="back-to-site"><a href="http://ByMind.ru">&larr; На главную</a></div>
	</body>
</html>