const instructorWithLongestName = function (instructors) {
  let instructor;
  let maxLength = 0;

  for (let elem of instructors) {
    if (elem.name.length > maxLength) {
      instructor = elem;
      maxLength = elem.name.length;
    }
  }

  return instructor;

};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));