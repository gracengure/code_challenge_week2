//define  a string
const description = "The Quick Brown Fox";

const change = description
  //use the .split() to split the string to invidual characters
  .split("")
  // Then use .map() to apply the function and return a new array with changes and it will help you to iterate and apply the swapping logic to each character in the array
  .map(
    // the  function enable you to swap the letters accordingly
        (a) => {
        //use the ternary expression with 'return' to exit  the function immedietly and output the swapped string 
      return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase();
    }
  )
  //use the join() to join the swapped strings together into a new string
  .join("");
// output the new array with swapped letters
console.log(change);
