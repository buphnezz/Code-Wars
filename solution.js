<<<<<<< HEAD
function filter_list(l) {
  return l.filter(function (value) {
    return (typeof value === "number")
  });
};
=======
function solution(str) {
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}
>>>>>>> 2b363ae5d8c526adbf49e30f747004d6e63ba6b7
