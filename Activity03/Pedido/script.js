function comecar() {
    var nome = document.getElementById('exampleFormControlInput1').value;
    show(nome);
}

function show(nome) {
    document.getElementById('nomePrint').textContent = nome;
    var div = document.getElementById('selects-div');
    if (nome && nome.trim() !== '') {
        div.style.display = 'flex';
        document.getElementById('exampleFormControlInput1').style.background = 'none';

    } else {
        document.getElementById('error').style.display = 'flex';

    }
}

function fechar() {
    document.getElementById('error').style.display = 'none';
    document.getElementById('exampleFormControlInput1').style.background = 'lightpink';
}

function calcularTotal() {
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");

    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;
    var total = 0;

    switch (selectPratos.value) {
        case 'Pao de Queijo':
            prato = 5.00;
            total += prato;

            break;
        case 'Misto Quente':
            prato = 7.50;
            total += prato;

            break;
        case 'Omelete':
            prato = 12.90;
            total += prato;

            break;
    }

    switch (selectBebidas.value) {
        case 'Cafe':
            bebida = 4.00;
            total += bebida;

            break;
        case 'Suco de Laranja':
            bebida = 6.00;
            total += bebida;

            break;
        case 'Agua Mineral':
            bebida = 2.50;
            total += bebida;

            break;
    }

    switch (selectSobremesas.value) {
        case 'Bolo':
            sobremesa = 10.00;
            total += sobremesa;

            break;
        case 'Torta de Limao':
            sobremesa = 8.00;
            total += sobremesa;

            break;
        case 'Brownie com Sorvete':
            sobremesa = 12.00;
            total += sobremesa;

            break;
    }

    resultadoSpan.textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById('prato-pronto').innerHTML = prato.toFixed(2);
    document.getElementById('sobremesa-pronto').innerHTML = sobremesa.toFixed(2);
    document.getElementById('bebida-pronto').innerHTML = bebida.toFixed(2);
}

function limpar() {
    document.getElementById('selects-div').style.display = 'none';
    document.getElementById('exampleFormControlInput1').value = '';
    document.getElementById("resultado").textContent = '';
    document.getElementById('selectPrato').value = 'Selecione um prato';
    document.getElementById('selectSobremesa').value = 'Selecione uma sobremesa';
    document.getElementById('selectBebida').value = 'Selecione uma bebida';
    document.getElementById('prato-pronto').innerHTML = '';
    document.getElementById('sobremesa-pronto').innerHTML = '';
    document.getElementById('bebida-pronto').innerHTML = '';
}/