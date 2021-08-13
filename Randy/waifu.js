var money = 0;
var multiplier = 1;

const money_btn = document.getElementById('waifu');
const money_count = document.getElementById('money');
const Upgrade1 = document.getElementById('waifuUpgrade1');
const Upgrade2 = document.getElementById('waifuUpgrade2');
const Upgrade3 = document.getElementById('waifuUpgrade3');

let onClick = evt =>
{
  if(evt.target.id == 'waifu')
  {
    money = money + (1 * multiplier);
    money_count.innerHTML = money;
    console.log(money);
  }
}
money_btn.addEventListener('click', onClick);

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
Upgrade1.addEventListener('click', Upgrade1OnClick);

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
Upgrade2.addEventListener('click', Upgrade2OnClick);

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
Upgrade3.addEventListener('click', Upgrade3OnClick);