let row = 12;
let column = 12;
let grid = [];
let mines = 20;

const randomizeArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index + 1));
        let temporary = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = temporary;
    }
    return array;
}
const arrayToGrid = (array) => {
    grid = [];
    for (let r = 0; r < row; r++) {
        grid[r] = [];
        for (let c = 0; c < column; c++) {
            grid[r][c] = array[(column * r) + c];
        }
    }
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
            document.getElementsByClassName("boardRow")[r].innerHTML += '<div class="box">' + grid[r][c] + '</div>';
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