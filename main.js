const result = document.getElementById('win')
const playerImg = document.getElementById('player')
const botImg = document.getElementById('bot')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const options = ['rock', 'paper', 'scissors']


let playerOption

rock.addEventListener('click', () => {
    playerOption = options[0]
    playerImg =
        gameLoop()
})

paper.addEventListener('click', () => {
    playerOption = options[1]
    gameLoop()
})

scissors.addEventListener('click', () => {
    playerOption = options[2]
    gameLoop()
})

function gameLoop() {
    const botOption = options[Math.floor(Math.random() * options.length)]

    winner(playerOption, botOption)
}

function winner(player, bot) {
    if (player === bot) {
        result.innerText = 'Empate'
    } else if (
        (player === 'rock' && bot === 'scissors') ||
        (player === 'paper' && bot === 'rock') ||
        (player === 'scissors' && bot === 'paper')
    ) {
        result.innerText = 'Jogador venceu'
    } else {
        result.innerText = 'Bot venceu'
    }
}