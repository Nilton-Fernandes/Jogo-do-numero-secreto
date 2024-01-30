let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecerto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function mensgemInicial(){
    exibirTextoNaTela('h1', ' Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
    
}
mensgemInicial();
//click do botão, criar uma função
function verificarChute(){
    let chute = document.querySelector('input').value;
    //exibir na tela
    if( chute == numeroSecerto){
        exibirTextoNaTela('h1', ' Parabéns!!.');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `voce descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if ( chute > numeroSecerto){
        exibirTextoNaTela('p', ' o número secreto é menor que: ' + chute);
    }else {
        exibirTextoNaTela('p', ' o número secreto é maior que: '+ chute);
    }
    tentativas ++;
    limparCampo();
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
       
    }
}
function limparCampo(){
   chute = document.querySelector('input');
    chute.value = ' ';

}
function reiniciarJogo(){
    numeroSecerto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensgemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);

}

