const squareCode = function(message) {
  // remove all spaces
  let trimmedMessage = message.replace(/\s/g, '');
  let msgArray = trimmedMessage.split('');
  
  // get grid dimensions
  let sqrt = Math.sqrt(msgArray.length);
  let rows = Math.floor(sqrt);
  let cols = Math.ceil(sqrt);
  if(rows * cols < msgArray.length) rows += 1;
  

  let grid = [];

  for(let row = 0; row < rows; row++) {
    let newRow = [];
    for (let col = 0; col < cols; col++) {
      newRow.push(msgArray.shift());
    }
    grid.push(newRow);

  }

  let outputString = "";

  for(let col = 0; col < cols; col++) {
    for(let row = 0; row < rows; row++) {
      let next = grid[row][col];
      if(col > 0 && row === 0) {
        outputString += ' ';
      }
      if (next != undefined) {
        outputString += next;
      }
    }
  }
  
  return outputString;

};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));