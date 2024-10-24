<?php
    $n1 = $_GET['n1'];
    $n2 = $_GET['n2'];
    $n3 = $_GET['n3'];
    $n4 = $_GET['n4'];
    $n5 = $_GET['n5'];
    $avg = ($n1 + $n2 + $n3 + $n4 + $n5) / 5;
    echo match (true) {
        $avg < 60 => "Nota F",
        $avg < 70 => "Nota D",
        $avg < 80 => "Nota C",
        $avg < 90 => "Nota B",
        $avg < 100 => "Nota A"
    };
?>