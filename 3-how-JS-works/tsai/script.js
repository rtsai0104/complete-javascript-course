///////////////////////////////////////
// Lecture: Hoisting
/*
// functions
calculateAge(1965); // Function still works here due to hoisting
// function declarations can be stated wherever, variables cannot
// using an arrow notation function does not work

function calculateAge(year) {
    console.log(2018 - year);
}
calculateAge(1990);
// retirement(1990); => throws error because it is a function expression
const retirement = (year) => {
    console.log(65 - (2018-year));
}
retirement(1990);

// variables
console.log(age); // undefined (variable isn't stored til after it's read)
const age = 23; // global execution context
console.log(age);

function foo() {
    console.log(age); // undefined
    const age = 65; // foo execution context
    console.log(age); // 65
}
foo();
console.log(age); // 23
*/

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

// const a = 'Hello!';
// first();

// function first() {
//     const b = 'Hi!';
//     second();

//     function second() {
//         const c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// Example to show the differece between execution stack and scope chain

// const a = 'Hello!';
// first();

// function first() {
//     const b = 'Hi!';
//     second();

//     function second() {
//         const c = 'Hey!';
//         third();
//     }
// }

// function third() {
//     const d = 'John';
//     console.log(a + b + c + d); // throws error on b & c
// }

///////////////////////////////////////
// Lecture: The this keyword

// this keyword is not assigned a value until a function where it is defined is actually called

console.log(this); // window object

function calculateAge(year) {
    console.log(2018 - year);
    console.log(this); // regular function call not method, this points to window object
}

calculateAge(1985);

let john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // points to john object
        console.log(2018 - this.yearOfBirth);

        function innerFunction() {
            console.log(this); // points to window object
        }
        innerFunction();
    }
}

john.calculateAge();

let mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();