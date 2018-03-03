function capitalize(s){
  let arr = s.split('');
  let arrOddIndex = [];
  arrOddIndex.push(arr[0]);
  arr[0] = arr[0].toUpperCase();
  for (let i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      arrOddIndex.push(arr[i]);
      arr[i] = arr[i].toUpperCase();
    } else {
      arrOddIndex[i] = arr[i].toUpperCase();
    }
  }
  let sEvenIndexNums = arr.join('');
  let sOddIndexNums = arrOddIndex.join('');
  return [sEvenIndexNums, sOddIndexNums];
};
