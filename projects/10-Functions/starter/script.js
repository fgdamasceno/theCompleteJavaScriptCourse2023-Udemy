// 128. DEFAULT PARAMETERS

/* NOTAS
1. Parametros padrões - parametros que já são fornecidos com valores padronizados. Dessa forma, quando
a função é chamada, não há a necessicade de fornecer todos os dados necessários. Neste caso, os dados 
necessários, mas não fornecidos, serão preenchidos pelos valores que foram pré-determinados como
padrão nos parametros.
O valor dos parametros padronizados podem ser expressões.
IMPORTANTE! Para serem utilizados na função para gerar algum resultado, precisam ser processados na
ordem em que foram declarados.
Se um dos parametros precisam ser 'pulados', é necessário fornecer 'undefined' para este valor, afim
de não gerar um resultado não esperado. Em parametros padronizados, o último não necessita de 
'undefined'.
*/

// Exemplo:
// 1.
// const raizQuadrada = function (num1, sqrRoot = 1/2) {
//     console.log(num1 ** sqrRoot);
// };
// raizQuadrada(36, .5);
// raizQuadrada(36);

// // 2.
// const raizQuadrada2 = function (num1, sqrRoot = .5, num2 = 15) {
//     console.log((num1 ** sqrRoot) * num2);
// };
// raizQuadrada2(49, undefined, 1);
// raizQuadrada2(49, .5);
// raizQuadrada2(49, undefined, 10);

// 129. HOW PASSING ARGUMENTS WORKS: VALUE vs REFERENCE

/* NOTAS
Ao passar um valor do tipo primitivo para uma função é o mesmo que criar uma cópia deste fora da 
função. O valor é simplesmente copiado e não alterado
Exemplo:
*  flightNum = 'LH789'; (que está dentro da função) é o mesmo que:
*  const flightNum = flight; (Retornará o valor de flight.)
*  // 'flightNum' não alterará o valor de 'flight' e a função retornará o valor original de 'flight'

Ao passar um objeto para uma função, o objeto é simplesmente copiado, de forma que qualquer coisa que
for alterado na cópia deste objeto será alterado também no objeto original.
Por conta disto, a manipulação de objetos via funções necessita extrema atenção, visto que pode gerar
alterações não desejadas no objeto, o que pode vir a causar grandes problemas em um programa/app.

PASSING BY VALUE: JavaScript sempre utitiza o 'passing by value'. O importante é entender como um
valor é passado, ou seja, se é um valor primitivo (null, undefined, number, string, boolean) ou um
objeto.
Quando um valor primitivo é passado para um função como um argumento, uma cópia deste valor e criada
e atribuida para um variável dentro do escopo desta função. Qualquer alteração feita neste valor
dentro da função não modificará o valor original fora da função.
No caso de objetos, quando passado para uma função, o que acontece é que a referência deste objeto
na memória é passada para a função, e não uma cópia do objeto, o que resulta no fato de que qualquer
alteração feita a este objeto dentro da função reflitirá em alteração no objeto original, visto que,
como dito, não estamos trabalhando com uma cópia deste, e sim, basicamente, com o próprio objeto.

PASSING BY REFERENCE: não existe em JavaScript. Ocorre quando se passa a referência de um valor como
sendo o próprio valor. Desta forma, quando um valor é alterado dentro de uma função, o valor externo
a esta também é alterado.
*/

// const flight = 'LH234';
// const fernando = {
//     nome: 'Fernando',
//     passaporte: 15263485967,
// };

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH789';
//     passenger.nome = 'Mr. ' + passenger.nome;

//     if(passenger.passaporte === 15263485967) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passaport');
//     }
// };

// checkIn(flight, fernando);
// console.log(flight);
// console.log(fernando);
// // Is the same as doing...
// const flightNum = flight;
// const passenger = fernando;

// const newPassport = function (person) {
//     person.passaporte = Math.trunc(Math.random() * 1000000000000);
// };
// newPassport(fernando); // somente altera o passaporte
// checkIn(flight, fernando); // retorna 'Wrong passport' pq o nº do passaporte foi alterado

