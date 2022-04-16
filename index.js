// Variables
let cards = []
let sum = 0
let win = 50
let lose = 30
let message = ""
let blackjack = false 
let isAlive = false
let cardsEl = document.getElementById("cards-el")
let prompt = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


let player = {
    name: "Saksham",
    chips: 145
}

let playerEl = document.getElementById("name")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*12) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    if(player.chips > 0){
        renderGame()
    } else {
        prompt.textContent = "Sorry you don't have enough chips. Come Back Again!"
        isAlive = false
    }
    
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }
    

    if(sum <= 20){
        message = "Do You Want A New Card?"
        blackjack = false
        prompt.textContent = message
    } else if(sum === 21) {
        message = "Good Job You Won BlackJack!"
        player.chips += win
        playerEl.textContent = player.name + ": $" + player.chips
        blackjack = true 
        prompt.textContent = message
        
    } else {
        message = "Sorry You Lost The Game :( "
        player.chips -= lose
        playerEl.textContent = player.name + ": $" + player.chips
        blackjack = false
        isAlive = false
        prompt.textContent = message
    }
    sumEl.textContent = "Sum: " + sum
}

function newCard(){
    if(isAlive === true && blackjack === false){
        let newCards = getRandomCard()
        cards.push(newCards)
        sum += newCards
        renderGame()
    }
    
}


