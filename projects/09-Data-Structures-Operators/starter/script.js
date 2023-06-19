'use strict';

// Data needed for first part of the section
// const restaurant = {
//   restaurantName: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
/*
//////////////////////////////////////////////////////////////////////////////////////////////
// 114. LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES

// Property names:
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}
// Usage example 'Object.keys'
const properties = Object.keys(restaurant.openingHours);
let openStr = `We are open on ${properties.length} days: `;
for (const day of Object.keys(restaurant.openingHours)) {
  openStr += `${day}, `
}
console.log(openStr);

// Property values:
for (const value of Object.values(restaurant.openingHours)) {
  console.log(value);
}
// Entire Object
// Object.entries: gera uma array contendo como valores objetos
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const myObj = {
  obj1: 1,
  obj2: 'Fernando',
  obj3: true,
}

console.log('----- KEYS -----');
console.log(Object.keys(myObj));
console.log('----- VALUES -----');
console.log(Object.values(myObj));
console.log('----- ENTRIES -----');
console.log(Object.entries(myObj));
*/

// console.log(restaurant.openingHours.thu.open); // without optional chaining
// // não retorna erro pq o valor existe no objento
// console.log(restaurant.openingHours?.mon?.open); // com optional chaining
// // não retorna erro por conta do optinal chaining (?). sem retornaria erro

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [
//   {
//     nome: 'Fernando',
//     email: 'example@example.com',
//   },
// ];

// console.log(users[0]?.nome ?? 'User array empty');

// // for-of loop (aula 111) - exibe apenas os elementos do array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// // for-of loop (aula 111) - para exibir os indexes dos elementos do array
// // exibe os indexes seguidos por seus elementos, cada um em um novo array
// for (const item of menu.entries()) {
//   //console.log(item);
//   // Para exibir como um menu:
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// // The same as above but using destructuring
// for (const [i, el] of menu.entries()) {
//   //console.log(item);
//   // Para exibir como um menu:
//   console.log(`${i + 1}: ${el}`);
// }
// // console.log(menu.entries()) // Retorna: > Array Iterator {}:
// // console.log([...menu.entries()])
// const itemsMenu = [...menu.entries()];
// console.log(itemsMenu);
/*
--- BASICAMENTO .entries() cria um objeto onde:
>>> as chaves do objeto são iguais aos indexes dos itens;
>>> os valores das chaves são arrays contendo o index dos elementos + os elementos
*/

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   mainIndex: 1,
//   address: 'Via del Sole, 21',
// });

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// //////////////////////////////////////////////////////////////////////////////////////////////
// // 103. DESTRUCTURING ARRAYS (USE [])
// /*
// DESTRUCTURING ASSIGNMENT:
// - Expression that makes it posible to unpack values from arrays, or properties from objects, into distinct variables

// - Example without destructuring:
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a, b, c); // Returns 1, 2, 3

// - Example with destructuring (much simpler)
// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c); // Return 1, 2, 3

// // Example of switching values without destructuring

// let [main, , secondary] = restaurant.categories; // takes the 2nd and 3rd values
// console.log(main, secondary); // Returns 'Italian' 'Vegetarian'
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Returnis 'Vegetarian' 'Italian'

// // Example of switching values with destructuring
// let [main, , secondary] = restaurant.categories; // takes the 2nd and 3rd values
// console.log(main, secondary); // Returns 'Italian' 'Vegetarian'
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Returnis 'Vegetarian' 'Italian'

// // Receive 2 return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Destructuring Nested arrays

// - Without destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested // only values from index 0 and 2;
// console.log(i, j); // Returns 2 [5, 6]

// // - With Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested; // destructuring inside a destructuring
// console.log(i, j, k);

// // Destructuring when the length of the array is not known
// // Using default values

// // const [p, q, r] = [8, 9]; // without default values
// // console.log(p, q, r); // Returns 9 8 undefined

// const [p=1, q=1, r=1] = [8, 9]; // with default values
// console.log(p, q, r); // Returns 9 8 1 (1 for every index that are not in the array)
// */

// //////////////////////////////////////////////////////////////////////////////////////////////
// // 104. DESTRUCTURING OBJECTS (USE {})
// // - The variables inside of the desctructuring curly-braces must have the same name as the object's property names

