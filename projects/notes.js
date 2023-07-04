/*
REMOVA O COMENTÁRIO PARA VER O CÓDIGO
*/


// ------------------------------------------------------------ //
// 01. VARIÁVEIS
// ------------------------------------------------------------ //
/*
//Declarada com var, const e let
var nome = 'Fernando';
const nome = 'Fernando';
let nome = 'Fernando';

// Cuidado com 'var' pois aceita que duas variáveis sejam declaradas com o mesmo nome:
var nome = 'Fernando';
console.log(nome); // Retorna Fernando
var nome = 'João';
console.log(nome); // Retorna João

// O mesmo não ocorre com const nem com let: 
const nome = 'Fernando';
console.log(nome); // Retorna Fernando
const nome = 'João'; // SyntaxError: Identifier 'nome' has already been declared
console.log(nome);

let nome = 'Fernando';
console.log(nome); // Retorna Fernando
let nome = 'João'; // SyntaxError: Identifier 'nome' has already been declared
console.log(nome);
*/

// ------------------------------------------------------------ //
// 02. DATA TYPES
// ------------------------------------------------------------ //
/*
// São tipos de dados reconhecidos pelo JavaScript:
// Dados primitivos: 
//      string (textual: entre aspas simples ou duplas = '' ou "")
//      number (numéricos: inteiros ou decimais = 1 ou 1.0)
//      boolean (booleano: verdadeiro ou falso = true ou false)
//      null (nulo)
//      undefined (indefinido)
//      symbol (símbolo)
//      bigint (números muito grandes)
// Dados não-primitivos
//      Objects (objetos = {key: value,})
//      Arrays ([unordered, indexed])

// Para verificar o tipo de um determinado dado, usá-se 'typeof':
const nome = 'Fernando';
console.log(typeof nome); // Retorna string
const anoNascimento = 1982;
console.log(typeof anoNascimento); // Retorna number

// Truthy and Falsy Values:
// Falsy values = 0, '', undefined, null, NaN
const money = 100; // truthy
if (money) {
  console.log("Don't spend it all ;)"); // this is returned
} else {
  console.log('You should get a job!');
}

let height = 0; // falsy
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED'); // this is returned
}

*/

// ------------------------------------------------------------ //
// 03. OPERADORES MATEMÁTICOS, DE ATRIBUIÇÃO E LÓGICOS
// ------------------------------------------------------------ //
/*
// Operadores matemáticos (+, -, *, /) e (++, --, **, %)
let x = 10;
let y = 2;
x + y; // 12 - adição
x - y; // 8 - subtração
x * y; // 20 - multiplicação
x / y; // 5 - divisão
x++; // 11 - incremento (adiciona 1)
y-- // 1 - decremento (subtrai 1)
x ** y // 100 - potenciação
x % y // 0 - resto da divisão

// Operadores de atribuição (=, +=. -=)
// '=' - utilizado para atribuir valor a uma variável
let nome = 'Fernando'
// '+=' - atribuição com incremento
let x = 10;
let y = 2;
x += y // 12 (= 10 + 2)
// atribuição com decremento
x -= y // 8 (= 10 - 2)

// Operadores de comparação 
//      valor: (>, <, >=, <=, !=, ==)
//      valor e tipo(>==, <==, !==, ===)

// Operadores lógicos (&&, ||, !) ou (e, ou, não)
let x = 10;
let y = 2;
console.log(x > y && y < x) // Retorna true - operador e
console.log(x > y || y > x) // Retorna true - operado ou
console.log(x < y && y > x) // Retorna false - operado ou
console.log(x < y || y > x) // Retorna false - operado ou
console.log(!(x > y)) // Retorna false (! inverte o valor da expressão)

*/

// ------------------------------------------------------------ //
// 04. IF/ELSE STATEMENT E OUTRAS FORMAS DE TOMADA DE DECISÃO
// ------------------------------------------------------------ //
/*
// if/else statement (se... então)
if (condição que será avaliada) {
    código que será executado se a condição for verdadeira;
} else {
    código que será executado se a condição for falsa;
}
// Se houver apenas uma expressão para ser executado, não haverá necessicade de
// colocar a expressão entre chaves:
//      if (condição) código
// Neste caso, a condição sendo verdadeira, retornará o valor da expressão,
// se a condição for falsa, não retornará nada.


// Operador ternário
// condição ? expressãoVerdade : expressãoFalso
let x = 10
x = 10 ? true : false; // Retorna true
x = 20 ? true : false; // Retorna false
// Frequentemente utilizado como uma alternativa ao 'if/else statement'

// The Switch Statement
// Sintaxe:
switch (expressão que será avaliada) {
    caso resultadoDaExpressão:
        console.log('Algo aqui');
        break;
    caso resultadoDaExpressão:
        console.log('Algo aqui');
        break;
    default:
        console.log('Se o resultado da expressão for diferente');
}
// Exemplo:
switch (5 * 4) {
    case 10:
        console.log('É 10');
        break;
    case 20:
        console.log('É 20'); // Retorna esta linha de código
        break;
    default:
        console.log('Fuck Off!');
};

*/ 

