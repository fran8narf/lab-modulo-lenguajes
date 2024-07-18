export function printResults (statement,input, result) {
    const parentDiv = document.querySelector('.container');

    const exContainer = document.createElement('div');
    exContainer.classList.add('ex-container');

    const h3 = document.createElement('h3');
    h3.textContent = statement;

    const pInitialArray = document.createElement('p');
    pInitialArray.classList.add('initial-array');
    pInitialArray.textContent = `El valor inicial es: [${input}]`;

    const pResult = document.createElement('p');
    pResult.classList.add('result');
    pResult.textContent = `El resultado es: ${result}`;

    exContainer.appendChild(h3);
    exContainer.appendChild(pInitialArray);
    exContainer.appendChild(pResult);

    parentDiv.appendChild(exContainer);


    console.log(statement);
    console.log('El array dado es: ', input);
    console.log('Y el resultado del ejercicio sería', result);
}
