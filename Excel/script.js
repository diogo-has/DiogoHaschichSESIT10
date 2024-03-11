function adicionarItem() {
    var nome = document.getElementById('nome').value;
    var valor = document.getElementById('valor').value;
    var quantidade = document.getElementById('quantidade').value;

    if (!nome || !valor || !quantidade) {
        alert('Preencha todos os campos');
        return;
    }

    var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
}