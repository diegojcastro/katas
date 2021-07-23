const talkingCalendar = function (date) {
  let nums = date.split('/');

  let year = parseInt(nums[0]);
  let monthNum = parseInt(nums[1]);
  let dayNum = parseInt(nums[2]);

  let months = ['ERROR', 'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  let month = months[monthNum];

  let daySuffix = '';

  switch (dayNum) {
    case 1:
    case 21:
    case 31:
      daySuffix = 'st';
      break;
    case 2:
    case 22:
      daySuffix = 'nd';
      break;
    case 3:
    case 23:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
      break;
  }

  let output = `${month} ${dayNum}${daySuffix}, ${year}`;

  return output;


};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));