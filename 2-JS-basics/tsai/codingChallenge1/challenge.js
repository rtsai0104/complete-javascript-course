/******************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated
using the following formula:
 BMI = mass / height^2. mass in kg and height in meter
1. Store Mark's and John's mass and height in variables
2. Calculate their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to console containing the variable from step 3
*/

let markMass, johnMass, markHeight, johnHeight;
markMass = 78;
johnMass = 92;
markHeight = 1.69;
johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
const isMarkBMIGreater = markBMI > johnBMI;
console.log(markBMI, johnBMI);

console.log('Is Mark\'s BMI greater than John\'s?', isMarkBMIGreater);