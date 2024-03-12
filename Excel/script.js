function adicionarItem() {
    var nome = document.getElementById('nome').value;
    var valor = document.getElementById('valor').value;
    var quantidade = document.getElementById('quantidade').value;

    if (!nome || !valor || !quantidade) {
        alert('Preencha todos os campos');
        return;
    }

    var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulasNome = novaLinha.insertCell(0);
    var celulasValor = novaLinha.insertCell(1);
    var celulasQuantidade = novaLinha.insertCell(2);

    celulasNome.innerHTML = nome;
    celulasValor.innerHTML = valor;
    celulasQuantidade.innerHTML = quantidade;

    document.getElementById('nome').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('quantidade').value = '';
}

function exportarParaExcel() {
    var tabela = document.getElementById('tabela');
    var nomeArquivo = 'tabela.xlsx';
    var wb = XLSX.utils.table_to_book(tabela, {sheet: 'Tabela'});
    XLSX.writeFile(wb, nomeArquivo);

}