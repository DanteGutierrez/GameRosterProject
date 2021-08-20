
//Trivia Menu Objects
let cate_one;
let cate_two;
let cate_four;
let cate_five;
let cate_six;
let cate_eight;
let cate_nine;

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
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_two")
    {
        category = 2;
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_four")
    {
        category = 3;
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_five")
    {
        category = 4;
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_six")
    {
        category = 5;
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_eight")
    {
        category = 6;
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }else if(evt.target.id == "cate_nine")
    {
        category = 7;
        sessionStorage.setItem(player.ques_category, category);
        window.location.replace("trivia.html");
    }
    
    
}

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
        cate_nine = document.getElementById("cate_nine");

        cate_one.addEventListener("click", menuOnClick);
        cate_two.addEventListener("click", menuOnClick);
        cate_four.addEventListener("click", menuOnClick);
        cate_five.addEventListener("click", menuOnClick);
        cate_six.addEventListener("click", menuOnClick);
        cate_eight.addEventListener("click", menuOnClick);
        cate_nine.addEventListener("click", menuOnClick);
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
        player.ques_category = sessionStorage.getItem(player.ques_category);
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
    ques_id: null,
    difficult: 0,
}

let question_category = [
    null, "History", "Geography", "Sports", "Pop Culture", "Gaming", "Nations", "Foods", "Music"
]

//[ans1, ans2, ans3, correctans]
//question_array[0][1][0][question][ans]
let question_array = [
    ["easy",
        [//History
            [//1
                "When did the American Revolutionary War start and end?", 
                [
                    "1776-1777",
                    "1761-1765",
                    "1754-1763",
                    "1775-1783"
                ]
            ],
            [//2
                "When was Queen Elizabeth II crowned as queen of the common realm?",
                [
                    "June 2nd, 1943",
                    "November 3rd, 1947",
                    "April 8th, 1956",
                    "June 2nd, 1953"
                ]
            ],
            [//3
                "On September 20th, 1997, the Prime Minister of Australia defecated there pants, who were they?",
                [
                    "Kevin Rudd",
                    "Tony Abbott",
                    "Julia Gillard",
                    "Scott Morrison"
                ]
            ],
            [//4
                "What year did Canada gain independence from the UK?",
                [
                    "1810",
                    "1901",
                    "1875",
                    "1867"
                ]
            ],
            [//5
                "What country legalized gay marriage first in 2001?",
                [
                    "Sweden",
                    "Canada",
                    "Norway",
                    "The Netherlands"
                ]
            ],
            [//6
                "In what year did the Baltic States become part of the Soviet Union?",
                [
                    "1935",
                    "1945",
                    "1937",
                    "1940"
                ]
            ],
            [//7
                "What was the first city founded in the United States?",
                [
                    "Boston, Massachuesetts",
                    "St. Augusatine, Florida",
                    "Acoma Pueblo, New Mexico",
                    "Oraibi, Arizona"
                ]
            ],
            [//8
                "What year was the European Union founded?",
                [
                    "1991",
                    "1992",
                    "1994",
                    "1993"
                ]
            ],
            [//9
                "What year was the United Nations formed?",
                [
                    "1956",
                    "1973",
                    "1969",
                    "1945"
                ]
            ],
            [//10
                "When did the Berlin Wall fall in Germany?",
                [
                    "Novmeber 9th, 1991",
                    "November 9th, 1990",
                    "November 9th, 1988",
                    "November 9th, 1989"
                ]
            ]
        ],
        [//Geography
            [//1
                "What is the biggest mountain range on the American Continents?",
                [
                    "Rocky Mountains",
                    "Appalachian Mountains",
                    "Cascade Range",
                    "The Andes"
                ]
            ],
            [//2
                "What is the largest lake in the world?",
                [
                    "Lake Victoria",
                    "Lake Tanganyika",
                    "Lake Michigan",
                    "Casipian Sea"
                ]
            ],
            [//3
                "What mountian range seperates Asia from Europe?",
                [
                    "The Great Divide",
                    "Swiss Alps",
                    "Tibetan Range",
                    "The Urals"
                ]
            ],
            [//4
                "What are the coastal mountains that surround the cape of South Africa called?",
                [
                    "Rwenzori Mountains",
                    "Table Mountains",
                    "Atlas Mountains",
                    "Drakensberg Mountains"
                ]
            ],
            [//5
                "What is the largest river basin in the world?",
                [
                     "Nile River Delta",
                     "Mississippi River Basin",
                     "Yangtzhe River Basin",
                     "Amazon River Basin"
                ]
            ],
            [//6
                "What is the largest wetlands in the entire world?",
                [
                    "The Everglades, United States",
                    "Asmat Swamp, Indonesia",
                    "Okavango Delta, Botswana",
                    "The Pantanal, Brazil"
                ]
            ],
            [//7
                "What mountain range surrounds the Death Valley National Park in California?",
                [
                    "Rocky Mountains",
                    "Cascade Mountains",
                    "Columbian Mountains",
                    "Sierra Nevada Mountains"
                ]
            ],
            [//8
                "Where is the largest salt flat in the United States located and what is it called?",
                [
                    "Death Valley Salt Flats, California",
                    "Great Salt Plains, Oklahoma",
                    "Alkali Sink, California",
                    "Bonneville Salt Flats, Utah"
                ]
            ],
            [//9
                "What Canadian province is with in the ring of fire?",
                [
                    "Ottawa",
                    "Alberta",
                    "The Yukon",
                    "British Columbia"
                ]
            ],
            [//10
                "Which province of South Africa is the most populated?",
                [
                    "Eastern Cape",
                    "Western Cape",
                    "KwaZulu-Natal",
                    "Guateng"
                ]
            ]
        ],
        [//Sports
            [//1
                "What country is known for inventing football, or commonly known as Soccer in North America?",
                [
                    "Germany",
                    "Ireland",
                    "Sweden",
                    "England"
                ]
            ],
            [//2
                "Who won the very first basketball play offs, back 1947?",
                [
                    "Baltimore Bullets",
                    "Chicago Stags",
                    "New York Knicks",
                    "Philidalphia Warriors"
                ]
            ],
            [//3
                "What country won the first FIFA World Cup in 1930?",
                [
                    "Germany",
                    "Paraguay",
                    "Brazil",
                    "Uruguay"
                ]
            ],
            [//4
                "What is the most popular and most watched sport in Australia?",
                [
                    "Rugby",
                    "Kricket",
                    "Badmitten",
                    "Football"
                ]
            ],
            [//5
                "What is the most watched sport in the United States?",
                [
                    "Baseball",
                    "Basketball",
                    "Hockey",
                    "American Football"
                ]
            ],
            [//6
                "Who won the second most golds in the 1984 Olympics?",
                [
                    "Russia",
                    "South Korea",
                    "United States",
                    "Romania"
                ]
            ],
            [//7
                "What city was the 2008 Olympics held?",
                [
                    "New York, United States",
                    "Tokyo, Japan",
                    "Cape Town, South Africa",
                    "Beijing, China"
                ]
            ],
            [//8
                "What city in the United States has the most teams for any sport?",
                [
                    "Boston, Massachuestts",
                    "Los Angeles, California",
                    "Dallas, Texas",
                    "New York City, New York"
                ]
            ],
            [//9
                "Who was the person who won the very first Gold Medal for South Africa in the 1908 Olympics?",
                [
                    "Mei Sheppard",
                    "Emil Voigt",
                    "Johnny Hayes",
                    "Reggie Walker"
                ]
            ],
            [//10
                "Which team has the most wins in the Superbowl?",
                [
                    "New York Giants",
                    "Miami Dolphins",
                    "Pittsburgh Steelers",
                    "New England Patriots"
                ]
            ]
        ],
        [//Pop Culture
            [//1
                "As of 2021 who is the most subscribed singlular YouTuber?",
                [
                    "Dude Perfect",
                    "MrBeast",
                    "Ninja",
                    "Pewdiepie"
                ]
            ],
            [//2
                "As of 2021 what is the most streamed song on Spotify?",
                [
                    "Blinding Lights, The Weekend",
                    "Dance Monkey, Tones and I",
                    "Rockstar, Post Malone",
                    "Shape of You, Ed Sheeran"
                ]
            ],
            [//3
                "On Steam what is the most played game in terms of hours played Globally?",
                [
                    "Dota 2",
                    "Apex Legends",
                    "PUBG",
                    "CSGO"
                ]
            ],
            [//3
                "What is the most popular Streaming service for videos and shows?",
                [
                    "Netflix",
                    "Hulu",
                    "Amazon Prime Video",
                    "YouTube"
                ]
            ],
            [//4
                "In the popular show The Mandalorian, what is Baby Yoda's Name?",
                [
                    "Baby Yoda",
                    "Jabba the Baby",
                    "JarJar Destroyer of Worlds",
                    "Grogu"
                ]
            ],
            [//5
                "Who is the most popular Twitch Streamer as of 2021?",
                [
                    "XQC",
                    "Critikal",
                    "PayMoneyWubby",
                    "Ninja"
                ]
            ],
            [//6
                "What is the most visit country by international Tourist?",
                [
                    "Mexico",
                    "Canada",
                    "Argentina",
                    "United States"
                ]
            ],
            [//7
                "What city is known as the Music Capital of the World?",
                [
                    "Memphis, Tennessee",
                    "Charlotte, North Carolina",
                    "Atlanta, Georgia",
                    "Austin, Texas"
                ]
            ],
            [//8
                "What was the worst movie of 2021 by there Meta Critic Score?",
                [
                    "Breaking News in Yuba County",
                    "American Skin",
                    "Music",
                    "Vanquish"
                ]
            ],
            [//9
                "Who or what band has the most platinum records of all time?",
                [
                    "The Beatles",
                    "Elton John",
                    "The Rolling Stones",
                    "Neil Diamond"
                ]
            ],
            [//10
                "What is the most popular tourist attraction in the United States?",
                [
                    "Times Square, New York City",
                    "Las Vegas Strip, Las Vegas",
                    "Golden Gate Bridge, San Fransico",
                    "Walt Disney World, Orlando"
                ]
            ]
        ],
        [//Gaming
            [//1
                "What was the first game released on the Original Xbox back in 2001?",
                [
                    "Grand Theft Auto 3",
                    "Half Life 2",
                    "Counter Strike",
                    "Halo: Combat Evolved"
                ]
            ],
            [//2
                "What was the first E-Sports game ever played?",
                [
                    "League of Legends",
                    "Dota 2",
                    "Pac-Man",
                    "Red Annihilation"
                ]
            ],
            [//3
                "What game had a contriversal release on PC?",
                [
                    "Elder Scrolls V: Skyrim",
                    "Sid Meier's: Civilization V",
                    "Fallout 76",
                    "Grand Theft Auto: San Andreas"
                ]
            ],
            [//4
                "What is the most streamed and watched game on Twitch?",
                [
                    "Apex Legneds",
                    "Valorant",
                    "League of Legends",
                    "Grand Theft Auto V"
                ]
            ],
            [//5
                "Who is the most watched gaming channel on YouTube?",
                [
                    "CallMeKevin",
                    "Markiplier",
                    "RTGames",
                    "PewDiePie"
                ]
            ],
            [//6
                "What is the game that recieved the most backlash for an unfinished release?",
                [
                    "Pokemon Sword and Shield",
                    "Yooka-Laylee",
                    "Super Mario Tennis SMASH",
                    "Cyberpunk 2077"
                ]
            ],
            [//7
                "What is Nintendo's best selling franchise on all of there platforms?",
                [
                    "Pokemon",
                    "Donkey Kong",
                    "Legends of Zelda",
                    "Mario"
                ]
            ],
            [//8
                "What was the very first video game ever made for the public?",
                [
                    "Tetris",
                    "Space Invaders",
                    "Super Mario Bros",
                    "Pong"
                ]
            ],
            [//9
                "What mythology is the game Skyrim based upon?",
                [
                    "Roman Mythology",
                    "Gaelic Mythology",
                    "Slavic Mythology",
                    "Norse Mythology"
                ]
            ],
            [//10
                "In the game TitanFall 2 in the main campaign what is the Titans Name?",
                [
                    "Legion",
                    "Ronin",
                    "Tone",
                    "BT"
                ]
            ]
        ],
        [//Nations
            [//1
                "Which of these countries has only one Capitol?",
                [
                    "South Africa",
                    "The Netherlands",
                    "Cote d'Ivoire",
                    "Sudan"
                ]
            ],
            [//2
                "What was the capitol of East Germany during Soviet Occupation?",
                [
                    "Nuremburg",
                    "Dresden",
                    "Munich",
                    "East Berlin"
                ]
            ],
            [//3
                "Which of these Nations are part of the UK Commonwealth?",
                [
                    "United states, Canada, Mexico",
                    "Hong Kong, Macau, Singnapore",
                    "Egypt, Isreal, Afghanistan",
                    "Hong Kong, Jamacia, South Africa"
                ]
            ],
            [//4
                "What is the most populas metro area in the United States?",
                [
                    "Dallas Metro Area",
                    "Los Angeles Metro Area",
                    "Chicago Metro Area",
                    "New York City Metro Area"
                ]
            ],
            [//5
                "What is the youngest city in Australia?",
                [
                    "Perth",
                    "Melbourne",
                    "Canberra",
                    "Springfield"
                ]
            ],
            [//6
                "What are the three capitols of South Africa",
                [
                    "Johannesburg, Durban, Port Elizabeth",
                    "Soweto, Benoni, East London",
                    "Vereeniging, Pietermaritzburg, Tembisa",
                    "Cape Town, Pretoria, Bloemfontein"
                ]
            ],
            [//7
                "What is the biggest city by area in Canada?",
                [
                    "Ottawa",
                    "Montreal",
                    "Toronto",
                    "La Tuque"
                ]
            ],
            [//8
                "What year did South African Apartheid end?",
                [
                    "1945",
                    "1965",
                    "2006",
                    "1990"
                ]
            ],
            [//9
                "Which of these countries were not part of the Warsaw Pact?",
                [
                    "Poland",
                    "Bulgaria",
                    "Romainia",
                    "Yugoslavia"
                ]
            ]
        ],
        [//10
            "What nation is known for being the worse European Union Country to live in?",
            [
                "Greece",
                "North Macedonia",
                "Ireland",
                "Slovenia"
            ]
        ]
    ],
    [//Food
        [//1
            "What is the main ingredients of the sandwich called Kota",
            [
                "Bacon, Eggs and Mayo",
                "Stewed Meat and Cabbage",
                "Crisps and cucumbers",
                "Fish, Chips, Egg, and seasoned Buns"
            ]
        ],
        [//2
            "What is the nation that Sausages come from?",
            [
                "Germany",
                "Rome",
                "Iraq",
                "Saudi Arabia"
            ]
        ],
        [//3
            "Which of these vegetables do not come from the same plant",
            [
                "Brusselsprouts",
                "Cabbage",
                "Broccoli",
                "Lettuce"
            ]
        ],
        [//4
            "What is the most popular non-alchoholic drink in Russia?",
            [
                "Coffee",
                "Tea",
                "NA-Kvass",
                "Kompot"
            ]
        ],
        [//5
            "What food/drink makes one of Boston's nickname Bean Town?",
            [
                "Coffee",
                "Green Beans",
                "Mollasses",
                "Baked Beans"
            ]
        ],
        [//6
            "What food is steriotypically American?",
            [
                "Chips",
                "Crisp",
                "Hot Dogs",
                "Hamburgers"
            ]
        ],
        [//7
            "What is the most famous food that Canada has ever made?",
            [
                "Beaver Tails",
                "Toutierre",
                "Fiddleheads",
                "Poutine"
            ]
        ],
        [//8
            "What is the most steriotypical food made by New Englanders?",
            [
                "Baked Beans",
                "Lobster Rolls",
                "Fish and Chips",
                "Clam Chowder"
            ]
        ],
        [//9
            "What are the ingredients of Fairy Bread",
            [
                "Vegemite, Butter, and Bread",
                "Butter, Garlic Salt, and Bread",
                "Sugar, Butter, and Bread",
                "Sprinkle, Butter, and Bread"
            ]
        ],
        [//10
            "What is the national food of Russia?",
            [
                "Chebureki",
                "Zharkoye",
                "Halva",
                "Pelmeni"
            ]
        ]
    ]
]

onLoad();
