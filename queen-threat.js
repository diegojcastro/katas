function generateBoard (white, black) { 
  let board = [];
  for(let row = 0; row < 8; row++) {
    let newRow = [];
    for(let col = 0; col < 8; col++) {
      if((white[0] === row && white[1] === col) || (black[0] === row && black[1] === col)) {
        newRow.push(1);
      } else {
        newRow.push(0);
      }
    }
    board.push(newRow);
  }

  return board;
}

function queenThreat (board) { 
  let q1;
  let q2;

  for(let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if(board[row][col] != 0) {
        q1 ? q2 = [row,col] : q1 = [row,col];
      }
    }
  }

  
  if (q1[0] == q2[0]) return true;
  if (q1[1] == q2[1]) return true;
  // Q1 is always a higher row than Q2 at this point.
  // We only need to check Q1 diagonals going down now.
  let leftDiag = [q1[0],q1[1]];

  // Check left diagonal from q1
  for(let row = leftDiag[0]; row < 8; row++) {
    let col = leftDiag[1];
    
    if (row == q2[0] && col == q2[1]) {
      return true;
    } else {
      col -= 1;
      leftDiag[1] = col;
    }
  }
  //If we haven't returned true, no leftDiag collision with q2.

  let rightDiag = [q1[0],q1[1]];;
  // Check right diagonal from q1
  for(let row = rightDiag[0]; row < 8; row++) {
    let col = rightDiag[1];

    if (row == q2[0] && col == q2[1]) {
      return true;
    } else {
      col += 1;
      rightDiag[1] = col;
    }
    
  }

  //If we haven't returned true, no rightDiag collision with q2.

  return false;

}

// Test
let whiteQueen = [0,5];
let blackQueen = [5,0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(queenThreat(generatedBoard) + '?= true');
whiteQueen = [0,0];
blackQueen = [5,7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(queenThreat(generatedBoard)+ '?= false');
whiteQueen = [1,1];
blackQueen = [4,4];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(queenThreat(generatedBoard)+ '?= true');