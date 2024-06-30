console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  console.log('in hello function');
  return 'Hello World!';
}
// Call the function to test
console.log('Test hello- should say "Hello World!: "', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName (name) {
  console.log('In helloName function. The current parameter is: ', name);
  return 'Hello, ' + name +'!';
}
// Remember to call the function to test
console.log('Test helloName- should say "Hello, Emma!: "', helloName('Emma'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log('In addNumbers function. The current parameters are: ', firstNumber, secondNumber);
  return firstNumber + secondNumber;

}
console.log('Test addNumbers- should say 5: ', addNumbers(2,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(first, second, third) {
  console.log('In multplyThree function. The current parameters are: ', first, second, third);
  return first * second * third;
}
console.log('Test multiplyThree- should say 24: ', multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
const isPositive = number => number > 0 ? true : false; 

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test isPositive- should say "true": ', isPositive(3));
console.log('Test isPositive- should say "false": ', isPositive(0));
console.log('Test isPositive - should say "false": ', isPositive(-2.4));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  console.log('In getLast function. The curernt parameter is: ', array);
  let lastItem = (array.length > 0) ? array[array.length-1] : undefined;
  return lastItem
}

console.log('Test getLast- should return "three": ', getLast(['one', 'two', 'three']));
console.log('Test getLast- should return "undefined": ', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let anyTrue = 0;
  console.log('In find function. The current parameters are: ', value, array);
  for (let i = 0; i<array.length; i++) {
    if (array[i] === value) {
      anyTrue ++;
      console.log('In if statement in find function. The numbe to of items in array = to value: ', anyTrue);
    }
  }
    if (anyTrue > 0){
      return true;
    }
      return false;
}


console.log('Test find - should return "true": ', find(21, [20, 21, 22]));
console.log('Test find - should return "false": ', find(2, [20, 21, 23, 25]));
console.log('Test find - should return "true":', find(2.5, [2.5, 6.2, 9.2, 2.5, 109, 2.5, ]) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  console.log('In isFirstLetter function. The current parameters are: ', letter, string);
  if(string.charAt(0) === letter) {
    return true;
  }
  return false;
}

console.log('Test isFirstLetter - should return "true": ', isFirstLetter('d', 'dog'));
console.log('Test isFirstLetter - should return "false": ', isFirstLetter('a', 'cat'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  let i = 0;
  console.log('In sumAll function. The current parameter is: ', array)
  // TODO: loop to add items
while (i < array.length) {
  sum = sum + array[i];
  i ++;
  console.log('In while loop in sumAll funtion. The sum each time an item in array is added: ', sum);
}
return sum;
  // TODO: return the sum
}
let simpleArray = [1,2,3,4,5];
let negSimpleArray = [-1, -2, -3, -4, -5];
let totalArraySum = sumAll(simpleArray);

console.log('Test sumAll - should return "15": ', totalArraySum);

totalArraySum = sumAll(negSimpleArray);

console.log('Test sumAll - should return "-15": ', totalArraySum);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let positives = [];
  console.log('In allPositives function. The current parameter is: ', array);
   for (let i=0; i < array.length; i++ ){  
    if (array[i] > 0){
      positives.push(array[i]);
      console.log('In if loop in allPositives function. Updated each time a positive is added to the array: ', positives); 
    //This output didn't update each loop, rather it had the final array three times (each loop?)
    }
  }
    return positives;
}

let posNegArray = [-1,-2,-3,0,1,2,3];
let newPositiveArray = allPositive(posNegArray);

console.log('positive and Negative Array: ', posNegArray);
console.log('Test allPositives - New Positive Array: ', newPositiveArray);


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes a number as an argument. Add up 
//all the numbers from 1 to the number you passed to the function. 
//For example, if the input is 4 then your function should return 
//10 because 1 + 2 + 3 + 4 = 10.

function sumFactorial(num) {
  let totalSum = 0;
  console.log('In sumFactorial function. The current parameter is: ', num);
  for (num; num > 0; num--) { 
    totalSum += num;
    console.log ('In for loo in sumFactorial function. Should increase each time one less number is added: ', totalSum);
    }
    return totalSum;
  }

console.log('Test sumFactorial - should be 10: ', sumFactorial(4));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
