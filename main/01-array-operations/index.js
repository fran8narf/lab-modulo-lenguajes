import { printResults } from '../mixins/mixins.js';

/** 
 * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
*/
const firstStatement = 'Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.';
const head = (givenArray) => {
    const [firstArrayValue] = givenArray; 
    return firstArrayValue;
};

const firstArray = [1660,20,30,45,50];
const test = head(firstArray);
printResults(firstStatement, firstArray, test);


/**
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
 */

const tail = (givenArray) => {
    const [firstElement, ...allButFirst] = givenArray; 
    
    return allButFirst;
};
const secondStatement = 'Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.';
const secondArray = [1000, 900, 800, 700];
const testSecond = tail(secondArray);
printResults(secondStatement, secondArray, testSecond);

/**
 * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */
const init = (givenArray) => {
    let original = [...givenArray];
    original.pop();
    return original;
};
const thirdStatement = 'Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.';
const thirdArray = [11, 22, 33, 44, 55, 66, 99999];
const testThird = init(thirdArray);
printResults(thirdStatement, thirdArray, testThird);

/**
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 */

const last = (givenArray) => {
    const original = [...givenArray];
    const lastEl = original.pop();
    return lastEl;
};
const fourthStatement = 'Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.';
const fourthArray = [121, 222, 323, 424, 525, 66, 987897987897];
const testFourth = last(fourthArray);
printResults(fourthStatement, fourthArray, testFourth);