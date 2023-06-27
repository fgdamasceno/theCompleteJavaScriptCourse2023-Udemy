'use strict';

const bookings = [];

/*
NOTA: antes do ES6, 'default parameter values' eram atribuidos dentro das funções,
como no exemplo abaixo. Veja como foram definidos os valores padrões para 'numPassengers' e 'price'
*/
const createBookingBeforeES6 = function (flightNum, numPassengers, price) {
  // atribuindo 'valores padrões' a parametros
  numPassengers = numPassengers || 1;
  // whenever numPassanger is falsy, 1 is assigned as default (short circuiting)
  price = price || 199; // same as above

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

/*
NOTA: após ES6, 'default parameter values' passaram a ser atribuidos na próprias listagem de paramentros, como no exemplo abaixo, que executa a mesma função do código acima
*/
const createBookingAfterES6 = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBookingBeforeES6('LH123');
createBookingBeforeES6('LH123', 2, 800);

createBookingAfterES6('LH123');
createBookingAfterES6('LH123', 2, 800);

createBookingAfterES6('LH123', undefined, 800);
/*
NOTA: 
1. 'default parameter values' podem receber expressões como valores padrões:
'price = 199 * numPassengers'
2. a ordem de execução dos parametros importa muito! Atenção se utilizar expressões como valores padrões de parametros. Ex: 'price = 199 * numPassengers, numPassengers = 1' não funcionaria pq para calcular o preço é necessário que se conheça primeiramente o número de passageiros, e no exemplo acima, o número de passageiros só é conhecido depois da expressão, o que gera erro.
3. não é possível deixar um valor em branco para que a função retorne o valor padrão:
    'createBookingAfterES6('LH123', , 800);'
o código acima retorna erro. Para que a função retorne um valor padrão que não foi informado pelo usuário, como no exemplo acima, declara-se como valor padrão a palavra 'undefined'
    'createBookingAfterES6('LH123', undefined, 800);'

*/
