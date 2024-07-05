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
// function declaration vs invocation
// declaration is the point the function is created
// invocation is the point where it is executed

const funcA = function () { // function declaration
    console.log("I am function A")
}


// function <name of function>() {operation to execute}
// funcA() //function invocation

// arrow functions
const funcB = () => console.log("I am function B") // arrow function declaration
// funcB() // function invocation

function funcC(parameterOne) { // function declaration with parameters
    return parameterOne
    // console.log("I am func C: ", parameterTwo)
}

funcC(200) // function invoked with arguments

// a function with a return value, evaluates to its return value when invoked
funcC(200) // "I am func C: ", parameterOne
// console.log(funcC(200) + 5)

// closures and scope

function useGlobalScopedVariable() {
    const functionScopedVariable = 6 // function scope
    console.log("Global scoped variable: ", globalVariable)
    // console.log("Function scoped variable: ", functionScopedVariable)
    
    if(functionScopedVariable) {
        let blockScoped = "7" // block Scope
        console.log("Function scoped variable: ", functionScopedVariable)
        console.log("Block scoped variable: ", blockScoped)
        
    }
}

// console.log("Global scoped variable: ", functionScopedVariable)
// unhoisted variables cannot be accessed before initialization

const globalVariable = 5 // global scope
useGlobalScopedVariable()



