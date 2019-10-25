let score = 0;

document.body.onkeypress = function(){
    let batmanPosition;
    let x = event.keyCode;
    let marginTop = null;
    let marginLeft = null;
    switch(x) {
        case 119:
        marginTop = parseFloat($("#batman").css("top"));
        let goUp = marginTop - 10;
        $("#batman").css("top", goUp);
        break;
        case 115:
            marginTop = parseFloat($("#batman").css("top"));
            let goDown = marginTop + 10;
            $("#batman").css("top", goDown);
        break; 
        case 97:
            marginLeft = parseFloat($("#batman").css("left"));
            let goLeft = marginLeft - 10;
            $("#batman").css("left", goLeft);
        break;
        case 100:
            marginLeft = parseFloat($("#batman").css("left"));
            let goRight = marginLeft + 10;
            $("#batman").css("left", goRight);
        break; 
    }
    batmanPosition = [marginLeft, marginTop];
    return batmanPosition;
};

function changePosition() {
    let jokerPosition;
    let height = Math.floor(Math.random() * 500);
    let side = Math.floor(Math.random() * 900);
    $("#joker").css("top", height);
    $("#joker").css("left", side);
    jokerPosition = [side, height];
    return jokerPosition;
}

let interval = setInterval(changePosition, 5000);

function colision() {
    let batmanLeft = parseFloat($("#batman").css("left"));
    let batmanTop = parseFloat($("#batman").css("top"));
    let batmanWidth = parseFloat($("#batman").css("width"));
    let batmanHeight = parseFloat($("#batman").css("height"));
    let jokerLeft = parseFloat($("#joker").css("left"));
    let jokerTop = parseFloat($("#joker").css("top"));
    let jokerWidth = parseFloat($("#joker").css("width"));
    let jokerHeight = parseFloat($("#joker").css("height"));

if (batmanLeft < jokerLeft + jokerWidth && batmanLeft + batmanWidth > jokerLeft &&
   batmanTop < jokerTop + jokerHeight &&
   batmanHeight + batmanTop > jokerTop) {
       let getFat = batmanWidth + 20;
       let getTall = batmanHeight + 20;
       $("#batman").css("width", getFat);
       $("#batman").css("height", getTall);
       changePosition();
       score += 50;
       document.getElementById("score").innerHTML = score;
     }
   }
//ASCII s: 115
//ASCII w: 119
//ASCII a: 97
//ASCII d: 100
let checkInterval = setInterval(colision, 200);