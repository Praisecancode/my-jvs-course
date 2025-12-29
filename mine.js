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

function getUsername(){
    return "praise Eshemokhai! :)"
}

let name = getUsername();

document.getElementById("title").innerText = "dashboard";
document.getElementById("message").innerText = "Hello " + name;

function getItemCount(){
    return 3;
}

let itemsInCart = getItemCount(); {

    document.getElementById("cart").innerText = "items in your cart is " + itemsInCart;

}

function getUnReadMessages(){
    return 50;
}

let myUnreadMessages = getUnReadMessages(); {

    document.getElementById("unread").innerText = "you have " + myUnreadMessages + " unread messages";
}

function getAge(){
    return 18
}

let myAge = getAge(); {

    document.getElementById("age").innerText = "you are now " + getAge() + " years old";
}

function getNumberOfFriends() {
    return 2;
}

let numberOfFriends = getNumberOfFriends(); {

    document.getElementById("friends").innerText = "you have " + numberOfFriends + " new friends";
}

