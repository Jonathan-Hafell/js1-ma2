// question 1
const myFunctionExpression = function() {
  console.log("jonathan");
};

// question 2
const button = document.querySelector(".btn");

let buttonClicker = function() {
  console.log("i was clicked");
};

button.addEventListener("click", buttonClicker);
 
// question 3
// select input by id
const someInput = document.querySelector("#firstName");

function KeyWasPressed(event) {
  console.dir(event.key);
  console.log("A key was pressed");
}

someInput.addEventListener("keydown", KeyWasPressed);

// question 4
// select button by its tag
const mouseButton = document.querySelector("button");

function callOnHover(event) {
  console.log(event);
  event.target.classList.add("hover");
  console.log("The cursor moved over the button");
}

mouseButton.addEventListener("mouseover", callOnHover);

// question 5
const dataButton = document.querySelector("[data-animal=dog]");

function removeHover(event) {
  console.log(event);
  event.target.classList.remove("hover");
  console.log("The cursor was removed from the button");
}

dataButton.addEventListener("mouseout", removeHover);

// question 6

// select all the li tags 
const mouseOverList = document.querySelectorAll("li");
// using a loop, add a mouseover event listener to each tag
for (let i = 0; 0 < mouseOverList.length; i++) {
  mouseOverList[i].addEventListener("mouseover", listHover);
}
//log the data attribute when the cursor moves over it
function listHover(event) {
  console.log(event);
  console.dir(event.target.innerText);
  console.log("The cursor moved over the list");
}

// question 7

// convert the if-else-if statement to switch statement
switch(animal) {
  
  case "cat":
    console.log("Meow");
    break;

  case "cow":
    console.log("Moo");
    break;

  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// question 8
const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(item) {
  console.log(item);
})

// question 9

// crate a timer that logs the word "hello" every half a second
// it must stop after its logged 6 times

function logTime() {
  console.log("hello");

  if(counter === 5) {
    clearInterval(intervalId);
  }

  counter++;
}

let counter = 0;

const intervalId = setInterval(logTime, 500);

// question 10

// select the div "container"
// update the div to say "Text updated" after 2 sec
const containerTextUpdate = document.querySelector(".container");

function updateDiv () {
  containerTextUpdate.innerText = "Text updated";
}

setTimeout(updateDiv, 2000);

