let row = 3;
let column = 4;
let grid = [];

const loadBoard = () => {
    var board = document.getElementById("Board");
    board.innerHTML = '';
    grid = [];
    for (var r = 0; r < row; r++) {
        board.innerHTML += '<div class="row"></div>';
        grid[r] = [];
        for (var c = 0; c < column; c++) {
            grid[r][c] = 0;
            document.getElementsByClassName("row")[r].innerHTML += '<div class="box"></div>';
        }
    }
}
loadBoard();
document.getElementById("AddColumn").addEventListener("click", (evt) => {
    column++;
    loadBoard();
});