<?php
    error_reporting(E_ERROR | E_PARSE);

    $pedido = array (
        array("Carne", $_GET['carne'], 19.99),
        array("Pão", $_GET['pao'], 10.99),
        array("Macarrão", $_GET['macarrao'], 29.99),
        array("Feijão", $_GET['feijao'], 10.03)
    );

    $recibo = "";
    $total = 0.0;
    foreach ($pedido as &$item) {
        $recibo = $item[1] ? "$recibo$item[0]: R$$item[2]<br>" : "$recibo";
        $total += $item[1] ? $item[2] : 0;
    }
    $desc = $_GET['desc'];

    echo $recibo;
    echo "Desconto: ", (1 - $desc) * 100, "% (R$", round($total * (1 - $desc), 2), ")<br>";
    
    $total *= $desc;
    echo "Total: R$", round($total, 2);
?>