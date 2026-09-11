
// Criação de número aleatório e número de tentativas
const numsecreto = Math.floor(Math.random() * 100) + 1
let tentativas = 10
let jogoFinalizado = false

// Para atualizar as tentativas restantes
function atualizarTentativas(){
    document.getElementById('tentativas').textContent = `Você tem ${tentativas} tentativas`
}

// Limpa o campo e coloca o cursor de volta nele
function limparFocoInput(campoChute) {
    campoChute.value = ""          // Limpa o que foi digitado
    campoChute.focus()             // Coloca o cursor de volta no campo automaticamente
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

        limparFocoInput(campoChute)
    } else {
        dicas.textContent = 'O número secreto é menor';
        verificarFimDeJogo(dicas, campoChute)

        limparFocoInput(campoChute)
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



