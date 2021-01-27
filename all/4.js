const obj = {
  x: 3,
  fn: function (y, z) {
    console.log(this.x + y + z);
  },
};
const otherObj = { x: 5 };
obj.fn(1, 2);