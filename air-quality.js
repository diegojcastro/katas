const checkAir = function (samples, threshold) {
  let dirtyTotal = 0;

  for (let sample of samples) {
    if (sample === 'dirty') {
      dirtyTotal += 1;
    }
  }
  let output;
  dirtyTotal / samples.length < threshold ? output = "Clean" : output = "Polluted";
  return output;
};

//Test
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))