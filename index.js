const minesweeper_btn = document.getElementById("minesweeper_btn");
const cansino_btn = document.getElementById("casino_btn");
const tetris_btn = document.getElementById("tetris_btn");
const waifu_clicker_btn = document.getElementById("waifu_clicker_btn");
const trivia_btn = document.getElementById("trivia_btn");

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;

let onClick = evt =>
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
                description_box.innerHTML = "You have a field of mines you must clear without detonating any of them, as you dig up tiles you gain knowledge about where more mines might be. If you can empty every tile except mines, you win";
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
                window.location.replace("Dante/minesweeper.html");
            }
        }
        if(evt.target.id == "casino_btn")
        {
            
            if(b == 0)
            {
                description_box.innerHTML = "";
                description_box_two.innerHTML = "The Casino are is an area set to play classic casino games!";
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
                window.location.replace("Eric/casino.html");
            }
        }
        if(evt.target.id == "tetris_btn")
        {
            
            if(c == 0)
            {
                description_box.innerHTML = "";
                description_box_two.innerHTML = "";
                description_box_three.innerHTML = "Tetris is a game to play a game much like tetris itself!";
                description_box_four.innerHTML = "";
                description_box_five.innerHTML = "";

                a = 0;
                b = 0;
                c = 1;
                d = 0;
                e = 0;
                console.log(c);
            }else if(c == 1)
            {
                window.location.replace("Nicole/tetris.html");
                
            }
        }
        if(evt.target.id == "waifu_clicker_btn")
        {
            if(d == 0)
            {
                description_box.innerHTML = "";
                description_box_two.innerHTML = "";
                description_box_three.innerHTML = "";
                description_box_four.innerHTML = "Waifu Clicker Bois";
                description_box_five.innerHTML = "";

                a = 0;
                b = 0;
                c = 0;
                d = 1;
                e = 0;
            }else if(d == 1)
            {
                window.location.replace("Randy/waifu.html");
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
                description_box_five.innerHTML = "The Trivia Game";

                a = 0;
                b = 0;
                c = 0;
                d = 0;
                e = 1;
            }else if(e == 1)
            {
                window.location.replace("Brenden/trivia.html");
            }
        }
        
    }

    minesweeper_btn.addEventListener("click", onClick);
    cansino_btn.addEventListener("click", onClick);
    tetris_btn.addEventListener("click", onClick);
    waifu_clicker_btn.addEventListener("click", onClick);
    trivia_btn.addEventListener("click", onClick);