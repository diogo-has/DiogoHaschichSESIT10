<?php
    $user = "pedro";
    $pass = "senha123";
    $userInput = $_GET['user'];
    $passInput = $_GET['pass'];
    echo ($userInput == $user && $passInput == $pass) ? "Sucesso" : "Falha";
?>