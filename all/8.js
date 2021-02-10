const marvel = {
  name: 'Thor',
  power: 15,
  friend: {
    type: 'Avenger',
    name: 'Bunner',
  },
};

const marvel1 = { ...marvel };

marvel.friend.name = 'Kapitan';

console.log(marvel1.friend.name);

// marvel1.name = 'Iron Man'
