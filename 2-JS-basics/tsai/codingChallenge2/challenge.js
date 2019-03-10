/******************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games,
John's team scored 89, 120, and 103 points, while Mike's team scored 116, 94,
and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest avg score), and print winner to console.
   Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account
   there might be a draw
4. EXTRA: Mary also plays basketball and her team scored 97, 134, and 105 points. Like
   before, log the average winner to the console
5. Like before, change the scores to generate different winners, keeping in mind there
   might be draws
*/

let johnGame1, johnGame2, johnGame3, mikeGame1, mikeGame2, mikeGame3, johnAvg, mikeAvg;
johnGame1 = 89;
johnGame2 = 120;
johnGame3 = 103;
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;
johnAvg = (johnGame1+johnGame2+johnGame3) / 3;
mikeAvg = (mikeGame1+mikeGame2+mikeGame3) / 3;
console.log(johnAvg, mikeAvg);
if(johnAvg > mikeAvg) {
  console.log('John has higher average with value ', johnAvg);
} else if (johnAvg === mikeAvg) {
  console.log('John and Mike have equal averages with value', mikeAvg)
} else {
  console.log('Mike has higher average with value ', mikeAvg);
}

johnGame1 = 0;
johnGame2 = 0;
johnGame3 = 0;
mikeGame1 = 0;
mikeGame2 = 0;
mikeGame3 = 0;
johnAvg = (johnGame1+johnGame2+johnGame3) / 3;
mikeAvg = (mikeGame1+mikeGame2+mikeGame3) / 3;
console.log(johnAvg, mikeAvg);
if(johnAvg > mikeAvg) {
  console.log('John has higher average with value ', johnAvg);
} else if (johnAvg === mikeAvg) {
  console.log('John and Mike have equal averages with value', mikeAvg)
} else {
  console.log('Mike has higher average with value ', mikeAvg);
}

let maryGame1, maryGame2, maryGame3, maryAvg;
maryGame1 = 97;
maryGame2 = 134;
maryGame3 = 105;
johnGame1 = 89;
johnGame2 = 120;
johnGame3 = 103;
mikeGame1 = 116;
mikeGame2 = 94;
mikeGame3 = 123;
johnAvg = (johnGame1+johnGame2+johnGame3) / 3;
mikeAvg = (mikeGame1+mikeGame2+mikeGame3) / 3;
maryAvg = (maryGame1+maryGame2+maryGame3) / 3;
console.log(johnAvg, mikeAvg, maryAvg);
if(johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log('John has highest average with value ', johnAvg);
} else if (johnAvg > mikeAvg && johnAvg === maryAvg) {
  console.log('John and Mary have highest averages with value', johnAvg);
} else if (johnAvg === mikeAvg && johnAvg > maryAvg) {
  console.log('John and Mike have highest averages with value', johnAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log('Mike has highest average with value', mikeAvg);
} else if (mikeAvg > johnAvg && mikeAvg === maryAvg) {
  console.log('Mike and Mary have highest averages with value', mikeAvg);
} else if (mikeAvg === johnAvg && mikeAvg > maryAvg) {
  console.log('Mike and John have highest averages with value', mikeAvg);
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
  console.log('Mary has highest average with value', maryAvg);
} else if (maryAvg > johnAvg && maryAvg === mikeAvg) {
  console.log('Mary and Mike have highest averages with value', maryAvg);
} else if (maryAvg === johnAvg && maryAvg > johnAvg) {
  console.log('Mary and John have highest averages with value', maryAvg);  
} else {
  console.log('All of them have the highest average with value', maryAvg);
}

maryGame1 = 0;
maryGame2 = 0;
maryGame3 = 0;
johnGame1 = 0;
johnGame2 = 0;
johnGame3 = 0;
mikeGame1 = 1;
mikeGame2 = 0;
mikeGame3 = 0;
johnAvg = (johnGame1+johnGame2+johnGame3) / 3;
mikeAvg = (mikeGame1+mikeGame2+mikeGame3) / 3;
maryAvg = (maryGame1+maryGame2+maryGame3) / 3;
console.log(johnAvg, mikeAvg, maryAvg);
if(johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log('John has highest average with value ', johnAvg);
} else if (johnAvg > mikeAvg && johnAvg === maryAvg) {
  console.log('John and Mary have highest averages with value', johnAvg);
} else if (johnAvg === mikeAvg && johnAvg > maryAvg) {
  console.log('John and Mike have highest averages with value', johnAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log('Mike has highest average with value', mikeAvg);
} else if (mikeAvg > johnAvg && mikeAvg === maryAvg) {
  console.log('Mike and Mary have highest averages with value', mikeAvg);
} else if (mikeAvg === johnAvg && mikeAvg > maryAvg) {
  console.log('Mike and John have highest averages with value', mikeAvg);
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
  console.log('Mary has highest average with value', maryAvg);
} else if (maryAvg > johnAvg && maryAvg === mikeAvg) {
  console.log('Mary and Mike have highest averages with value', maryAvg);
} else if (maryAvg === johnAvg && maryAvg > johnAvg) {
  console.log('Mary and John have highest averages with value', maryAvg);  
} else {
  console.log('All of them have the highest average with value', maryAvg);
}