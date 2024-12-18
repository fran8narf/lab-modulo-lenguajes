// 3. Clone Merge
/**
 * Implementa una función clone que,
 * a partir de un objeto de entrada source
 * devuelva un nuevo objeto con las propiedades de source:
 */
const clone = (source) => ({ ...source });

// Logs:
const original = { a: 'test', b: 'foo', c: 'bar' };
const copied = clone(original);

console.log(copied); // { a: 'test', b: 'foo', c: 'bar' }
console.log(copied === original); // false (son objetos diferentes)

/**
 * Implementa una función merge que, dados dos objetos de entrada source y target,
 * devuelva un nuevo objeto con todas las propiedades de target y de source,
 * y en caso de propiedades con el mismo nombre, source sobreescribe a target.
 */

function merge(source, target) {
    return { ...target, ...source };
}

const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };
const result = merge(a, b);

// Logs:
console.log(result);
// { name: 'Maria', age: 31, married: true, surname: 'Ibañez', country: 'SPA' }


// Uso con clone
function mergeWithClone(source, target) {
    return { ...clone(target), ...source };
}

const resultWithClone = mergeWithClone(a, b)
// Log:
console.log(resultWithClone)