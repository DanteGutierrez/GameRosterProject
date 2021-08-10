const minesweeper_btn = document.getElementById("minesweeper_btn");
const casino_btn = document.getElementById("casino_btn");
const tetris_btn = document.getElementById("tetris_btn");
const waifu_clicker_btn = document.getElementById("waifu_clicker_btn");
const trivia_btn = document.getElementById("trivia_btn");



let btn_click = evt =>
{
    if(evt.target.id == "minesweeper_btn")
    {
        const description_box = document.getElementById("desc_one");
        description_box.innerHTML = "test";
    }
    if(evt.target.id == "casino_btn")
    {
        const description_box = document.getElementById("desc_two");
        description_box.innerHTML = "test";
    }
    if(evt.target.id == "tetris_btn")
    {
        const description_box = document.getElementById("desc_three");
        description_box.innerHTML = "test";
    }
    if(evt.target.id == "waifu_clicker_btn")
    {
        const description_box = document.getElementById("desc_four");
        description_box.innerHTML = "test";
    }
    if(evt.target.id == "trivia_btn")
    {
        const description_box = document.getElementById("desc_five");
        description_box.innerHTML = "test"
    }
}

minesweeper_btn.addEventListener("click", btn_click);
casino_btn.addEventListener("click", btn_click);
tetris_btn.addEventListener("click", btn_click);
waifu_clicker_btn.addEventListener("click", btn_click);
trivia_btn.addEventListener("click", btn_click);