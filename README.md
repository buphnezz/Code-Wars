Code Wars: Use map() to double the values in an array


Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

 Solution:
 function double(array) {
  let doubledArray = array.map(x => x * 2);
  return doubledArray;
}

Source:  In-class demo by Vinicio!