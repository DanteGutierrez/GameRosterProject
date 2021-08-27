const blackjack_btn = document.getElementById("blackjack_btn");
const roulette_btn = document.getElementById("roulette_btn");
const return_btn = document.getElementById("return_btn");
const description_box = document.getElementById("desc_one");
const description_box_two = document.getElementById("desc_two");
const description_box_three = document.getElementById("desc_three");

let a = 0;
let b = 0;
let c = 0;

let onClick = evt =>
{
    if (evt.target.id == "blackjack_btn") {
        if (a == 0) {
            description_box.innerHTML = "A classic game of Black Jack where the first to 21 points wins.";

            a = 1;
            b = 0;
            c = 0;
        }else if(a == 1)
        {
            window.location.replace("CardGame.html");
        }
    }else if (evt.target.id == "roulette_btn") {
        if (b == 0) {
            description_box_two.innerHTML = "Take a guess on the results on a spinning wheel";

            a = 0;
            b = 1;
            c = 0;
        }else if(b == 1)
        {
            window.location.replace("Roulette.html");
        }
    }else if (evt.target.id == "return_btn") {
        window.location.replace("../index.html");
    }
}

blackjack_btn.addEventListener("click", onClick);
roulette_btn.addEventListener("click", onClick);
return_btn.addEventListener("click", onClick);