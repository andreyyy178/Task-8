console.log("this is executing");
// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string){
    return string.split('').reverse().join('');
}

//test
var str ="Hello";
console.log("Original string:", str);
var newStr = reverseThisString(str);
console.log("New string:", newStr);

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD

function swapCase(string) {

    var splitString = string.split("");

    var answer = "";

    splitString.forEach(element => {
        element === element.toUpperCase() 
        ? answer += element.toLowerCase()
        : answer += element.toUpperCase()
    });
    return answer
}

//test
var str ="Hello World";
console.log("Original string:", str);
var newStr = swapCase(str);
console.log("New string:", newStr);


//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    return array.map(fahrenheit  => (fahrenheit  -32)/1.8);
}

arguments = [23, 32, 41, 50, 59];
console.log("F tempretures: ", arguments);
console.log("After converting to celcius: ", toCelcius(arguments));

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array){
  
    return array.map(arg => Boolean(arg >= 75));;
}

var arguments = [20, 30, 50, 80, 90, 100];
console.log("Arguments: ", arguments);
var newArgs =  passOrFail(arguments);
console.log("After filtering: ",newArgs);

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    return cardinalNumbers.map((e, i) => e + " is " + germanNumbers[i]);
}

console.log("German numbers: ", germanNumbers());

// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var isPrime = n => {
        if (n===1){
        return false;
        }else if(n === 2){
           return true;
        }else{
           for(let x = 2; x < n; x++){
              if(n % x === 0){
                 return false;
              }
           }
           return true;
        };
     };
    return numbers.filter(num => isPrime(num));
}

console.log("Prime numbers: ", returnPrimeNumbers());

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:

function returnPrimeNumbers(){
    for(let i = 1; i<=100; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        }

        else if (i % 3 === 0){
            console.log("CSC225 RULES");
        }

        else if (i % 5 === 0){
            console.log("I LOVE JAVASCRIPT");
        }
        
        else {
            console.log(i);
        }
    }
}