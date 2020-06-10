var playDiv = document.getElementById("play");
var selectDiv = document.getElementById("select");
var resultDiv = document.getElementById("result");

var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

function play(){
    var div = playDiv;
    div.style.display = "none";
    div = resultDiv;
    div.style.display = "none";
    div = selectDiv;
    div.style.display = "block";
}

function checkResult(){
   var text = '';
   var player1Value = player1.value;
   var player2Value = player2.value;
   var combination = player1Value + player2Value;
   console.log(combination)
   switch (combination) {
    case "pedratesoura":
    case "papelpedra":
    case "tesourapapel":
        text = 'Player 1 Ganhou!'
    break;

    case "tesourapedra":
    case "pedrapapel":
    case "papeltesoura":
        text = 'Player 2 Ganhou!'

    break;

    case "pedrapedra":
    case "papelpapel":
    case "tesouratesoura":
        text = 'Empate'
    break;
    default:
  }
  var div = resultDiv;
  div.style.display = "block";
  div = selectDiv;
  div.style.display = "none";
  var h2 = document.getElementById("result-text");
  h2.innerHTML = text;
}