const tetris_canvas = document.getElementById("tetris_canvas");
const context = tetris_canvas.getContext("2d");
const score_board = document.getElementById("score");

//This enlarges everything by 20 times
context.scale(20, 20);

//This sets up the colour of the canvas
context.fillStyle = "#020122";
//This sets the size of the entire canvas
context.fillRect(0, 0, tetris_canvas.width, tetris_canvas.height);

function arenaSweep()
{
    let rowCount = 1;
    outer: for(let y = arena.length - 1; y > 0; y--)
    {
        for(let x = 0;x < arena[y].length; x++)
        {
            if(arena[y][x] == 0)
            {
                continue outer;
            }
        }
        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        y++;

        player.score += rowCount * 10;
        rowCount *=2;
    }
}

function collision(arena, player)
{
    const [m, o] = [player.matrix, player.pos];
    for(let y = 0; y <m.length; y++)
    {
        for(let x = 0; x < m[y].length; x++)
        {
            if(m[y][x] != 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) != 0)
            {
                return true;
            }
        }
    }
    return false;
}
//Creates Matrixs based on the height and width which helps in the creation of blocks
function createMatrix(w, h)
{
    const matrix = [];
    while (h--)
    {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type)
{
    if(type == "tee")
    {
        return[
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ]
    }
    else if(type == "box")
    {
        return[
            [2, 2],
            [2, 2],
        ]

    }
    else if(type == "left")
    {
        return[
            [0, 3, 0],
            [0, 3, 0],
            [0, 3, 3],
        ]
    }
    else if(type == "right")
    {
        return[
            [0, 4, 0],
            [0, 4, 0],
            [4, 4, 0],
        ]
    }
    else if(type == "es")
    {
        return[
            [0, 0, 0],
            [0, 5, 5],
            [5, 5, 0],
        ]
    }
    else if(type == "zed")
    {
        return[
            [0, 0, 0],
            [6, 6, 0],
            [0, 6, 6],
        ]
    }
    else if(type == "line")
    {
        return[
            [0, 7, 0, 0],
            [0, 7, 0, 0],
            [0, 7, 0, 0],
            [0, 7, 0, 0],
        ]
    }
}


function draw()
{
    //This clears the board to help with duplication of the piece
    context.fillStyle = "#020122";
    context.fillRect(0, 0, tetris_canvas.width, tetris_canvas.height);

    drawMatrix(arena, {x:0, y:0})
    drawMatrix(player.matrix, player.pos);
}

//This Funchtion Draws the Tee piece
function drawMatrix(matrix, offset)
{
    matrix.forEach((row, y) =>
    {
        row.forEach((value, x) =>
        {
            if(value != 0)
            {
                context.fillStyle = colours[value];
                context.fillRect(x + offset.x, y + offset.y, 1, 1)
            }
        });
    });
}

function merge(arena, player)
{
    player.matrix.forEach((row, y) => 
    {
        row.forEach((value, x) => 
        {
            if(value !=0)
            {
                arena[y + player.pos.y][x + player.pos.x] = value;
            }
        })
    })
}

function playerMove(dir)
{
    player.pos.x += dir;
    if(collision(arena, player))
    {
        player.pos.x -= dir;
    }
}

function playerDrop()
{
    player.pos.y++;
    dropCounter = 0
    if(collision(arena, player))
    {
        player.pos.y--;
        merge(arena, player);
        playerReset();
        arenaSweep();
        updateScore();
    }
}

function playerReset()
{
    const pieces = ["tee", "box", "left", "right", "es", "zed", "line"];
    player.matrix  = createPiece(pieces[7 * Math.random()| 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
    if(collision(arena, player))
    {
        arena.forEach(row => row.fill(0));
        player.score = 0;
        updateScore();
    }
}

function playerRotate(dir)
{
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while(collision(arena, player))
    {
        player.pos.x += offset
        offset = -(offset + (offset > 0 ? 1 : -1));
        if(offset > player.matrix[0].length)
        {
            rotate(player.matrix, -dir);
            player.pos.x = pos;
            return;
        }
    }
}

function rotate(matrix, dir)
{
    for(let y = 0; y < matrix.length; y++)
    {
        for(let x = 0; x < y; x++)
        {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }
    if(dir > 0)
    {
        matrix.forEach(row => row.reverse());
    }else
    {
        matrix.reverse();
    }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
//This function calls for an animation of the piece
function update(time = 0)
{
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if(dropCounter > dropInterval)
    {
        playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

const colours = [
    null,
    "#258EA6",
    "#549F93",
    "#9FAF90",
    "#E2B1B1",
    "#E2C2FF",
    "#D4E4BC",
    "#48233C",
];

function updateScore()
{
    score_board.innerText = player.score;
}

const arena = createMatrix(12, 20);


//This function sets the posistion of the piece
const player = 
{
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
}
document.addEventListener('keydown', event =>
{
    if(event.keyCode == 37)
    {
        playerMove(-1);
    }
    if(event.keyCode == 39)
    {
        playerMove(1)
    }
    if(event.keyCode == 40)
    {
        playerDrop();
    }
    if(event.keyCode == 81)
    {
        playerRotate(-1);
    }
    if(event.keyCode == 87)
    {
        playerRotate(1);
    }
})

playerReset();
update();
