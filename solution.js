function capitalize(s) {
  var arr = s.split('');
  var arrOddIndex = [];
  arrOddIndex.push(arr[0]);
  arr[0] = arr[0].toUpperCase();
  for (var i = 1; i < arr.length; i++) {
    if (i % 2 === 0) {
      arrOddIndex.push(arr[i]);
      arr[i] = arr[i].toUpperCase();
    } else {
      arrOddIndex[i] = arr[i].toUpperCase();
    }
  }
  var sEvenIndexNums = arr.join('');
  var sOddIndexNums = arrOddIndex.join('');
  return [sEvenIndexNums, sOddIndexNums];
};
