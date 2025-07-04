const btn = document.querySelector('button');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
    let numOfSquares = prompt('Enter squares per side');
    container.innerHTML = null;

    if(numOfSquares <= 0 || numOfSquares > 100) {
        alert('Number is either too big or too small! Try again');
    } else {
        addSquares(numOfSquares**2);
    }
});

function addSquares(numOfSquares) {
    for (let i = 0; i < numOfSquares; i++) {
        const square = document.createElement('div');
        const size = 800 / Math.sqrt(numOfSquares);
        square.setAttribute(`style`, `width: ${size-2}px; height: ${size-2}px; border: 1px solid black;`);
        container.appendChild(square);
    }
}