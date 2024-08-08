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



const testArray = ["item 1", "item 2", "item 3", "item 4", { name: "Shahemen", age: 18 }] // store their data in index positions
//////////////////     0        1           2       3                  4
let testObject = { // store data(called properties) in key:value pairs
    name: "Shahemen", // variable assignment // similar to let name = Shahemen
    age: 18,
    arrayInObject: ["item 1", "item 2", "item 3", "item 4", { name: "Shahemen", age: 18 }]
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



// functionOne() // function invocation
// functionTwo() // function invocation
// arrowFunction() // function invocation

// functions always evaluate to their return value-when invoked

function withReturnValue() {
    // debugger
    let firstNum = 2 + 2
    let secondNum = 3 + 3
    return firstNum + secondNum
}

// console.log(withReturnValue()) // is the same as This is a return value

// functions with parameters
function withParameters(par1, par2) { // at the point of declaration, the variables you declare the function to expect are called parameters
    return par1 + par2
}

function withDefaultParameters(par1 = 6, par2 = 8) { // setting default values for parameters at point of declaration
    return par1 + par2
}



// console.log(withParameters(5, 7)) // at the point of invocation, the values passed into a function that accepts parameters, are called Arguments
// console.log(withDefaultParameters(7))

// higher order functions and callback functions
// what is a higher order function: a function that can accept other functions as arguments, return functions, or both

function higherOrderFunctionOne(par) { //takes a parameter
    // debugger
    return par() // returns invocation of parameter
}
function higherOrderFunctionTwo() {
    return function () { console.log("returned function") }
}

// higherOrderFunctionOne(withReturnValue)

function hocA() { // is this a higher order function? No
    return withReturnValue()
}

function hocB(par = (arg) => arg + 2) { // is this a higher order function? Yes
    return par
}

function hocC(par = (arg) => arg + 2) { // is this a higher order function? Yes
    return par()
}

// what is a callback function: Any function that is passed as an argument to another function so that it can be executed/invoked in that other function


// console.log(hocB(hocC)(withReturnValue))


hocB(hocC)(withReturnValue) //IIFE- Immediately Invoked Function Expression 
hocC(withReturnValue)
// isAlsoAHigherOrderFunctionToo(withReturnValue)

// function(function) | higherOrderFunction(callBackFunction)

// Method: A method is a function that is a property of an object || All methods are functions but technically not all functions are methods

let aMethodObject = { // objects store their data(properties) in key:value pairs
    name: "Shahemen", // is equivalent to name = "Shahemen"
    aMethod: function () { return "I am a method." }
}

// console.log(aMethodObject.aMethod())


// truthy and falsy values
// truthy - evaluate to something eg: 1,2, true, "string"
// falsy - evaluates to nothing eg: 0, null, undefined, NaN, false, ""


// conditional operators and statements if, else, else if
// comparison operators ==. ===, &&, ||, !, >, <

// operator(condition) {
//     operation to execute
// }


const isFalse = false
const isFalseToo = true
const isFalseThree = false





// if(((2 == 2) && (isFalse != false)) || ((2 == 2) && (isFalse == false))) {
//     console.log("Not true")
// }

function testingLogicalOperators() {
    if (isFalse !== false) { // the state of this condition is true/truthy
        console.log("False state holds true")
        return
    }
    if (isFalseToo !== false) {
        console.log("Else too")
        return
    }
    console.log("Else")
}

// testingLogicalOperators()

// What is the 'this' keyword in javascript // it is a self referencing variable that points to the object that owns the method using it
// binding methods of 'this' in javascript

// let x // declaration of x
// x = 5 // assignment of 2 to x

// let y = x
// y = y + 5

// let n = 10 // declaration +n assignment of 10 to n
// 1. implicit binding 
// console.log("the this:", this) // points to the window object by default

function logThis() {
    console.log("this is the this: ", this) // this 'this' currently points to the window object
}

let anotherLogThis = function () { // this style of  function declaration is called function expression
    console.log("this is the this: ", this) // this 'this' currently points to the window object
}

// 2. method binding
const objectForThis = {
    name: "Shahemen",
    methodToBind: logThis,
    nestedObject: {
        nestedMethodToBind: logThis,
    },
    randomMethod: function () { console.log("Random Method") }
}
// logThis()
// console.log(this) // what is this? log("")
// objectForThis.randomMethod()

// objectForThis.nestedObject.nestedMethodToBind()

// 3. new keyword binding and constructors
// what is a constructor: it is a special function that creates and initializes an object instance





// when a constructor is invoked
// constructor(
// object is initialized
// properties are declared and assigned argument values
// initialized object is returned
// )
function Vehicle(brand, colour) { // constructor declaration
    this.b = brand, // brand:brand/ key:value pair // declaration and assignment
        this.c = colour
}

function VehicleType(brand, colour, type) {
    // vehicleType object is initialized
    Vehicle.call(this, brand, colour)
    this.type = type
}

VehicleType.prototype = Object.create(Vehicle.prototype)
const vehicleTypeOne = new VehicleType("BMX", "Red", "Bicycle")
function drive() {
    console.log(this.b + " can drive")
}

function toRide() {
    console.log(this.type + "is to be riden")
}
Vehicle.prototype.canDrive = drive
VehicleType.prototype.canRide = toRide
Vehicle("Volkswagen", "Red") // the this will point to the window

const newVehicleOne = new Vehicle("Nissan", "Red")
const newVehicleTwo = new Vehicle("Toyota", "Yellow")
const newVehicleThree = new Vehicle("Mercedes", "Blue")

console.log(newVehicleOne)
console.log(vehicleTypeOne)
newVehicleOne.canDrive()
//  drive.call(newVehicleOne)
//  console.log(newVehicleTwo)




// 4. Explicit binding: is the process of binding the this keyword to any value of our choice
// Explicit binding can be carried out in 3 ways, using call, apply, bind keywords
// logThis("args")
// logThis.call("this is the new this", "args")
// logThis.apply("this is the new this",["args"])
// const usingBindKeyword = logThis.bind("this is the new this", "args")
// usingBindKeyword()

// logThis()
// logThis.apply(newVehicleOne,[])

// objectForThis.methodToBind.call(new Vehicle("Kia", "Orange"))


// inheritance in javascript

const aNewArray = new Array()
// const aNewArray = []

console.log(aNewArray)


//Class Inheritance in Javascript
class Dad {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log("Hello, I am " + this.name)
    }

    canVote() {
        if (this.age > 18) {
            console.log(this.name + " is allowed to vote")
        } else {
            console.log(this.name + " is NOT allowed to vote")
        }
    }
}



