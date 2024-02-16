var mensagemGlobal;

function confZap() {
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("mensagem").value

    mensagemGlobal = `Nome: ${nome}\n\nEndereço de Email: ${email}\n\n${mensagem}`;
    
    document.getElementById("zapTxt").textContent = mensagemGlobal;
}

function enviar() {
    var tel = "5541998297963";

    var linkZap = "https://wa.me/" +
        tel +
        "?text= " +
        window.encodeURIComponent(mensagemGlobal);

    window.open(linkZap, "_blank");
}