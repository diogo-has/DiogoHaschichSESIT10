function contar() {
    const num = parseInt($("#numeroInput").val());
    console.log(num);
    if (isNaN(num)) {
        $('#result').text('Por favor, informe um número válido');
        return;
    }

    var resultadoStr = ''
    if (num >= 100000) {
        $('#result').text('Número alto demais');
        return;
    }
    
    for (var i = 1; i <= num; i++) {
        resultadoStr += i + "<br>"
    }
    $('#result').html(resultadoStr)
}