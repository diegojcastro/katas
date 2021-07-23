const camelCase = function(input) {
  let split = input.split(' ');
  for (let i = 0; i < split.length; i++) {
    let newWord = "";
    for (let j = 0; j < split[i].length; j++) {
      if (j === 0 && i !== 0) {
        newWord += split[i][j].toUpperCase();
      } else {
        newWord += split[i][j];
      }
    }
    split[i] = newWord;
  }

  let combined = split.join('');
  return combined;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));