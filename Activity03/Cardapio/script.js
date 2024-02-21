
function muda_cardapio(n) {
    var cardapios = document.querySelectorAll('.cardapio') 
    cardapios.forEach(cardapio => {
        cardapio.classList.add('hidden');
        console.log(cardapio);
    });

    console.log(cardapios);
    console.log(cardapios[n])
    cardapios[n].classList.remove('hidden');
    
}