// ------------------------------------------------------------ //
// 05. STATEMENTS AND EXPRESSIONS
// ------------------------------------------------------------ //
/*
// Statement é um pedaço maior de código que não produz valor pos si só:
// if statements, switch case statements,
// Statements realizam ações mas não produzem valores

// Expression é um pedaço de código que produz algum valor:
3 + 4
2023
'Fernando'
true && false && !false

*/

// ------------------------------------------------------------ //
// 06. TYPE CONVERSION AND COERCION
// ------------------------------------------------------------ //
/*
// Type Conversion ocorre quando explicitamente convertemos um tipo de dado em outro
let x = '2023';
console.log(typeof x); // Retorna string
x = Number(x); 
console.log(typeof x); // Retorna number

// Type Coercion ocorre internamente no JavaScript ao converter number para string
// em concatenações
let x = 2023; // tipo númerico (number)
let y = ' será um bom ano!'; // tipo textual (string)
let xy = x + y;
console.log(typeof xy); // Retorna string após o Type Coercion


*/

// ------------------------------------------------------------ //
// 07. FUNCTIONS
// ------------------------------------------------------------ //
/*
// Sintaxes
// 01. Function Declarations
//  function: keyword que declara que o código a seguir é uma função
//  functionName: nome que será dado para a função
//  parametro: não obrigatorio. Pode conter mais de um. Durante a chamada da função,
//      no lugar dos parametros serão informados argumentos.
//  bloco de código: pedaço de código que será executado
// function functionName(parametros) {bloco de código que será executado}
function subNumsDeclaration (a, b) {
    return a - b;
}
console.log(subNumsDeclaration(2023, 1982));

// 02. Function Expression
// const functionName = function (parametro) {bloco de código que será executado}
const subNumsExpression = function (a, b) {
    return a - b;
}
console.log(subNumsExpression(2023, 1982));

// 03. Arrow Function Expression (varias sintaxes)
// const functionName = parametro => expression;
// const functionName = () => expression;
// const functionName = () => {statements}
// const functionName = (parametro) => expression;
// const functionName = (parametro1, parametro2) => expression;
// const functionName = parametro => {statements}
// const functionName = (parametro1, parametro2) => {statements}
const subNumsArrow = (a, b) => a - b;
console.log(subNumsArrow(2023, 1982));


// Funções chamando outras funções
// Exemplo:
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

*/

// ------------------------------------------------------------ //
// 08. STRINGS
// ------------------------------------------------------------ //
/*
// Trabalhando com dados textuais (strings)
let firstName = 'Fernando';
let middleName = 'Gonçalves';
let lastName = 'Damasceno';

// Printando várias strings com vírgula:
console.log(firstName, middleName, lastName); // Retorna Fernando Gonçalves Damasceno

// Printando várias strings com concatenação:
console.log(firstName + middleName + lastName); // Retorna FernandoGonçalvesDamasceno

// Printando várias strings com Template Literals (melhor método):
console.log(`${firstName} ${middleName} ${lastName}`); // Retorna Fernando Gonçalves Damasceno
// IMPORTANTE: Template Literals só aceitas 'expressions'. Não aceitam 'statements
//  `${expression}`
// Por exemplo: o valor de uma variável, um cálculo matemático.
// Não aceitam, por exemplo, um 'if/else statement'

// String Methods


*/

// ------------------------------------------------------------ //
// 09. ARRAYS
// ------------------------------------------------------------ //
/*
// Coleção de elementos, separados por virgula, dentro de colchetes [], que podem ser acessados através de seus índices. Podem ter itens adicionados ao inicio ou ao fim, ou removidos do início ou fim.

const nomes = ['João', 'Ana', 'Henrique', 'Janaina'];
console.log(nomes[0]); // Retorna o primeiro elemento do array
console.log(nomes[1]); // Retorna o segundo elemento do array
console.log(nome[nome.length - 1]); // retorna o último elemento

// array[índice] - index = posição do elemento no array
// array.length - quantidade de elementos no array
// array[índice] = value; - substitui um valor no array no índice determinado

// Array Methods
nomes.unshift('Jonas'); // Adiciona Jonas ao início do array
nomes.push('Pedro'); // Adiciona Pedro ao final do array
nomes.shift(); // Remome o primeiro elemento do array
nomes.pop(); // Remove o último elemento do array
nomes.includes('Henrique'); // Verifica se Fernando entá no array (true or false)
nomes.indexOf('Henrique'); // Retorna o índice referente ao elemento buscado

// Juntando os elementos de dois arrays:
array1 = [1, 2, 3];
array2 = [4, 5, 6];
array3 = arr1.concat(arr2); // Resultado [1, 2, 3, 4, 5, 6]

array1.concat(array2); // não concatena
console.log(array1.concat(array2)) // exibe no console concatenado

*/

