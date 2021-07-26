const blocksAway = function(directions) {
  let xDist = 0;
  let yDist = 0;

  let nowFacing = 'start';
  let nextTurn;
  let blocksMoved;

  // Helper function to keep track of cardinal direction facing
  function changeDirection(start,turn) {
    switch(start) {
      case 'start':
        if(turn === 'right') {
          return 'east';
        } else if (turn === 'left') {
          return 'north';
        } 
      case 'east':
        if(turn === 'right') {
          return 'south';
        } else if (turn === 'left') {
          return 'north';
        }
      case 'north':
        if(turn === 'right') {
          return 'east';
        } else if (turn === 'left') {
          return 'west';
        }
      case 'west':
        if(turn === 'right') {
          return 'north';
        } else if (turn === 'left') {
          return 'south';
        }
      case 'south':
        if(turn === 'right') {
          return 'west';
        } else if (turn === 'left') {
          return 'east';
        }
      
      }
  }

  while(directions.length > 0) {
    nextTurn = directions.shift();
    blocksMoved = directions.shift();

    nowFacing = changeDirection(nowFacing, nextTurn);
    switch(nowFacing) {
      case 'north':
        yDist += blocksMoved;
        break;
      case 'east':
        xDist += blocksMoved;
        break;
      case 'west':
        xDist -= blocksMoved;
        break;
      case 'south':
        yDist -= blocksMoved;
        break;
    }
  }

  return {east: xDist, north: yDist};
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));