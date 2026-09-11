
/*
Ao carregar a página, o JavaScript deve:
    Gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável.
    Definir o número máximo de tentativas (ex: 10).
    Inicializar o contador de tentativas.

Ao clicar no botão "Chutar", o JavaScript deve:
    Capturar o valor inserido no input (palpite do jogador).
    Validar se o palpite é um número válido entre 1 e 100.

Comparar o palpite com o número secreto e exibir uma mensagem:
    "Você acertou!" (e o jogo termina).
    "O número secreto é maior" (e o jogador continua tentando).
    "O número secreto é menor" (e o jogador continua tentando).

Decrementar o contador de tentativas.
Exibir o número de tentativas restantes.
Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".

Dicas:
    Use a função Math.random() para gerar o número aleatório.
    Use parseInt() para converter o valor do input em um número inteiro.
    Use estruturas de controle if, else if e else para a lógica do jogo.
    Use loops while ou for para controlar as tentativas do jogador.
*/

// Criação de número aleatório e número de tentativas
const numsecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 10
let jogoFinalizado = false

// Para atualizar as tentativas restantes
function atualizarTentativas(){
    document.getElementById('tentativas').textContent = `Você tem ${tentativas} tentativas`
}

function chutar(){
    if (jogoFinalizado) {
        return
    }

    const campoChute = document.getElementById('chute')
    const palpite = Number(campoChute.value)
    const dicas = document.getElementById('dicas')
    const resposta = document.getElementById('resposta')

    // Verificação do número digitado
    if(isNaN(palpite) || palpite < 1 || palpite > 100){
        alert("Por favor, insira um número entre 1 e 100");
        return;
    }

    tentativas = tentativas - 1
    atualizarTentativas()

    if (palpite === numsecreto) {
        resposta.textContent = 'Parabéns, Você acertou o número secreto!';
        finalizarJogo(campoChute)

    } else if (palpite < numsecreto) {
        dicas.textContent = 'O número secreto é maior';

        verificarFimDeJogo(dicas, campoChute)
    } else {
        dicas.textContent = 'O número secreto é menor';
        verificarFimDeJogo(dicas, campoChute)
    }
}

function verificarFimDeJogo(dicas, campoChute) {
    if (tentativas === 0) {
        dicas.textContent = `Você perdeu! O número secreto era ${numsecreto}`
        finalizarJogo(campoChute)
    }
}

function finalizarJogo(campoChute) {
    jogoFinalizado = true
    campoChute.disabled = true
    document.getElementById('botao').disabled = true
}



