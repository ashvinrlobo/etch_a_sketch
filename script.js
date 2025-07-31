function grid(rows,cols){
    let container= document.querySelector('.container');
    // let size=(500*500)/(rows*cols);
    // size= Math.sqrt(size)-1;
    let size= getBoxSize(rows);
    
    for (let i = 0; i < rows * cols; i++) {
        let div = document.createElement('div');
        div.id = 'box';
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        container.appendChild(div);
    }
}

function getBoxSize(gridSize) {
    return (500 - gridSize) / gridSize + 1;
  }
  
grid(16, 16); // Initial grid size
let input = document.querySelector('#grid-size');
let btn_1= document.querySelector('#apply-button');
btn_1.addEventListener('click', function() {
    let gridSize = parseInt(input.value);
    if (isNaN(gridSize) || gridSize < 16 || gridSize > 100) {
        alert("Please enter a valid number between 16 and 100");
        return;
    }
    document.querySelector('.container').innerHTML = ''; // Clear previous grid
    grid(gridSize, gridSize);
});