// Task 01 -- Declare 3 variables in one statement.

var name = "Muhamamd Fahad", age = 22, student = "Yes";



// Task 02 -- Declare 5 legal & 5 illegal variable names.

// 5 Legal Variable

var name = "Muhammad Fahad";
var age = 22;
var student = true;
var height = "5.4 inch";
var email = null;

// 5 Illegal Variable

// var full name = "Muhammad Fahad";
// var 123age = 22;
// var STU-dent = true;
// var catch = "5.4 inch";
// var user@email = null;



// Task 03 -- Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


// a.
document.getElementById("heading").textContent = "Rules for naming JS variable";


// b.
var contain1 = "number";
var contain2 = "$";
var contain3 = "___";

document.write(`<br><br><br>Variables names can only contain ${contain1}, ${contain2} and ${contain3}.<br>`)


// c.
var begin1 = "$name";
var begin2 = "_name";
var begin3 = "name";

document.write(`Variables must begin with a ${begin1}, ${begin2} or ${begin3}.<br>`)


// d.
var variableName = "Sensitive";
document.write(`Variable names are case ${variableName}.<br>`)


// e.
var variableName2 = "Keywords";
document.write(`Variable names should not be JS ${variableName2}.<br>`)