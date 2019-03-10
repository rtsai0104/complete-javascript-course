/******************************
 * CODING CHALLENGE 5
 */

/*
John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180, and $42.
John likes to top 20% of the bill when the bills is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip)

EXTRA:
Mark's family went to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips.
7. Calculate the averate tip for each family
8. Log to the console which family paid the highest tips on average
*/

let john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calculateTip: function() {
    this.tips = [];
    for(let i = 0; i < this.bills.length; i++) {
      if(this.bills[i] < 50) {
        this.tips.push(this.bills[i] * 0.2);
      } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
        this.tips.push(this.bills[i] * 0.15);
      } else {
        this.tips.push(this.bills[i] * 0.1);
      }
    }
    return this.tips;
  },
  calculateTotal: function() {
    this.totals = [];
    for(let i = 0; i < this.bills.length; i++) {
      this.totals.push(this.bills[i] + this.tips[i]);
    }
    return this.totals;
  }
};

console.log(john.calculateTip());
console.log(john.calculateTotal());
console.log(john);

let mark = {
  fullName: 'Mark Miller',
  bills: [77, 475, 110, 45],
  calculateTip: function() {
    this.tips = [];
    for(let i = 0; i < this.bills.length; i++) {
      if(this.bills[i] < 100) {
        this.tips.push(this.bills[i] * 0.2);
      } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
        this.tips.push(this.bills[i] * 0.1);
      } else {
        this.tips.push(this.bills[i] * 0.25);
      }
    }
    return this.tips;
  },
  calculateTotal: function() {
    this.totals = [];
    for(let i = 0; i < this.bills.length; i++) {
      this.totals.push(this.bills[i] + this.tips[i]);
    }
    return this.totals;
  }
};

console.log(mark.calculateTip());
console.log(mark.calculateTotal());
console.log(mark);

const averageTips = (tips) => {
  let sum = 0;
  for(let i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
};

const johnAvgTips = averageTips(john.tips);
const markAvgTips = averageTips(mark.tips);

console.log(johnAvgTips, markAvgTips);

if (johnAvgTips > markAvgTips) {
  console.log('John had higher avg tips with', johnAvgTips);
} else if (markAvgTips > johnAvgTips) {
  console.log('Mark had higher avg tips with', markAvgTips);
} else {
  console.log('They had equal avg tips of', johnAvgTips);
}