/* NOTES FROM CHAT.AI
In JavaScript, the concepts of "passing by value" and "passing by reference" are often discussed when it comes to understanding how variables are handled when passed as arguments to functions. However, it's important to note that JavaScript itself is always "passing by value." However, the difference lies in how values are passed, depending on whether the value being passed is a primitive or an object.

Passing by Value:
When a primitive value (such as a number, string, boolean, null, or undefined) is passed as an argument to a function, a copy of that value is created and assigned to a new variable within the function's scope. Any modifications made to the copied value within the function do not affect the original value outside the function.
*/
// Here's an example to illustrate passing by value:
// function modifyValue(value) {
//   value = value + 1;
//   console.log(value); // Outputs: 6
// }

// let number = 5;
// modifyValue(number);
// console.log(number); // Outputs: 5

/* ... NOTES FROM CHAT.AI
In this example, the variable number is passed as an argument to the modifyValue function. The value parameter inside the function receives a copy of the value of number. When value is modified inside the function, it doesn't affect the original number variable outside the function. Hence, the value of number remains unchanged.

Passing by Reference:
When an object (including arrays and functions, which are objects in JavaScript) is passed as an argument to a function, a reference to that object is passed. In other words, a copy of the reference to the object is made, not a copy of the object itself. This means that modifications made to the object within the function will affect the original object outside the function since both the reference inside the function and the reference outside the function point to the same object in memory.
*/
// Let's consider an example:
// function modifyArray(array) {
//   array.push(4);
//   console.log(array); // Outputs: [1, 2, 3, 4]
// }

// let numbers = [1, 2, 3];
// modifyArray(numbers);
// console.log(numbers); // Outputs: [1, 2, 3, 4]

/* ... NOTES FROM CHAT.AI
In this example, the 'numbers' array is passed as an argument to the modifyArray function. The array parameter inside the function receives a reference to the numbers array. When the push method is called on array, it modifies the original numbers array because they both refer to the same array in memory.

It's important to note that even though objects are passed by reference, reassigning the reference to a new object within the function will not affect the original reference outside the function. Only modifications made to the properties or elements of the object will be reflected.
*/
// function modifyObject(obj) {
//   obj = { name: 'John' };
//   console.log(obj); // Outputs: { name: 'John' }
// }

// let person = { name: 'Alice' };
// modifyObject(person);
// console.log(person); // Outputs: { name: 'Alice' }

/* ... NOTES FROM CHAT.AI
In this case, the obj parameter receives a reference to the person object. However, when obj is reassigned to a new object, it doesn't affect the original person object outside the function. The output of person remains unchanged.

To summarize, JavaScript always uses "pass by value" semantics, but when objects are passed as arguments, it's the reference to the object that gets copied. Modifying the properties or elements of the object within the function affects the original object, while reassigning the reference to a new object does not.
*/

// 130. FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

/* NOTAS
First-Class functions: JS treats functions as first-class citizens; functions are simply values; 
functions are just another type of object
1. Como funções são apenas valores, podem ser atribuidas a variáveis ou propriedades
2. Funções podem ser passadas como argumentos para outras funções
3. Funções podem ser retornadas de outras funções (return functionName())
4. Funções também possuem 'methods' que podem ser utilizados quando chamando uma função

Higher-Order functions: is a function that receives another function as an argument, that returns a
new function, or both. Only possible because of first-class functions.
5. Funções que recebem outra função (ver 2.)
6. Funções que retornam outra função (ver 3.)

NOTA: diferença entre 'first-class function' e 'higher-order function': 'first-class function' é
apenas um recurso que uma linguagem de programação pode ou não ter. Significa simplesmente que todas
as funções são apenas valores. Na prática, simplesmente não existem. São apenas um conceito. Já 
'higher-order functions' existem em JavaScript e só são possíveis por conta das 
'first-class functions'.
*/

// 1.
// const add = (a, b) => a + b; // valor de variável
// const counter = {
//     value: 23,
//     inc: function() { this.value++; }, // valor de propriedade
// }

// 2. e 5. (addEventListener = higher-order; greet = first-class)
// const greet = () => console.log('Hey Fernando');
// btnClose.addEventListener('click', greet); // função como argumento
// addEventListener (higher-order) recebe greet (call-back) como argumento

// 3. e 6.
// function count() {
//     let counter = 0;
//     return function() {
//         counter++;
//     };
// }

// 131. FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

