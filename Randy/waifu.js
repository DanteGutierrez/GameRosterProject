var money = 0;
var multiplier = 1;
var BaseClick = 1;
var start = 0;

let Timer;
let Click = 0;
let Automult = 1;
let Clickinterval = 1000;

let playerName;
let money_btn;
let money_count;
let UpgradePage;
let Waifu;
let MainPage;
let Upgrade1;
let Upgrade2;
let Upgrade3;
let AutoUpgrade1;
let PowerUpgrade1;

let onClick = evt =>
{
  if(evt.target.id == 'waifu')
  {
    money = money + (BaseClick * multiplier);
    money_count.innerHTML = money;
    console.log(money);
  }
}

let UpgradesPageOnClick = evt =>
{
  if(evt.target.id == 'UpgradesPage')
  {
    window.location = 'Upgrades.html';
    sessionStorage.setItem('money',money);
    sessionStorage.setItem('multiplier',multiplier);
    sessionStorage.setItem('BaseClick',BaseClick);
    sessionStorage.setItem('Timer',Timer);
    sessionStorage.setItem('Click',Click);
    sessionStorage.setItem('Clickinterval',Clickinterval);
    sessionStorage.setItem('Automult',Automult);
    console.log(sessionStorage.getItem('multiplier'));
  }
}

let MainPageOnClick = evt =>
{
  if(evt.target.id == 'MainPage')
  {
    window.location = 'waifu.html';
    sessionStorage.setItem('money',money);
    sessionStorage.setItem('multiplier',multiplier);
    sessionStorage.setItem('BaseClick',BaseClick);
    sessionStorage.setItem('Timer',Timer);
    sessionStorage.setItem('Click',Click);
    sessionStorage.setItem('Clickinterval',Clickinterval);
    sessionStorage.setItem('Automult',Automult);
    console.log(sessionStorage.getItem('money'));
    sessionStorage.setItem('start', start);
    console.log(sessionStorage.getItem('start'));
    console.log(sessionStorage.getItem('multiplier'));
  }
}

let Upgrade1OnClick = evt =>
{
  if(evt.target.id == 'waifuUpgrade1')
  {
    if(money >= 20){
      money = money - 20;
      money_count.innerHTML = money;
      multiplier = multiplier + 1;
      console.log(multiplier);
    }
  }
}

let Upgrade2OnClick = evt =>
{
  if(evt.target.id == 'waifuUpgrade2')
  {
    if(money >= 60){
      money = money - 60;
      money_count.innerHTML = money;
      multiplier = multiplier + 3;
      console.log(multiplier);
    }
  }
}

let Upgrade3OnClick = evt =>
{
  if(evt.target.id == 'waifuUpgrade3')
  {
    if(money >= 150){
      money = money - 150;
      money_count.innerHTML = money;
      multiplier = multiplier + 10;
      console.log(multiplier);
    }
  }
}

let timmermethod = () => {
  money = money + (Click * Automult);
  money_count.innerHTML = money;
};

let AutoUpgrade1OnClick = evt =>
{
  if(evt.target.id == 'autoUpgrade1')
  {
    if(money >= 1000){
      money = money - 1000;
      money_count.innerHTML = money;
      Automult = 1;
      Click = Click + 1;
      
      Timer = setInterval(timmermethod, Clickinterval);
      console.log(Click);
    }
  }
}

let PowerUpgrade1OnClick = evt =>
{
  if(evt.target.id == 'powerUpgrade1')
  {
    if(money >= 3000){
      money = 0;
      money_count.innerHTML = money;
      multiplier = 1;
      BaseClick = BaseClick + 2;
      clearInterval(Timer);
      console.log(multiplier);
      console.log(BaseClick);
    }
  }
}

function runtime(){

  if(document.URL.includes("waifu.html")){
    HTML = document.getElementById('main');
    money_btn = document.getElementById('waifu');
    money_count = document.getElementById('money');
    UpgradePage = document.getElementById('UpgradesPage');
    if(sessionStorage.getItem('start') == 1){
      money = Number(sessionStorage.getItem('money'));
      multiplier = Number(sessionStorage.getItem('multiplier'));
      BaseClick = Number(sessionStorage.getItem('BaseClick'));
      Click = Number(sessionStorage.getItem('Click'));
      Automult = Number(sessionStorage.getItem('Automult'));
      Clickinterval = Number(sessionStorage.getItem('Clickinterval'));

      Timer = setInterval(timmermethod, Clickinterval);

      money_count.innerHTML = money;
      console.log(money);

      //();
    }else if(start == 0){
      money_count.innerHTML = money;
    }
   
    money_btn.addEventListener('click', onClick);
    UpgradePage.addEventListener('click', UpgradesPageOnClick);
    
  }else if(document.URL.includes("Upgrades.html")){
    start = 1;
    MainPage = document.getElementById('MainPage');
    Upgrade1 = document.getElementById('waifuUpgrade1');
    Upgrade2 = document.getElementById('waifuUpgrade2');
    Upgrade3 = document.getElementById('waifuUpgrade3');
    AutoUpgrade1 = document.getElementById('autoUpgrade1');
    PowerUpgrade1 = document.getElementById('powerUpgrade1');
    money_count = document.getElementById('money');
    money = Number(sessionStorage.getItem('money'));
    multiplier = Number(sessionStorage.getItem('multiplier'));
    BaseClick = Number(sessionStorage.getItem('BaseClick'));
    Timer = Number(sessionStorage.getItem('Timer'));
    Click = Number(sessionStorage.getItem('Click'));
    Automult = Number(sessionStorage.getItem('Automult'));
    Clickinterval = Number(sessionStorage.getItem('Clickinterval'));
    //();
    
    MainPage.addEventListener('click', MainPageOnClick);
    Upgrade1.addEventListener('click', Upgrade1OnClick);
    Upgrade2.addEventListener('click', Upgrade2OnClick);
    Upgrade3.addEventListener('click', Upgrade3OnClick);
    AutoUpgrade1.addEventListener('click', AutoUpgrade1OnClick);
    PowerUpgrade1.addEventListener('click', PowerUpgrade1OnClick);

    money_count.innerHTML = sessionStorage.getItem('money');
  }
}

runtime();