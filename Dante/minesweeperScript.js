let row = 12;
let column = 12;
let grid = [];
let mines = 20;
let xray = false;
let trueTiles = [];

const randomizeArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index + 1));
        let temporary = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = temporary;
    }
    return array;
}
const countBoard = () => {
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            let counter = 0;
            if (grid[r][c] != 'M') {
                for (let modR = -1; modR < 2; modR++) {
                    for (let modC = -1; modC < 2; modC++) {
                        if (r + modR >= 0 && c + modC >= 0 && r + modR < grid.length && c + modC < grid[r].length && !(modR == 0 && modC == 0)) {
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
}
const arrayToGrid = (array) => {
    grid = [];
    for (let r = 0; r < row; r++) {
        grid[r] = [];
        for (let c = 0; c < column; c++) {
            grid[r][c] = array[(column * r) + c];
        }
    }
    countBoard();
}
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
}
const loadBoard = () => {
    var board = document.getElementById("Board");
    board.innerHTML = '';
    let tempArray = [];
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            tempArray[(column * r) + c] = (column * r) + c < mines ? 'M' : '';
        }
    }
    arrayToGrid(randomizeArray(tempArray));
    for (let r = 0; r < row; r++) {
        board.innerHTML += '<div class="row boardRow"></div>';
        for (let c = 0; c < column; c++) {
            let tile = document.getElementsByClassName("boardRow")[r];
            tile.innerHTML += '<div class="box"></div>';
        }
        if (xray) {
            xrayBoard();
        }
    }
    trueTiles = [];
    tempArray = document.getElementsByClassName("box");
    for (let r = 0; r < row; r++) {
        trueTiles[r] = [];
        for (let c = 0; c < column; c++) {
            trueTiles[r][c] = tempArray[(column * r) + c];
            trueTiles[r][c].addEventListener("click", (evt) => {
                trueTiles[r][c].classList.add(numberToString(grid[r][c]));
                trueTiles[r][c].innerHTML = (grid[r][c] == 0 ? '' : grid[r][c]);
            });
        }
    }
}
const xrayBoard = () => {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < column; c++) {
            trueTiles[r][c].classList.add(numberToString(grid[r][c]));
            trueTiles[r][c].innerHTML = (grid[r][c] == 0 ? '' : grid[r][c]);
        }
    }
}
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
    xrayBoard();
});