/* NOTAS
Higher-Order funcions são funções que chamam 'first-class functions'.
No exemplo abaixo, 'transformer' é uma 'higher-order function', enquanto 'oneWord' e
'upperFirstWord' são 'first-class functions'. 

'first-class function' são muito utilizadas como 'callback functions' pois desta forma é possível criar
pedaços de códigos que podem ser reutilizados muitas vezes dentro de uma aplicação em JavaScript, como
no exemplo abaixo, onde as 'first-class functions' podem ser chamadas várias vezes durante a execução
do programa.

'first-class function' também são muito utilizadas com 'abstraction' ('Abstração' em programação de
computadores é uma forma de reduzir a complexidade e tornar o projeto e a implementação mais
eficientes em sistemas complexos de software).
*/

// Code Example:
// recebe um string, remove os espaços em branco e converte para lowercase
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
// };
// // recebe um string, separa a primeira palavra das demais, converte em uppercase, une a string
// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order Function
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name} function`)
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// 132. FUNCTIONS RETURNING ANOTHER FUNCTION

/* NOTAS
Devido à complexidade do tema, qual a razão para criar uma função que chama um função internamente?
R: Pode ser extremamente úteis em algumas situações, especialmente quanto se utiliza 'programação
funcional (functional programming) (https://www.freecodecamp.org/news/functional-programming-in-javascript/)'

*/

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey'); // greeterHey is basically the function inside 'greet' function
/* 
a) a função 'greet' e chamada e 'Hey' e passado como argumento;
b) 'greet' (já como 'Hey' atribuido como argumento ao parametro 'greeting') então retorna uma função
que printa no console uma mensagem. Esta função (função interna da função 'greet'), que precisa de um
valor como argumento, é então atribuida à variável 'greeterHey'. Perceba que a função interna recebe
um argumento da função 'greet', que já foi atribuido ao paramentro 'greeting'.
c) visto que 'greet' retorna uma função, e esta função foi atribuida à variável 'greeterHey' e o 
argumento para a função 'greet' também já foi passado para a função, tudo o que precisa ser feito é
chamar 'greeterHey' (que é uma função agora) com um argumento (que será atribuído ao parametro 'name').
*/

// greeterHey('Fernando');
// greeterHey('Marian');

// // podemos passar também os argumentos diretamente:
// greet('Hello')('World!');

// // a mesma função, porém com 'arrow function'
// const greet1 = greeting => name => console.log(`${greeting} ${name}`);
// greet1('Hello')('John Doe!');

// 133. THE CALL AND APPLY METHODS

/* NOTAS
1. como já existia um método com a função desejada criado dentro do objeto 'lufthansa', ao invés de
copiar este método para o objeto 'eurowings', o método foi atribuído à variável 'book' fora dos 
objetos, para que possa, desta forma, ser utilizada por qualquer objeto semelhante que possa vir a
ser criado.

"A palavra chave 'this' depende de como é chamada pelo método."

call, apply e bind para indicar à palavra chave 'this' qual o objeto ao qual o método deve apontar

Obs.: funções são apenas objetos. Objetos tem métodos. Então funções também podem ter métodos. 
call(), apply() e bind() são métodos de funções.
*/

// companhia 1
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`}, name);
//     },
// };

// lufthansa.book(239, 'John Smith');
// lufthansa.book(635, 'Jane Doe');
// console.log(lufthansa.bookings);

// // companhia 2
// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// // 1.
// const book = lufthansa.book;

// Não funciona desta forma
// book(23, 'Sarah Williams');

// Call Method -----------
//call(objetoChamado, argumentosParaOsParametros)
// book.call(eurowings, 23, 'Sarah Williams');
// /*
// No exemplo acima, o método 'call()' chama a função 'book' com a palavra chave 'this' definida como
// 'eurowings' e em seguida, passa os argumentos para os parametros necessários do método original,
// no objeto 'lufthansa'
// */
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// // companhia 3
// const swiss = {
//     airline: 'Swiss Air Lines',
//     iataCode: 'LX',
//     bookings: [],
// }

// book.call(swiss, 583, 'Jonas Lang');
// console.log(swiss);

