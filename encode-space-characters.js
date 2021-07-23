const urlEncode = function(text) {
  let trimmedText = text.trim();

  let finalString = "";

  for(let i = 0; i < trimmedText.length; i++ ) {
    trimmedText[i] === ' ' ? finalString += '%20' : finalString += trimmedText[i];
  }

  return finalString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));