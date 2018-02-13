function abbrevName(name) {
  var firstAndLastName = name.split(' ')
  initials = firstAndLastName[0].substring(0, 1).toUpperCase() + '.';

  if (firstAndLastName.length > 1) {
    initials += firstAndLastName[firstAndLastName.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
    // code away

