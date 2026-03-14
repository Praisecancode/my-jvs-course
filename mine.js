// function add() {
//     return 5;
// }

// let result = add();
// console.log(result);

// function getUsername() {
//     return "praise";
// }

// let userName = getUsername();
// console.log("welcome " + userName)

// function getAge() {
//     return "18"
// }

// let getMyAge = getAge();
// console.log("i am " + getMyAge + " years old")

// function getUsername(){
//     return "praise Eshemokhai! :)"
// }

// // let name = getUsername();

// document.getElementById("title").innerText = "dashboard";
// document.getElementById("message").innerText = "Hello " + name;

// function getItemCount(){
//     return 3;
// }

// let itemsInCart = getItemCount(); {

//     document.getElementById("cart").innerText = "items in your cart is " + itemsInCart;

// }

// function getUnReadMessages(){
//     return 50;
// }

// let myUnreadMessages = getUnReadMessages(); {

//     document.getElementById("unread").innerText = "you have " + myUnreadMessages + " unread messages";
// }

// function getAge(){
//     return 18
// }

// let myAge = getAge(); {

//     document.getElementById("age").innerText = "you are now " + getAge() + " years old";
// }

// function getNumberOfFriends() {
//     return 2;
// }

// let numberOfFriends = getNumberOfFriends(); {

//     document.getElementById("friends").innerText = "you have " + numberOfFriends + " new friends";
// }

//let name = "praise";

//document.getElementById("username").textContent = name; 


// alert("you are now connected as  " + name)

//let greeting = "hello welcome back!";

//document.getElementById("greeting").textContent = greeting

// function and events

//function showMessage() {
 //   document.getElementById("text").textContent = "welcome to my website";
//}


//function clearMessage() {
  //  document.getElementById("text").textcontent = "";
//}

//document.getElementById("btnShow").addEventListener("click", showMessage);
//document.getElementById("btnClear").addEventListener("click", clearMessage);

// input
//document.getElementById("submitbtn").addEventListener("click", showName);

//function showName() {
  //  let name = document.getElementById("nameInput").value;
    //document.getElementById("output").textContent = "Hello " + name;
//} 


// inputs and user data

//function greetUser() {
  //  let name = document.getElementById("username").value;
    //document.getElementById("output").innerText = "Hello " + name;
  //}
  
  //let name = prompt("what is your name?");

  //alert(name);

  //let name = prompt("what is your name?")
  //let age = number(prompt("how old are you?"))

  //alert("hello ", + name + "you are now " + age +"years old")

  //hello//


 // DAY 1 : GLOBAL SCOPE //
  let name = "praise";

  function greet() {
    console.log(name);
  }

  // FUNCTION SLOPE //
  function test() {
    let age = 18
  }
console.log(age)

// BLOCK SCOPE //
if (true) {
    let city = "abuja"
}
console.log(city)

// TASK //
const title = "Prise"
const age = 18

function introduce() {
    console.log(`my name is ${title} and i am ${18} years old`)
}
introduce()


// FIX CODE //
if (true) {
    var message = "Hello"
}
console.log(message)

// FIXED //
let message;
if (true) {
    message ="Hello";
}
console.log(message)

// PRACTICE //
let favouritelanguage = "javascript"

function introduce() {
    console.log(`my favourite language is ${favouritelanguage} `)
}
introduce()

// OR //

let favoritelanguage;

function introduce() {
    favoritelanguage = "javascript"
}
console.log(`my favourite language is ${favoritelanguage} `)

console.log(100);


// DAY 2 : BASIC FUNCTION //
function greet() {
  console.log("Hello world")
}
greet()

// FUNCTION WITH PARAMETERS //
function greet(name) {
  console.log(`Hello  ${name} `)
}
greet("praise")
greet("peace")

// FUNCTION WITH RETURN VALUES //
function add(a , b) {
  return a + b;
}
let result = add(5, 3);
console.log(result)

// PRACTICE EXERCISE //
function greet() {
  console.log("welcome to javascript")
}
greet()

function multiply(a, b) {
  return a * b;
}
let output = multiply(4, 5);
console.log(result);

// PRACTICE EXERCISE //
let name2 = "praise"
let age2 = 18
function introduce() {
  return age2;
}
console.log(`my name is ${name2} and i am ${18} years old`)
introduce()

// CORRECTED //
let name3 = "praise"
let age3 = 18
function introduce() {
  return `my name is ${name3} and i am ${age3} years old`
}
console.log(introduce())


// MINI PROJECT JAVASCRIPT CALCULATOR //
function add(a, b) {
  return a + b;
}
let result1 = add(5, 3);
console.log(result1)

function subtract(a, b) {
  return a - b;
}
let result2 = subtract(10, 4);
console.log(result2)

function multiply(a, b) {
  return a * b;
}
let result3 = multiply(2, 5);
console.log(result3)

function divide(a, b) {
  return a / b;
}
let result4 = divide(20, 4);
console.log(result4)

// WRITE THE ADD FUNCTION USING ARROW SYNTAX //
const add = (a, b) => {
  return a + b;
}

// CORRECTED //
const addArrow = (a, b) => a + b;
console.log(addArrow(10, 5))


// FUNCTION DEFAULT PARAMETER //
function registerUser(user = "bot") {
  return user + "is registered";
}

console.log(registerUser())

// FUNCTION OBJECTS AS PARAMETERS //
function loginUser(user) {
  return `The ${user.name} with the id of ${user.id} is logged in`
}

const user = {
  id: 1,
  name: "john",
};

console.log(loginUser(user))

// DAY 3 MAP() METHOD //
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

const numbers2 = [1, 2, 3, 4,5];
const halfed = numbers2.map(num => num / 2);
console.log(halfed);

const numbers3 = [1, 2, 3, 4, 5];
const result6 = numbers3.map(num => num + 1);
console.log(result6);

// FILTER METHOD // 
const numbers4 = [5, 10, 15, 20];
const result5 = numbers4.filter(num => num > 10);
console.log(result5)

const numbers5 = [1, 2, 3, 4, 5];
const result7 = numbers5.filter(num => num % 2 != 0);
console.log(result7);

const numbers6 = [1, 2, 3 , 4, 5];
const result8 = numbers6.reduce((sum, num) => sum + num, 0);
console.log(result8);

const prices = [10, 20, 30 , 40];
const add2 = prices.map(num => num + 5);
const keep = prices.filter(num => num > 25);
const sum = prices.reduce((sum, num) => sum + num, 0);
console.log(add2);
console.log(keep);

const user2 = [
  {name: "John", age: 12},
  {name: "Praise", age: 18},
  {name: "zoe", age: 25}
];
const adults = user2.filter(user2 => user2.age >= 18);
console.log(adults);

// DAY 4 //
const car = {
  brand: "Toyota",
  year: 2020
};
console.log(car.brand)

const user3 = {
  name4: "John",
  age: 30
};
const  { name4 } = user3;
console.log(name4)

// MINI CODING PRACTICE //
const book = {
  title: "established",
  author: "grace linkdiln",
  year: 2008,
};
console.log(book.title);
book.publisher = "lad";
console.log(book);

// DAY 5 DOM-DOCUMENT OBJECT MODEL //
const button = document.getElementById("btn");

button.addEventListener("click", function() {
document.getElementById("title").textcontent = "helllo praise!";
});

const div = document.createeElement("div");
div.textcontent = "hello world";
document.body.appendChild(div);


// MINI TASK //
const button1 = document.getElementById("btn1");

button1.addEventListener("click", function(){
  document.getElementById("btn1").textContent = "welcome to javascript"
  
})