let empty = 15;
let nbClick = 0

function move(clickedButtonId)
{
    if(adjacent(clickedButtonId)) {
        // Stock le contenu du boutton cliqué et remplace son contenu par " "
        var clickedButton = document.getElementById(clickedButtonId);
        var content = clickedButton.innerHTML;
        clickedButton.textContent = " ";
        clickedButton.style.opacity = "0";

        // Remplace le boutton vide par le contenu du cliqué
        var emptyButton = document.getElementById(empty);
        emptyButton.textContent = content;
        empty = clickedButtonId;
        emptyButton.style.opacity = "100";

        // Update le nb de clicks
        nbClick += 1;
        var click = document.getElementById("click");
        click.textContent = nbClick + " clics";

        // Vérifie si on a gagné :
        checkVictory();
    }
}

function adjacent(clickedButtonId) {
    // test si le bouton cliqué est à coté du vide
    boolMove = false;
    if(empty == 0) {if(clickedButtonId == 1 || clickedButtonId == 4) {boolMove = true;}}
    else if(empty == 3) {if(clickedButtonId == 2 || clickedButtonId == 7) {boolMove = true;}}
    else if(empty == 12) {if(clickedButtonId == 8 || clickedButtonId == 13) {boolMove = true;}}
    else if(empty == 15) {if(clickedButtonId == 11 || clickedButtonId == 14) {boolMove = true;}}
    else if(empty == 1 || empty == 2) {if(clickedButtonId == empty-1 || clickedButtonId == empty+1 || clickedButtonId == empty+4) {boolMove = true;}}
    else if(empty == 4 || empty == 8) {if(clickedButtonId == empty-4 || clickedButtonId == empty+1 || clickedButtonId == empty+4) {boolMove = true;}}
    else if(empty == 7 || empty == 11) {if(clickedButtonId == empty-4 || clickedButtonId == empty-1 || clickedButtonId == empty+4) {boolMove = true;}}
    else if(empty == 13 || empty == 14) {if(clickedButtonId == empty-1 || clickedButtonId == empty-4 || clickedButtonId == empty+1) {boolMove = true;}}
    else if(empty == 5 || empty == 6 || empty == 9 || empty == 10) {if(clickedButtonId == empty-4 || clickedButtonId == empty-1 || clickedButtonId == empty+1 || clickedButtonId == empty+4) {boolMove = true;}}

    return boolMove
}

function checkVictory() {
    var b1 = document.getElementById("0");
    var b2 = document.getElementById("1");
    var b3 = document.getElementById("2");
    var b4 = document.getElementById("3");
    var b5 = document.getElementById("4");
    var b6 = document.getElementById("5");
    var b7 = document.getElementById("6");
    var b8 = document.getElementById("7");
    var b9 = document.getElementById("8");
    var b10 = document.getElementById("9");
    var b11 = document.getElementById("10");
    var b12 = document.getElementById("11");
    var b13 = document.getElementById("12");
    var b14 = document.getElementById("13");
    var b15 = document.getElementById("14");
    victory = false;
    if(b1.innerHTML==1 && b2.innerHTML==2 && b3.innerHTML==3 && b4.innerHTML==4 && b5.innerHTML==5 && b6.innerHTML==6 &&
        b7.innerHTML==7 && b8.innerHTML==8 && b9.innerHTML==9 && b10.innerHTML==10 && b11.innerHTML==11 && b12.innerHTML==12
        && b13.innerHTML==13 && b14.innerHTML==14 && b15.innerHTML==15) {victory = true;}
    if (victory) {alert("Félicitations ! Vous avez résolu le puzzle en " + nbClick + " clics !");}
}