// // Apply Method ----------
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
/*
O método 'apply()' funciona, basicamente, como o método 'call()'. A diferença é que, ao invés 
receber os valores como argumentos, 'apply()' recebe um array como argumento, como no exemplo acima.
Obs.: o método 'apply()' tem caído em desuso no JavaScript devido a uma melhor solução:
    book.call(swiss, ...flightData);
Com o uso do 'spread operator' é possível usar o método 'call()' para fazer o mesmo que o médoto 
'apply()'. Esta forma tem sido muito utilizada no JavaScript moderno.
*/

// 134. THE BIND METHOD

/* NOTAS
O método 'bind()' também permite que a palavra chave 'this' seja atribuída a qualquer objeto que 
precisemos chamar (function call), assim como 'call()' e  'apply()'. A diferença é que o método 'bind()'
não chama a função imediatamente. Ao invés disto, ele retorna uma nova função a qual a palavra chave
'this' é vinculada.
*/

// Ver aula anterior para tomar os exemplos como base!

// companhia 1
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`}, name);
//     },
// };

// o método criado no objeto 'lufthansa' é atribuído à variável 'book' que torna-se em função e pode
// se chamada por outros objetos através dos métodos 'call()', 'apply()' e 'bind()'
// const book = lufthansa.book;

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// Bind Method
// const bookLH = book.bind(lufthansa); // ver aula anterior
// const bookLX = book.bind(swiss); // ver aula anterior
// const bookEW = book.bind(eurowings);
/*
* book.bind(eurowings); >>> não chama a função 'book'; ao invés disto, cria um nova função na qual a
palavra chave 'this' estará vinculada ao objeto 'eurowings' 
* const bookEW = book.bind(eurowings); >>> atribuimos a nova função criado pelo médodo 'bind()' à 
variável 'bookEW', que torná-se na própria função, e podemos utilizá-la para obter os mesmos 
resultados dos métodos anteriores.

No exemplo acima, 'bookEW' terá a palavra chave 'this' sempre vinculada ao objeto 'eurowings'.
*/
// bookEW(23, 'Steven Williams');

/*
O método 'bind()' também pode receber múltiplos argumentos, assim como 'call()'. O valor recebido
como argumento será um valor padrão da nova função criada.
*/
// const bookEW23 = book.bind(eurowings, 23);
/*
Com base no método "book(flightNum, name) {...}" presente no objeto 'lufthansa', esta nova função
'bookEW23' já é criada com um valor fixo para o parametro 'flightNum' (23). Desta forma, sempre que
precisarmos chamar a função 'bookEW23', precisaremos fornecer apenas o nome do cliente
*/
// bookEW23('Jonas Cooper');

// // The 'bind()' method with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// Exemplo:
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
/*
No 'event handler function', a palavra chave 'this' sempre aponta para o elemento ao qual o 'event
listener' está vinculado. No exemplo acima, ao invés de aumentar o invés de aumentar o valor de 
'planes', o que ocorre é que ao clicar no botão 'buy new planes', o elemento <button> é retornado 
para o console, pois "lufthansa.buyPlane" está vinculado a "document.querySelector('.buy')".
*/

/*
Para solucionar o problema acima, não podemos utilizar 'call()' porque este método chama uma função 
e o que precisamos aqui é gerar uma nova função. Para isso, utilizamos o método 'bind()'.
*/
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application (preset parameters)
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23  é o mesmo que o código acima
/*
'null' no lugar de 'this' é um padrão quando 'this' não é necessário ou não foi definido na função.
*/
// console.log(addVAT(100));
// console.log(addVAT(1982));

// Desafio: recriar a função acima, mas com um função retornando outra função

// const addTax2 = function (value) {
//     return function (tax) {
//         return value + value * tax;
//     }
// }

// const taxed = addTax2(100);
// console.log(taxed(0.23));

// 135. CODING CHALLENGE #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 🙂
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         //1
//         `${this.question}\n${this.options.join('\n')}(Whire option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++; // 2.
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); // 3.
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// 0. cria um array com 4 valores iguais a '0' que serão incrementados mais a frente com base nos inputs dos usuários
// 1. não me lembrava do método join(), por isso não consegui resolver o desafio. De toda forma, esta parte somente exibe o prompt;
// 2. verifica se 'answer' tem valor numérico e se o tamanho é menor que 'answer'. Se for 'true', a última parte do código é executada e 'answer' é incrementado adicionando +1, caso contrário, o 'short-circuit' é executado e nada acontece (o código para). Este trecho de código, aumenta o valor do elemento dentro do array com base nos inputs do usuário. Se estes selecionarem varias vezes a opção '0', no array o valor que está no index 0 terá seu valor incrementado somando-se 1 a este.
// 3. usamos call porque o método 'displayResults' tem a palavra chave 'this' vinculada a propriedade 'answers' do objeto poll, um array que tem seu valor atualizado através dos inputs dos usuários, e o que queremos neste caso é que os valores sejam puxados por um novo array definido pelo usuário. call() neste caso irá vincular este novo array que pertence a um novo objeto criado dentro dele mesmo.

