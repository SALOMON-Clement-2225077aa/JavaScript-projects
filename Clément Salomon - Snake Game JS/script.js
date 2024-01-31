    // ---------------------------------------
    // |              VARIABLES              |
    // ---------------------------------------
    let apple = [];
    let snake = [[14,4],[14,5],[14,6]];

document.addEventListener("DOMContentLoaded", function () {
    // ----------------------------------------
    // |                 MAIN                 |
    // ----------------------------------------
    const grid = document.querySelector(".grid");
    console.log(grid);
    createGrid();

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
    }

