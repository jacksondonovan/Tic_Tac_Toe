var headMaster = document.createElement('h1');
headMaster.textContent = "Welcome to Tic Tac Toe";
var bod = document.querySelector('body');
bod.appendChild(headMaster);

var table = document.createElement('table');
for(var i = 0; i < 3; i++){
  var row = document.createElement('tr');
  table.appendChild(row);
  for(var j=0; j<3;j++){
    var cell = document.createElement('td');
    row.appendChild(cell);
  }
}
bod.appendChild(table);
var winner = document.createElement('p');
var winnerO = document.createElement('p');
var warning = document.createElement('p');
var tieMessage = document.createElement('h2');
warning.setAttribute('class','warn');
warning.textContent = "Space already taken!";
var currentPlayer = 'X';

var allCells = document.querySelectorAll('td');

var resetButton = document.createElement('button');
resetButton.textContent = "Reset";
bod.appendChild(resetButton);


var des = document.createElement('p');
des.textContent = "Current Player: " + currentPlayer;
bod.appendChild(des);
var goAgain = document.createElement('h3');
var gamePlay = true;
if(gamePlay){
  for(var z=0;z<allCells.length;z++){
    allCells[z].addEventListener('click',function(event){
      if(event.target.textContent === ""){
        event.target.textContent = currentPlayer;
        if(currentPlayer === "X"){
          currentPlayer = "O";
          des.textContent = "Current Player: " + currentPlayer;
        }
        else{
          currentPlayer = "X";
          des.textContent = "Current Player: " + currentPlayer;
        }
      }
      else if(event.target.textContent !== ""){
        warning.textContent = "Space already taken!"
        bod.appendChild(warning);
      }
      winnerO.setAttribute('class','win');
      winner.setAttribute('class','win');
      if(allCells[0].textContent === "X" && allCells[1].textContent === "X" && allCells[2].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[0].textContent === "X" && allCells[4].textContent === "X" && allCells[8].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[0].textContent === "X" && allCells[3].textContent === "X" && allCells[6].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[1].textContent === "X" && allCells[4].textContent === "X" && allCells[7].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[2].textContent === "X" && allCells[5].textContent === "X" && allCells[8].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[3].textContent === "X" && allCells[4].textContent === "X" && allCells[5].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[6].textContent === "X" && allCells[7].textContent === "X" && allCells[8].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[6].textContent === "X" && allCells[4].textContent === "X" && allCells[2].textContent === "X" && gamePlay){
        winner.textContent = "X wins!";
        bod.appendChild(winner);
        gamePlay = false;
      }
      if(allCells[0].textContent === "O" && allCells[1].textContent === "O" && allCells[2].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      if(allCells[0].textContent === "O" && allCells[4].textContent === "O" && allCells[8].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      if(allCells[0].textContent === "O" && allCells[3].textContent === "O" && allCells[6].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      if(allCells[1].textContent === "O" && allCells[4].textContent === "O" && allCells[7].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      if(allCells[2].textContent === "O" && allCells[5].textContent === "O" && allCells[8].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      if(allCells[3].textContent === "O" && allCells[4].textContent === "O" && allCells[5].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      if(allCells[6].textContent === "O" && allCells[7].textContent === "O" && allCells[8].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      if(allCells[6].textContent === "O" && allCells[4].textContent === "O" && allCells[2].textContent === "O" && gamePlay){
        winnerO.textContent = "O wins!";
        bod.appendChild(winnerO);
        gamePlay = false;
      }
      var accum = 0;
      for(var n = 0; n < allCells.length; n++){
        if(allCells[n].textContent !== ""){
          accum++;
        }
      }
      if(accum === 9 && winnerO.textContent !== "O wins!" && winner.textContent !== "X wins!"){
        tieMessage.textContent = "Tie! Press the reset buttom to go again!";
        bod.appendChild(tieMessage);
      }
    })
  }
}
else{
  goAgain.textContent = "Press the reset button";
  bod.appendChild(goAgain);
}
resetButton.addEventListener('click',function(event){
  for(var y = 0; y<allCells.length;y++){
    allCells[y].textContent = "";
  }
  currentPlayer = "X";
  des.textContent = "Current Player: " + currentPlayer;
  winner.textContent = "";
  winnerO.textContent = "";
  warning.textContent = "";
  tieMessage.textContent = "";
  gamePlay = true;
})

// var connectTable = document.createElement('table');
// connectTable.setAttribute('class','connectFour');
// for(var a = 0; a < 7; a++){
//   var tableRow = document.createElement('tr');
//   connectTable.appendChild(tableRow);
//   for(var b = 0; b < 7; b++){
//     var tableData = document.createElement('td');
//     tableRow.appendChild(tableData);
//   }
// }
// bod.appendChild(connectTable);
//
// var selectorArray = document.createElement('table');
// selectorArray.setAttribute('class','columnPicker');
//
// for(var c = 0; c < 1; c++){
//   var onlyOne = document.createElement('tr');
//   selectorArray.appendChild(onlyOne);
//   for(var d = 0; d < 7; d++){
//     var sevenCol = document.createElement('td');
//     sevenCol.textContent = " ^ "
//     onlyOne.appendChild(sevenCol);
//   }
// }
// bod.appendChild(selectorArray);











var me;
