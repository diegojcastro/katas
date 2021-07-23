const repeatNumbers = function (data) {
  let output = "";
  for (let i = 0; i < data.length; i++) {
    let arr = data[i];
    let count = 1;
    while (count <= arr[1]) {
      output += arr[0];
      count++;
    }

    if (i < data.length - 1) {
      output += ", ";
    }
  }

  return output;
};

// Test
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));