var money = 0;

const money_btn = document.getElementById('waifu');
const money_count = document.getElementById('money');

let onClick = evt =>
{
  if(evt.target.id == 'waifu')
  {
    money++;
    money_count.innerHTML = money;
    console.log(money);
  }
}
money_btn.addEventListener('click', onClick);