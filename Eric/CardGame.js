const newGameButton = document.getElementById("newgamebutton");
const hitButton = document.getElementById("hitbutton");
const standButton = document.getElementById("standbutton");
var board = document.getElementById("messageboard");
const playerCards = document.getElementById("playercards");
const playerScore = document.getElementById("playerscore");
const dealerCards = document.getElementById("dealercards");
const dealerScore = document.getElementById("dealerscore");
const main_menu_btn = document.getElementById("main_menu_btn");
let playercard1 = document.getElementById("playerCard1");
let playercard2 = document.getElementById("playerCard2");
let playercard3 = document.getElementById("playerCard3");
let playercard4 = document.getElementById("playerCard4");
let playercard5 = document.getElementById("playerCard5");
let dealercard1 = document.getElementById("dealerCard1");
let dealercard2 = document.getElementById("dealerCard2");
let dealercard3 = document.getElementById("dealerCard3");
let dealercard4 = document.getElementById("dealerCard4");
let dealercard5 = document.getElementById("dealerCard5");
let dealercard6 = document.getElementById("dealerCard6");
let dealercard7 = document.getElementById("dealerCard7");
let dealercard8 = document.getElementById("dealerCard8");
let hitFinished = false;
let totalCardsPulled = 0;

var player = {
    cards: [],
    score: 0,
    money: 1000
};
var dealer = {
    cards: [],
    score: 0
};
var deck = {
    totalDeck: [],
    makeDeck: function () {
        var suitArray, rankArray, s, r;
        suitArray = ["Clubs", "Diamonds", "Hearts", "Spades"];
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

document.getElementById("player-money").innerHTML = "Your money: $" + player.money;

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
    playerCards.innerHTML = "Your Cards: "
    showPlayerCards(player.cards)
    playerScore.innerHTML = "Your Score: " + player.score;
    totalCardsPulled += 1;
    if (player.score >= 21) {
        checkWinner();
    }else if (player.cards.length == 5) {
        checkWinner();
    }
}
function dealerDraw() {
    dealer.cards.push(deck.totalDeck[totalCardsPulled])
    dealer.score = checkHandValue(dealer.cards);
    dealerCards.innerHTML = "Dealers Cards: "
    showDealerCards(dealer.cards);
    dealerScore.innerHTML = "Dealers Score: " + dealer.score;
    totalCardsPulled += 1;
    if (dealer.score >= 21) {
        checkWinner();
    }
}
function stand() {
    newGameButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
    while (dealer.score <= 17 && dealer.cards.length <= 4) {
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
        aces--;
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
    playercard1.innerHTML = "";
    playercard2.innerHTML = "";
    playercard3.innerHTML = "";
    playercard4.innerHTML = "";
    playercard5.innerHTML = "";
    dealercard1.innerHTML = "";
    dealercard2.innerHTML = "";
    dealercard3.innerHTML = "";
    dealercard4.innerHTML = "";
    dealercard5.innerHTML = "";
    deck.makeDeck();
    deck.shuffleDeck();
    newGameButton.disabled = false;
    hitButton.disabled = true;
    standButton.disabled = true;
}
function checkWinner() {
    if (player.cards.length == 5 && player.score <= 21) {
        board.innerHTML = "You win, you have reached a 5 card charlie. click 'Start New Game' to keep playing";
        bet("win")
        document.getElementById("player-money").innerHTML = "Your money: $" + player.money;
        gameEnd();
    }
    else if (player.score == 21) {
        board.innerHTML = "You hit 21, you win! click 'Start New Game' to keep playing";
        bet("win")
        document.getElementById("player-money").innerHTML = "Your money: $" + player.money;
        gameEnd();
    }
    
    else if (player.score > 21) {
        board.innerHTML = "You went over 21, Dealer wins! click 'Start New Game' to keep playing";
        bet("lose")
        document.getElementById("player-money").innerHTML = "Your money: $" + player.money;
        gameEnd();
    }
    else if (dealer.score > 21) {
        board.innerHTML = "Dealer went over 21! You win! click 'Start New Game' to keep playing";
        bet("win")
        document.getElementById("player-money").innerHTML = "Your money: $" + player.money;
        gameEnd();
    }
    else if (player.score > dealer.score && player.score <= 21) {
        board.innerHTML = "You win! You beat the dealer! click 'Start New Game' to keep playing";
        bet("win")
        document.getElementById("player-money").innerHTML = "Your money: $" + player.money;
        gameEnd();
    }
    else if (player.score < dealer.score && dealer.score <= 21) {
        board.innerHTML = "You lost. Dealer had the higher score! click 'Start New Game' to keep playing";
        bet("lose")
        document.getElementById("player-money").innerHTML = "Your money: $" + player.money;
        gameEnd();
    }
    else if (player.score == dealer.score && dealer.score <= 21) {
        board.innerHTML = "You tied! click 'Start New Game' to keep playing";
        bet("tie")
        document.getElementById("player-money").innerHTML = "Your money: $" + player.money;
        gameEnd();
    }
}
function showPlayerCards(hand) {
    for (let i = 0; i < hand.length; i++) {
        switch (i) {
            case 0:
                playercard1.innerHTML = '<img src="./Cards/'+ player.cards[i].rank + 'Of' + player.cards[i].suit + '.png">';
                break;
            case 1:
                playercard2.innerHTML = '<img src="./Cards/'+ player.cards[i].rank + 'Of' + player.cards[i].suit + '.png">';
                break;
            case 2:
                playercard3.innerHTML = '<img src="./Cards/'+ player.cards[i].rank + 'Of' + player.cards[i].suit + '.png">';
                break;
            case 3:
                playercard4.innerHTML = '<img src="./Cards/'+ player.cards[i].rank + 'Of' + player.cards[i].suit + '.png">';
                break;
            case 4:
                playercard5.innerHTML = '<img src="./Cards/'+ player.cards[i].rank + 'Of' + player.cards[i].suit + '.png">';
                break;
            default:
                break;
        }
    }
}
function showDealerCards(hand) {
    for (let i = 0; i < hand.length; i++) {
        switch (i) {
            case 0:
                dealercard1.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            case 1:
                dealercard2.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            case 2:
                dealercard3.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            case 3:
                dealercard4.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            case 4:
                dealercard5.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            case 5:
                dealercard5.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            case 6:
                dealercard5.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            case 7:
                dealercard5.innerHTML = '<img src="./Cards/'+ dealer.cards[i].rank + 'Of' + dealer.cards[i].suit + '.png">';
                break;
            default:
                break;
        }
    }
}
function bet(outcome) {
    let playerBet = document.getElementById("bet").valueAsNumber;
    if (outcome == "win") {
        player.money = player.money + playerBet;
    }else if (outcome == "lose") {
        player.money = player.money - playerBet;
    }else{
        player.money = player.money;
    }
}
let onClick = evt =>
{
    window.location.replace("casino.html");
}
main_menu_btn.addEventListener("click", onClick);