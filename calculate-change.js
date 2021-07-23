const calculateChange = function(total, cash) {
  let changeTotal = cash - total;

  let leftover = changeTotal;
  let change = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  }

  while (changeTotal >= 2000) {
    change.twentyDollar += 1;
    changeTotal -= 2000;
  }

  while (changeTotal >= 1000) {
    change.tenDollar += 1;
    changeTotal -= 1000;
  }

  while (changeTotal >= 500) {
    change.fiveDollar += 1;
    changeTotal -= 500;
  }

  while (changeTotal >= 200) {
    change.twoDollar += 1;
    changeTotal -= 200;
  }

  while (changeTotal >= 100) {
    change.oneDollar += 1;
    changeTotal -= 100;
  }

  while (changeTotal >= 25) {
    change.quarter += 1;
    changeTotal -= 25;
  }

  while (changeTotal >= 10) {
    change.dime += 1;
    changeTotal -= 10;
  }

  while (changeTotal >= 5) {
    change.nickel += 1;
    changeTotal -= 5;
  }

  while (changeTotal >= 1) {
    change.penny += 1;
    changeTotal -= 1;
  }

  let finalOutput = {};

  for(let moneyType in change) {
    if(change[moneyType] !== 0) {
      finalOutput[moneyType] = change[moneyType];
    }
  }


return finalOutput;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));