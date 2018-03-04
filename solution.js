function capitalize(s, arr) {
  let splitStringArray = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > splitStringArray.length) {
      continue;
    }
    splitStringArray[arr[i]] = splitStringArray[arr[i]].toUpperCase();
  }
  s = splitStringArray.join('');
  return s;
};