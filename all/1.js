var a = 3,
  b = 7,
  c = 2;
function foo(b) {
  var c = 1;
  return a + b + c;
}
c = foo(4);
console.log(c);