const newDad = new Dad("Michael", 65)

class Child extends Dad {
    constructor(name, age) {
        super(name, age)
    }
}



// console.log(newDad)

// create an animal class that takes animal species and
//  winged status as arguments in the constructor.

// add a function canFly that returns true if the animal 
// is winged or false if it is not 

//create a sub class of the animal class that takes animal name and
// has a function that logs "<Animal name> can fly" if canFly is true and 
// "<Animal name> cannot fly if canFly is false"

class AnimalOne {
    constructor(species, isWinged) {
        this.species = species
        this.isWinged = isWinged
    }

    canFly() {
        if (this.isWinged == true) {
            return true
        } else {
            return false
        }
    }
}

class AnimalTwo extends AnimalOne {
    constructor(species, isWinged, name) {
        super(species, isWinged)
        this.name = name
    }


    fly() {
        if (this.canFly() == true) {
            console.log(this.name + " can fly")
        } else {
            console.log(this.name + " cannot fly")

        }
    }
}


const newAnimalOne = new AnimalOne("cat", "false")
const newAnimalTwo = new AnimalTwo("cat", "false", "Lion")


let newObject = {
    name: "Voldemort",
    race: "Despicable"
}

function CreateMailBox(name, race) {
    this.name = name
    this.race = race
}
class CreateMailBoxTwo {
    constructor(name, race) {
        this.name = name
        this.race = race
    }

    getName() {
        console.log(this.name)
    }
}

const instanceOfCreateMailboxTwo = new CreateMailBoxTwo("Harry", "Wizard")

const newCreateMailBox = new CreateMailBox("Voldemort", "Despicable")
const newCreateMailBoxTwo = new CreateMailBox()
// const newCreateMailBoxClass = new CreateMailBoxTwo()


// console.log(newCreateMailBox)
// console.log(newCreateMailBoxTwo)
// console.log(instanceOfCreateMailboxTwo)


class HogwartsObject{
    constructor(studentsname, house, spell){
        this.studentsname = studentsname
        this.house = house
        this.spell = spell
    }

 hogwartsMethod() {
    console.log(this.spell)
}
}
const instanceofHogwartsObject = new HogwartsObject("Harry", "gryffindor", "Expelliarmus")
const instanceofHogwartsObjectTwo = new HogwartsObject("Malfoy", "Slytherin", "Avada Kedavra")

// instanceofHogwartsObject.hogwartsMethod()
instanceofHogwartsObjectTwo.hogwartsMethod.call(instanceofHogwartsObject)

// create a class objeect for hogwarts students and it will take 
// student name, house and favourite spell as arguments. the class should have 
// a method that when invoked, console logs the students favourite spell
// create another instance of the HogwartsObject class and using call external binding
// console log the favourite spell of instance 1 by invoking the hogwartsMethod of instance 2




// {
//     one:"1",
//     two:"2",
//     three:"3",
//     four:"4",
//     five:"5",
//     six:"6"
// }

function ConstructOne() {
    this.name = "String"
    this.constructOneMethod = function () {
       return this.name
    }
  }
  ConstructOne()

  const constructUno = new ConstructOne()


  function ConstructTwo(name, method) {
    this.name = name
    this.constructTwoMethod =  method    
  }

  function highmethod(){
    return ConstructTwo
  }

  const contrsuctorduece = new ConstructTwo("paskas", highmethod)

  console.log(contrsuctorduece.constructTwoMethod)

  




















