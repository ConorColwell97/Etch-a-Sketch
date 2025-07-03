let numOfSquares = 16;
addSquares(numOfSquares);

function addSquares(numOfSquares) {
    const container = document.querySelector('#container');

    for(let i = 0; i < numOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}