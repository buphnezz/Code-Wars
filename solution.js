
function cubeOdd(arr) {
  let totalOfNumbersInArray = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      totalOfNumbersInArray = undefined;
      return totalOfNumbersInArray;
    }
  }
  arr.map(function (x) {
    if (x % 2 !== 0) {
      x = x * x * x;
      return totalOfNumbersInArray = totalOfNumbersInArray + x;
    }
  });
  return totalOfNumbersInArray;
};
