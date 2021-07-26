const makeCase = function (input, caseType) {
  let firstPriority = ['camel', 'pascal', 'snake', 'kebab', 'title'];
  let secondPriority = ['vowel', 'consonant'];
  let thirdPriority = ['upper', 'lower'];

  // I am not sure if it is proper form to have these function declarations
  // inside this function, as helper functions, or if it would be better to
  // have them available outside of the scope of makeCase().

  function orderCases(arr) {
    finalOrder = [];

    for (let style of firstPriority) {
      if (arr.includes(style)) {
        let index = arr.indexOf(style);
        arr.splice(index, 1);
        finalOrder.push(style);
      }
    }
    for (let style of secondPriority) {
      if (arr.includes(style)) {
        let index = arr.indexOf(style);
        arr.splice(index, 1);
        finalOrder.push(style);
      }
    }
    for (let style of thirdPriority) {
      if (arr.includes(style)) {
        let index = arr.indexOf(style);
        arr.splice(index, 1);
        finalOrder.push(style);
      }
    }

    return finalOrder;
  }

  const camelCase = function (input) {
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

  const pascalCase = function (input) {
    let split = input.split(' ');
    for (let i = 0; i < split.length; i++) {
      let newWord = "";
      for (let j = 0; j < split[i].length; j++) {
        if (j === 0) {
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

  const snakeCase = function (input) {
    let split = input.split(' ');
    for (let i = 0; i < split.length; i++) {
      let newWord = "";
      for (let j = 0; j < split[i].length; j++) {
        if (j === 0 && i !== 0) {
          newWord += '_';
          newWord += split[i][j];
        } else {
          newWord += split[i][j];
        }
      }
      split[i] = newWord;
    }

    let combined = split.join('');
    return combined;

  };

  const kebabCase = function (input) {
    let split = input.split(' ');
    for (let i = 0; i < split.length; i++) {
      let newWord = "";
      for (let j = 0; j < split[i].length; j++) {
        if (j === 0 && i !== 0) {
          newWord += '-';
          newWord += split[i][j];
        } else {
          newWord += split[i][j];
        }
      }
      split[i] = newWord;
    }

    let combined = split.join('');
    return combined;

  };

  const titleCase = function (input) {
    let split = input.split(' ');
    for (let i = 0; i < split.length; i++) {
      let newWord = "";
      for (let j = 0; j < split[i].length; j++) {
        if (j === 0) {
          newWord += split[i][j].toUpperCase();
        } else {
          newWord += split[i][j];
        }
      }
      split[i] = newWord;
    }

    let combined = split.join(' ');
    return combined;

  };

  const vowelCase = function (input) {
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let split = input.split('');
    for (let i = 0; i < split.length; i++) {
      if (vowels.includes(split[i])) {
        split[i] = split[i].toUpperCase();
      } else {
        split[i] = split[i].toLowerCase();
      }
    }

    let combined = split.join('');
    return combined;

  };

  const consonantCase = function (input) {
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let split = input.split('');
    for (let i = 0; i < split.length; i++) {
      if (vowels.includes(split[i])) {
        split[i] = split[i].toLowerCase();
      } else {
        split[i] = split[i].toUpperCase();
      }
    }

    let combined = split.join('');
    return combined;

  };

  const upperCase = function (input) {
    return input.toUpperCase();
  }

  const lowerCase = function (input) {
    return input.toLowerCase();
  }


  parseOrder = [];
  typeof caseType === 'string' ? parseOrder.push(caseType) : parseOrder = orderCases(caseType);

  let finalOutput = input;
  while (parseOrder.length > 0) {

    nextCommand = parseOrder.shift();

    switch (nextCommand) {
      case 'camel':
        finalOutput = camelCase(finalOutput);
        break;
      case 'pascal':
        finalOutput = pascalCase(finalOutput);
        break;
      case 'snake':
        finalOutput = snakeCase(finalOutput);
        break;
      case 'kebab':
        finalOutput = kebabCase(finalOutput);
        break;
      case 'title':
        finalOutput = titleCase(finalOutput);
        break;
      case 'vowel':
        finalOutput = vowelCase(finalOutput);
        break;
      case 'consonant':
        finalOutput = consonantCase(finalOutput);
        break;
      case 'upper':
        finalOutput = upperCase(finalOutput);
        break;
      case 'lower':
        finalOutput = lowerCase(finalOutput);
        break;



    }

  }

  return finalOutput;

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("diego wrote this test here", ["upper", "vowel", "kebab"]));