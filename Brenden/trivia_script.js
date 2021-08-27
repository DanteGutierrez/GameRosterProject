
//Trivia Menu Objects
let cate_one;
let cate_two;
let cate_four;
let cate_five;
let cate_six;
let cate_eight;
let main_menu;

//Trivia game objects
let category_txt;
let opt_one;
let opt_two;
let opt_three;
let opt_four;
let question_txt;
let score;

let answer_array = [];

function ans_check(answer)
{
    if(answer == player.ans_id)
    {
        player.score = player.score + 10;
        score.innerHTML = player.score;
        player.ques_index = player.ques_index + 1;
        populate();
        if(player.ques_index  == 10)
        {
            populate_win();
        }
    }else if(answer != player.ans_id)
    {
        populate_lose();
    }
}

function ans_rand()
{
    answer_array.length = 0;
    var i = 0;
    var a = 0;
    while(question_array[player.ques_index] != questions[i].prompt)
    {
        i++;
    }
    while(question_array[player.ques_index] == questions[i].prompt && answer_array.length < 4)
    {
        answer_array[a] = questions[i].answers[a].answer_txt;
        a++;
    }
    shuffle(answer_array);
    player.ans_id = answer_array.indexOf(questions[i].answers[3].answer_txt);
}

let emt_array = [];


