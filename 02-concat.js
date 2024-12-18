// 2. Concat
/**
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
 * devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */
const concat = (array1, array2) => [...array1, ...array2];

// Logs:
console.log(concat([9, 8, 7], [6, 5, 4])); // [9, 8, 7, 6, 5, 4]
console.log(concat(['a', 'b'], ['c', 'd'])); // ['a', 'b', 'c', 'd']
console.log(concat([], ['x', 'y', 'z'])); // ['x', 'y', 'z']
console.log(concat([1, 2, 3], [])); // [1, 2, 3]
console.log(concat([], [])); // []

// extra
/**
 * Implementa una versión del ejercicio anterior
 * donde se acepten múltiples arrays de entrada (más de 2).
*/
const multiConcat = (...arrays) => arrays.flat();

// Logs:
console.log(multiConcat([1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(multiConcat(['x'], ['f', 'c'], ['w'], ['e', 'f'])); // ['x', 'f', 'c', 'w', 'e', 'f']
console.log(multiConcat([11, 12], [], [13, 14], [])); // [11, 12, 13, 14]
console.log(multiConcat([], [], [])); // []
