const multiplicationTable = function (maxValue) {

  let printMultiples = function (first, last) {
    let str = "";
    for (let i = first; i <= last; i += first) {
      if (str !== "" ) {
        str += " ";
      }
      str += i;
    }

    return str;

  }

  let finalTable = "";
  for (let i = 1; i <= maxValue; i++) {
    if (finalTable !== "" ) {
      finalTable += "\n";
    }
    finalTable += printMultiples(i, i * maxValue);
  }

  return finalTable;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));