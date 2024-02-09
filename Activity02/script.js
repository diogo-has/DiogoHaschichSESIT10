var nomeGlobal;
var mensagemGlobal;

function confZap() {
    var nome = document.getElementById("nome").value
    var mensagem = document.getElementById("mensagem").value

    console.log(nome);
    console.log(mensagem);

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
}

function enviar() {
    var tel = "5541998297963";

    var linkZap = "https://wa.me/" +
    tel + "?text=Nome: " + nomeGlobal +
    " - " + mensagemGlobal;

    window.open(linkZap, "_blank");
}