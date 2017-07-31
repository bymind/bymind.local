<?php 
	defined('_SKP') or die('Ошибка');

/*$skypestatus = '-10';

    $a = @file_get_contents("http://mystatus.skype.com/bymindstudio.txt");
    switch($a) {
        case 'Online': case 'Away': 
            $skypestatus = "онлайн";
            $skypeClass = "online";
            break;
        case 'Offline': case 'Do Not Disturb': 
            $skypestatus = "сейчас оффлайн"; 
            $skypeClass = "offline";
            break;
         
        default: $skypestatus = '-1'; break;
    }*/

	echo '<div class="connect-form" style="text-shadow: 0 1px rgba(0,0,0,.4);opacity: 1; background-color: rgba(0, 0, 0, 0.05); font-size: 1.5em; background-position: initial initial; background-repeat: initial initial;height:180px;"><table style="width: 100%;height: 100%;"><tbody><tr><td>Наc зовут<br><strong style="font-size:.8em;display: block;">ByMindStudio</strong><span id="status" ></span><a class="skype-button" href="skype:ByMindStudio?chat"><div class="skype-bg"></div><span class="skype-text">Написать в Skype!</span></a></td></tr></tbody></table><script>$("span#status").addClass("skype"+$skypeClass).html($skype);</script></div>';
 ?>

