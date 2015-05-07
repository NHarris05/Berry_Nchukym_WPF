/* Nchukym Berry
5/7/2015
sec-02
Expressions Assignment
 */

alert("This is a calculator for nurses \n  to see if you are \n  being over worked \n Please enter the days and hours you work each week");

/*var a = prompt("Enter The first  \n day you work in the week"); //user prompt input. var set to print to console
console.log(a); // printed to console

var b = prompt ("How many hours \n do you work on this day?"); //var set to print to console. This number will be used in the array
console.log(b);

var c = prompt("Enter the second day you work thi week"); // this will be used the the string var
console.log(c);

var d = prompt("How many hours do you \n work on that day?"); //this will be used in the array
console.log(d);

var e = prompt ("Enter the last few days that you work \n in a week"); this will be used in the string var
console.log(e);

var f = prompt ("How many hours do you \n work on that day?"); // this will be used in the array
console.log(f);


var workDays = [ "Monday","Tuesday", "Friday", "Saturday", "Sunday"]; // this is the string var with a prompt question after
alert("You work" + workDays + "each week?");
var answer = true; //boolean variable
console.log(answer);
answer = prompt ("True or False");
*/




var hoursWorked = [12, 16, 18,24, 24]; // this is an array from the information gathered
var hoursADay = hoursWorked[0] + hoursWorked[1] + hoursWorked[2] + hoursWorked[3] + hoursWorked[4] / 5; // I took the index number for the array and divided by 5 to get the total amount of hours worked per day
console.log(hoursADay);

var hoursMonthly = hoursWorked[0] + hoursWorked[1] + hoursWorked[2] + hoursWorked[3] + hoursWorked[4] * 4; // I took the index numbers from the array and multiplied by 4 to get the total amount of hours worked each month
console.log(hoursMonthly);

var time; //defined var
time = 89; //declaration
    time += 5; //assignment operator
console.log(time); // how many hours a week were worked














