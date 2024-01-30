document.addEventListener("DOMContentLoaded", function () {
    const grid = document.querySelector(".grid");

    function createGrid() {
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 30; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                if( (row % 2 == 0 && col % 2 == 0) || (row % 2 == 1 && col % 2 == 1) ) {
                    cell.style.backgroundColor = '#d1d1d1'
                }
                else {
                    cell.style.backgroundColor = '#dcdcdc'
                }
                grid.appendChild(cell);
            }
        }
    }
    createGrid();

    console.log(grid);
});
