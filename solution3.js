//Defining an array of  numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = numbers.filter((number) => {
    // using the 'for loop' to iterate over every element 
    // let i=2 (the initialization) used to initialize a counter variable.
    //i<number(the condition) states that you should run the code in the loop body while i is less than number.
  //   i++(iteration) increments our counter by 1 at the end of each pass through the loop.
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {return false;}
  }
  //this ensure that the number output is greater than 1
return number >1;
});
// output array of  the prime numbers in a the same order as the the input array
console.log(isPrime);
