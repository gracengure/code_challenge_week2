

function range(start ,end)  {
    //'return' to exit  the function immedietly and output the results
       // Array(end - start+ 1) will help you create an empty array with length equal to difference between end and start ,plus one
    return Array(end - start+ 1)
    // .fill()is used to help you fill the empty array with undefined values
    .fill()
    // Then use .map() to apply the function that takes two arguements:(_)the curent element which will be emptyand the index of element 
    //Afterwards add the start to each value to get the desired results
    //It will in the end return a new array with changes 
      .map((_, index) => start+ index)
  }
  //Finally store the mapped array in the the variable of 'change'
  const change=range(-4,7);
  // output the new array with numbers in between the range replaced
  console.log (change)