const marvel = {
  name: 'Thor',
  power: 15,
  friend: {
    type: 'Avenger',
    name: 'Bunner',
  },
};

const marvel_1 = { ...marvel };

marvel.friend.name = 'Kapitan';

console.log(marvel_1.friend.name);

// marvel_1.name = 'Iron Man'
