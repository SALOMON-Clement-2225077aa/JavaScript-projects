// TODO :
// - dégradé du serpent de la tête à la queue

// ---------------------------------------
// |              VARIABLES              |
// ---------------------------------------
let apple = [];
let snake = [[14, 4], [14, 5], [14, 6]];
let direction = "R";
let gameInterval;

// --------------------------------------
// |          EVENT LISTENERS           |
// --------------------------------------
document.addEventListener("keydown", function (event) {
    const labelDirection = document.getElementById("direction");
    switch (event.key) {
        case "ArrowUp":
            if(direction!="D"){
                direction = "U";
            }
            break;
        case "ArrowDown":
            if(direction!="U") {
                direction = "D";
            }
            break;
        case "ArrowLeft":
            if(direction!="R") {
                direction = "L";
            }
            break;
        case "ArrowRight":
            if(direction!="L") {
                direction = "R";
            }
            break;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // ----------------------------------------
    // |                 MAIN                 |
    // ----------------------------------------
    const grid = document.querySelector(".grid");
    createGrid();
    rdApple();
    gameInterval = setInterval(gameLoop, 75);


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

    function displaySnake() {
        // Remove previous snake cells
        const snakeCells = document.querySelectorAll(".snake-body, .snake-head");
        snakeCells.forEach(cell => cell.classList.remove("snake-body", "snake-head"));

        // Reset background color for all cells
        const allCells = document.querySelectorAll(".grid div");
        allCells.forEach(cell => cell.style.backgroundColor = "");

        // Display new snake cells with gradient color
        for (let i = 0; i < snake.length; i++) {
            const SnakeCell = document.getElementById("cell-" + snake[i][0] + "-" + snake[i][1]);
            if (i == snake.length - 1) {
                SnakeCell.classList.add("snake-head");
            } else {
                // Calculate gradient color based on position in the snake
                const gradientValue = Math.floor((i / snake.length) * 255);
                const color = `rgb(${gradientValue}, 0, ${255 - gradientValue})`;
                SnakeCell.style.backgroundColor = color;
                SnakeCell.classList.add("snake-body");
            }
        }
    }


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

    function moveSnake() {
        const head = [...snake[snake.length - 1]];
        switch (direction) {
            case "U":
                head[0] = (head[0] - 1);
                break;
            case "D":
                head[0] = (head[0] + 1);
                break;
            case "L":
                head[1] = (head[1] - 1);
                break;
            case "R":
                head[1] = (head[1] + 1);
                break;
        }

        // Check for collision with self or edges
        if (snake.some(cell => cell[0] === head[0] && cell[1] === head[1])) {
            clearInterval(gameInterval);
            alert("Game Over! Vous avez cogné votre corp.");
            return;
        }
        if(head[0] >= 20 || head[1] >= 30 || head[0] < 0 || head[1] < 0) {
            clearInterval(gameInterval);
            alert("Game Over! Vous avez foncé dans un mur.");
            return;
        }

        // Move the snake
        snake.push(head);

        // Check for collision with apple
        if (head[0] === apple[0] && head[1] === apple[1]) {
            rdApple(); // Generate a new apple
        } else {
            snake.shift(); // Remove the tail if no apple is eaten
        }

        displaySnake(); // Update the display
    }

    function gameLoop() {
        moveSnake();
        console.log(snake);
    }
});
