//creating a file in ur local machine using node
import { error } from 'console';
import fs from 'fs';
import { randomSuperhero } from 'superheroes';
import { randomSupervillain } from 'supervillains';
import generateName from 'sillyname';
const myHero = randomSuperhero();
const myVillain = randomSupervillain();
const name = generateName();
console.log(`I'm ${myHero}`);
console.log(myVillain);
console.log(name);
// fs.writeFile('name.txt', 'Haruna', (error) => {
//   if (error) throw error;
//   console.log('file created successful');
// });

//read a file
// fs.readFile('./name.txt', 'utf8', (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });
