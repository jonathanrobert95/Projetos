
const rock = document.getElementById("Pedra"); // chamando o botão Pedra
const paper = document.getElementById("Papel"); // chamando o botão Papel
const scissors = document.getElementById("Tesoura"); // chamando o botão Tesoura
const result = document.getElementById("result");   // chamando o elemento de resultado
const userScoreElement = document.querySelector(".your-score span");        // chamando o elemento de pontuação do usuário
const machineScoreElement = document.querySelector(".machine-score span"); // chamando o elemento de pontuação da máquina
const reset = document.querySelector(".Reset");

const choices = ["Pedra", "Papel", "Tesoura"]; // opções do jogo

let userScore = 0; // pontuação do usuário
let machineScore = 0; // pontuação da máquina

function playGame(userChoice) { // função principal do jogo
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // escolha aleatória do computador

    if (userChoice === computerChoice) { // empate
        result.textContent = `Empate! Você e o computador escolheram ${userChoice}.`; // mensagem de empate
    } else if ( // condições de vitória do usuário
        (userChoice === "Pedra" && computerChoice === "Tesoura") || // Pedra vence Tesoura
        (userChoice === "Papel" && computerChoice === "Pedra") || // Papel vence Pedra
        (userChoice === "Tesoura" && computerChoice === "Papel") // Tesoura vence Papel
    ) {
        userScore++; // incrementa a pontuação do usuário
        result.textContent = `Você ganhou! ${userChoice} vence ${computerChoice}.`; // mensagem de vitória
    } else { // condições de vitória do computador
        machineScore++; // incrementa a pontuação da máquina
        result.textContent = `Você perdeu! ${computerChoice} vence ${userChoice}.`; // mensagem de derrota

    }
    userScoreElement.textContent = userScore; // reseta a pontuação do player
    machineScoreElement.textContent = machineScore; // reseta a pontuação da maquina
    userScoreElement.textContent = userScore; // atualiza a pontuação do usuário na tela
    machineScoreElement.textContent = machineScore; // atualiza a pontuação da máquina na tela
}


function Reset() { // reseta o jogo
    userScore = 0
    machineScore = 0
    userScoreElement.textContent = userScore; // reseta pontuação do usuário
    machineScoreElement.textContent = machineScore; // reseta pontuação da maquina
}


rock.addEventListener("click", () => playGame("Pedra")); // adiciona evento de clique ao botão Pedra
paper.addEventListener("click", () => playGame("Papel")); // adiciona evento de clique ao botão Papel
scissors.addEventListener("click", () => playGame("Tesoura")); // adiciona evento de clique ao botão Tesoura
reset.addEventListener("click", () => Reset()); // adiciona evento de clique no botão reiniciar jogo