let menuOnClick = evt =>
{
    if(evt.target.id == "cate_one")
    {
        category = "History";
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_two")
    {
        category = "Geography";
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_four")
    {
        category = "Sports";
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_five")
    {
        category = "Pop Culture";
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_six")
    {
        category = "Gaming";
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_eight")
    {
        category = "Nations";
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "main_menu")
    {
        window.location.replace("../index.html");
    }
    
}

var firstLoad = false;

function onLoad()
{
    if(document.URL.includes("trivia_menu.html"))
    {
        cate_one = document.getElementById("cate_one");
        cate_two = document.getElementById("cate_two");
        cate_four = document.getElementById("cate_four");
        cate_five = document.getElementById("cate_five");
        cate_six = document.getElementById("cate_six");
        cate_eight = document.getElementById("cate_eight");
        main_menu = document.getElementById("main_menu");

        cate_one.addEventListener("click", menuOnClick);
        cate_two.addEventListener("click", menuOnClick);
        cate_four.addEventListener("click", menuOnClick);
        cate_five.addEventListener("click", menuOnClick);
        cate_six.addEventListener("click", menuOnClick);
        cate_eight.addEventListener("click", menuOnClick);
        main_menu.addEventListener("click", menuOnClick);
    }
    else if(document.URL.includes("trivia.html"))
    {
        category_txt = document.getElementById("cate_name");
        question_txt = document.getElementById("question_txt");
        score = document.getElementById("score");
        opt_one = document.getElementById("opt_one");
        opt_two = document.getElementById("opt_two");
        opt_three = document.getElementById("opt_three");
        opt_four = document.getElementById("opt_four");
        player.ques_category = sessionStorage.getItem(player.ques_category);

        category_txt.innerHTML = player.ques_category;
        score.innerHTML = 0;

        opt_one.addEventListener('click', onClick);
        opt_two.addEventListener('click', onClick);
        opt_three.addEventListener('click', onClick);
        opt_four.addEventListener('click', onClick);
        populate();
        
    }
}

let onClick = evt =>
{
    if(evt.target.id == "opt_one")
    {
        if(opt_one.textContent == "Return to Categories")
        {
            window.location.replace("trivia_menu.html");
        }
        var answer = answer_array.indexOf(opt_one.textContent);
        ans_check(answer);
       
    }else if(evt.target.id == "opt_two")
    {
        if(opt_two.textContent == "Return to the Main Menu")
        {
            window.location.replace("../index.html");
        }
        var answer = answer_array.indexOf(opt_two.textContent);
        ans_check(answer);
    }else if(evt.target.id == "opt_three")
    {
        if(opt_three.textContent == "Restart")
        {
            firstLoad = false;
            player.ans_id = 0;
            player.ques_id = 0;
            player.ques_index = 0;
            player.score = 0;
            score.innerHTML = player.score;
            populate();
        }else
        {
            var answer = answer_array.indexOf(opt_three.textContent);
            ans_check(answer);
        }
        
        
        
    }else if(evt.target.id == "opt_four")
    {
        var answer = answer_array.indexOf(opt_four.textContent);
        ans_check(answer);
    }
}

let player =
{
    ans_id: 0,
    score: 0,
    ques_category: null,
    ques_id: 0,
    ques_index: 0,
}



function populate()
{
    if(firstLoad == false)
    {
        question_rand();
        ans_rand();
        ques_id_set();
        populate_game();
        firstLoad = true;
    }else if(firstLoad == true)
    {
        ans_rand();
        ques_id_set();
        populate_game();
    }
}
function populate_game()
{
    question_txt.innerHTML = question_array[player.ques_index];
    opt_one.innerHTML = answer_array[0];
    opt_two.innerHTML = answer_array[1];
    opt_three.innerHTML = answer_array[2];
    opt_four.innerHTML = answer_array[3];
    question_txt.style.backgroundColor = "#EEE2DF";
    question_txt.style.color = "#B36A5E";
    opt_three.style.backgroundColor = "#EEE2DF";
    opt_three.style.border = "2px solid #C89F9C";
    opt_four.style.backgroundColor = "#EEE2DF";
    opt_four.style.border = "2px solid #C89F9C";
}
function populate_win()
{
    question_txt.innerHTML = "You've Won! what would you like to do Now?";
    opt_one.innerHTML = "Return to Categories";
    opt_two.innerHTML = "Return to the Main Menu";
    opt_three.innerHTML = "";
    opt_four.innerHTML = "";
    question_txt.style.backgroundColor = "#97C1A9";
    question_txt.style.color = "#B36A5E";
    opt_three.style.backgroundColor = "#B36A5E";
    opt_three.style.border = "0px solid #B36A5E";
    opt_four.style.backgroundColor = "#B36A5E";
    opt_four.style.border = "0px solid #B36A5E";
}
function populate_lose()
{
    question_txt.innerHTML = "You have lost, would you like to try again, or do something else?";
    opt_one.innerHTML = "Return to Categories";
    opt_two.innerHTML = "Return to the Main Menu";
    opt_three.innerHTML = "Restart";
    opt_four.innerHTML = "";
    question_txt.style.backgroundColor = "#FF9684";
    question_txt.style.color = "#EED7C5";
    opt_four.style.backgroundColor = "#B36A5E";
    opt_four.style.border = "0px solid #B36A5E";
}

let question_array = [];

function ques_id_set()
{
    var i = 0;
    while(question_array[player.ques_index] != questions[i].prompt)
    {
        i++;
    }
    player.ques_id = i;
}

function question_rand()
{
    var i = 0;
    var a = 0;
    while(player.ques_category != questions[i].topic)
    {
        i++;   
    }
    while(player.ques_category == questions[i].topic)
    {
        question_array[a] = questions[i].prompt;
        i++;
        a++;
    }
    shuffle(question_array);
}

var questions = [
    {//1
        topic: "History",
        prompt: "When did the American Revolutionary War start and end?",
        answers: [
            {
                answer_txt: "1776-1777",
                isCorrect: false
            },
            {
                answer_txt: "1761-1765",
                isCorrect: false
            },
            {
                answer_txt: "1754-1763",
                isCorrect: false
            },
            {
                answer_txt: "1775-1783",
                isCorrect: true
            }
        ]
    },
    {//2
        topic: "History",
        prompt: "When was Queen Elizabeth II crowned as queen of the common realm?",
        answers: [
            {
                answer_txt: "June 2nd, 1943",
                isCorrect: false
            },
            {
                answer_txt: "November 3rd, 1947",
                isCorrect: false
            },
            {
                answer_txt: "April 8th, 1956",
                isCorrect: false
            },
            {
                answer_txt: "June 2nd, 1953",
                isCorrect: true
            }
        ]
    },
    {//3
        topic: "History",
        prompt: "On September 20th, 1997, the Prime Minister of Australia defecated there pants, who were they?",
        answers: [
            {
                answer_txt: "Kevin Rudd",
                isCorrect: false
            },
            {
                answer_txt: "Tony Abbott",
                isCorrect: false
            },
            {
                answer_txt: "Julia Gillard",
                isCorrect: false
            },
            {
                answer_txt: "Scott Morrison",
                isCorrect: true
            }
        ]
    },
    {//4
        topic: "History",
        prompt: "What year did Canada gain independence from the UK?",
        answers: [
            {
                answer_txt: "1810",
                isCorrect: false
            },
            {
                answer_txt: "1901",
                isCorrect: false
            },
            {
                answer_txt: "1875",
                isCorrect: false
            },
            {
                answer_txt: "1867",
                isCorrect: true
            }
        ]
    },
    {//5
        topic: "History",
        prompt: "What country legalized gay marriage first in 2001?",
        answers: [
            {
                answer_txt: "Sweden",
                isCorrect: false
            },
            {
                answer_txt: "Canada",
                isCorrect: false
            },
            {
                answer_txt: "Norway",
                isCorrect: false
            },
            {
                answer_txt: "The Netherlands",
                isCorrect: true
            }
        ]
    },
    {//6
        topic: "History",
        prompt: "In what year did the Baltic States become part of the Soviet Union?",
        answers: [
            {
                answer_txt: "1935",
                isCorrect: false
            },
            {
                answer_txt: "1945",
                isCorrect: false
            },
            {
                answer_txt: "1937",
                isCorrect: false
            },
            {
                answer_txt: "1940",
                isCorrect: true
            }
        ]
    },
    {//7
        topic: "History",
        prompt: "What was the first city founded in the United States?",
        answers: [
            {
                answer_txt: "Boston, Massachuesetts",
                isCorrect: false
            },
            {
                answer_txt: "St. Augusatine, Florida",
                isCorrect: false
            },
            {
                answer_txt: "Acoma Pueblo, New Mexico",
                isCorrect: false
            },
            {
                answer_txt: "Oraibi, Arizona",
                isCorrect: true
            }
        ]
    },
    {//8
        topic: "History",
        prompt: "What year was the European Union founded?",
        answers: [
            {
                answer_txt: "1991",
                isCorrect: false
            },
            {
                answer_txt: "1992",
                isCorrect: false
            },
            {
                answer_txt: "1994",
                isCorrect: false
            },
            {
                answer_txt: "1993",
                isCorrect: true
            }
        ]
    },
    {//9
        topic: "History",
        prompt: "What year was the United Nations formed?",
        answers: [
            {
                answer_txt: "1956",
                isCorrect: false
            },
            {
                answer_txt: "1973",
                isCorrect: false
            },
            {
                answer_txt: "1969",
                isCorrect: false
            },
            {
                answer_txt: "1945",
                isCorrect: true
            }
        ]
    },
    {//10
        topic: "History",
        prompt: "When did the Berlin Wall fall in Germany?",
        answers: [
            {
                answer_txt: "Novmeber 9th, 1991",
                isCorrect: false
            },
            {
                answer_txt: "November 9th, 1990",
                isCorrect: false
            },
            {
                answer_txt: "November 9th, 1990",
                isCorrect: false
            },
            {
                answer_txt: "November 9th, 1989",
                isCorrect: true
            }
        ]
    },
    {
        topic: "History",
        prompt: "What was the span of time of the Irish War of Independence?",
        answers: [
            {
                answer_txt: "1876-1893",
                isCorrect: false
            },
            {
                answer_txt: "1922-1923",
                isCorrect: false
            },
            {
                answer_txt: "1960-1964",
                isCorrect: false
            },
            {
                answer_txt: "1919-1921",
                isCorrect: true
            }
        ]
    },
    {
        topic: "History",
        prompt: "Which west coast state was made a state last?",
        answers: [
            {
                answer_txt: "Oregon",
                isCorrect: false
            },
            {
                answer_txt: "California",
                isCorrect: false
            },
            {
                answer_txt: "Nevada",
                isCorrect: false
            },
            {
                answer_txt: "Washington",
                isCorrect: true
            }
        ]
    },
    {
        topic: "History",
        prompt: "Which state of the US was not part of the 13 colonies?",
        answers: [
            {
                answer_txt: "Massachuesetts",
                isCorrect: false
            },
            {
                answer_txt: "North Carolina",
                isCorrect: false
            },
            {
                answer_txt: "Virginia",
                isCorrect: false
            },
            {
                answer_txt: "Florida",
                isCorrect: true
            }
        ]
    },
    {
        topic: "History",
        prompt: "When did the Soviet Union disolve?",
        answers: [
            {
                answer_txt: "1989",
                isCorrect: false
            },
            {
                answer_txt: "1994",
                isCorrect: false
            },
            {
                answer_txt: "2001",
                isCorrect:false
            },
            {
                answer_txt: "1991",
                isCorrect: true
            }
        ]
    },
    {
        topic: "History",
        prompt: "When did the second World War start and end in for Europe?",
        answers: [
            {
                answer_txt: "1938-1942",
                isCorrect: false
            },
            {
                answer_txt: "1940-1946",
                isCorrect: false
            },
            {
                answer_txt: "1935-1940",
                isCorrect: false
            },
            {
                answer_txt: "1939-1945",
                isCorrect: true
            }
        ]
    },
    {//1
        topic: "Geography",
        prompt: "What is the biggest mountain range on the American Continents?",
        answers: [
            {
                answer_txt: "Rocky Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Appalachian Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Cascade Range",
                isCorrect: false
            },
            {
                answer_txt: "The Andes",
                isCorrect: true
            }
        ]
    },
    {//2
        topic: "Geography",
        prompt: "What is the largest lake in the world?",
        answers: [
            {
                answer_txt: "Lake Victoria",
                isCorrect: false
            },
            {
                answer_txt: "Lake Tanganyika",
                isCorrect: false
            },
            {
                answer_txt: "Lake Michigan",
                isCorrect: false
            },
            {
                answer_txt: "Casipian Sea",
                isCorrect: true
            }
        ]
    },
    {//3
        topic: "Geography",
        prompt: "What mountian range seperates Asia from Europe?",
        answers: [
            {
                answer_txt: "The Great Divide",
                isCorrect: false
            },
            {
                answer_txt: "Swiss Alps",
                isCorrect: false
            },
            {
                answer_txt: "Tibetan Range",
                isCorrect: false
            },
            {
                answer_txt: "The Urals",
                isCorrect: true
            }
        ]
    },
    {//4
        topic: "Geography",
        prompt: "What are the coastal mountains that surround the cape of South Africa called?",
        answers: [
            {
                answer_txt: "Rwenzori Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Table Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Atlas Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Drakensberg Mountains",
                isCorrect: true
            }
        ]
    },
    {//5
        topic: "Geography",
        prompt: "What is the largest river basin in the world?",
        answers: [
            {
                answer_txt: "Nile River Delta",
                isCorrect: false
            },
            {
                answer_txt: "Mississippi River Basin",
                isCorrect: false
            },
            {
                answer_txt: "Yangtzhe River Basin",
                isCorrect: false
            },
            {
                answer_txt: "Amazon River Basin",
                isCorrect: true
            }
        ]
    },
    {//6
        topic: "Geography",
        prompt: "What is the largest wetlands in the entire world?",
        answers: [
            {
                answer_txt: "The Everglades, United States",
                isCorrect: false
            },
            {
                answer_txt: "Asmat Swamp, Indonesia",
                isCorrect: false
            },
            {
                answer_txt: "Okavango Delta, Botswana",
                isCorrect: false
            },
            {
                answer_txt: "The Pantanal, Brazil",
                isCorrect: true
            }
        ]
    },
    {//7
        topic: "Geography",
        prompt: "What mountain range surrounds the Death Valley National Park in California?",
        answers: [
            {
                answer_txt: "Rocky Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Cascade Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Columbian Mountains",
                isCorrect: false
            },
            {
                answer_txt: "Sierra Nevada Mountains",
                isCorrect: true
            }
        ]
    },
    {//8
        topic: "Geography",
        prompt: "Where is the largest salt flat in the United States located and what is it called?",
        answers: [
            {
                answer_txt: "Death Valley Salt Flats, California",
                isCorrect: false
            },
            {
                answer_txt: "Great Salt Plains, Oklahoma",
                isCorrect: false
            },
            {
                answer_txt: "Alkali Sink, California",
                isCorrect: false
            },
            {
                answer_txt: "Bonneville Salt Flats, Utah",
                isCorrect: true
            }
        ]
    },
    {//9
        topic: "Geography",
        prompt: "What Canadian province is with in the ring of fire?",
        answers: [
            {
                answer_txt: "Ottawa",
                isCorrect: false
            },
            {
                answer_txt: "Alberta",
                isCorrect: false
            },
            {
                answer_txt: "The Yukon",
                isCorrect: false
            },
            {
                answer_txt: "British Columbia",
                isCorrect: true
            }
        ]
    },
    {//20
        topic: "Geography",
        prompt: "Which province of South Africa is the most populated?",
        answers: [
            {
                answer_txt: "Eastern Cape",
                isCorrect: false
            },
            {
                answer_txt: "Western Cape",
                isCorrect: false
            },
            {
                answer_txt: "KwaZulu-Natal",
                isCorrect: false
            },
            {
                answer_txt: "Guateng",
                isCorrect: true
            }
        ]
    },
    {
        topic: "Geography",
        prompt: "What are the coastal mountains in Austrailia called",
        answers: [
            {
                answer_txt: "Kaikoura Range",
                isCorrect: false
            },
            {
                answer_txt: "Keweka Range",
                isCorrect: false
            },
            {
                answer_txt: "Austrailian Alps",
                isCorrect: false
            },
            {
                answer_txt: "Great Dividing Range",
                isCorrect: true
            }
        ]
    },
    {//1
        topic: "Sports",
        prompt: "What country is known for inventing football, or commonly known as Soccer in North America?",
        answers: [
            {
                answer_txt: "Germany",
                isCorrect: false
            },
            {
                answer_txt: "Ireland",
                isCorrect: false
            },
            {
                answer_txt: "Sweden",
                isCorrect: false
            },
            {
                answer_txt: "England",
                isCorrect: true
            }
        ]
    },
    {//2
        topic: "Sports",
        prompt: "Who won the very first basketball play offs, back 1947?",
        answers: [
            {
                answer_txt: "Baltimore Bullets",
                isCorrect: false
            },
            {
                answer_txt: "Chicago Stags",
                isCorrect: false
            },
            {
                answer_txt: "New York Knicks",
                isCorrect: false
            },
            {
                answer_txt: "Philidalphia Warriors",
                isCorrect: true
            }
        ]
    },
    {//3
        topic: "Sports",
        prompt: "What country won the first FIFA World Cup in 1930?",
        answers: [
            {
                answer_txt: "Germany",
                isCorrect: false
            },
            {
                answer_txt: "Paraguay",
                isCorrect: false
            },
            {
                answer_txt: "Brazil",
                isCorrect: false
            },
            {
                answer_txt: "Uruguay",
                isCorrect: true
            }
        ]
    },
    {//4
        topic: "Sports",
        prompt: "What is the most popular and most watched sport in Australia?",
        answers: [
            {
                answer_txt: "Rugby",
                isCorrect: false
            },
            {
                answer_txt: "Kricket",
                isCorrect: false
            },
            {
                answer_txt: "Badmitten",
                isCorrect: false
            },
            {
                answer_txt: "Football",
                isCorrect: true
            }
        ]
    },
    {//5
        topic: "Sports",
        prompt: "What is the most watched sport in the United States?",
        answers: [
            {
                answer_txt: "Baseball",
                isCorrect: false
            },
            {
                answer_txt: "Basketball",
                isCorrect: false
            },
            {
                answer_txt: "Hockey",
                isCorrect: false
            },
            {
                answer_txt: "American Football",
                isCorrect: true
            }
        ]
    },
    {//6
        topic: "Sports",
        prompt: "Who won the second most golds in the 1984 Olympics?",
        answers: [
            {
                answer_txt: "Russia",
                isCorrect: false
            },
            {
                answer_txt: "South Korea",
                isCorrect: false
            },
            {
                answer_txt: "United States",
                isCorrect: false
            },
            {
                answer_txt: "Romania",
                isCorrect: true
            }
        ]
    },
    {//7
        topic: "Sports",
        prompt: "What city was the 2008 Olympics held?",
        answers: [
            {
                answer_txt: "New York, United States",
                isCorrect: false
            },
            {
                answer_txt: "Tokyo, Japan",
                isCorrect: false
            },
            {
                answer_txt: "Cape Town, South Africa",
                isCorrect: false
            },
            {
                answer_txt: "Beijing, China",
                isCorrect: true
            }
        ]
    },
    {//8
        topic: "Sports",
        prompt: "What city in the United States has the most teams for any sport?",
        answers: [
            {
                answer_txt: "Boston, Massachuestts",
                isCorrect: false
            },
            {
                answer_txt: "Los Angeles, California",
                isCorrect: false
            },
            {
                answer_txt: "Dallas, Texas",
                isCorrect: false
            },
            {
                answer_txt: "New York City, New York",
                isCorrect: true
            }
        ]
    },
    {//9
        topic: "Sports",
        prompt: "Who was the person who won the very first Gold Medal for South Africa in the 1908 Olympics?",
        answers: [
            {
                answer_txt: "Mei Sheppard",
                isCorrect: false
            },
            {
                answer_txt: "Emil Voigt",
                isCorrect: false
            },
            {
                answer_txt: "Johnny Hayes",
                isCorrect: false
            },
            {
                answer_txt: "Reggie Walker",
                isCorrect: true
            }
        ]
    },
    {//30
        topic: "Sports",
        prompt: "Which team has the most wins in the Superbowl?",
        answers: [
            {
                answer_txt: "New York Giants",
                isCorrect: false
            },
            {
                answer_txt: "Miami Dolphins",
                isCorrect: false
            },
            {
                answer_txt: "Pittsburgh Steelers",
                isCorrect: false
            },
            {
                answer_txt: "New England Patriots",
                isCorrect: true
            }
        ]
    },
    {
        topic: "Sports",
        prompt: "What is the national sport of New Zealand?",
        answers: [
            {
                answer_txt: "Football",
                isCorrect: false
            },
            {
                answer_txt: "Kricket",
                isCorrect: false
            },
            {
                answer_txt: "Field Hockey",
                isCorrect: false
            },
            {
                answer_txt: "Rugby",
                isCorrect: true
            }
        ]
    },
    {//1
        topic: "Pop Culture",
        prompt: "As of 2021 who is the most subscribed singlular YouTuber?",
        answers: [
            {
                answer_txt: "Dude Perfect",
                isCorrect: false
            },
            {
                answer_txt: "MrBeast",
                isCorrect: false
            },
            {
                answer_txt: "Ninja",
                isCorrect: false
            },
            {
                answer_txt: "Pewdiepie",
                isCorrect: true
            }
        ]
    },
    {//2
        topic: "Pop Culture",
        prompt: "As of 2021 what is the most streamed song on Spotify?",
        answers: [
            {
                answer_txt: "Blinding Lights, The Weekend",
                isCorrect: false
            },
            {
                answer_txt: "Dance Monkey, Tones and I",
                isCorrect: false
            },
            {
                answer_txt: "Rockstar, Post Malone",
                isCorrect: false
            },
            {
                answer_txt: "Shape of You, Ed Sheeran",
                isCorrect: true
            }
        ]
    },
    {//3
        topic: "Pop Culture",
        prompt: "On Steam what is the most played game in terms of hours played Globally?",
        answers: [
            {
                answer_txt: "Dota 2",
                isCorrect: false
            },
            {
                answer_txt: "Apex Legends",
                isCorrect: false
            },
            {
                answer_txt: "PUBG",
                isCorrect: false
            },
            {
                answer_txt: "CSGO",
                isCorrect: true
            }
        ]
    },
    {//4
        topic: "Pop Culture",
        prompt: "In the popular show The Mandalorian, what is Baby Yoda's Name?",
        answers: [
            {
                answer_txt: "Baby Yoda",
                isCorrect: false
            },
            {
                answer_txt: "Jabba the Baby",
                isCorrect: false
            },
            {
                answer_txt: "JarJar Destroyer of Worlds",
                isCorrect: false
            },
            {
                answer_txt: "Grogu",
                isCorrect: true
            }
        ]
    },
    {//5
        topic: "Pop Culture",
        prompt: "Who is the most popular Twitch Streamer as of 2021?",
        answers: [
            {
                answer_txt: "XQC",
                isCorrect: false
            },
            {
                answer_txt: "Critikal",
                isCorrect: false
            },
            {
                answer_txt: "PayMoneyWubby",
                isCorrect: false
            },
            {
                answer_txt: "Ninja",
                isCorrect: true
            }
        ]
    },
    {//6
        topic: "Pop Culture",
        prompt: "What is the most visit country by international Tourist?",
        answers: [
            {
                answer_txt: "Mexico",
                isCorrect: false
            },
            {
                answer_txt: "Canada",
                isCorrect: false
            },
            {
                answer_txt: "Argentina",
                isCorrect: false
            },
            {
                answer_txt: "United States",
                isCorrect: true
            }
        ]
    },
    {//7
        topic: "Pop Culture",
        prompt: "What city is known as the Music Capital of the World?",
        answers: [
            {
                answer_txt: "Memphis, Tennessee",
                isCorrect: false
            },
            {
                answer_txt: "Charlotte, North Carolina",
                isCorrect: false
            },
            {
                answer_txt: "Atlanta, Georgia",
                isCorrect: false
            },
            {
                answer_txt: "Austin, Texas",
                isCorrect: true
            }
        ]
    },
    {//8
        topic: "Pop Culture",
        prompt: "What was the worst movie of 2021 by there Meta Critic Score?",
        answers: [
            {
                answer_txt: "Breaking News in Yuba County",
                isCorrect: false
            },
            {
                answer_txt: "American Skin",
                isCorrect: false
            },
            {
                answer_txt: "Music",
                isCorrect: false
            },
            {
                answer_txt: "Vanquish",
                isCorrect: true
            }
        ]
    },
    {//9
        topic: "Pop Culture",
        prompt: "Who or what band has the most platinum records of all time?",
        answers: [
            {
                answer_txt: "The Beatles",
                isCorrect: false
            },
            {
                answer_txt: "Elton John",
                isCorrect: false
            },
            {
                answer_txt: "The Rolling Stones",
                isCorrect: false
            },
            {
                answer_txt: "Neil Diamond",
                isCorrect: true
            }
        ]
    },
    {//40
        topic: "Pop Culture",
        prompt: "What is the most popular tourist attraction in the United States?",
        answers: [
            {
                answer_txt: "Times Square, New York City",
                isCorrect: false
            },
            {
                answer_txt: "Las Vegas Strip, Las Vegas",
                isCorrect: false
            },
            {
                answer_txt: "Golden Gate Bridge, San Fransico",
                isCorrect: false
            },
            {
                answer_txt: "Walt Disney World, Orlando",
                isCorrect: true
            }
        ]
    },
    {
        topic: "Pop Culture",
        prompt: "What country is the biggest destination for international tourist in Europe?",
        answers: [
            {
                answer_txt: "Italy",
                isCorrect: false
            },
            {
                answer_txt : "Spain",
                isCorrect: false
            },
            {
                answer_txt: "United Kingdom",
                isCorrect: false
            },
            {
                answer_txt: "France",
                isCorrect: true
            }
        ]
    },
    {//1
        topic: "Gaming",
        prompt: "What was the first game released on the Original Xbox back in 2001?",
        answers: [
            {
                answer_txt: "Grand Theft Auto 3",
                isCorrect: false
            },
            {
                answer_txt: "Half Life 2",
                isCorrect: false
            },
            {
                answer_txt: "Counter Strike",
                isCorrect: false
            },
            {
                answer_txt: "Halo: Combat Evolved",
                isCorrect: true
            }
        ]
    },
    {//2
        topic: "Gaming",
        prompt: "What was the first E-Sports game ever played?",
        answers: [
            {
                answer_txt: "League of Legends",
                isCorrect: false
            },
            {
                answer_txt: "Dota 2",
                isCorrect: false
            },
            {
                answer_txt: "Pac-Man",
                isCorrect: false
            },
            {
                answer_txt: "Red Annihilation",
                isCorrect: true
            }
        ]
    },
    {//3
        topic: "Gaming",
        prompt: "What game had a contriversal release on PC?",
        answers: [
            {
                answer_txt: "Elder Scrolls V: Skyrim",
                isCorrect: false
            },
            {
                answer_txt: "Sid Meier's: Civilization V",
                isCorrect: false
            },
            {
                answer_txt: "Fallout 76",
                isCorrect: false
            },
            {
                answer_txt: "Grand Theft Auto: San Andreas",
                isCorrect: true
            }
        ]
    },
    {//4
        topic: "Gaming",
        prompt: "What is the most streamed and watched game on Twitch?",
        answers: [
            {
                answer_txt: "Apex Legends",
                isCorrect: false
            },
            {
                answer_txt: "Valorant",
                isCorrect: false
            },
            {
                answer_txt: "League of Legends",
                isCorrect: false
            },
            {
                answer_txt: "Grand Theft Auto V",
                isCorrect: true
            }
        ]
    },
    {//5
        topic: "Gaming",
        prompt: "Who is the most watched gaming channel on YouTube?",
        answers: [
            {
                answer_txt: "CallMeKevin",
                isCorrect: false
            },
            {
                answer_txt: "Markiplier",
                isCorrect: false
            },
            {
                answer_txt: "RTGames",
                isCorrect: false
            },
            {
                answer_txt: "PewDiePie",
                isCorrect: true
            }
        ]
    },
    {//6
        topic: "Gaming",
        prompt: "What is the game that recieved the most backlash for an unfinished release?",
        answers: [
            {
                answer_txt: "Pokemon Sword and Shield",
                isCorrect: false
            },
            {
                answer_txt: "Yooka-Laylee",
                isCorrect: false
            },
            {
                answer_txt: "Super Mario Tennis SMASH",
                isCorrect: false
            },
            {
                answer_txt: "Cyberpunk 2077",
                isCorrect: true
            }
        ]
    },
    {//7
        topic: "Gaming",
        prompt: "What is Nintendo's best selling franchise on all of there platforms?",
        answers: [
            {
                answer_txt: "Pokemon",
                isCorrect: false
            },
            {
                answer_txt: "Donkey Kong",
                isCorrect: false
            },
            {
                answer_txt: "Legends of Zelda",
                isCorrect: false
            },
            {
                answer_txt: "Mario",
                isCorrect: true
            }
        ]
    },
    {//8
        topic: "Gaming",
        prompt: "What was the very first video game ever made for the public?",
        answers: [
            {
                answer_txt: "Tetris",
                isCorrect: false
            },
            {
                answer_txt: "Space Invaders",
                isCorrect: false
            },
            {
                answer_txt: "Super Mario Bros",
                isCorrect: false
            },
            {
                answer_txt: "Pong",
                isCorrect: true
            }
        ]
    },
    {//9
        topic: "Gaming",
        prompt: "What mythology is the game Skyrim based upon?",
        answers: [
            {
                answer_txt: "Roman Mythology",
                isCorrect: false
            },
            {
                answer_txt: "Gaelic Mythology",
                isCorrect: false
            },
            {
                answer_txt: "Slavic Mythology",
                isCorrect: false
            },
            {
                answer_txt: "Norse Mythology",
                isCorrect: true
            }
        ]
    },
    {//50
        topic: "Gaming",
        prompt: "In the game TitanFall 2 in the main campaign what is the Titans Name?",
        answers: [
            {
                answer_txt: "Legion",
                isCorrect: false
            },
            {
                answer_txt: "Ronin",
                isCorrect: false
            },
            {
                answer_txt: "Tone",
                isCorrect: false
            },
            {
                answer_txt: "BT",
                isCorrect: true
            }
        ]
    },
    {
        topic: "Gaming",
        prompt: "What is the most popular game in the Simulation Genre",
        answers: [
            {
                answer_txt: "Cities: Skylines",
                isCorrect: false
            },
            {
                answer_txt: "American Truck Simulator",
                isCorrect: false
            },
            {
                answer_txt: "The Sims 4",
                isCorrect: false
            },
            {
                answer_txt: "Euro Truck Simulator 2",
                isCorrect: true
            }
        ]
    },
    {//1
        topic: "Nations",
        prompt: "Which of these countries has only one Capitol?",
        answers: [
            {
                answer_txt: "South Africa",
                isCorrect: false
            },
            {
                answer_txt: "The Netherlands",
                isCorrect: false
            },
            {
                answer_txt: "Cote d'Ivoire",
                isCorrect: false
            },
            {
                answer_txt: "Sudan",
                isCorrect: true
            }
        ]
    },
    {//2
        topic: "Nations",
        prompt: "What was the capitol of East Germany during Soviet Occupation?",
        answers: [
            {
                answer_txt: "Nuremburg",
                isCorrect: false
            },
            {
                answer_txt: "Dresden",
                isCorrect: false
            },
            {
                answer_txt: "Munich",
                isCorrect: false
            },
            {
                answer_txt: "East Berlin",
                isCorrect: true
            }
        ]
    },
    {//3
        topic: "Nations",
        prompt: "Which of these Nations are part of the UK Commonwealth?",
        answers: [
            {
                answer_txt: "United states, Canada, Mexico",
                isCorrect: false
            },
            {
                answer_txt: "Hong Kong, Macau, Singnapore",
                isCorrect: false
            },
            {
                answer_txt: "Egypt, Isreal, Afghanistan",
                isCorrect: false
            },
            {
                answer_txt: "Hong Kong, Jamacia, South Africa",
                isCorrect: true
            }
        ]
    },
    {//4
        topic: "Nations",
        prompt: "What is the most populas metro area in the United States?",
        answers: [
            {
                answer_txt: "Dallas Metro Area",
                isCorrect: false
            },
            {
                answer_txt: "Los Angeles Metro Area",
                isCorrect: false
            },
            {
                answer_txt: "Chicago Metro Area",
                isCorrect: false
            },
            {
                answer_txt: "New York City Metro Area",
                isCorrect: true
            }
        ]
    },
    {//5
        topic: "Nations",
        prompt: "What is the youngest city in Australia?",
        answers: [
            {
                answer_txt: "Perth",
                isCorrect: false
            },
            {
                answer_txt: "Melbourne",
                isCorrect: false
            },
            {
                answer_txt: "Canberra",
                isCorrect: false
            },
            {
                answer_txt: "Springfield",
                isCorrect: true
            }
        ]
    },
    {//6
        topic: "Nations",
        prompt: "What are the three capitols of South Africa",
        answers: [
            {
                answer_txt: "Johannesburg, Durban, Port Elizabeth",
                isCorrect: false
            },
            {
                answer_txt: "Soweto, Benoni, East London",
                isCorrect: false
            },
            {
                answer_txt: "Vereeniging, Pietermaritzburg, Tembisa",
                isCorrect: false
            },
            {
                answer_txt: "Cape Town, Pretoria, Bloemfontein",
                isCorrect: true
            }
        ]
    },
    {//7
        topic: "Nations",
        prompt: "What is the biggest city by area in Canada?",
        answers: [
            {
                answer_txt: "Ottawa",
                isCorrect: false
            },
            {
                answer_txt: "Montreal",
                isCorrect: false
            },
            {
                answer_txt: "Toronto",
                isCorrect: false
            },
            {
                answer_txt: "La Tuque",
                isCorrect: true
            }
        ]
    },
    {//8
        topic: "Nations",
        prompt: "What year did South African Apartheid end?",
        answers: [
            {
                answer_txt: "1945",
                isCorrect: false
            },
            {
                answer_txt: "1965",
                isCorrect: false
            },
            {
                answer_txt: "2006",
                isCorrect: false
            },
            {
                answer_txt: "1990",
                isCorrect: true
            }
        ]
    },
    {//9
        topic: "Nations",
        prompt: "Which of these countries were not part of the Warsaw Pact?",
        answers: [
            {
                answer_txt: "Poland",
                isCorrect: false
            },
            {
                answer_txt: "Bulgaria",
                isCorrect: false
            },
            {
                answer_txt: "Romainia",
                isCorrect: false
            },
            {
                answer_txt: "Yugoslavia",
                isCorrect: true
            }
        ]
    },
    {//60
        topic: "Nations",
        prompt: "What nation is known for being the worse European Union Country to live in?",
        answers: [
            {
                answer_txt: "Greece",
                isCorrect: false
            },
            {
                answer_txt: "North Macedonia",
                isCorrect: false
            },
            {
                answer_txt: "Ireland",
                isCorrect: false
            },
            {
                answer_txt: "Slovenia",
                isCorrect: true
            }
        ]
    },
    {
        topic: "Nations",
        prompt: "What country is within the borders of South Africa?",
        answers: [
            {
                answer_txt: "Zimbabwe",
                isCorrect: false
            },
            {
                answer_txt: "Botswana",
                isCorrect: false
            },
            {
                answer_txt: "Swaziland",
                isCorrect: false
            },
            {
                answer_txt: "Lesotho",
                isCorrect: true
            }
        ]
    },
    {
        topic: "",
        prompt: "",
        answers: [

        ]
    }
]


function shuffle(array)
{
    var current_index = array.length;
    var temp_value, rand_index;

    while(0 != current_index)
    {
        rand_index = Math.random() * current_index | 0;
        current_index--;

        temp_value = array[current_index];
        array[current_index] = array[rand_index];
        array[rand_index] = temp_value;
    }
    return array;
}


onLoad();

