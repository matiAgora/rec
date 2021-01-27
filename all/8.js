const user1 = {
	name: 'Ania',
  money: 15,
  pet: {
  	type: 'dog',
    name: 'Reksio'
  },
};


const user2 = { ...user1 };

user2.pet.name = 'Azorek';

console.log(user1.pet.name);