// // -Example
// const { restaurantName, openingHours, categories } = restaurant;
// // The order of the properties does not matter in objects
// console.log(restaurantName, openingHours, categories);

// // - But, what if we want the variable names to be different from the object's property names?
// // Use the name of the property followed by colons followed by the new name:
// const {
//   restaurantName: restName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restName, hours, tags);

// // Default values (in case a property does not exist) and Default values + new property name
// //const { menu = [], starterMenu: starters = [] } = restaurant;
// // menu = [] > Returns [] if the property 'menu' does not exist in the object 'restaurant'
// // starterMenu > Returns starters if 'starterMenu' exists; if not, returns []
// //console.log(menu, starters);
// // Returns: [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // Destructuring: Mutating variables in objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // {a, b} = obj; // This does not work. JS interprets {...} as a code block
// ({ a, b } = obj);
// console.log(a, b); // a, b now have the values from the object a, b > 23 and 7

// // Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// //////////////////////////////////////////////////////////////////////////////////////////////
// // 105. THE SPREAD OPERATOR (...)
// // Only when building an array or passing values to a function

// const arr = [7, 8, 9];

// // Without the spread operator
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // With the spread operator
// const goodNewArr = [1, 2, ...arr]; // much better!
// console.log(goodNewArr);
// console.log(...goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
// console.log(newMenu);

// // NOTE: the spread operator takes all the elements from an array but does not create new variables (different from destructuring). Useful when we want values separated by commas.

// // Useful Cases: Shallow copies of arrays and merge arrays together
// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy
// console.log(mainMenuCopy);

// // Merge arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const nome = 'Fernando';
// const letrasNome = [...nome];
// console.log(nome);
// console.log(letrasNome);
// console.log(...letrasNome);

// // Real-world example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredients 1?"),
// //   prompt("Let's make pasta! Ingredients 2?"),
// //   prompt("Let's make pasta! Ingredients 3?"),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { fundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.restaurantName = 'Ristorante Roma';
// console.log(restaurantCopy.restaurantName);
// console.log(restaurant.restaurantName);

// //////////////////////////////////////////////////////////////////////////////////////////////
// // 106. REST PATTERN AND PARAMETERS

// // rest operator (do the inverse of the spread operator) collects multiple elements and condense them into an array

// // Spread > right side of the '='
// const arr1 = [1, 2, ...[3, 4]]; // ...spread

// // Rest > left side of the '='
// const [c, d, ...others] = [1, 2, 3, 4, 5];
// console.log(c, d, others); // ...rest

// // Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

//////////////////////////////////////////////////////////////////////////////////////////////
// 107. SHORT CIRCUITING (&& AND ||)
/*
console.log('----- OR (||) -----');
console.log(2 || 'Fernando'); // 2 = truthy - Returns 2
console.log('' || 'Fernando'); // "" = falsy - Returns Fernando
console.log(true || 0); // true = truthy - Returns true
console.log(undefined || null); // undefined = falsy - Returns null (though null = falsy)

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND (&&) -----');
// If one of the values is falsy, the first falsy value is returned
// If both values are truthy, the last value is returned
console.log(2 && 'Fernando'); //
console.log('' && 'Fernando'); //
console.log(true && 0); //
console.log(undefined && null);

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// 108. THE NULLISH COALESCING OPERATOR (??)
/*
// || -> falsy values
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// ?? -> nullish values (null and undefined [NOT 0 or ""])
// Only nullish values will short-circuiting the code!
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// 109. LOGICAL ASSIGNMENT OPERATORS
/*
const rest1 = {
  restName: 'Capri',
  numGuests: 20,
  numGuests: 0, // ver 01
};

const rest2 = {
  restName: 'La Piazza',
  owner: 'Giovanni Rossi',
};
*/
// OR Assignment Operator '||='
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH Assignment Operator '??='
/*
rest1.numGuests ??= 10; // 01
rest2.numGuests ??= 10; // 01

// AND Assignment Operator '&&='
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// 110. CODING CHALLENGE
// CHALLENGE #1 ------------------------------------------------------------------------------

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2') ✅
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players ✅
3. Create an array 'allPlayers' containing all players of both teams (22 players) ✅
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' ✅
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') ✅
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// - Minha solução (incompleta)
/*
const [[...players1], [...players2]] = game.players; // 01 ✅
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1; // 02 ✅
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2]; // 03 ✅
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // 04 ✅
console.log(players1Final);

const {team1, x: odd, team2} = game.odds; // 05 ✅
console.log(team1, odd, team2);

const printGoals = function (Davis, Müller, Lewandowski, Kimmich) {
  for (let i = 0; i < game.scored.length; i++) {
    return `${game.scored[i]} scored 1 goal`;
  }
}
console.log(printGoals(game.scored));
*/