// ------------------------------------------------------------ //
// 10. OBJECTS
// ------------------------------------------------------------ //
/*
// Coleção de propriedades, onde uma propriedade é composta por nome e valor (key/value)
// Exemplo:
const objeto = {
    propriedade1: 'valor',
    propriedade2: 1982,
    propriedade3: ['valor1', 2, 'valor3'],
    propriedade4: {
        prop1: 1,
        prop2: 2
    }
    propriedade5: function () {
        return 'Isto é um método';
    }
}

// Exibindo o conteúdo de um objeto
console.log(objeto);

// Manipulando um objeto
console.log(objeto.propriedade1); // Retorna 'valor'
console.log(objeto.['propriedade1']); // Retorna 'valor'

const keyNum = 2;
console.log(objeto['propriedade' + keyNum]); // Retorna '1982'

const item = 'propriedade' + keyNum;
console.log(objeto[item]); // Retorna '1982'

objeto['propriedade6'] = 'XTZ 250 Lander'; // Adiciona nova chave/propriedade

// Object Methods - são funções que são criadas dentro de objetos, onde basicamente, a propriedade é o nome da função, como em 'function expressions'. Para chamar essas funções/métodos, usa-se o forma 'nomeDoObjeto.nomeDoMétodo()'
console.log(objeto.propriedade5()); Retorna 'Isto é um método'

*/

// ------------------------------------------------------------ //
// 11. WHILE E FOR LOOPS
// ------------------------------------------------------------ //
/*
// While Loop sintaxe:
// inicialização
// while (condição) {
//      bloco que será executado enquanto a condição for verdadeira;
//      expressão final;
// }
let i = 1;
while (i <= 5) {
    let message = `Este é o número ${i}`;
    i++;
    console.log(message);
}}


// For Loop sintaxe:
// for (inicialização; condição; expressão final) {
//     bloco de código que será executado enquanto a condição for verdadeira;
// }
for (let i = 1; i <= 5; i++) {
    console.log(`Este é o número ${i}`);
}


// Looping Arrays
const nomes = ['Fernando', 'Gonçalves', 'Damasceno']; // o array
// Com while loop
let i = 0;
while (i < nomes.length) {
   console.log(nomes[i]);
   i++
}
// Com for loop
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
// a condição 'i < nomes.length' está desta forma porque nomes.length retorna a 
// quantidade de elemento do array, mas o índice do último elemento do array é
// sempre igual a sua quantidade de elementos - 1.

// Preenchendo Arrays vazios com loops
const nomes = ['Fernando', 'Gonçalves', 'Damasceno'];
console.log(nomes)
// Com while loop
let semNomesWhile = [];
let i = 0;
while (i < nomes.length) {
    semNomesWhile.unshift(nomes[i]);
    i++;
}
console.log(semNomesWhile)
// Com for loop
let semNomesFor = [];
for (let i = 0; i < nomes.length; i++) {
    semNomesFor.push(nomes[i]);
}
console.log(semNomesFor);
// Note a diferença entre .push() e .unshift() na ordem em que os valores
// entram no array

// continue e break:
// continue - avalia um condição, se true, pula e passa para outra avaliação
// break - avalia uma condição, se true, para a execução

*/

// ------------------------------------------------------------ //
// 11. DEVELOPER SKILLS
// ------------------------------------------------------------ //
/*
1. Understanding the problem
2. Breaking up into sub-problems

// Debugging com o console do chrome e o uso de Breakpoints
//  a) identificar o problema
//  b) encontrar o que está causando o problema
//  c) eliminar o problema

*/

/// ------------------------------------------------------------ //
// 11. DEVELOPER SKILLS
// ------------------------------------------------------------ //
/*
DOM - DOCUMENT OBJECT MODEL
document.querySelector('element');
document.querySelector('#id');
document.querySelector('.class');

document.querySelector('#id').addEventListener('event', function () {});
    // fuction () {} pode ser substituída por um função previamente criada
elementoSelecionado.addEventListener('evento', funçãoPreviamenteCriada);

document.querySelector('.class').textContent = 'text'; // ou variável contento texto

documento.querySelector('.class).classList.add('.different-class');
documento.querySelector('.class).classList.remove('different-class');
documento.querySelector('.class).classList.toggle('different-class');
    .classList.toggle('') = adds or remove a class

// Observação:
0) somente durante a seleção do elemento usá-se (., #) para classes e ids;
1) declarar uma variável contendo como valar um elemento:
    const varName = document.querySelector('.class');
2) use function (e) ou function (event) ou function (whatever) para selecionar e manipular eventos de teclas como 'keydown' e 'keyup' para tratar teclas especificas como 'Enter', 'Escape', etc. 

*/

/// ------------------------------------------------------------ //
// 12. DESTRUCTURING
// ------------------------------------------------------------ //

/// ------------------------------------------------------------ //
// 13. TERNARY OPERATOR
// ------------------------------------------------------------ //