/******************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 15% of the bill when
the bill is between $50 and $200, and 10% of if the bill is more than $200.

In the end John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)
*/

const calculateTip = (value) => {
  if(value < 50) {
    return value * 0.2;
  } else if (value >= 50 && value < 200) {
    return value * 0.15;
  } else {
    return value * 0.1;
  }
}

const bills = [124, 48, 268];
let tip = [];
bills.forEach((item) => {
  tip.push(calculateTip(item));
});
console.log(tip);
let total = [];
bills.forEach((item) => {
  total.push(item + calculateTip(item));
});
console.log(total);