<?php 

defined('_SKPE') or die('Ошибка');

$skypestatus = '-10';

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
         
        default: $skypestatus = ''; break;
    }
    
echo ('<script> $skype = "'.$skypestatus.'"; $skypeClass = "'.$skypeClass.'"; </script>');
 ?>