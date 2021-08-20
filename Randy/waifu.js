var money = 0;
var multiplier = 1;
var BaseClick = 1;
var start = 0;

let money_btn;
let money_count;
let UpgradePage;
let Background1;
// let Waifu1;
let Waifu2;
let MainPage;
let Upgrade1;
let Upgrade2;
let Upgrade3;
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
    console.log(sessionStorage.getItem('multiplier'));
  }
}

let Background1onClick = evt =>
{
  if(evt.target.id == 'Background1')
  {
    document.getElementById('main').classList.remove();
    document.getElementById('main').classList.add('background1');
  }
}

let Waifu1onClick = evt =>
{
  if(evt.target.id == 'Waifu1')
  {
    document.getElementById('waifu').classList.remove();
    document.getElementById('waifu').classList.add('waifu1');
  }
}

let Waifu2onClick = evt =>
{
  if(evt.target.id == 'Waifu2')
  {
    document.getElementById('waifu').classList.remove();
    document.getElementById('waifu').classList.add('waifu2');
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

let PowerUpgrade1OnClick = evt =>
{
  if(evt.target.id == 'powerUpgrade1')
  {
    if(money >= 3000){
      money = 0;
      money_count.innerHTML = money;
      multiplier = 1;
      BaseClick = 2;
      console.log(multiplier);
      console.log(BaseClick);
    }
  }
}

function runtime(){
  if(document.URL.includes("waifu.html")){
    money_btn = document.getElementById('waifu');
    money_count = document.getElementById('money');
    UpgradePage = document.getElementById('UpgradesPage');
    Background1 = document.getElementById('Background1');
    // Waifu1 = document.getElementById('Waifu1');
    Waifu2 = document.getElementById('Waifu2');

    console.log(sessionStorage.getItem('start'));
    if(sessionStorage.getItem('start') == 1){
        money = Number(sessionStorage.getItem('money'));
        multiplier = Number(sessionStorage.getItem('multiplier'));
        BaseClick = Number(sessionStorage.getItem('BaseClick'));
        money_count.innerHTML = money;
        console.log(money);

    }else if(start == 0){
      money_count.innerHTML = money;
    }
   
    money_btn.addEventListener('click', onClick);
    UpgradePage.addEventListener('click', UpgradesPageOnClick);
    Background1.addEventListener('click',Background1onClick);
    // Waifu1.addEventListener('click',Waifu1onClick);
    Waifu2.addEventListener('click',Waifu2onClick);

    
  }else if(document.URL.includes("Upgrades.html")){
    start = 1;
    MainPage = document.getElementById('MainPage');
    Upgrade1 = document.getElementById('waifuUpgrade1');
    Upgrade2 = document.getElementById('waifuUpgrade2');
    Upgrade3 = document.getElementById('waifuUpgrade3');
    PowerUpgrade1 = document.getElementById('powerUpgrade1');
    money_count = document.getElementById('money');
    money = sessionStorage.getItem('money');
    
    MainPage.addEventListener('click', MainPageOnClick);
    Upgrade1.addEventListener('click', Upgrade1OnClick);
    Upgrade2.addEventListener('click', Upgrade2OnClick);
    Upgrade3.addEventListener('click', Upgrade3OnClick);
    PowerUpgrade1.addEventListener('click', PowerUpgrade1OnClick);

    money_count.innerHTML = sessionStorage.getItem('money');
  }
}

runtime();