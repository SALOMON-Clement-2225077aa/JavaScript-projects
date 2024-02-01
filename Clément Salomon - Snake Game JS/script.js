// TODO :
// - dégradé du serpent de la tête à la queue

// ---------------------------------------
// |              VARIABLES              |
// ---------------------------------------
let apple = [];
let snake = [[14,4],[14,5],[14,6]];
let direction = "R";

// --------------------------------------
// |          EVENT LISTENERS           |
// --------------------------------------
document.addEventListener("keydown", function (event) {
    const labelDirection = document.getElementById("direction");
    switch (event.key) {
        case "ArrowUp":
            labelDirection.textContent="U";
            direction="U";
            break;
        case "ArrowDown":
            labelDirection.textContent="D";
            direction="D";
            break;
        case "ArrowLeft":
            labelDirection.textContent="L";
            direction="L";
            break;
        case "ArrowRight":
            labelDirection.textContent="R";
            direction="R";
            break;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    // ----------------------------------------
    // |                 MAIN                 |
    // ----------------------------------------
    const grid = document.querySelector(".grid");
    console.log(grid);
    createGrid();
    for (let i = 0; i < snake.length; i++) {
        const SnakeCell = document.getElementById("cell-" + snake[i][0] + "-" + snake[i][1]);
        if (i == snake.length - 1) {
            SnakeCell.classList.add("snake-head");
        } else {
            SnakeCell.classList.add("snake-body");
        }
    }

    // ---------------------------------------
    // |              FUNCTIONS              |
    // ---------------------------------------
    function createGrid() {
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 30; col++) {
                const cell = document.createElement("div");
                if ((row % 2 == 0 && col % 2 == 0) || (row % 2 == 1 && col % 2 == 1)) {
                    cell.classList.add("darker-cell");
                } else {
                    cell.classList.add("lighter-cell");
                }
                cell.id = "cell-" + row + "-" + col;
                grid.appendChild(cell);
            }
        }
    }
});

    function rdApple() {
        const randomRow = Math.floor(Math.random() * 20);
        const randomCol = Math.floor(Math.random() * 30);
        const randomCell = document.getElementById("cell-" + randomRow + "-" + randomCol);
        randomCell.classList.add("apple");
        if (apple.length === 2) {
            const previousApple = document.getElementById("cell-" + apple[0] + "-" + apple[1]);
            previousApple.classList.remove("apple");
        }
        apple = [randomRow, randomCol];
        const score = document.getElementById("score");
        score.textContent = (snake.length - 3).toString();
    }

    function move(direction) {
        if(direction == "U") {

        }
        else if(direction == "D") {

        }
        else if(direction == "L") {

        }
        else if(direction == "R") {

        }
    }


