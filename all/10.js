const zadanie = {
  name: 'test',

  showThis: function () {
    console.log('1', this);

    const showThis2 = () => {
      console.log('2', this);
    };
    showThis2();

    const showThis3 = function () {
      console.log('3', this);
    };
    showThis3();
  },

  showThis4: () => {
    console.log('4', this);
  },

  showThis5() {
    console.log('5', this);
  },
};
