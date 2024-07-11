// Datatypes 

//primitive datatypes 
// int- numbers
// string - mixture 
// boolean - true or false 

// truthy and falsy values
// truthy - evaluate to something eg: 1,2, true, "string"
// falsy - evaluates to nothing eg: 0, null, undefined, NaN, false, ""

// composite datatypes
// Arrays []
// Objects {}

const testArray = ["item 1", "item 2", "item 3", "item 4", {name: "Shahemen", age: 18} ] // store their data in index positions
//////////////////     0        1           2       3                  4
let testObject = { // store data(called properties) in key:value pairs
    name: "Shahemen", // variable assignment // similar to let name = Shahemen
    age: 18,
    arrayInObject: ["item 1", "item 2", "item 3", "item 4", {name: "Shahemen", age: 18}]
}

 // data from arrays is retrieved by referencing the index position of the item
//  console.log("from array: ", testArray[4])
 
 // data is retrieved from objects by referencing the key through dot notation
//  console.log("from object: ", testObject.arrayInObject[4].name)



// variables
// var randomNumber // variable declaration
// randomNumber = 5 // variable assignment
const randomNumber = 5 // variable declaration & assignment
// 3 methods of variable declaration
// var, let and const
//  testArray.push("item 2")

// Functions
// what is a function - a set of statements that performs a task, calculates or evaluates to a value
// function declaration vs invocation
// declaration is the point the function is created
// invocation is the point where it is executed

// operators in javascript
// assignment operator =
// equality operator == or ===

let m // variable declaration
m = 2 // variable assignment 

let r = 4 // declaration + assignment


// function declarations

// using the function keyword
function functionOne() {  // function declaration - with function keyword
    console.log("Function operation")    
}

// using function expression
// let functionTwo 
let functionTwo = function () {
    console.log("Function operation Two")  
}


// Arrow function
// let arrowFunction
let arrowFunction = () => console.log("Function operation Three: Arrow Function")



functionOne() // function invocation
functionTwo() // function invocation
arrowFunction() // function invocation

// functions always evaluate to their return value-when invoked

function withReturnValue() {
    // debugger
    let firstNum = 2+2
    let secondNum = 3+3
    return firstNum + secondNum
}

// console.log(withReturnValue()) // is the same as This is a return value

// functions with parameters
function withParameters(par1, par2) { // at the point of declaration, the variables you declare the function to expect are called parameters
    return par1+par2
}

function withDefaultParameters (par1=6, par2=8) { // setting default values for parameters at point of declaration
    return par1+par2
}



console.log(withParameters(5, 7)) // at the point of invocation, the values passed into a function that accepts parameters, are called Arguments
console.log(withDefaultParameters(7))

// higher order functions and callback functions
// what is a higher order function: a function that can accept other functions as arguments, return functions, or both

function higherOrderFunctionOne (par) { //takes a parameter
    // debugger
    return par() // returns invocation of parameter
}
function higherOrderFunctionTwo () { 
    return function () {console.log("returned function")}
}

// higherOrderFunctionOne(withReturnValue)





















