/******************************
 * CODING CHALLENGE 4
 */

/*
Implement Mark and John BMIs with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI
*/

let john = {
  fullName: 'John Smith',
  mass: 110,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

let mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

if(john.calcBMI() > mark.calcBMI()) {
  console.log(john.fullName, 'has greater BMI of', john.BMI);
} else if (mark.BMI > john.BMI) { 
  console.log(mark.fullName, 'has greater BMI of', mark.BMI);
} else {
  console.log('They have equal BMI of', john.BMI)
}