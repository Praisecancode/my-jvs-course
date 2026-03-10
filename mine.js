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


 // GLOBAL SCOPE //
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