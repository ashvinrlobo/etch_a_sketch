function grid(rows,cols){
    let container= document.querySelector('.container');
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

let isHoverEnabled = false;
//if the left click is on the box, toggle hover effect
document.querySelector('.container').addEventListener('click', function(event) {
    if (event.target.id === 'box') {
        console.log(isHoverEnabled);
        isHoverEnabled = !isHoverEnabled;
        if (isHoverEnabled) {
            document.querySelectorAll('#box').forEach(box => {
                box.addEventListener('mouseover', hoverEffect);
            });
        } else {
            document.querySelectorAll('#box').forEach(box => {
                box.removeEventListener('mouseover', hoverEffect);
            });
        }
    }
});

function hoverEffect(event) {
    if (color_choice()) {
        event.target.style.backgroundColor = color_choice();
    } else {
        event.target.style.backgroundColor = 'blue';
    }
}

function color_choice() {
    let color = document.querySelector('#color-picker').value;
    return color;
}

let color_btn = document.querySelector('#color-button');
color_btn.addEventListener('click', function() {
    isHoverEnabled = false; // Disable hover effect
    console.log(isHoverEnabled);

    // Remove hoverEffect from all boxes
    document.querySelectorAll('#box').forEach(box => {
        box.removeEventListener('mouseover', hoverEffect);
    });
});

let clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
    document.querySelectorAll('#box').forEach(box => {
        box.style.backgroundColor = 'white';
    });
});