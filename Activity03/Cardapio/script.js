
function muda_cardapio(n) {
    document.querySelectorAll('cardapios').forEach(cardapio => {
        cardapio.classList.add('hidden');
    });

    console.log(n);
    
    switch (n) {
        case 0:
            document.querySelector('#pratos').classList.remove('hidden');
            break;
        case 1:
            document.querySelector('#sobremesa').classList.remove('hidden');
            break;
        default:
            break;
    }
}