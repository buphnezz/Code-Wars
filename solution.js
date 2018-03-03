function mutateMyStrings(stringOne, stringTwo) {
  let first = stringOne.split('');
  let second = stringTwo.split('');

  let result = (stringOne + '\n');

  for (i = 0; i < first.length; i++) {

    if (first[i] !== second[i]) {
      first[i] = second[i];
      result = result.concat(first.join('') + '\n');
    }
  }
  return result;
}