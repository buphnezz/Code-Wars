var replaceDots = function(str) {
var newReplaceDots = str.replace(/./i, replaceDots);
  return str.replace(/./, '-');
}