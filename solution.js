function mutateMyStrings(stringOne, stringTwo) {
  let stringOneArray = stringOne.split('');
  let stringTwoArray = stringTwo.split('');

  let result = (stringOne + '\n');

  for (i = 0; i < stringOneArray.length; i++) {

    if (stringOneArray[i] !== stringTwoArray[i]) {
      stringOneArray[i] = stringTwoArray[i];
      result = result.concat(stringOneArray.join('') + '\n');
    }
  }
  return result;
}