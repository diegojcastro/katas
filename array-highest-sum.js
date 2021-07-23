const sumLargestNumbers = function (data) {
  bigNums = []

  for (let num of data) {
    // I feel like nested ifs on a for loop this way is bad form.
    // Was not sure how else I'd do it. Feedback very welcome!
    if (bigNums.length < 1) {
      bigNums.push(num);
    } else if (bigNums.length === 1) {
      if (num > bigNums[0]) {
        bigNums[1] = bigNums[0];
        bigNums[0] = num;
      } else {
        bigNums.push(num);
      }
    } else {
      if (num > bigNums[0]) {
        bigNums[1] = bigNums[0];
        bigNums[0] = num;
      } else if (num > bigNums[1]) {
        bigNums[1] = num;
      }
    }
  }

  return (bigNums[0] + bigNums[1]);
};

//Test
console.log(sumLargestNumbers([1, 10]) + " ?= 11");
console.log(sumLargestNumbers([1, 2, 3]) + " ?= 5");
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]) + " ?= 126");