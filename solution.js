function high(x) {
  let highestScoringWord = 0;
  let word = '';
  let wordArray = x.split(' ');
  for (var i = 0; i < wordArray.length; i++) {
    let wordTotal = 0;
    let newlyIndexedWord = wordArray[i];
    for (var j = 0; j < newlyIndexedWord.length; j++) {
      wordTotal = wordTotal + (newlyIndexedWord.charCodeAt(j) - 96);
    }
    if (wordTotal > highestScoringWord) {
      highestScoringWord = wordTotal;
      word = newlyIndexedWord;
    }
  }
  return word;
};