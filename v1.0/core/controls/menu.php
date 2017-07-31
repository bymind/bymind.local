		<div class="head-line">
			<div class="logo"><a class='ajax' href="http://bymind.ru" onclick='$("body").scrollTop(0);'><div class="logo-icon"></div></a></div>
		</div>
		<div class="open-nav">
			</div>
		<div id="side-menu">
			<div class="items-block">
				<div class="item"><a id="logoman" class='ajax' href="fuckthisworld"></a></div>
				<div class="item"><span>Портфолио</span><a class='ajax' href="/Well-Done/"></a></div>
				<div class="item"><span>Услуги</span><a class='ajax' href="/We-Do/"></a></div>
				<div class="item"><span>Контакты</span><a class='ajax' href="/Lets-Be-Friends/"></a></div>
				<div class="item"><span>Hot Blog</span><a class='ajax' href="/HotBlog/"></a></div>
			</div>
			<script>
				$('a#logoman').attr('href', "http://"+location.hostname);
				$('div.logo').find('a').attr('href', "http://"+location.hostname);
				</script>
			<div class="copyright">
					<?php echo Date("Y"); ?> © ByMind
				</div>
		</div>
		<div id="for-swipe"></div>

