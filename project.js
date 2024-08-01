// toFixd() method ar kaj hocche decimal ba dosomik ar por koto gor dekte chacchi ta neya kaj kore!

// let a = 5.769263;

// console.log(a.toFixed(3));

// and toPrecision() method ar kaj hocche decimel ba total koto gor dekte chacchi ! 
// console.log(typeof a.toPrecision(2));

// Number to - toString() method;

// let num = 20;

// num = toString(num)
// console.log(num);


// let stringNum = "30";

// stringNum = parseInt(stringNum);
// console.log(typeof stringNum + " 30");

// use of Number method to change the data type !
// let n = "0.3";

// n = Number(n);
// console.log(n);
// console.log(Number("30"));

// Libary function fot string !

// let number = prompt("Enter Your Name : ")
// document.write( "Number fo character " + number.length)

// let fPerson = 'Mohammd ';
// let lPerson = 'Sajeeb';
//  let fName = fPerson + lPerson;

//  document.write(fName); 
//  document.write(fName.length);
//  document.write(fName.toUpperCase())
// document.write(fPerson + lPerson)


// let num1 = prompt("Enter First Number : ");
// let num2 = prompt("Enter Second Number : ");


// num1 = parseInt(num1, 10);
// num2 = parseInt(num2, 10);

// let sum, sub;

// sum = num1 + num2;
// document.write( " Addition = " + sum +  "<br/>");

// sub = num1 - num2;
// document.write( "subtraction = " + sub);

// CREATE A MINI CALCULATOR FOR USER !
 
let inpfNumber = prompt("Enter first Number : ");
let inplNumber = prompt("Enter Second Number : ");

inpfNumber = parseInt(inpfNumber);
inplNumber = parseInt(inplNumber);

let Addtition, Subtraction, Multiplication, Modules, Divisioin;

Addtition = inpfNumber + inplNumber;
document.write( inpfNumber + " + " + inplNumber + " = " + Addtition + "<br/>");

Subtraction = inpfNumber - inplNumber;
document.write( inpfNumber + " - " + inplNumber + " = " + Subtraction +  "<br/>");

Multiplication = inpfNumber * inplNumber;
document.write( inpfNumber + " * " + inplNumber + " = " + Multiplication +  "<br/>");

Divisioin = inpfNumber / inplNumber;
document.write( inpfNumber + " / " + inplNumber + " = " + Divisioin +  "<br/>");

Modules = inpfNumber % inplNumber;
document.write( inpfNumber + " % " + inplNumber + " = " + Modules);