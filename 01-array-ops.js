// 1. Array operations

/**
 * Implementa una función head (inmutable), tal que,
 * dado un array como entrada extraiga y devuelva su primer elemento.
 * Utiliza destructuring.
 */
const head = ([firstElement]) => firstElement;
// Logs:
console.log(head(['a', 5, 19])); // 'a'
console.log(head([38, 'y', 'x'])); // 'z'
console.log(head([])); // undefined


/**
 * 
 * Implementa una función tail (inmutable), tal que,
 * dado un array como entrada devuelta todos menos elprimer elemento.
 * Utiliza rest operator.
 */
const tail = ([, ...rest]) => rest;
// Logs:
console.log(tail([11, 22, 33])); // [22, 33]
console.log(tail(['A', 'M', 'l'])); // ['M', 'l']
console.log(tail([42])); // []
console.log(tail([])); // []

/**
 * Implementa una función init (inmutable), tal que,
 * dado un array como entrada devuelva todos los elementos menos el último.
 * Utiliza los métodos que ofrece Array.prototype.
 */
const init = (array) => array.slice(0, -1);
// Logs:
console.log(init([7, 8, 9])); // [7, 8]
console.log(init(['es-ES', 'cz-CZ', 'de-DE'])); // ['es-ES', 'cz-CZ']
console.log(init([42])); // []
console.log(init([])); // []


/**
 * Implementa una función last (inmutable), tal que,
 * dado un array como entrada devuelva el último elemento.
 */
const last = (array) => array[array.length - 1];
// Logs:
console.log(last([1, 2, 3])); // 3
console.log(last(['a', 'b', 'c'])); // 'c'
console.log(last([42])); // 42
console.log(last([])); // undefined
