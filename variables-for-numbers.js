
// Task 01 -- Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 22;
alert(`I am ${age} years old`);



// Task 02 -- Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

var num = 0;
 alert(`You have visited this site ${num + 1} times`)



//  Task 03 -- Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 2001;

document.getElementById("birthYear").textContent = `My birth year is ${birthYear}.`;
document.write(`Data type of my declared variable is ${typeof birthYear}. <br>`)



// Task 04 -- A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


var customerName= "John Doe";
var quantity = 5;
var product = "T-shirt(S)";

document.write(`${customerName} ordered ${quantity} ${product} on XYZ Clothing store.`)