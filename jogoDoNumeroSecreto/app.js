// Autores: Franciéllen Sousa e Escola de Tecnologia Alura
//inicialização de variavéis e funções
let numeroLimite = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
MsgInicial()

//função para exibir textos na tela
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
    
}

//função para exibir mensagem inicial do jogo
function MsgInicial(){    
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

//função que verifica o número adicionado pelo usuário 
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        exibirTextoNaTela('p', `Você acertou o número secreto ${chute}, na ${tentativas}ª tentativa.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        let menorMaior = chute > numeroSecreto ? 'menor' : 'maior';
            exibirTextoNaTela('p', `O número secreto é ${menorMaior} que ${chute}`);   
    }
    tentativas++;
    limparCampo()
}

//função para gerar número aleátorio e verificar números já gerados
function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qntElementosLista = listaDeNumerosSorteados.length;

    if (qntElementosLista == numeroLimite ){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

//função para limpar o input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value =  "";
}

//função para reiniciar o jogo
function reiniciar(){
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparCampo()
    MsgInicial();
}