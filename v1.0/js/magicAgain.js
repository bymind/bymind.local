function startWhatch(){
	goWatch = setInterval(function(){
		if ($('textarea').val()!=''){
			isTyped = true;
		} else {
			isTyped = false;
		}
	}, 1000);
}

function stopWatch(){
	clearInterval(goWatch);
}

