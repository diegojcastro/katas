const organizeInstructors = function(instructors) {
  let coursesObject = {};

  for(let person of instructors) {
    coursesObject[person.course] ? coursesObject[person.course].push(person.name) : 
        coursesObject[person.course] = [person.name];

  }

  return coursesObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));