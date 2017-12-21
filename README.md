# Tic-Tac-Toe
Tic Tac Toe Javascript
<!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <title>Tic Tac Toe</title>
 <style>
 body {
	background-color: #E0E4CC;
	font-family: 'Montserrat', sans-serif;
	margin: 0;
	padding: 0;
	text-align: center;
}
td {
  border:  4px solid black;
  height:  100px;
  width:  100px;
  text-align:  center;
  vertical-align:  middle;
  font-family:  "Comic Sans MS", cursive, sans-serif;
  font-size:  70px;
  cursor: pointer;
}

td:hover {
	cursor: pointer;
	background-color: #FA6900;
}

table {
  border-collapse: collapse;
  position:   absolute;
  left: 50%;
  margin-left: -155px;
  margin-top: 50px;
  top: 50px;
}

table tr:first-child td {
  border-top: 0;
}

table tr:last-child td {
  border-bottom: 0;
}

table tr td:first-child {
  border-left: 0;
}
table tr td:last-child {
  border-right: 0;
}

</style>
 </head>
 
<body>
<table>
		<tr>
			<td class="cell" id="0"></td>
			<td class="cell" id="1"></td>
			<td class="cell" id="2"></td>
		</tr>
		<tr>
			<td class="cell" id="3"></td>
			<td class="cell" id="4"></td>
			<td class="cell" id="5"></td>
		</tr>
		<tr>
			<td class="cell" id="6"></td>
			<td class="cell" id="7"></td>
			<td class="cell" id="8"></td>
		</tr>
</table>
<p id="demo"></p>
<button onClick="startGame()">Replay</button>

<script>

const cells = document.querySelectorAll('.cell');
let huturn=[0,2,4,6,8];
let Aiturn=[1,3,5,7];
let turn=0;
let mode=1;
let state;

function checkwin()
{
  if ((cells[0].innerText=="X" && cells[1].innerText=="X" && cells[2].innerText=="X") || 
  (cells[3].innerText=="X" && cells[4].innerText=="X" && cells[5].innerText=="X") || (cells[6].innerText=="X" && cells[7].innerText=="X" && cells[8].innerText=="X") || (cells[0].innerText=="X" && cells[4].innerText=="X" && cells[8].innerText=="X") || (cells[2].innerText=="X" && cells[4].innerText=="X" && cells[6].innerText=="X") ||
(cells[0].innerText=="X" && cells[3].innerText=="X" && cells[6].innerText=="X") ||
(cells[1].innerText=="X" && cells[4].innerText=="X" && cells[7].innerText=="X") ||
(cells[2].innerText=="X" && cells[5].innerText=="X" && cells[8].innerText=="X"))  
  { 
    alert ("you win");
    startGame();
    return true;
  }
  else {
  return false;
  }
}

function checklose()
{
  if ((cells[0].innerText=="O" && cells[1].innerText=="O" && cells[2].innerText=="O") || 
  (cells[3].innerText=="O" && cells[4].innerText=="O" && cells[5].innerText=="O") || (cells[6].innerText=="O" && cells[7].innerText=="O" && cells[8].innerText=="O") || (cells[0].innerText=="O" && cells[4].innerText=="O" && cells[8].innerText=="O") || (cells[2].innerText=="O" && cells[4].innerText=="O" && cells[6].innerText=="O") ||
(cells[0].innerText=="O" && cells[3].innerText=="O" && cells[6].innerText=="O") ||
(cells[1].innerText=="O" && cells[4].innerText=="O" && cells[7].innerText=="O") ||
(cells[2].innerText=="O" && cells[5].innerText=="O" && cells[8].innerText=="O"))  
  { 
    alert ("You lose");
    startGame();
    return true;
  }
  else 
  {
  return false;
  }
}


startGame();

function startGame() {

arr=[0,1,2,3,4,5,6,7,8];
turn= 0;

for (let i = 0; i < cells.length; i++)
{ 
 cells[i].innerText = '';
 cells[i].addEventListener('click', handler, false);
	}
}

function handler(event) {

if (typeof arr[event.target.id] ==='number' && ( turn==0 || turn == 2 || turn == 4 || turn == 6 || turn == 8))
  {
  arr[event.target.id] = "X";
  this.innerText ="X";
  this.removeEventListener('click', handler,false);
  turn++;
  checkTie();
   }
if (turn == 1 || turn == 3 || turn == 5 || turn == 7 ){
     checkwin();
   Ai();
  }
}

function Ai() {
  if     (typeof arr[4] ==='number' && turn == 1)
        {
        cells[4].innerText="O";
        arr[4] = "O";
       cells[4].removeEventListener('click', handler,false);
         turn++;
         }  
   else if ( typeof arr[4] !=='number' && turn == 1)
       {
          cells[5].innerText="O";
          arr[5]= "O";
          turn++;
           cells[5].removeEventListener('click', handler,false);
       }
for (let i=0; i < arr.length; i++) {
  if (typeof arr[i] ==='number' && (turn == 3 || turn == 5 || turn == 7) )
     {
   cells[i].innerText="O";
   arr[i] = "O";
  cells[i].removeEventListener('click', handler,false);
  turn++;
  checklose();
       }
     }
}

function emptycells() {
  return arr.filter((elm, i) => i===elm);
}

function checkTie() 
{
  if (emptycells().length === 0)
  {
  alert ("It's a tie");
  startGame();
  } 
}

</script>

</body>
</html>