// 136. IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS (IIEF)

/* NOTAS
Uma função que será executada apenas uma vez.
1. Cria-se apenas com a palavra chave 'function' e coloca-se todo a função entre parenteses, e
para chamá-la, coloca-se um parenteses logo ao final desta.
OBS.: adicionar parenteses ao final de função para chamá-la imediatamente funciona com:
function expression, arrow function [esta última precisa estar totalmente entre parenteses, depois adiciona-se um parenteses ao final]
Foi criada com intuito de manter dados privados (escopo), pois uma variável declarada dentro 
uma função não pode ser acessada externamente. Porém, para isso, para manter dados privados,
pode-se criar blocos de códigos (entre {}) sem necessidade de uma função. Por conta disso, 
este tipo de função tem caído em desuso. Mas, se o desenvolvedor tem necessidade de criar uma
função que será executada apenas uma vez, esse método pode ser muito útil.
*/

// Normal function
// const runOnce = function () {
//   console.log('This will run as many times as we call it');
// };
// runOnce();

// 1. IIEF padrão
// (function () {
//   console.log('This will never run again');
// })(); // parenteses ao final para chamar a função imediatamente
// 1. IIEF com function expression
// const myFunction1 = function () {
//   console.log('This can also be called immediately')
// }();
// 1. IIEF com arrow function
// (() => console.log('This is also called immediately.'))();

// 137. CLOSURES

/* NOTAS
'closures' não são utilizadas explicitamente; não são criadas manualmente como arrays ou 
objetos; 'closures' apenas ocorrem em certas situações, e cabe ao desenvolvedor reconhecer 
estas situações 😬.
Basicamente, 'closures' faz com que uma função se "lembre" de todas as variáveis que foram 
criadas inicialmente (*)

Como 'closures' funcionam
Qualquer função criada, sempre tem acesso ao ambiente de variáveis do contexto de execução
onde a função foi criada
'booker' foi criada no contexto de execução da função 'secureBooking'. Por conta disto, 'booker' sempre terá acesso ao ambiente de variáveis dessa função.
'closures' são basicamente isto, o ambiente de variáveis que está vinculado à função exatamente como era no momento da criação desta.
*/

// const secureBooking = function () {
//   // * criada inicialmente
//   let passengerCount = 0;

//   return function () {
//     // (= booker)
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker); // > f > [[Scopes]] > Closure > onde pode-se ver 'passengerCount'

/* CLOSURE DEFINITION
a. a closure is the closed-over 'varible environment' of the execution context 'in which a function was created' even 'after' that execution context is gone;

b. A closure gives a function access to all the variables 'of its parent function' even 'after' that parent function has returned. The function keeps a 'reference' ot its outer scope, which 'preserves' the scope chain throughout time.

c. A closure makes sure that a function doesn't loose connection to 'variables that existed at the function's birth place';

d. A closure is like a 'backpack' that a function carries around wherever it goes. This backpack has all the 'variables that were present in the environment where the function was created'.
(pode ser verificado com "console.dir(functionName);")

IMPORTANT! -> We do not have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitily. A closure is not a tangible JavaScript object.
*/

// 138. MORE CLOSURE EXAMPLES

/* NOTAS

*/

// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 666;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const preGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${preGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 5);

// 139. Coding Challenge #2

// CODING CHALLENGE #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an evente listener that changes the
color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do
NOT select the h1 element again!!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need.
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LOOK 🙂
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });

  // document.querySelector('body').addEventListener('click', function () {
  //     header.style.color = 'blue';
  // });
})();
