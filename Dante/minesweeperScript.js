let row = 3;
let column = 4;
let grid = [];
let mines = 50;

const loadBoard = () => {
    var board = document.getElementById("Board");
    board.innerHTML = '';
    grid = [];
    for (var r = 0; r < row; r++) {
        board.innerHTML += '<div class="row boardRow"></div>';
        grid[r] = [];
        for (var c = 0; c < column; c++) {
            grid[r][c] = 0;
            document.getElementsByClassName("boardRow")[r].innerHTML += '<div class="box"></div>';
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