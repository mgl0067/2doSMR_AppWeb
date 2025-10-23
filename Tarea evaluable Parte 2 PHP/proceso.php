<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nombre=($_GET['nombre']);
    $apellidos=($_GET["apellidos"]);
    $edad=intval($_GET["edad"]);
   
   
   function comprobarEdad($nombre, $apellidos, $edad) {
    
if($edad>=18){
    echo "Hola $nombre $apellidos tienes $edad años y eres mayor de edad.";
}
else{
    echo "Hola $nombre $apellidos, tienes $edad años y eres menor de edad.";
}
 
    
   }
comprobarEdad($nombre, $apellidos, $edad);
?>
</body>
</html>