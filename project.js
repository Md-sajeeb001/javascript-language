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
 
// let inpfNumber = prompt("Enter first Number : ");
// let inplNumber = prompt("Enter Second Number : ");

// inpfNumber = parseInt(inpfNumber);
// inplNumber = parseInt(inplNumber);

// let Addtition, Subtraction, Multiplication, Modules, Divisioin;

// Addtition = inpfNumber + inplNumber;
// document.write( inpfNumber + " + " + inplNumber + " = " + Addtition + "<br/>");

// Subtraction = inpfNumber - inplNumber;
// document.write( inpfNumber + " - " + inplNumber + " = " + Subtraction +  "<br/>");

// Multiplication = inpfNumber * inplNumber;
// document.write( inpfNumber + " * " + inplNumber + " = " + Multiplication +  "<br/>");

// Divisioin = inpfNumber / inplNumber;
// document.write( inpfNumber + " / " + inplNumber + " = " + Divisioin +  "<br/>");

// Modules = inpfNumber % inplNumber;
// document.write( inpfNumber + " % " + inplNumber + " = " + Modules);


// let fNumber = prompt("Enter First Number : ");
// let lNumber = prompt("Enter Second Number : ");


// fNumber = parseInt(fNumber);
// lNumber = parseInt(lNumber);

// // let result ---> ay Khane ami varibel a akta variabel use korte parbo ate amer storeg save hobe 
// let addition, subtraction, Multiplication, Modules, Divisioin;


// // let result variabl ta ami documet.write(result) a pass korle ati thik thak kaj korbe!

// addition = fNumber + lNumber;
// document.write(fNumber + " + " + lNumber + " = " + addition + "<br/>");

// subtraction = fNumber - lNumber;
// document.write(fNumber + " - " + lNumber + " = " + subtraction + "<br/>");


// Multiplication = fNumber * lNumber;
// document.write(fNumber + " * " + lNumber + " = " + Multiplication + "<br/>");


// Modulas = fNumber % lNumber;
// document.write(fNumber + " % " + lNumber + " = " + Modules + "<br/>");


// Divisioin = fNumber / lNumber;
// document.write(fNumber + " / " + lNumber + " = " + Divisioin);

// let A = "30";
// console.log(Number(A));

//  FAHRENHEIT TO CELSIUS !

// let farn = parseFloat(prompt("Enter Fahrenheit : "));

// let cels = (farn - 32) * (5/9);
// document.write( "Celsius = " + cels);

// Relational operator -> >, >= , <=, ==, ===, !=, !==;

// Logical operator -> &&, ||, !;

// let value1 = 30;
// let value2 = 20;
// let valus3 = 100;

// console.log(value1 < valus3);
// console.log(value2 > value1);
// console.log(value1 <= 20 );
// console.log(valus3 >= value2);
// console.log(value1 == "30");
// console.log(valus3 === 100);
// console.log(value2 === value1);
// console.log(value2 != valus3)
// console.log(valus3 != 100);
// console.log(value1 !== 100);

// let value4 = 400;
// let value5 = 500;
// let value6 = 100;

// console.log(value4 > value6 && value1 > value2 && valus3 < value5);

// console.log(value2 < value4 && value6 < value2);

// console.log(value4 < value1 || value5 > valus3 || value5 > value4 )

// console.log(!(value2>value5));


// USER MARKS SHEET !

// let userInput = parseFloat(prompt("Enter Your Marks : "));

// if(userInput > 100 || userInput < 0){
//     console.log("invelid number")
// }

// else if(userInput >= 80 && userInput <= 100){
//   console.log("You pass with A+");
// }
// else if(userInput >= 70){
//     console.log("You pass with A");
// }
// else if(userInput >= 60){
//     console.log("You pass with B")
// }
// else if(userInput >= 50){
//     console.log("You pass with C");
// }
// else if(userInput >= 40){
//     console.log("D");
// }
// else{
//     console.log("TUMI ANDA PYSO BORO AKTA ANDA");
// } 


