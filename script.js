const btn = document.querySelector('button');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
    let numOfSquares = prompt('Enter squares per side');
    container.innerHTML = null;

    if (numOfSquares <= 0 || numOfSquares > 100) {
        alert('Number is either too big or too small! Try again');
    } else {
        addSquares(numOfSquares ** 2);
    }
});


function addSquares(numOfSquares) {
    for (let i = 0; i < numOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        const size = 800 / Math.sqrt(numOfSquares);
        square.style.width = `${size - 2}px`;
        square.style.height = `${size - 2}px`;

        const val1 = parseInt(Math.random() * 255);
        const val2 = parseInt(Math.random() * 255);
        const val3 = parseInt(Math.random() * 255);

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;
        });

        container.appendChild(square);
    }
}