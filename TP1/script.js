// 1)
let tableau = [];
for (let i = 0; i < 20; i++) {
    let valeurAleatoire = Math.floor(Math.random() * (40 - -10 + 1)) + -10;(-10, 40);
    tableau.push(valeurAleatoire);
}
console.log(tableau);


let index = 0;
function displayNextValue() {
    if (index < tableau.length) {
        document.getElementById("value").innerText = tableau[index];
        index++;
        setTimeout(displayNextValue, 2000);
    }
}
