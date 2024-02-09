alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 4;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

//se chute for igua numero secreto ---> você descobriu o número secreto(5)
if (chute == numeroSecreto) {
    alert(`Você descobriu o Número secreto ${numeroSecreto}`);
    //console.log('você descobriu o número secreto(5)');

    // se nao for igual numero secreto
} else {
    alert('Você errou');
    //console.log('vc errou');
}









