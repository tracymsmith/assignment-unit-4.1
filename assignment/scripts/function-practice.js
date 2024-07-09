console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log('');



// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return 'Hello,' + ' ' + name + '!';
}
console.log('Test - should say "Hello, Trixie!"', helloName('Trixie'));
console.log('');


//  console.log(helloName('Your Name'))

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log('Test addNumbers function should be "5 + 4":', addNumbers(5, 4));
console.log('');


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log('Test - multiplyThree function should be "3 * 2 * 4:"', multiplyThree(3, 2, 4));
console.log('');


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
console.log('Test isPositive number 3 should return true:', isPositive(3));
console.log('Test isPositive number -3 should return false:', isPositive(-3));
console.log('Test isPositive number 0 should return false:', isPositive(0));
console.log('');


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let lakeFishArray = ['bluegill', 'northern', 'walleye', 'perch'];

function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  return undefined;
}
console.log('last item in array:', getLast(lakeFishArray));
console.log('');

//// function contains(arrayOfNames, name) {
//   for (index = 0; index < arrayOfNames.length; index++) {
//     if (arrayOfNames[index] === name) {
//       return true;
//     } else {
//       return false;
//     }
//   }

// }

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
// function find(value, array) {

// };
function find(value, array) {
  for (let i = 0; i < array.length; i++){
    if (array[i] === value) {
      return true;
    }
  }
  return false;

}


let wineNames = ['merlot', 'cabernet', 'chablis', 'port'];
console.log('is chablis value in wineNames array:', find('chablis', wineNames))
console.log('is cabernet value in wineNames array:', find('cabernet', wineNames))


// function find (wine, wineNames) {
//   for (let i = 0; i < wineNames.length; i++) {
//     if (wineNames[i] === wine) {
//        return true;
//     } else {
//        return false;
//       }
//     }
//   }
//   console.log('if merlot in array return true:', find('merlot', wineNames));
//   console.log('if chianti not in array return false:', find('chianti', wineNames));
console.log('');

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('');


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}
console.log('');

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}
console.log('')


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


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
