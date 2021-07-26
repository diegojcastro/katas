const urlDecode = function(text) {
  let output = {};
  
  let properties = text.split('&');
  let regex = /%20/g;

  for (let entry of properties) {
    let separated = entry.split('=');
    let property = separated[0];
    let value = separated[1].replace(regex,' ');

    output[property] = value;

  }
  return output;

};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);