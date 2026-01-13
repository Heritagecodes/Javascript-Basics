// Functions

// A function is a block of code or a reusable piece of code that performs a particular task or action.

function functionName() {

    //   Our code goes here
}

// Different types of functions 
// 1. Anonymous function
function functionName(){

}
// 2. Normal function
function test() {

}
// 3. Arrow function
() => {

}

let num1 = 50;
let num2 = 40;
let num4 = 20;
let num5 = 10;

let num3 = num1 + num2;
let num6= num4 + num5;
//console.log(num3, num6);


function addTwoNumbers(num1, num2) {
  let num3 = num1 + num2;
  console.log(num1 + num2);
  console.log("This is the sum of our two numbers ", num3);
}

// To call the function above
// addTwoNumbers(6,9);
// addTwoNumbers(10,40);

/* 
This is another way of writing functions
NOTE: Undefined + Undefined = NaN- Not a Number
*/

// Return gives back a value from the function
function subtractTwoNumbers(num1, num2) {
    return num1 - num2;
}
let result = subtractTwoNumbers(50, 20);
console.log("Result ", result);
// The result of return is now assigned to the variable result


function productOfBaseAndHeight(base, height) {
    return base * height;
}
let prod = productOfBaseAndHeight(50, 20);
let areaOfTriangle = prod / 2;
console.log("The Area of the triangle is ", areaOfTriangle); 

// A method is a function inside an object
// ALMOST EVERYTHING IN JS IS AN OBJECT

// let joshObject = {
    // name: "Josh",
    // age: 25,
    // sex: "Male",

    // introduction: function() {
        // console.log("Hello Joshua , How are you doing today?");
    // }
// };
// Introduction is a method inside the joshObject object
// log in console.log is also a method inside the console object

// joshObject.introduction();

function addTwoNumbers(number1, number2) {
    let results = number1 + number2;
    console.log("The sum of the two numbers is ", results);    
    // return results
        }
results = addTwoNumbers(100, 200);
// console.log(results);

let variable1 = "5";
let variable2 = 5;
// console.log(typeof variable1);
// console.log(typeof variable2);
// console.log(variable1 === variable2);

if (variable1 == variable2) {
    console.log('Both values are the same')
}

if (variable1 === variable2) {
    console.log("The values and datatypes are the same!");
}

let object1 = {
    name: "John",
    age: 30
};
let object2= object1;
object2.name = "Jane";
console.log(object1.name); 