<?php


$errors = array();
        
       
        if( empty( $_POST['phone'] ) && empty( $_POST['mail'] ) )
            # Ошибка
            $errors[] = "Что-то не так!";


 if( $errors )
            # Выводим ошибки
            foreach( $errors as $error )
                echo $error . '<br />';
        else
        {

            if( empty( $_POST['phone'] ) && (!empty( $_POST['mail'] )) ){
                    $title =  substr(htmlspecialchars(trim("С сайта By Mind [почта]")), 0, 1000); 
      //  $_POST['mess'] =  substr((trim($_POST['mess'])), 0, 1000000); 
        $_POST['mail'] =  substr(htmlspecialchars(trim($_POST['mail'])), 0, 60);
        
   
        $mess = '<table style=""><tr><td style="width:200px;">Почта:</td> <td><strong>'.$_POST['mail'].'</strong></td></tr></table>';

        // $to - кому отправляем 
       // $to = '"vsevolodpetrowsky@gmail.com" <vsevolodpetrowsky@gmail.com>'; 
$to = 'studio@bymind.ru'; 
//$to = 'keshapudelev@yandex.ru'; 
        // $from - от кого 
$from='back@bymind.ru'; 
 
        mail($to, $title, $mess, "Content-type: text/html; charset=utf-8\r\nFrom: ".$from); 
        
echo "Спасибо! Ждите письмо. =)";
            } else

                     if( !empty( $_POST['phone'] ) && (empty( $_POST['mail'] )) ){
                    $title =  substr(htmlspecialchars(trim("С сайта By Mind [телефон]")), 0, 1000); 
      //  $_POST['mess'] =  substr((trim($_POST['mess'])), 0, 1000000); 
        $_POST['phone'] =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 60);
        
   
        $mess = '<table style=""><tr><td style="width:200px;">Телефон:</td> <td><strong>'.$_POST['phone'].'</strong></td></tr></table>';

        // $to - кому отправляем 
       // $to = '"vsevolodpetrowsky@gmail.com" <vsevolodpetrowsky@gmail.com>'; 
$to = 'studio@bymind.ru'; 
//$to = 'keshapudelev@yandex.ru'; 
        // $from - от кого 
$from='back@bymind.ru'; 

        mail($to, $title, $mess, "Content-type: text/html; charset=utf-8\r\nFrom: ".$from); 
        
echo "Спасибо! Созвонимся. =)";
            } else {

                    $title =  substr(htmlspecialchars(trim("С сайта By Mind [тел+почта]")), 0, 1000); 
      //  $_POST['mess'] =  substr((trim($_POST['mess'])), 0, 1000000); 
        $_POST['phone'] =  substr(htmlspecialchars(trim($_POST['phone'])), 0, 60);
        $_POST['mail'] =  substr(htmlspecialchars(trim($_POST['mail'])), 0, 60);
        
   
        $mess = '<table style=""><tr><td style="width:200px;">Телефон:</td> <td><strong>'.$_POST['phone'].'</strong></td></tr><tr><td style="width:200px;">Почта:</td> <td><strong>'.$_POST['mail'].'</strong></td></tr></table>';

        // $to - кому отправляем 
       // $to = '"vsevolodpetrowsky@gmail.com" <vsevolodpetrowsky@gmail.com>'; 
$to = 'studio@bymind.ru'; 
//$to = 'keshapudelev@yandex.ru'; 
        // $from - от кого 
$from='back@bymind.ru'; 

        mail($to, $title, $mess, "Content-type: text/html; charset=utf-8\r\nFrom:".$from); 
        
echo "Спасибо! Мы с Вами свяжемся. =)";
            }


 
} 

?>
