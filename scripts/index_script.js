const minesweeper_btn = document.getElementById("minesweeper_btn");
const casino_btn = document.getElementById("casino_btn");
const tetris_btn = document.getElementById("tetris_btn");
const waifu_clicker_btn = document.getElementById("waifu_clicker_btn");
const trivia_btn = document.getElementById("trivia_btn");

var a = 0;
var b = 0;
var c = 0;
var d = 0
var e = 0;


let btn_click = evt =>
{
    const description_box = document.getElementById("desc_one");
    const description_box_two = document.getElementById("desc_two");
    const description_box_three = document.getElementById("desc_three");
    const description_box_four = document.getElementById("desc_four");
    const description_box_five = document.getElementById("desc_five");
    if(evt.target.id == "minesweeper_btn")
    {
        
        if(a == 0)
        {

            description_box.innerHTML = "Minesweeper is a single-player puzzle video game. The objective" + 
            "of the game is to clear a rectangular board containing hidden mines or bombs without detonating" + 
            "any of them, with help from clues about the number of neighbouring mines in each field";
            description_box_two.innerHTML = "";
            description_box_three.innerHTML = "";
            description_box_four.innerHTML = "";
            description_box_five.innerHTML = "";
            
            a = 1;
            b = 0;
            c = 0;
            d = 0;
            e = 0;
        }else if(a == 1)
        {
            window.location.replace("minesweeper.html");
        }
    }
    if(evt.target.id == "casino_btn")
    {
        if(b == 0)
        {
            description_box.innerHTML = "";
            description_box_two.innerHTML = "The Casino Are is a game that aims to emulate the experience in a casino with all the most popular games inside of a casino"
            + " such as an abundant amount of card games, roulette, and of course slot Machines.";
            description_box_three.innerHTML = "";
            description_box_four.innerHTML = "";
            description_box_five.innerHTML = "";
            
            a = 0;
            b = 1;
            c = 0;
            d = 0;
            e = 0;
        }else if(b == 1)
        {
            window.location.replace("casino.html");
        }
    }
    if(evt.target.id == "tetris_btn")
    {
        if(c == 0)
        {
            description_box.innerHTML = "";
            description_box_two.innerHTML = "";
            description_box_three.innerHTML = "Tetris is a game that allows players to rotate falling blocks strategically to clear levels";
            description_box_four.innerHTML = "";
            description_box_five.innerHTML = "";
            
            a = 0;
            b = 0;
            c = 1;
            d = 0;
            e = 0;
        }else if(c == 1)
        {
            window.location.replace("tetris.html");
        }
    }
    if(evt.target.id == "waifu_clicker_btn")
    {
       if(d == 0)
       {
            description_box.innerHTML = "";
            description_box_two.innerHTML = "";
            description_box_three.innerHTML = "";
            description_box_four.innerHTML = "Waifu Clicker is a game in which you click to earn upgrades and of course unlock waifus";
            description_box_five.innerHTML = "";

            a = 0;
            b = 0;
            c = 0;
            d = 1;
            e = 0;

       }else if(d == 1)
       {
            window.location.replace("waifuclicker.html");
       }
    }
    if(evt.target.id == "trivia_btn")
    {
        if(e == 0)
        {
            description_box.innerHTML = "";
            description_box_two.innerHTML = "";
            description_box_three.innerHTML = "";
            description_box_four.innerHTML = "";
            description_box_five.innerHTML = "The trivia game is your basic run of the mill trivia game, you answer quesitons and earn point to attempt to get a  high score";

            a = 0;
            b = 0;
            c = 0;
            d = 0;
            e = 1;

        }else if(e == 1)
        {
            window.location.replace("trivia.html");
        }
    }
}

minesweeper_btn.addEventListener("click", btn_click);
casino_btn.addEventListener("click", btn_click);
tetris_btn.addEventListener("click", btn_click);
waifu_clicker_btn.addEventListener("click", btn_click);
trivia_btn.addEventListener("click", btn_click);