// let fNum = parseFloat(prompt("Enter First Number : "));
// let lNum = parseFloat(prompt("Entet second num"));
// let tNum = parseFloat(prompt("Enter thirs num"));

// if(fNum > lNum && fNum > tNum){
//     console.log("large number = " + fNum);
// }
// else if(lNum > fNum && lNum > tNum){
//     console.log("large number = " + lNum)
// }
// else{
//     console.log("large number = " + tNum);
// }

// let letter = prompt("enter a letter : ")

// letter = letter.toLowerCase();

// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter =="u"){
//    console.log("Vowel");
// }
// else{
//     console.log("consotent");
// }


//  USER INPUT !

// let letter2 = prompt("Enter a letter : ");

// letter2 = letter2.toLowerCase();

// switch(letter2){
//     case "a":
//     console.log("Vowel");
//     break;
//     case "u":
//     console.log("Vowel");
//     break;
//     case "o":
//     console.log("Vowel");
//     break;
//     case "i":
//     console.log("Vowel");
//     break;
//     case "e":
//     console.log("Vowel");
//     break;
//     default:
//         console.log("Consonant");
// }

// You also use can Multiple case !

// let userLetter = prompt("Enter a Letter : ");

// userLetter = userLetter.toLowerCase();

// switch(userLetter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log( userLetter + " is a Vowel letter");
//         break;
//     default:
//         console.log(userLetter + " is a consonant letter");
// }

// FOR LOOP !

// let x = 0;

// for(let x = 1; x <= 100; x++){
//    document.write(" " + x);
// }

// for(let x = 1; x <= 100; x = x + 2){
//     document.write(" " + x);
// }

// for(let x = 2; x <=100; x = x +2){
//     document.write(" " + x);
// }


// var sum = 0;

// for(var x = 1; x <= 10; x++){
//    sum = sum + x;
//   //  console.log(sum);
// }
// document.write(sum);

// for(let x = 0; x <=10; x++){
//    console.log("Bangladesh" + x);
// }

// let sum = parseInt(prompt("enter first number : "));
// let sum2 = parseInt(prompt("enter second number : "));

// for(let a = 1; a <= 10; a++ ){
//   sum = sum + a;
// }
// console.log(sum);

// for(let x = 1; x <= 5; x++){
//     let num1 = parseInt(prompt("enter first number : "))
//     let num2 = parseInt(prompt("enter second number : "))
//     let sum = num1 + num2;
//     console.log("Result = "+sum);
// }

// let numBer = 1;

// while(numBer <= 100){
//   document.write( " " + numBer);
//   numBer++;
// }

// let n = 2;
// while(n <= 100){
//    document.write(" " + n);
//   n = n + 2;
// }

// let numf = 10;

// while(numf >=1){
//   document.write(" " + numf)
//   numf--;
// }

// let i = 2;
// let sum = 0;

// while(i <= 100){
//    sum = sum + i;
//    i= i + 2;
// }
// document.write(sum);

// let userNumber = Number(prompt('Enter Your Number : '));
// let userCondition = userNumber > 0? "it's positive" : "it's nagetive";
// console.log(userCondition);

// let num1 = Number(prompt("Enter Your Number : "));

// let result = num1 >0? "It's positive" : num1 < 0? "it's nagetive" : "the Number is Zero";
// console.log(result);



// function userfunction(userNum1, userNum2){
//    let user = userNum1 * userNum2;
//    console.log(user);
// }
// userfunction(6, 7);
// userfunction(19, 2);
// userfunction(4,6);



// Addition 
// function Addition(add1, add2){
//     let addition = add1 + add2;
//     return addition;
// }

// console.log(Addition(" Addition = " + 5, 10));
// console.log(Addition(" Addition = " + 50, 10));
// console.log(Addition(" Addition = " + 29, 10));

