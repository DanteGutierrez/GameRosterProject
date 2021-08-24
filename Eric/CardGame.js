const newGameButton = document.getElementById("newgamebutton");
const hitButton = document.getElementById("hitbutton");
const standButton = document.getElementById("standbutton");
var board = document.getElementById("messageboard");
const playerCards = document.getElementById("playercards");
const playerScore = document.getElementById("playerscore");
const dealerCards = document.getElementById("dealercards");
const dealerScore = document.getElementById("dealerscore");
const playerCardsDiv = document.getElementById("test");
const dealerCardDiv = document.getElementById("dealerTest");
const main_menu_btn = document.getElementById("main_menu_btn");
var hitFinished = false;

var totalCardsPulled = 0;

var player = {
    cards: [],
    score: 0,
};
var dealer = {
    cards: [],
    score: 0
};
var deck = {
    totalDeck: [],
    makeDeck: function () {
        var suitArray, rankArray, s, r;
        suitArray = ["clubs", "diamonds", "hearts", "spades"];
        rankArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        for (s = 0; s < suitArray.length; s += 1) {
            for (r = 0; r < rankArray.length; r += 1) {
                this.totalDeck[s * 13 + r] = {
                    rank: rankArray[r],
                    suit: suitArray[s]
                };
            }
        }
    },
    shuffleDeck: function () {
        var temp, i, rnd;
        for (i = 0; i < this.totalDeck.length; i += 1) {
            rnd = Math.floor(Math.random() * this.totalDeck.length);
            temp = this.totalDeck[i];
            this.totalDeck[i] = this.totalDeck[rnd];
            this.totalDeck[rnd] = temp;
        }
    }
};
deck.makeDeck();
deck.shuffleDeck();
console.log(deck.totalDeck);

function newGame() {
    reset();
    board.innerHTML = " ";
    if (hitButton.disabled == true && standButton.disabled == true) {
        hitButton.disabled = false;
        standButton.disabled = false;
    }
    newGameButton.disabled = true;
    hit();
    hit();
    dealerDraw();
}
function hit() {
    player.cards.push(deck.totalDeck[totalCardsPulled])
    player.score = checkHandValue(player.cards);
    console.log(player.cards);
    if (player.score >= 21) {
        checkWinner();
    }
    playerCards.innerHTML = "Your Cards: " + JSON.stringify(player.cards);
    playerScore.innerHTML = "Your Score: " + player.score;
    totalCardsPulled += 1;
    turnToImagePlayer(JSON.stringify(player.cards));
}
function dealerDraw() {
    dealer.cards.push(deck.totalDeck[totalCardsPulled])
    dealer.score = checkHandValue(dealer.cards);
    dealerCards.innerHTML = "Dealers Cards: " + JSON.stringify(dealer.cards);
    dealerScore.innerHTML = "Dealers Score: " + dealer.score;
    totalCardsPulled += 1;
    turnToImageDealer(JSON.stringify(dealer.cards));
}
function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function turnToImagePlayer(hand) {
    for (let i = 0; i < hand.length; i++) {
        var suite = capitalizeFirstLetter(player.cards[i].suit);
        if (playerCardsDiv.innerHTML == "") {
            playerCardsDiv.innerHTML = '<img src="./Cards/'+ player.cards[i].rank + 'Of' + suite + '.png">';
            break
        }
        else{
            playerCardsDiv.innerHTML = "";
            for (let i = 0; i < hand.length; i++) {
                var suite = capitalizeFirstLetter(player.cards[i].suit);
                playerCardsDiv.innerHTML += '<img src="./Cards/'+ player.cards[i].rank + 'Of' + suite + '.png">';   
            }   
        }   
    }
}
function turnToImageDealer(hand) {
    for (let i = 0; i < hand.length; i++) {
        var suite = capitalizeFirstLetter(dealer.cards[i].suit);
        if (dealerCardDiv.innerHTML == "") {
            dealerCardDiv.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + suite + '.png">';
            break
        }
        else{
            dealerCardDiv.innerHTML = "";
            for (let i = 0; i < hand.length; i++) {
                var suite = capitalizeFirstLetter(dealer.cards[i].suit);
                dealerCardDiv.innerHTML += '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + suite + '.png">';   
            }   
        }   
    }
}
function stand() {
    newGameButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
    while (dealer.score <= 17) {
        dealerDraw();
    }
    checkWinner();
}
function checkHandValue(hand) {
    var cards = [];
    var totalPoints = 0;
    var aces = 0;
    cards = hand;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].rank == "J" || cards[i].rank == "Q" || cards[i].rank == "K") {
            totalPoints += 10;
        }else if (cards[i].rank == "A") {
            totalPoints +=11
            aces += 1;
        }else {
            totalPoints += cards[i].rank;
        }
    }
    while (aces > 0 && totalPoints > 21)
    {
        totalPoints -= 10;
        aces = 0;
    }
    return totalPoints;
}
function gameEnd(){
    deck.makeDeck();
    deck.shuffleDeck();
    newGameButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
}
function reset() {
    totalCardsPulled = 0;
    player.cards = [];
    player.score = 0;
    dealer.cards = [];
    dealer.score = 0;
    deck.makeDeck();
    deck.shuffleDeck();
    newGameButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
}
function checkWinner() {
    if (player.score == 21) {
        board.innerHTML = "You hit 21, you win! click Deal to keep playing";
        gameEnd();
    }
    
    else if (player.score > 21) {
        board.innerHTML = "You went over 21, Dealer wins! click Deal to keep playing";
        gameEnd();
    }
    else if (dealer.score > 21) {
        board.innerHTML = "Dealer went over 21! You win! click Deal to keep playing";
        gameEnd();
    }
    else if (player.score > dealer.score && player.score <= 21) {
        board.innerHTML = "You win! You beat the dealer! click Deal to keep playing";
        gameEnd();
    }
    else if (player.score < dealer.score && dealer.score <= 21) {
        board.innerHTML = "You lost. Dealer had the higher score! click Deal to keep playing";
        gameEnd();
    }
    else if (player.score == dealer.score && dealer.score <= 21) {
        board.innerHTML = "You tied! click Deal to keep playing";
        gameEnd();
    }
}
let onClick = evt =>
{
    window.location.replace("casino.html");
}
main_menu_btn.addEventListener("click", onClick);