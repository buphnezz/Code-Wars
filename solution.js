function filter_list(l) {
  return l.filter(function (value) {
    return (typeof value === "number")
  });
};