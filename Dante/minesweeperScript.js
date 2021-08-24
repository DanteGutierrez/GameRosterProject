let row = 12;
let column = 12;
let grid = [];
let mines = 20;
let xray = false;
let trueTiles = [];
let queue = [];
let running = false;
let time = 0;
let leaderBoard = [["Dante", 20, 100], ["Randy", 20, 100], ["Nicole", 20, 100], ["Eric", 20, 100]];

const setResultText = (text) => {
    document.getElementById("Result").innerHTML = text;
};
const randomizeArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index + 1));
        let temporary = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = temporary;
    }
    return array;
};
const countBoard = () => {
    for (let r = 0; r < grid.length; r++) { // Row Iteration
        for (let c = 0; c < grid[r].length; c++) { // Column Iteration
            let counter = 0; // Will keep track of surrounding mines
            if (grid[r][c] != 'M') {
                for (let modR = -1; modR < 2; modR++) { // Vision Up/Down
                    for (let modC = -1; modC < 2; modC++) { // Vision Left/Right
                        if (r + modR >= 0
                            && c + modC >= 0
                            && r + modR < grid.length
                            && c + modC < grid[r].length
                            && !(modR == 0 && modC == 0)) {
                            if (grid[r + modR][c + modC] == 'M') {
                                counter++
                            }
                        }
                    }
                }
                grid[r][c] = counter;
            }
        }
    }
};
const arrayToGrid = (array) => {
    grid = [];
    for (let r = 0; r < row; r++) {
        grid[r] = [];
        for (let c = 0; c < column; c++) {
            grid[r][c] = array[(column * r) + c];
        }
    }
    countBoard();
};
const numberToString = (number) => {
    let string = '';
    switch (number) {
        case 0:
            string = 'zero_style'
            break;
        case 1:
            string = 'one_style';
            break;
        case 2:
            string = 'two_style';
            break;
        case 3:
            string = 'three_style';
            break;
        case 4:
            string = 'four_style';
            break;
        case 5:
            string = 'five_style';
            break;
        case 6:
            string = 'six_style';
            break;
        case 7:
            string = 'seven_style';
            break;
        case 8:
            string = 'eight_style';
            break;
        case 'M':
            string = 'mine_style';
            break;
        default:
            break;
    }
    return string;
};
const gameLost = () => {
    running = false;
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            let box = trueTiles[r][c];
            if (grid[r][c] == 'M') {
                if (box.classList.contains("flagged")) {
                    box.classList.remove("flagged");
                }
                singleTile(r, c);
            }
        }
    }
    setResultText("Loser...");
};
const gameWon = () => {
    running = false;
    if (document.getElementById("Result").innerHTML != "Cheater!") {
        setResultText("Winner!");
        document.getElementById("Submit").hidden = false;
    }
};
const singleTile = (r, c) => {
    let box = trueTiles[r][c];
    let boxValue = grid[r][c];
    if (!box.classList.contains("flagged")) {
        box.classList.add(numberToString(boxValue));
        box.innerHTML = (boxValue == 0 || boxValue == 'M' ? '' : boxValue);
    }
    return boxValue;
};
const queueTiles = (r, c) => {
    if (!trueTiles[r][c].classList.contains("flagged")) {
        // Start the Queue
        if (queue[0] == null) {
            queue[0] = ([r, c]);
        }
        if (grid[r][c] == 0) { // Check if the tile is blank
            for (let modR = -1; modR < 2; modR++) { // Vision Up/Down
                for (let modC = -1; modC < 2; modC++) { // Vision Left/Right
                    if (r + modR >= 0 && c + modC >= 0
                        && r + modR < grid.length
                        && c + modC < grid[r].length
                        && !trueTiles[r + modR][c + modC].classList.contains("revealed")) {
                        let error = false;
                        // Bad way of checking if tile is already Queue'd
                        queue.forEach(coord => {
                            if (coord[0] == r + modR && coord[1] == c + modC) {
                                error = true;
                            }
                        });
                        if (!error) {
                            queue.push([r + modR, c + modC]);
                        }
                    }
                }
            }
        }
    }
};
const revealTiles = () => {
    while (queue.length > 0) {
        let box = trueTiles[queue[0][0]][queue[0][1]];
        if (!box.classList.contains("flagged")) {
            boxValue = singleTile(queue[0][0], queue[0][1]);
            if (boxValue == 'M') {
                box.classList.add("loserTile");
                gameLost();
            }
            box.classList.add("revealed");
            queueTiles(queue[0][0], queue[0][1]);
            if (document.getElementsByClassName("revealed").length == (row * column) - mines) {
                gameWon();
            }
        }
        queue.shift();
    }
};
const updateMines = () => {
    let hundreds = document.getElementById("MHundreds");
    let tens = document.getElementById("MTens");
    let ones = document.getElementById("MOnes");
    let counter = mines - document.getElementsByClassName("flagged").length;
    if (running) {
        if (counter >= 100) {
            hundreds.innerHTML = counter.toString()[0];
            tens.innerHTML = counter.toString()[1];
            ones.innerHTML = counter.toString()[2];
        }
        else if (counter >= 10) {
            hundreds.innerHTML = 0;
            tens.innerHTML = counter.toString()[0];
            ones.innerHTML = counter.toString()[1];
        }
        else {
            hundreds.innerHTML = 0;
            tens.innerHTML = 0;
            ones.innerHTML = counter.toString()[0];
        }
    }
};
const flagTile = (r, c) => {
    let box = trueTiles[r][c];
    if (!box.classList.contains("revealed")) {
        if (box.classList.contains("flagged")) {
            box.classList.remove("flagged");
            updateMines();
        }
        else if(document.getElementsByClassName("flagged").length < mines){
            box.classList.add("flagged");
            updateMines();
        }    
    }
};
const secondPassed = () => {
    let hundreds = document.getElementById("THundreds");
    let tens = document.getElementById("TTens");
    let ones = document.getElementById("TOnes");
    if (running) {
        time++;
        if (time >= 100) {
            hundreds.innerHTML = time.toString()[0];
            tens.innerHTML = time.toString()[1];
            ones.innerHTML = time.toString()[2];
        }
        else if (time >= 10) {
            hundreds.innerHTML = 0;
            tens.innerHTML = time.toString()[0];
            ones.innerHTML = time.toString()[1];
        }
        else {
            hundreds.innerHTML = 0;
            tens.innerHTML = 0;
            ones.innerHTML = time.toString()[0];
        }
    }
};
const orderLeaderboard = () => {
    let tempBoard = [];
    for (let index = 0; index < leaderBoard.length; index++) {
        let temp = leaderBoard[index];
        let inputIndex = 0;
        let error = true;
        for (let secondIndex = 0; secondIndex < tempBoard.length; secondIndex++) {
            if (temp[2] < tempBoard[secondIndex][2]) {
                inputIndex = secondIndex;
                error = false;
                break;
            }
        }
        if (error) {
            tempBoard.push(temp);
        }
        else {
            tempBoard.splice(inputIndex, 0, temp);
        }
    }
    leaderBoard = tempBoard;
};
const leaderBoardUpdate = () => {
    let theBoard = document.getElementById("Leaderboard");
    theBoard.innerHTML = '';
    orderLeaderboard();
    for (let index = 0; index < leaderBoard.length; index++) {
        theBoard.innerHTML += "<div class='row noSelect'>" + leaderBoard[index][0] + ": " + leaderBoard[index][1] + " mine(s), " + leaderBoard[index][2] + " second(s)</div>";
    }
};
const loadBoard = () => {
    document.getElementById("Submit").hidden = true;
    let board = document.getElementById("Board");
    board.innerHTML = '';
    let tempArray = [];
    // Fill array with mines
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            let tempMine = 'M';
            if ((column * r) + c >= mines) {
                tempMine = '';
            }
            tempArray[(column * r) + c] = tempMine;
        }
    }
    arrayToGrid(randomizeArray(tempArray));
    // Tile Display Grid
    for (let r = 0; r < row; r++) {
        board.innerHTML += '<div class="row boardRow"></div>';
        for (let c = 0; c < column; c++) {
            let tile = document.getElementsByClassName("boardRow")[r];
            tile.innerHTML += '<div class="box"></div>';
        }
    }
    // Tile Association Grid
    trueTiles = [];
    tempArray = document.getElementsByClassName("box");
    for (let r = 0; r < row; r++) {
        trueTiles[r] = [];
        for (let c = 0; c < column; c++) {
            trueTiles[r][c] = tempArray[(column * r) + c];
            // Tile Click Event
            trueTiles[r][c].addEventListener("click", (evt) => {
                if (running) {
                    if (evt.shiftKey) {
                        flagTile(r, c);
                    }
                    else {
                        queueTiles(r, c);
                        revealTiles();
                    }
                }
            });
        }
    }
    setResultText(" ");
    if (xray) {
        xrayBoard();
    }
    queue = [];
    running = true;
    time = -1;
    secondPassed();
    updateMines();
    leaderBoardUpdate();
};
const xrayBoard = () => {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            let box = trueTiles[r][c];
            let boxValue = grid[r][c];
            if (xray) {
                singleTile(r, c);
            }
            else {
                if (!box.classList.contains("revealed")
                    && !box.classList.contains("flagged")) {
                    if (box.classList.contains(numberToString(boxValue))) {
                        box.classList.remove(numberToString(boxValue));
                    }
                    box.innerHTML = '';
                }
            }
        }
    }
    if (xray) {
        setResultText("Cheater!");
    }
};
loadBoard();
document.getElementById("AddColumn").addEventListener("click", (evt) => {
    column++;
    loadBoard();
});
document.getElementById("AddRow").addEventListener("click", (evt) => {
    row++;
    loadBoard();
});
document.getElementById("SubColumn").addEventListener("click", (evt) => {
    if (column > 1) {
        column--;
        loadBoard();
    }
});
document.getElementById("SubRow").addEventListener("click", (evt) => {
    if (row > 1) {
        row--;
        loadBoard();
    }
});
document.getElementById("AddMine").addEventListener("click", (evt) => {
    mines++;
    loadBoard();
});
document.getElementById("SubMine").addEventListener("click", (evt) => {
    if (mines > 1) {
        mines--;
        loadBoard();
    }
});
document.getElementById("Cheater").addEventListener("click", (evt) => {
    xray = !xray;
    xrayBoard();
});
document.getElementById("Reset").addEventListener("click", (evt) => {
    loadBoard();
});
document.getElementById("Submit").addEventListener("click", (evt) => {
    leaderBoard.unshift([document.getElementById("NameValue").value, mines, time]);
    leaderBoardUpdate();
    document.getElementById("Submit").hidden = true;
});
document.getElementById("ShowSettings").addEventListener("click", (evt) => {
    let items = document.getElementsByClassName("settings");
    for (let index = 0; index < items.length; index++) {
        items[index].hidden = !items[index].hidden;
    }
    document.getElementById("ShowSettings").innerHTML = items[0].hidden ? "▼" : "▲";
});
let timer = setInterval(secondPassed, 1000);
