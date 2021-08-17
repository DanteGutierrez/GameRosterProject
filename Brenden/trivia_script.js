
//Trivia Menu Objects
let cate_one;
let cate_two;
let cate_three;
let cate_four;
let cate_five;
let cate_six;
let cate_seven;
let cate_eight;
let cate_nine;
let cate_ten;

//Trivia game objects
let question_txt;
let opt_one;
let opt_two;
let opt_three;
let opt_four;
let score;

let category = 0;

let menuOnClick = evt =>
{
    if(evt.target.id == "cate_one")
    {
        category = 1;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_two")
    {
        category = 2;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_three")
    {
        category = 3;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_four")
    {
        category = 4;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_five")
    {
        category = 5;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_six")
    {
        category = 6;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_seven")
    {
        category = 7;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_eight")
    {
        category = 8;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_nine")
    {
        category = 9;
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_ten")
    {
        category = 10;
        window.location.replace("trivia.html");
    }
    
    
}

function onLoad()
{
    if(document.URL.includes("trivia_menu.html"))
    {
        cate_one = document.getElementById("cate_one");
        cate_two = document.getElementById("cate_two");
        cate_three = document.getElementById("cate_three");
        cate_four = document.getElementById("cate_four");
        cate_five = document.getElementById("cate_five");
        cate_six = document.getElementById("cate_six");
        cate_seven = document.getElementById("cate_seven");
        cate_eight = document.getElementById("cate_eight");
        cate_nine = document.getElementById("cate_nine");
        cate_ten = document.getElementById("cate_ten");

        cate_one.addEventListener("click", menuOnClick);
        cate_two.addEventListener("click", menuOnClick);
        cate_three.addEventListener("click", menuOnClick);
        cate_four.addEventListener("click", menuOnClick);
        cate_five.addEventListener("click", menuOnClick);
        cate_six.addEventListener("click", menuOnClick);
        cate_seven.addEventListener("click", menuOnClick);
        cate_eight.addEventListener("click", menuOnClick);
        cate_nine.addEventListener("click", menuOnClick);
        cate_ten.addEventListener("click", menuOnClick);
    }
    else if(document.URL.includes("trivia.html"))
    {
        question_txt = document.getElementById("question_txt");
        score = document.getElementById("score");
        opt_one = document.getElementById("opt_one");
        opt_two = document.getElementById("opt_two");
        opt_three = document.getElementById("opt_three");
        opt_four = document.getElementById("opt_four");
        console.log(category);

    }
}

let onClick = evt =>
{
    
}

function populate()
{

}
const player =
{
    score: 0,
    ques_category: null,
}

onLoad();
console.log(player.ques_category);