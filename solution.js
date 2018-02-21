function disemvowel(str) {
  let arr = str.split('');
  const Vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u','U'];
  return(arr.filter(letter => !Vowels.includes(letter)).join(''));
}