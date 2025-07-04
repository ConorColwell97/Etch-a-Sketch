const btn = document.querySelector('button');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
    let numOfSquares = prompt('Enter squares per side');
    container.innerHTML = null;

    if ((numOfSquares <= 0 || numOfSquares > 100) && numOfSquares != null) {
        alert('Number is either too big or too small! Try again');
    } else {
        addSquares(numOfSquares ** 2);
    }
});


function addSquares(numOfSquares) {
    for (let i = 0; i < numOfSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Calculate the size each square needs to be to fit into the grid
        const size = 800 / Math.sqrt(numOfSquares);
        square.style.width = `${size - 2}px`;
        square.style.height = `${size - 2}px`;

        // Assign random rgb values
        let val1 = parseInt(Math.random() * 255);
        let val2 = parseInt(Math.random() * 255);
        let val3 = parseInt(Math.random() * 255);

        square.addEventListener('mouseover', () => {
            // Give the squares a random color
            square.style.backgroundColor = `rgb(${val1}, ${val2}, ${val3})`;

            // Darken each square by around 10% upon each mouse hover until they are black
            val1 = val1 > 0 ? (parseInt(val1 - ((10 / 100) * val1))) : 0;
            val2 = val2 > 0 ? (parseInt(val2 - ((10 / 100) * val2))) : 0;
            val3 = val3 > 0 ? (parseInt(val3 - ((10 / 100) * val3))) : 0;
        });

        container.appendChild(square);
    }
}