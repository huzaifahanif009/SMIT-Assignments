// // 01.Question....................

// // let inp = prompt("ENter Your City...")
// // if (inp == "Karachi") {
// //     console.log("Welcome to the city of Light");

// // }


// // 02.Question...........

// // let userinp = prompt("ENter Your Gander...")
// // if (userinp == "male") {
// //     console.log("Good Morning Sir");
// // }
// // else if (userinp == "female") {
// //     console.log("Good Morning Mam");

// // }



// // 03.Question.................

// // let Raod_Ligt = prompt("ENter You a rafic light color...")
// // if (Raod_Ligt == "red") {
// //     console.log("Must Stop");
// // }
// // else if (Raod_Ligt == "yellow") {
// //     console.log("Ready to move");

// // }else if(Raod_Ligt == "green"){

// //     console.log("move Now");
// // }



// // 04.Question.................


// // let fuel = prompt("ENter remaining fuel in car (in liters)...")
// // if (fuel < 0.25) {
//     //     console.log("Please refill the fuel in your car");

//     // }




//     // 05.Question.................

//      var a = 4;
//     if (++a === 5){
//     alert("given condition for variable a is true");
//     }

//  var b = 82;
//     if (b++ === 83){
//     alert("given condition for variable b is true");
//     }
//     var c = 12;
//     if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }
//     var materialCost = 20000;
//     var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
//     }
//      if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


//      if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//     // 06.Question.................

// const marksSubject1 = 85; 
// const marksSubject2 = 90; 
// const marksSubject3 = 78; 
// const totalMarks = 300;   

// // Calculate total obtained marks
// const totalObtained = marksSubject1 + marksSubject2 + marksSubject3;

// // Calculate percentage
// const percentage = (totalObtained / totalMarks) * 100;

// let grade;
// if (percentage >= 90) {
//     grade = 'A';
// } else if (percentage >= 80) {
//     grade = 'B';
// } else if (percentage >= 70) {
//     grade = 'C';
// } else if (percentage >= 60) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }

// console.log(Percentage: ${percentage.toFixed(2)}%);
// console.log(Grade: ${grade});


//     // 07.Question.................

// let inpuser = parseFloat(prompt("Guess the number b/w 0-10"))
// let num = 4
// if (num === inpuser) {
//     console.log("Bingo! Correct answer");
// } else if (num === inpuser - 1) {
//     console.log("Close enough to the correct answer");

// }

//     // 08.Question.................

// let number = parseFloat(prompt("Enter A NUmber..."))
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number + " is not divisible by 3.");
// }


//     // 09.Question.................

// let number = parseFloat(prompt("Enter A Number..."))

// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }

//     // 10.Question.................

// let temperature = parseFloat(prompt("Enter A temperature number..."))
// if (temperature >= 40) {
//     console.log("It is too hot outside.");
// } else if (temperature >= 30) {
//     console.log("The Weather today is Normal.");

// }else if (temperature >= 20) {
//     console.log("“Today’s Weather is cool.”");

// }else if (temperature >= 10) {
//     console.log("“OMG! Today’s weather is so Cool.”");

// }


//     // 11.Question.................
// Get user input
// var firstNumber = prompt("Enter the first number:");
// var secondNumber = prompt("Enter the second number:");
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Convert inputs to numbers
// firstNumber = Number(firstNumber);
// secondNumber = Number(secondNumber);

// // Initialize result variable
// var result;

// // Perform the calculation based on the operation
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     result = secondNumber !== 0 ? firstNumber / secondNumber : "Error: Division by zero";
// } else if (operation === "%") {
//     result = firstNumber % secondNumber;
// } else {
//     result = "Invalid operation";
// }

// // Show the result to the user
// alert("The result is: " + result);