import { User } from './user/user.js';

const u = new User('Tu es sérieux ?');
console.log('Name: ', u.setName('Wilfrid'));
console.info(`Hello ${u.getName()}`);

// Template string
// Arrow Function
const sayHello = username => `hello ${username}`;
console.log(sayHello('Trivette'));

const users: string[] = ['Chuck', 'Steven', 'Hurkle', 'Roger'];

for (let user of users) {
    console.log(user);
}

const products: {title: string}[] = [
    { title: 'Titre de mon produit' },
];

console.log(products[0].title);
