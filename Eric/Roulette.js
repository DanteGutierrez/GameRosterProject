const main_menu_btn = document.getElementById("main_menu_btn");
const result = document.getElementById("result");
var winningNumber;

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
      }
      if (actualDeg>=10 && actualDeg<20 ){
        result.textContent="3 RED";
        winningNumber = 3;
      }
      if (actualDeg>=20 && actualDeg<30 ){
        result.textContent="35 BLACK";
        winningNumber = 35;
      }
      if (actualDeg>=30 && actualDeg<39 ){
        result.textContent="12 RED";
        winningNumber = 12;
      }
      if (actualDeg>=39 && actualDeg<49 ){
        result.textContent="28 BLACK";
        winningNumber = 28;
      }
      if (actualDeg>=49 && actualDeg<59 ){
        result.textContent="7 RED";
        winningNumber = 7;
      }
      if (actualDeg>=59 && actualDeg<69 ){
        result.textContent="29 BLACK";
        winningNumber = 29;
      }
      if (actualDeg>=69 && actualDeg<78 ){
        result.textContent="18 RED";
        winningNumber = 18;
      }
      if (actualDeg>=78 && actualDeg<88 ){
        result.textContent="22 BLACK";
        winningNumber = 22;
      }
      if (actualDeg>=88 && actualDeg<98 ){
        result.textContent="9 RED";
        winningNumber = 9;
      }
      if (actualDeg>=98 && actualDeg<107 ){
        result.textContent="31 BLACK";
        winningNumber = 31;
      }
      if (actualDeg>=107 && actualDeg<117 ){
        result.textContent="14 RED";
        winningNumber = 14;
      }
      if (actualDeg>=117 && actualDeg<127 ){
        result.textContent="20 BLACK";
        winningNumber = 20;
      }
      if (actualDeg>=127 && actualDeg<137 ){
        result.textContent="1 RED";
        winningNumber = 1;
      }
      if (actualDeg>=137 && actualDeg<146 ){
        result.textContent="33 BLACK";
        winningNumber = 33;
      }
      if (actualDeg>=146 && actualDeg<156 ){
        result.textContent="16 RED";
        winningNumber = 16;
      }
      if (actualDeg>=156 && actualDeg<166 ){
        result.textContent="24 BLACK";
        winningNumber = 24;
      }
      if (actualDeg>=166 && actualDeg<176 ){
        result.textContent="5 RED";
        winningNumber = 5;
      }
      if (actualDeg>=176 && actualDeg<185 ){
        result.textContent="10 BLACK";
        winningNumber = 10;
      }
      if (actualDeg>=185 && actualDeg<195 ){
        result.textContent="23 RED";
        winningNumber = 23;
      }
      if (actualDeg>=195 && actualDeg<205 ){
        result.textContent="8 BLACK";
        winningNumber = 8;
      }
      if (actualDeg>=205 && actualDeg<215 ){
       result.textContent="30 RED";
       winningNumber = 30;
      }
      if (actualDeg>=215 && actualDeg<224 ){
        result.textContent="11 BLACK";
        winningNumber = 11;
      }
      if (actualDeg>=224 && actualDeg<234 ){
        result.textContent="36 RED";
        winningNumber = 36;
      }
      if (actualDeg>=234 && actualDeg<244 ){
        result.textContent="13 BLACK";
        winningNumber = 13;
      }
      if (actualDeg>=244 && actualDeg<253 ){
        result.textContent="21 RED";
        winningNumber = 21;
      }
      if (actualDeg>=253 && actualDeg<263 ){
        result.textContent="6 BLACK";
        winningNumber = 6;
      }
      if (actualDeg>=263 && actualDeg<273 ){
        result.textContent="34 RED";
        winningNumber = 34;
      }
      if (actualDeg>=273 && actualDeg<283 ){
        result.textContent="17 BLACK";
        winningNumber = 17;
      }
      if (actualDeg>=283 && actualDeg<292 ){
        result.textContent="25 RED";
        winningNumber = 25;
      }
      if (actualDeg>=292 && actualDeg<302 ){
        result.textContent="2 BLACK";
        winningNumber = 2;
      }
      if (actualDeg>=302 && actualDeg<312 ){
        result.textContent="21 RED";
        winningNumber = 21;
      }
      if (actualDeg>=312 && actualDeg<322 ){
        result.textContent="4 BLACK";
        winningNumber = 4;
      }
      if (actualDeg>=322 && actualDeg<331 ){
        result.textContent="19 RED";
        winningNumber = 19;
      }
      if (actualDeg>=331 && actualDeg<341 ){
        result.textContent="15 BLACK";
        winningNumber = 15;
       }
      if (actualDeg>=341 && actualDeg<350 ){
        result.textContent="32 RED";
        winningNumber = 32;
      }
      if (actualDeg>=350 && actualDeg<360 ){
        result.textContent="0 GREEN";
        winningNumber = 0;
      }
      console.log(actualDeg);
      console.log(winningNumber);
    }
    );
  })();

let onClick = evt =>
{
    window.location.replace("Casino.html");
}
main_menu_btn.addEventListener("click", onClick);