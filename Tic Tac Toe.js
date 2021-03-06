<script>

const cells = document.querySelectorAll('.cell');
const huPlayer = 'X';
const aiPlayer = 'O';
let turn=0;
let arr=[];

function checkwin(newBoard)
{
  if ((newBoard[0]=="X" && newBoard[1]=="X" && newBoard[2]=="X") || 
  (newBoard[3]=="X" && newBoard[4]=="X" && newBoard[5]=="X") || (newBoard[6]=="X" && newBoard[7]=="X" && newBoard[8]=="X") || (newBoard[0]=="X" && newBoard[4]=="X" && newBoard[8]=="X") || (newBoard[2]=="X" && newBoard[4]=="X" && newBoard[6]=="X") ||
(newBoard[0]=="X" && newBoard[3]=="X" && newBoard[6]=="X") ||
(newBoard[1]=="X" && newBoard[4]=="X" && newBoard[7]=="X") ||
(newBoard[2]=="X" && newBoard[5]=="X" && newBoard[8]=="X"))  
  { 
    return true;
  }
  else {
  return false;
  }
}

function checklose(newBoard)
{
  if ((newBoard[0]=="O" && newBoard[1]=="O" && newBoard[2]=="O") || 
  (newBoard[3]=="O" && newBoard[4]=="O" && newBoard[5]=="O") || (newBoard[6]=="O" && newBoard[7]=="O" && newBoard[8]=="O") || (newBoard[0]=="O" && newBoard[4]=="O" && newBoard[8]=="O") || (arr[2]=="O" && newBoard[4]=="O" && newBoard[6]=="O") ||
(newBoard[0]=="O" && newBoard[3]=="O" && newBoard[6]=="O") ||
(newBoard[1]=="O" && newBoard[4]=="O" && newBoard[7]=="O") ||
(newBoard[2]=="O" && newBoard[5]=="O" && newBoard[8]=="O"))  
  { 
    return true;
  }
  else 
  {
  return false;
  }
}

function emptycells(newBoard) {
  return newBoard.filter((elm, i) => i===elm);
}

function checkTie(newBoard) 
{
  if (emptycells(newBoard).length === 0)
  {
  return true;
  } 
}

startGame();

function startGame() {

arr=[0,1,2,3,4,5,6,7,8];
turn= 0;
document.querySelector(".endgame").style.display = "none";

for (let i = 0; i < cells.length; i++)
{ 
 cells[i].innerText = '';
 cells[i].addEventListener('click', handler, false);
	}
}

function handler(event) {

if (typeof arr[event.target.id] ==='number' && ( turn==0 || turn == 2 || turn == 4 || turn == 6 || turn == 8))
  {
  arr[event.target.id] = huPlayer;
  this.innerText = huPlayer;
  this.removeEventListener('click', handler,false);
  turn++;
      }
delcareWinner(arr);      
if (turn==1 || turn == 3 || turn == 5 || turn == 7) {
  Ai();
    }
  }

function Ai() {
  let a= bestSpot();
   cells[a].innerText= aiPlayer;
   arr[a] = aiPlayer;
  cells[a].removeEventListener('click', handler,false);
  turn++;
  delcareWinner(arr);
}

function minimax(newBoard, player) {
	var availSpots = emptycells(newBoard);

	if (checkwin(newBoard)) {
		return {score: -10};
	} else if (checklose(newBoard)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else {
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
}

function bestSpot() {
	return minimax(arr, aiPlayer).index;
}

function delcareWinner(newBoard){
let availSpots = emptycells(newBoard);
if (checkwin(newBoard)){
document.querySelector(".endgame").style.display = "block";
document.querySelector(".endgame .text").innerText = "You Win";
}
else if (checklose(newBoard)){
document.querySelector(".endgame").style.display = "block";
document.querySelector(".endgame .text").innerText = "You Lose";
for (let i = 0; i < availSpots.length; i++){
cells[availSpots[i]].removeEventListener('click', handler,false);
}
}
else if (availSpots.length === 0){
document.querySelector(".endgame").style.display = "block";
document.querySelector(".endgame .text").innerText = "It's a Tie";
}
}

</script>
