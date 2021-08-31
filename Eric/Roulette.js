const main_menu_btn = document.getElementById("main_menu_btn");
const result = document.getElementById("result");
const betSingle = document.getElementById("singleNumber");
const betEven = document.getElementById("evenNumber");
const betOdd = document.getElementById("oddNumber");
const betFirst19 = document.getElementById("first19Numbers");
const betlast18 = document.getElementById("last18Numbers");
const betRed = document.getElementById("redNumbers");
const betBlack = document.getElementById("blackNumbers");
var board = document.getElementById("messageboard");
var winningNumber;
var winningColor;
var money = 1000;
document.getElementById("player-money").innerHTML = "Your money: $" + money;

function singleNumberBet() {
  var betNumber = 0;
  const minNumber = 0;
  const maxNumber = 36;
  betSingle.disabled = true;
  betEven.disabled = true;
  betOdd.disabled = true;
  betFirst19.disabled = true;
  betlast18.disabled = true;
  betRed.disabled = true;
  betBlack.disabled = true;
  do {
    betNumber = prompt("which number would you like to guess (0-36)?");
  } while (betNumber < minNumber || betNumber > maxNumber);

  console.log(betNumber);

  (function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease ';
      back.style.transition = 'all 14s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      if (actualDeg>=0 && actualDeg<10 ){
        result.textContent="26 BLACK";
        winningNumber = 26;
        winningColor = "black";
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
        winningColor = "red";
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
        winningColor = "black";
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
        winningColor = "red";
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
        winningColor = "black";
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
        winningColor = "red";
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
        winningColor = "black";
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
        winningColor = "red";
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
        winningColor = "black";
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
        winningColor = "red";
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
        winningColor = "black";
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
        winningColor = "red";
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
        winningColor = "black";
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
        winningColor = "red";
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
        winningColor = "black";
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
        winningColor = "red";
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
        winningColor = "black";
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
        winningColor = "red";
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
        winningColor = "black";
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
        winningColor = "red";
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
        winningColor = "black";
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
       winningColor = "red";
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
        winningColor = "black";
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
        winningColor = "red";
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
        winningColor = "black";
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
        winningColor = "black";
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
        winningColor = "red";
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
        winningColor = "black";
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
        winningColor = "red";
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
        winningColor = "black";
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
        winningColor = "black";
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
        winningColor = "red";
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
        winningColor = "black";
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
        winningColor = "red";
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
        winningColor = "green";
      }
      console.log(winningNumber);
      if (betNumber == winningNumber) {
        board.innerHTML = "Good Job, you guessed correctly.";
        bet("win");
      }else{
        board.innerHTML = "Bet Lost, you did not guess correctly.";
        bet("lose");
      }
      document.getElementById("player-money").innerHTML = "Your money: $" + money;
      betSingle.disabled = false;
      betEven.disabled = false;
      betOdd.disabled = false;
      betFirst19.disabled = false;
      betlast18.disabled = false;
      betRed.disabled = false;
      betBlack.disabled = false;
    }
    );
})();
}
function evenNumberBet() {
  betSingle.disabled = true;
  betEven.disabled = true;
  betOdd.disabled = true;
  betFirst19.disabled = true;
  betlast18.disabled = true;
  betRed.disabled = true;
  betBlack.disabled = true;

  (function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease ';
      back.style.transition = 'all 14s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      if (actualDeg>=0 && actualDeg<10 ){
        result.textContent="26 BLACK";
        winningNumber = 26;
        winningColor = "black";
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
        winningColor = "red";
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
        winningColor = "black";
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
        winningColor = "red";
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
        winningColor = "black";
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
        winningColor = "red";
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
        winningColor = "black";
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
        winningColor = "red";
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
        winningColor = "black";
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
        winningColor = "red";
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
        winningColor = "black";
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
        winningColor = "red";
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
        winningColor = "black";
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
        winningColor = "red";
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
        winningColor = "black";
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
        winningColor = "red";
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
        winningColor = "black";
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
        winningColor = "red";
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
        winningColor = "black";
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
        winningColor = "red";
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
        winningColor = "black";
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
       winningColor = "red";
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
        winningColor = "black";
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
        winningColor = "red";
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
        winningColor = "black";
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
        winningColor = "black";
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
        winningColor = "red";
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
        winningColor = "black";
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
        winningColor = "red";
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
        winningColor = "black";
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
        winningColor = "black";
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
        winningColor = "red";
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
        winningColor = "black";
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
        winningColor = "red";
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
        winningColor = "green";
      }
      console.log(winningNumber);
      if (winningNumber % 2 == 0) {
        board.innerHTML = "Good Job, you guessed correctly.";
        bet("win");
      }else{
        board.innerHTML = "Bet Lost, you did not guess correctly.";
        bet("lose");
      }
      document.getElementById("player-money").innerHTML = "Your money: $" + money;
      betSingle.disabled = false;
      betEven.disabled = false;
      betOdd.disabled = false;
      betFirst19.disabled = false;
      betlast18.disabled = false;
      betRed.disabled = false;
      betBlack.disabled = false;
    }
    );
})();
}
function oddNumberBet() {
  betSingle.disabled = true;
  betEven.disabled = true;
  betOdd.disabled = true;
  betFirst19.disabled = true;
  betlast18.disabled = true;
  betRed.disabled = true;
  betBlack.disabled = true;

  (function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease ';
      back.style.transition = 'all 14s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      if (actualDeg>=0 && actualDeg<10 ){
        result.textContent="26 BLACK";
        winningNumber = 26;
        winningColor = "black";
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
        winningColor = "red";
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
        winningColor = "black";
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
        winningColor = "red";
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
        winningColor = "black";
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
        winningColor = "red";
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
        winningColor = "black";
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
        winningColor = "red";
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
        winningColor = "black";
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
        winningColor = "red";
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
        winningColor = "black";
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
        winningColor = "red";
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
        winningColor = "black";
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
        winningColor = "red";
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
        winningColor = "black";
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
        winningColor = "red";
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
        winningColor = "black";
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
        winningColor = "red";
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
        winningColor = "black";
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
        winningColor = "red";
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
        winningColor = "black";
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
       winningColor = "red";
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
        winningColor = "black";
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
        winningColor = "red";
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
        winningColor = "black";
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
        winningColor = "black";
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
        winningColor = "red";
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
        winningColor = "black";
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
        winningColor = "red";
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
        winningColor = "black";
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
        winningColor = "black";
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
        winningColor = "red";
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
        winningColor = "black";
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
        winningColor = "red";
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
        winningColor = "green";
      }
      console.log(winningNumber);
      if (winningNumber % 2 == 0) {
        board.innerHTML = "Bet Lost, you did not guess correctly.";
        bet("lose");
      }else{
        board.innerHTML = "Good Job, you guessed correctly.";
        bet("win");
      }
      document.getElementById("player-money").innerHTML = "Your money: $" + money;
      betSingle.disabled = false;
      betEven.disabled = false;
      betOdd.disabled = false;
      betFirst19.disabled = false;
      betlast18.disabled = false;
      betRed.disabled = false;
      betBlack.disabled = false;
    }
    );
})();
}
function first19NumberBet() {
  betSingle.disabled = true;
  betEven.disabled = true;
  betOdd.disabled = true;
  betFirst19.disabled = true;
  betlast18.disabled = true;
  betRed.disabled = true;
  betBlack.disabled = true;

  (function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease ';
      back.style.transition = 'all 14s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      if (actualDeg>=0 && actualDeg<10 ){
        result.textContent="26 BLACK";
        winningNumber = 26;
        winningColor = "black";
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
        winningColor = "red";
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
        winningColor = "black";
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
        winningColor = "red";
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
        winningColor = "black";
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
        winningColor = "red";
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
        winningColor = "black";
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
        winningColor = "red";
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
        winningColor = "black";
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
        winningColor = "red";
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
        winningColor = "black";
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
        winningColor = "red";
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
        winningColor = "black";
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
        winningColor = "red";
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
        winningColor = "black";
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
        winningColor = "red";
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
        winningColor = "black";
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
        winningColor = "red";
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
        winningColor = "black";
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
        winningColor = "red";
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
        winningColor = "black";
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
       winningColor = "red";
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
        winningColor = "black";
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
        winningColor = "red";
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
        winningColor = "black";
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
        winningColor = "black";
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
        winningColor = "red";
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
        winningColor = "black";
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
        winningColor = "red";
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
        winningColor = "black";
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
        winningColor = "black";
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
        winningColor = "red";
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
        winningColor = "black";
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
        winningColor = "red";
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
        winningColor = "green";
      }
      console.log(winningNumber);
      if (winningNumber == 0 || winningNumber == 1 || winningNumber == 2 || winningNumber == 3 || winningNumber == 4
        || winningNumber == 5 || winningNumber == 6 || winningNumber == 7 || winningNumber == 8 || winningNumber == 9 
        || winningNumber == 10 || winningNumber == 11 || winningNumber == 12 || winningNumber == 13 || winningNumber == 14
        || winningNumber == 15 || winningNumber == 16 || winningNumber == 17 || winningNumber == 18) {
        board.innerHTML = "Good Job, you guessed correctly.";
        bet("win");
      }else{
        board.innerHTML = "Bet Lost, you did not guess correctly.";
        bet("lose");
      }
      document.getElementById("player-money").innerHTML = "Your money: $" + money;
      betSingle.disabled = false;
      betEven.disabled = false;
      betOdd.disabled = false;
      betFirst19.disabled = false;
      betlast18.disabled = false;
      betRed.disabled = false;
      betBlack.disabled = false;
    }
    );
})();
}
function last18NumberBet() {
  betSingle.disabled = true;
  betEven.disabled = true;
  betOdd.disabled = true;
  betFirst19.disabled = true;
  betlast18.disabled = true;
  betRed.disabled = true;
  betBlack.disabled = true;

  (function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease ';
      back.style.transition = 'all 14s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      if (actualDeg>=0 && actualDeg<10 ){
        result.textContent="26 BLACK";
        winningNumber = 26;
        winningColor = "black";
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
        winningColor = "red";
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
        winningColor = "black";
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
        winningColor = "red";
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
        winningColor = "black";
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
        winningColor = "red";
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
        winningColor = "black";
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
        winningColor = "red";
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
        winningColor = "black";
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
        winningColor = "red";
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
        winningColor = "black";
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
        winningColor = "red";
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
        winningColor = "black";
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
        winningColor = "red";
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
        winningColor = "black";
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
        winningColor = "red";
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
        winningColor = "black";
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
        winningColor = "red";
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
        winningColor = "black";
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
        winningColor = "red";
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
        winningColor = "black";
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
       winningColor = "red";
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
        winningColor = "black";
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
        winningColor = "red";
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
        winningColor = "black";
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
        winningColor = "black";
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
        winningColor = "red";
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
        winningColor = "black";
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
        winningColor = "red";
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
        winningColor = "black";
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
        winningColor = "black";
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
        winningColor = "red";
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
        winningColor = "black";
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
        winningColor = "red";
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
        winningColor = "green";
      }
      console.log(winningNumber);
      if (winningNumber == 19 || winningNumber == 20 || winningNumber == 21 || winningNumber == 22 || winningNumber == 23
        || winningNumber == 24 || winningNumber == 25 || winningNumber == 26 || winningNumber == 27 || winningNumber == 28
        || winningNumber == 29 || winningNumber == 30 || winningNumber == 31 || winningNumber == 32 || winningNumber == 33
        || winningNumber == 34 || winningNumber == 35 || winningNumber == 36) {
        board.innerHTML = "Good Job, you guessed correctly.";
        bet("win");
      }else{
        board.innerHTML = "Bet Lost, you did not guess correctly.";
        bet("lose");
      }
      document.getElementById("player-money").innerHTML = "Your money: $" + money;
      betSingle.disabled = false;
      betEven.disabled = false;
      betOdd.disabled = false;
      betFirst19.disabled = false;
      betlast18.disabled = false;
      betRed.disabled = false;
      betBlack.disabled = false;
    }
    );
})();
}
function redNumberBet() {
  betSingle.disabled = true;
  betEven.disabled = true;
  betOdd.disabled = true;
  betFirst19.disabled = true;
  betlast18.disabled = true;
  betRed.disabled = true;
  betBlack.disabled = true;

  (function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease ';
      back.style.transition = 'all 14s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      if (actualDeg>=0 && actualDeg<10 ){
        result.textContent="26 BLACK";
        winningNumber = 26;
        winningColor = "black";
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
        winningColor = "red";
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
        winningColor = "black";
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
        winningColor = "red";
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
        winningColor = "black";
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
        winningColor = "red";
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
        winningColor = "black";
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
        winningColor = "red";
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
        winningColor = "black";
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
        winningColor = "red";
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
        winningColor = "black";
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
        winningColor = "red";
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
        winningColor = "black";
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
        winningColor = "red";
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
        winningColor = "black";
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
        winningColor = "red";
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
        winningColor = "black";
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
        winningColor = "red";
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
        winningColor = "black";
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
        winningColor = "red";
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
        winningColor = "black";
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
       winningColor = "red";
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
        winningColor = "black";
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
        winningColor = "red";
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
        winningColor = "black";
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
        winningColor = "black";
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
        winningColor = "red";
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
        winningColor = "black";
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
        winningColor = "red";
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
        winningColor = "black";
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
        winningColor = "black";
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
        winningColor = "red";
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
        winningColor = "black";
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
        winningColor = "red";
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
        winningColor = "green";
      }
      console.log(winningNumber);
      if (winningColor == "red") {
        board.innerHTML = "Good Job, you guessed correctly.";
        bet("win");
      }else{
        board.innerHTML = "Bet Lost, you did not guess correctly.";
        bet("lose");
      }
      document.getElementById("player-money").innerHTML = "Your money: $" + money;
      betSingle.disabled = false;
      betEven.disabled = false;
      betOdd.disabled = false;
      betFirst19.disabled = false;
      betlast18.disabled = false;
      betRed.disabled = false;
      betBlack.disabled = false;
    }
    );
})();
}
function blackNumberBet() {
  betSingle.disabled = true;
  betEven.disabled = true;
  betOdd.disabled = true;
  betFirst19.disabled = true;
  betlast18.disabled = true;
  betRed.disabled = true;
  betBlack.disabled = true;

  (function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back= document.querySelector('.back')
    let deg = 0;
  
    startButton.addEventListener('click', () => {
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 10s ease ';
      back.style.transition = 'all 14s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      back.classList.remove('rainbow');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      
      if (actualDeg>=0 && actualDeg<10 ){
        result.textContent="26 BLACK";
        winningNumber = 26;
        winningColor = "black";
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
        winningColor = "red";
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
        winningColor = "black";
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
        winningColor = "red";
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
        winningColor = "black";
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
        winningColor = "red";
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
        winningColor = "black";
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
        winningColor = "red";
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
        winningColor = "black";
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
        winningColor = "red";
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
        winningColor = "black";
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
        winningColor = "red";
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
        winningColor = "black";
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
        winningColor = "red";
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
        winningColor = "black";
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
        winningColor = "red";
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
        winningColor = "black";
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
        winningColor = "red";
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
        winningColor = "black";
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
        winningColor = "red";
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
        winningColor = "black";
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
       winningColor = "red";
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
        winningColor = "black";
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
        winningColor = "red";
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
        winningColor = "black";
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
        winningColor = "black";
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
        winningColor = "red";
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
        winningColor = "black";
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
        winningColor = "red";
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
        winningColor = "black";
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
        winningColor = "red";
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
        winningColor = "black";
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
        winningColor = "red";
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
        winningColor = "black";
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
        winningColor = "red";
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
        winningColor = "green";
      }
      console.log(winningNumber);
      if (winningColor == "black") {
        board.innerHTML = "Good Job, you guessed correctly.";
        bet("win");
      }else{
        board.innerHTML = "Bet Lost, you did not guess correctly.";
        bet("lose");
      }
      document.getElementById("player-money").innerHTML = "Your money: $" + money;
      betSingle.disabled = false;
      betEven.disabled = false;
      betOdd.disabled = false;
      betFirst19.disabled = false;
      betlast18.disabled = false;
      betRed.disabled = false;
      betBlack.disabled = false;
    }
    );
})();
}
function bet(outcome) {
  let playerBet = document.getElementById("bet").valueAsNumber;
  if (outcome == "win") {
      money = money + playerBet;
  }else if (outcome == "lose") {
      money = money - playerBet;
  }else{
      money = money;
  }
}
let onClick = evt =>
{
    window.location.replace("casino.html");
}
main_menu_btn.addEventListener("click", onClick);