/************************************
 * Variables and data types
 */
/*
console.log('Hello World!!!');

const firstName = 'John';
console.log(firstName);

const lastName = 'Smith';
const age = 28;

const fullAge = true;
console.log(fullAge);

let job;
console.log(job);

job = 'Teacher';
console.log(job);

// const 3years = 3; Can't start variable with number (error)
// const john/mark = 'John and Mark'; ERROR, '/' in variable name invalid
// must start with letter, $ or _

// Variable naming rules
const _3years = 3;
*/
/************************************
 * Variables mutation and type coercion
 */
/*
const firstName = 'John';
let age = 28;

// Type coercion
console.log(firstName + ' ' + age);

let job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

const lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
 * Basic operators
 */
/*
let now, ageJohn, ageMark, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
const johnOlder = ageJohn > ageMark;
const markOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder); // boolean
console.log(typeof ageJohn); // number
console.log(typeof 'Mark is older than John'); // string
let x;
console.log(typeof x); // underfined
*/

/************************************
 * Operator precedence
 */
/*
const now = 2018;
const yearJohn = 1989;
const fullAge = 18;

// Multiple operators
const isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
const ageJohn = now - yearJohn;
const ageMark = 35;
const average = (ageJohn + ageMark) / 2;
console.log(average); // 32

// Multiple assignments
let x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y); // 26 26

// 2 + 4 + 5 // 6 + 5 // 11

// More operators
// x = x * 2; // 26 * 2 = 52
x *= 2;
console.log(x); // 52
x += 10;
console.log(x); // 62
x++;
console.log(x); // 63
x--;
console.log(x); // 62
*/

/************************************
 * If / else statements
 */
/*
const firstName = 'John';
const civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName, 'is married!');
} else {
  console.log(firstName, 'will hopefully marry soon :)');
}

const isMarried = true;

if (isMarried) {
  console.log(firstName, 'is married!');
} else {
  console.log(firstName, 'will hopefully marry soon :)');
}

let markMass, johnMass, markHeight, johnHeight;
markMass = 78;
johnMass = 92;
markHeight = 1.69;
johnHeight = 1.95;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
const isMarkBMIGreater = markBMI > johnBMI;
console.log(markBMI, johnBMI);

if (isMarkBMIGreater) {
  console.log('Mark\'s BMI is greater than John\'s');
} else {
  console.log('John\'s BMI is greater than Mark\'s');
}
*/

/************************************
 * Boolean logic
 */
/*
const firstName = 'John';
const age = 30;

// age >= 20 // false
// age < 30 // true
// !(age < 30) // false
// age >= 20 && age < 30 // false
// age >= 20 || age < 30 // true

if (age < 13) {
  console.log(firstName, 'is a boy');
} else if (age <= 20 && age >= 13) {
  console.log(firstName, 'is a teenager');
} else if (age < 30 && age > 20) {
  console.log(firstName, 'is a young man');
} else {
  console.log(firstName, 'is a man');
}
*/

/************************************
 * Ternary operator and Switch statements
 */
/*
const firstName = 'John';
const age = 25;

// Ternary operator
age >= 18 ? console.log(firstName, 'drinks beer') : console.log(firstName, 'drinks juice');

const drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Same as 
// if(age >= 18) {
//   const drink = 'beer';
// } else {
//   const drink = 'juice';
// }
//

// Switch statement
const job = 'instructor';

switch(job) {
  case 'teacher':
  case 'instructor':
    console.log(firstName, 'teaches kids how to code');
    break;
  case 'driver':
    console.log(firstName, 'drives an uber in Lisbon');
    break;
  case 'designer':
    console.log(firstName, 'designs beautiful websites');
    break;
  default:
    console.log(firstName, 'has a defualt job');
}

switch(true) {
  case age < 13:
    console.log(firstName, 'is a boy');
    break;
  case age >= 13 && age < 20:
    console.log(firstName, 'is a teenager');
    break;
  case age >= 20 && age < 30:
    console.log(firstName, 'is a young man');
    break;
  default:
    console.log(firstName, 'is a man');
}
*/
/************************************
 * Truthy and falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: not falsy values
/*
let height;

if(height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable is NOT defined'); // Statement fires
}

height = 0;
if(height || height === 0) {
  console.log('Variable is defined'); // Statement fires
} else {
  console.log('Variable is NOT defined');
}
if(height) {
  console.log('Variable is defined');
} else {
  console.log('Variable is NOT defined'); // Statement fires
}

// Equality operators
// == does type coercion, === does not
height = 23;
if (height == '23') {
  console.log('The == operator does type coercion!');
}

// 23 === '23' is false
*/

/************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}

const ageJohn = calculateAge(1990);
const ageMike = calculateAge(1948);
const ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  const age = calculateAge(year);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName, 'retires in', retirement, 'years.');
  } else {
    console.log(firstName, 'is already retired.');
  }
  
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/************************************
 * Functions Statements and Expressions
 */
/*
 // Function declaration
 // function whatDoYouDo(job, firstName) {}

 // Function expression
const whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/************************************
 * Arrays
 */
/*
// Initialize arrays
let names = ['John', 'Mark', 'Jane'];
const years = new Array(1990, 1969, 1948);

console.log(names[0]); // John
console.log(names.length); // 3

// Mutate Array Data
names[1] = 'Ben';
console.log(names); // John Ben Jane

//names[5] = 'Mary';
//console.log(names); // John Ben Jane 'Empty' 'Empty' Mary

names[names.length] = 'Mary';
console.log(names); // John Ben Jane Mary

// Different data types
let john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.'); // Add to beginning
console.log(john);

john.pop(); // Remove from end
john.pop();
john.shift(); // Remove from front
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23)); // returns -1 (item not in array)

const isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer': 'John IS a designer';
console.log(isDesigner);
*/

/************************************
 * Objects and properties
 */
/*
// Object literal
let john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
const x = 'birthYear';
console.log(john[x]); // 1990

john.job = 'driver';
john['isMarried'] = true;
console.log(john);

// new Object syntax
let jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/************************************
 * Objects and methods
 */
/*
let john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john); // age is added to john properties
*/

/************************************
 * Loops and Iteration
 */

 // for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// ...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 FALSE, exit loop

const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (let i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// while loop
i = 0;
while(i < john.length) {
  console.log(john[i]);
  i++;
}

// continue and break statements
for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue; // Move onto next iteration
  console.log(john[i]);
}

for (let i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break; // Break out of for loop
  console.log(john[i]);
}

// looping backwards
for (let i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}