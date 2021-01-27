var x = 5,
  z = 0;
z = (function () {
  var w = 7;
  return function (t) {
    return x + t + w;
  };
})()(2);