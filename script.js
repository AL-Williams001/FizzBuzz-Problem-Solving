//  Fizzbuzz- a simple program that take's the users input and print's the numbers
// from one to the number the user entered. However, for multiples of three print
// Fizz instead of the number and for the multiples of five print buzz. For the
// numbers which are multiple of both three and five print FizzBuzz

// Plan
//allowing users to enter the number
//Prompt
//List of numbers from 1 to the number entered
// 3 = Fizz
//5 = Buzz
//3&5 = FizzBuzz

// Pseudocode
// 1. When a user inputs a number
// 2. Loop from 1 to the entered number
// 3. If the current number is divisble by 3 then print "Fizz"
// 4. If the current number is divisible by 5 then print "Buzz"
//5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
// 6. If not divisible by 3 or 5 then print current number

let input = Number(
  prompt("Please enter the number you would like to FizzBuzz")
);

for (let i = 1; i <= input; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
