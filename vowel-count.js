const numberOfVowels = function (data) {
  // I could use a map for order(1) lookup, but we have not
  // covered that here so I'll stick to the tools have so far.

  function isVowel(char) {
    if (
      char === 'a' ||
      char === 'e' ||
      char === 'i' ||
      char === 'o' ||
      char === 'u'
    ) {
      return true;
    } else {
      return false;
    }
  }

  let total = 0;
  for (let char of data) {
    if (isVowel(char)) {
      total += 1;
    }
  }

  return total;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));