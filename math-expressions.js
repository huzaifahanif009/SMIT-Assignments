// Task 01
var num1 = 3;
var num2 = 5;
var totalNumber = num1 + num2;

alert(`Sum of ${num1} and ${num2} is ${totalNumber}`);


// Task 02
var num1 = 3;
var num2 = 5;
var totalNumber = num1 - num2;

alert(`Sum of ${num1} and ${num2} is ${totalNumber}`);



var num1 = 3;
var num2 = 5;
var totalNumber = num1 * num2;

alert(`Sum of ${num1} and ${num2} is ${totalNumber}`);



var num1 = 3;
var num2 = 5;
var totalNumber = num1 / num2;

alert(`Sum of ${num1} and ${num2} is ${totalNumber}`);



var num1 = 3;
var num2 = 5;
var totalNumber = num1 % num2;

alert(`Sum of ${num1} and ${num2} is ${totalNumber}`);



// Task 04
var ticketCost = 600;
var fiveTicketCost = ticketCost * 5;

alert(`Total cost to buy 5 tickets to a movie is ${fiveTicketCost}PKR`);



// Task 05
var num = prompt("Enter you number: ");
for (let i = 1; i <= 10; i++) {
    var answer = i * num;
    console.log(`${num} * ${i} = ${answer}`);
}


// Task 06
// Celsius to Fahrenheit conversion
var celsius1 = 35;
var fahrenheit1 = (celsius1 * 9/5) + 32;
console.log(`${celsius1}°C is ${fahrenheit1}°F`);


// Fahrenheit to Celsius conversion
var fahrenheit2 = 77;
var celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(`${fahrenheit2}°F is ${celsius2}°C`);

 

// Task 07 
var itemOnePrice = 650;
var itemTwoPrice = 100;
var quantityOfItemOne = 3;
var quantityOfItemTwo = 7;
var shippingCost = 100;
var totalCost = itemOnePrice * quantityOfItemOne + itemTwoPrice * quantityOfItemTwo + shippingCost;


console.log(`Price of item 1 is ${itemOnePrice}`);
console.log(`Quantity of item 1 is ${quantityOfItemOne}`);
console.log(`Price of item 2 is ${itemTwoPrice}`);
console.log(`Quantity of item 2 is ${quantityOfItemTwo}`);
console.log(`Shipping Charges ${shippingCost}`);
console.log(`Total cost of your order is ${totalCost}`);



// Task 08
var totalMarks = 980;
var obtainMarks = 804;
var percentage = obtainMarks * 100 / totalMarks;
console.log(`Total Marks: ${totalMarks}`);
console.log(`Obtian Marks: ${obtainMarks}`);
console.log(`Percentage: ${percentage}`);



// Task 09
var dollar = 10;
var riyals = 25;
var dollarConversion = 104.80;
var riyalConversion = 28;
var totalPKR = dollar * dollarConversion + riyals * riyalConversion;

console.log(`Total Currency in PKR: ${totalPKR}`);




// Task 10
var numB = 10;
var totalNum = ((numB + 5) * 10) / 2;
console.log(`The result is: ${totalNum}`);


// Task 11
var currentYear = 2024;
var birthYear = 2001;
var age = currentYear - birthYear;
console.log(`My age is: ${age}`);
 


// Task 12
var radius = prompt("Enter the radius you have: ");
var circumference = 2 * 3.142 * radius;
console.log(`The circumference is ${circumference}`);

var area = 3.142 * radius * radius;
console.log(`The area is ${area}`);



// Task 13
var favoriteSnack = "Chips";
var currentAge = 22;
var maxAge = 60;
var perDayRequired = 2;
var remainingAge = maxAge - currentAge;
var totalSnacksRequired = remainingAge * 365 *perDayRequired;

console.log(`You will need ${totalSnacksRequired} ${favoriteSnack} to last you will until the ripe old age of ${maxAge}`);