// - Instructor solution:
// console.log('----- CHALLENGE #1 -----');
// const [players1, players2] = game.players; // a little bit different
// console.log(players1, players2);
// // 2.
// const [gk, ...fieldPlayers] = players1; // igual a minha solução
// console.log(gk, fieldPlayers);
// // 3.
// const allPlayers = [...players1, ...players2]; // igual a minha solução
// console.log(allPlayers);
// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // igual
// console.log(players1Final);
// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game; // uma pequena diferença para minha
// console.log(team1, draw, team2);
// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);
// // .7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// CHALLENGE #2 ------------------------------------------------------------------------------
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// console.log('----- CHALLENGE #2 -----');
// const goalEntries = Object.entries(Object.values(game.scored));
// const entryValues = Object.values(goalEntries);
// // console.log(entryValues);
// // console.log(goalEntries);

// // 1.
// for (const [num, player] of Object.entries(game.scored)) {
//   console.log(`"Goal ${Number(num) + 1}: ${player}"`);
// }

// // Instructor's
// /*
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);
// */

// // 2.
// const average = function () {
//   let odds = 0;
//   let oddCount = 0;
//   for (const [, odd] of Object.entries(game.odds)) {
//     odds += odd;
//     oddCount++;
//   }
//   return odds / oddCount;
// };
// console.log(average());

// Instructor's
/*
let average = 0;
const odds = Object.values(game.odds)
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
*/

// 3.
// Não completei o codigo...
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
//   // console.log(team, odd);
// }

// CHALLENGE #3 ------------------------------------------------------------------------------
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
// console.log('----- CHALLENGE #3 -----');
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////
// 111. LOOPING ARRAYS: THE for-of LOOP
// for (const item of array) console.log(items)
// for-of loops still accepts 'continue'

//////////////////////////////////////////////////////////////////////////////////////////////
// 112. ENHANCED OBJECT LITERALS
// object literal is basically the object hard coded, the one we had to write, type down.

/*
Com 'Enhance Object Literals', se tivermos um objeto 'objA' e um objeto 'objB' e quisermos que o objeto 'objB' seja adicionado ao objeto 'objA', tudo que precisamos é adicionar 'objB' ao 'objA' seguido de virgula.
Exemplo
--- Objetos objA e objB
const objA = {
  key1: 1,
  key2: 2,
}

const objB = {
  key1: 1,
  key2: 2
}

--- Objeto objB dentro de objA
const objA = {
  key1: 1,
  key2: 2,
  objB, // note que o nome do objeto deve ser mantido
}
*/