// function Subtraction(sub1, sub2){
//     let subtraction = sub1 - sub2;
//     return subtraction;
// }
// console.log("Subtraction = " + Subtraction(20, 50));
// console.log("Subtraction = " + Subtraction(100, 30));
// console.log("Subtraction = " + Subtraction(39, 50));

// function Multiplication(mulNum1, mulNum2){
//    let multiple = mulNum1 * mulNum2;
//    console.log(multiple);
// }
// Multiplication(" Multiplication = "  + 2,4);
// Multiplication(" Multiplication = "  + 10, 20);
// Multiplication(" Multiplication = "  + 200, 400);

// function Division(div1, div2){
//    let divi = div1 / div2;
//    console.log(divi);
// }
// Division(4,5);
// Division(19,39);
// Division(50,39);
// Division(100, 299);

// IIFEs (Immediately Invokeable Function Expressions)

//   (function task(sum1, sum2){
//      let sumtask = sum1 + sum2;
//      console.log(Number(sumtask));
//    })(5,50);  

   // ARRAY PRACTICE !
   
    // let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    // for(let i = 0; i < 5; i++){
    //   num[i] = parseInt(prompt("Enter a Number : "));

    // }
    // let sum = 0;
    // for(let i = 0; i < 10; i ++){
    //    console.log(num[i]);
    //    sum = sum + num[i];
    // }
    // console.log(sum);

// console.log(arrayNum);

// ARRAY SORTING !

// let letter = ["A", "B", "C", "D", "E", "F", "I"];

// letter.reverse();
// console.log(letter);

// let sortingNumber = [4, 2, 5, 1, 7, 9, 80, 40, 20, 30];

// sortingNumber.sort(function(a, b){
//   return a - b;
// });
// console.log(sortingNumber);
// sortingNumber.slice(2);
// console.log(sortingNumber);


// console.log(sortingNumber);
// sortingNumber.splice(3, 2, "Banana", "orange");
// console.log(sortingNumber);


// let letter = ["A", "B", "C", "D", "E", "F", "I"];

// let sortingNumber = [4, 2, 5, 1, 7, 9, 80, 40, 20, 30];

// let sum = 0;
// for(let i = 0; i < 10; i++){
//    console.log(sortingNumber[i]);
//    sum = sum + sortingNumber[i];
// }
// console.log(sum);

// sortingNumber.sort(function(a, b){
//   return a - b;
// });
// console.log(sortingNumber);

// let letter = ["A", "B", "C", "D", "E", "F", "I"];

// for(let x of letter){
//   console.log(x);
// }

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let newfruit = fruits.slice(1);
// console.log(newfruit);
// console.log(fruits);

// One Dimensional Array
// Create a function called highestscore that 
// Riceive a 1d array called scores
// return the highest score

// function highestscore(scores){
//    let max = scores[0];
//    for(let x = 1; x < scores.length ; x++){
//       if(max < scores[x]){
//         max = scores[x];
//       }
//    }
//    return max;
// }

// let scores = [10, 20, 5, 8, 30, 80,];
// let maxscores = highestscore(scores);
//  console.log(maxscores);

// function highestscore2(score){

//   let max = score[0];
//   for(let x = 1; x < score.length; x++){
//      if(max < score[x]){
//       max = score[x];
//      }
//   }
//   return max;
// }

// let score = [10,20,30,40,50,60];
// let maxscores = highestscore2(score);
// console.log(maxscores);


// function myNumber(bigestNumber){
//   let max = bigestNumber[0];
//   for(let x = 1; x < bigestNumber.length; x++)
//      if(max < bigestNumber[x]){
//       max = bigestNumber[x];
//      }    
//      return max;
// }


// let oneDarray = [1, 4, 23, 54, 65, 87];
// let finalresult = myNumber(oneDarray);
// console.log(finalresult);