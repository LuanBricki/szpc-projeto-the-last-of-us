/* 

    Objetivo - quando clicarmos no botão temos que mostrar imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - passo 2 - dar um jeito de identificar o clique do usuário no botão

    - passo 3 - desmarcar o botão selecionado anterior

    - passo 4 - marcar o botão clicando como se estivesse selecionada

    - passo 5 - esconder a imagem ativa de fundo anterior

    - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado

*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

/* const botao1 = document.getElementById('botao1')
    botao1.addEventListener('click', () => {
    console.log('clicou no botao1');
 }) */


// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // - passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botão clicando como se estivesse selecionada
        selecionarBotaoCarossel(botao);

        // - passo 5 - esconder a imagem ativa de fundo anterior
        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        monstrarImagemDeFundo(indice);  
    })
})

function monstrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarossel(botao) {
    newFunction(botao);
}

function newFunction(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtivaDeFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