/*
Object Methods
--- Como era antes de ES6
const objA = {
  key1: 1,
  key2: 2,
  objB,
  method: function () { do something },
}

--- Após ES6
const objA = {
  key1: 1,
  key2: 2,
  objB,
  method() { do something }, // use de acordo com sua preferencia
}
*/
/*
O nome das propriedades agora tamber podem ser computados (anteriormente, podiam apenas ser lidos).
Exemplo:
const objA = {
  key1: 1,
  key2: 2,
  objB,
  method() { do something }, // use de acordo com sua preferencia
  [`key${2+1}`]: 3, // a propriedade para ser calculada precisa estar dentro de []
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////
// 116. SETS
// Sets were introduced in ES6
// A 'set' is a collection of UNIQUE values

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet);
// console.log(orderSet.size); // sine NOT length!!!
// console.log(orderSet.has('Pizza')); // .has() returns boolean 'true or false'
// console.log(orderSet.has('Bread')); // has NOT include!!!

// orderSet.add('Garlic Bread'); // add() adds to the end of the set
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto'); // delete() delete the specified value
// //orderSet.clear(); // clear() apaga todo conteúdo de um Set
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// console.log('');
// console.log(new Set('Fernando')); // will return only 7 letters; 2 letter 'n'

// // Use Cases
// // 01. Remove duplicate from Arrays:
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)]; // spread operator já gerando um array
// console.log(staffUnique);
// console.log(new Set(staff).size);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

//////////////////////////////////////////////////////////////////////////////////////////////
// 117. MAPS: FUNDAMENTALS
// >>> Maps: data structure used for mapping values to keys;
// >>> Like Objects, but keys can be of any type;
// Examples
// const rest = new Map(); // best set map empty (rest for restaurant)
// rest.set('nome', 'Classico Italiano'); // set() in Map() is like add() in Set()
// rest.set(1, 'Firenze, Italy'); // set() adds new key/values and also returns an updated...
// rest.set(2, 'Lisbon, Portugal'); //... version of the Map()
// console.log(rest.set(2, 'Lisbon, Portugal'));
// // Returns: {'nome' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

// // set() can be chained, like below:
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// // console.log(rest);

// // To read data from the Map() we use the get() method
// // mapName.get('key name');
// console.log(rest.get('nome'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// // Example usage maps with boolean
// // const time = 12; // change this to see the result change
// // console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // Checking if the map contains a certain key
// console.log(rest.has('categories')); // returns true

// rest.delete(2); // deletes a key/value from the Map()
// console.log(rest);

// console.log(rest.size); // shows how many elements the Map() has

// // rest.clear(); // clear the Map(). Deletes all its elements
// // console.log(rest);

// // Using arrays as key
// rest.set([1, 2], 'Testing: Can not retrive the value');
// console.log(rest.get([1, 2])); // Returns undefined
// console.log(rest);

// // Getting the data from an array key of a Map()
// // -- In order to make it work, first, the array must be declared as a variable:
// const arr = [1, 2];
// // -- Then, the variable name must be passed as the key:
// rest.set(arr, 'Testing: Can retrieve the value');
// // -- The, to get the value, we use get() with the key (arr) name:
// console.log(rest.get(arr)); // Returns Testing: Can retrieve the value
// console.log(rest);

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

//////////////////////////////////////////////////////////////////////////////////////////////
// 118. MAPS: ITERATION

// // Best to create like this
// // set() is best when you need to add new elements to an existing Map()
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!']
// ]);

// console.log(question);
// // Displayed in the same way as Object.entries(object);

// // Convert Object to Map
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// // Iteration
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// // My solution
// // if (answer === 3 ? console.log(question.get(true)) : console.log(question.get(false)));

// // Instructor's
// // console.log(question.get(question.get('correct') === answer));

// // Converting a Map() to an Array
// console.log([...question]);
// // Not very useful/used but...

// // Methods (similar to those of Arrays)
// console.log([...question.entries()]); // equal to console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////////////////////////////////////////////////////////////
// 121. WORKING WITH STRINGS - PART 1

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Examples of working with strings
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(airline.length);
console.log('B737'[0]);
console.log('B737'.length);

// string methods
console.log(airline.indexOf('r')); // just the index of the first 'r
console.log(airline.lastIndexOf('r')); // just the index of the last 'r
console.log(airline.indexOf('Portugal')); // The initial index of 'Portugal'
console.log(airline.indexOf('portugal')); // -1 because 'portugal' is not in the string

// for (const [...letter] of [airline]) console.log(letter); // string to array

// How can these string methods be useful:
// Extract parts of a string using the 'slice' method = slice(initialIndex, lastIndex)
// initialIndex = start of extraction; lastIndex = end of extraction + 1
console.log(airline.slice(4, 7)); // Returns Air (st = 4(A), li = 6(r)+1)
console.log(airline.slice(4)); // start index to the end of the string

console.log(airline.slice(0, airline.indexOf(' '))); // show the first word in the string
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // the last word in the string

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// using string methods to return what is the seat in an airplane
const checkMiddleSeat = function(seat) {
  // B and E are middle seats (ABC DEF)
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') 
  console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//////////////////////////////////////////////////////////////////////////////////////////////
// 122. WORKING WITH STRINGS - PART 2

// Changing the case of a string

