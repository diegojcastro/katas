const conditionalSum = function (values, condition) {
  let total = 0;
  values.forEach(element => {
    if (condition === "even" && element % 2 === 0) {
      total += element;
    } else if (condition === "odd" && element % 2 !== 0) {
      total += element;
    }
  })

  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even") + " ?= 6");
console.log(conditionalSum([1, 2, 3, 4, 5], "odd") + " ?= 9");
console.log(conditionalSum([13, 88, 12, 44, 99], "even") + " ?= 144");
console.log(conditionalSum([], "odd") + " ?= 0");