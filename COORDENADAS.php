<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Calcular Distancia</title>
</head>
<body>
    <h2>Calcular la Distancia entre Dos Coordenadas</h2>
    <form action="" method="POST">
        <label>Latitud del Punto 1:</label>
        <input type="text" name="lat1" required><br><br>

        <label>Longitud del Punto 1:</label>
        <input type="text" name="lon1" required><br><br>

        <label>Latitud del Punto 2:</label>
        <input type="text" name="lat2" required><br><br>

        <label>Longitud del Punto 2:</label>
        <input type="text" name="lon2" required><br><br>

        <input type="submit" value="Calcular Distancia">
    </form>
<?php
function calcularDistancia($lat1, $lon1, $lat2, $lon2) 
{
    $radioTierra = 6371;

    $lat1 = deg2rad($lat1);
    $lon1 = deg2rad($lon1);
    $lat2 = deg2rad($lat2);
    $lon2 = deg2rad($lon2);

    $difLat = $lat2 - $lat1;
    $difLon = $lon2 - $lon1;

    $a = sin($difLat / 2) * sin($difLat / 2) +
         cos($lat1) * cos($lat2) *
         sin($difLon / 2) * sin($difLon / 2);
    $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

    $distancia = $radioTierra * $c;

    return $distancia;
}

$lat1 = 19.4326; 
$lon1 = -99.1332;
$lat2 = 34.0522; 
$lon2 = -118.2437;

echo "La distancia es: " . calcularDistancia($lat1, $lon1, $lat2, $lon2) . " km";
?>
</body>
</html>