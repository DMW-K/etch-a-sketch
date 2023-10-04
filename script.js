
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
// const rainbowButton = document.querySelector('.rainbow');
const slider = document.querySelector(".slider");

// Function to create the grid
function createGrid(rows, columns) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < rows * columns; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);

    // change cell color when entering the grid
    cell.addEventListener('mouseenter', () => {
      cell.classList.add('hover');
      cell.style.backgroundColor = 'black';
    });
  }
}

// Function to reset the grid
function resetGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
  });
}



slider.addEventListener("input", () => {
  const gridSize = slider.value;
  createGrid(gridSize, gridSize);
  console.log(gridSize, gridSize)
})

// Event listeners for reset button buttons
resetButton.addEventListener('click', resetGrid);

createGrid(4, 4)











// a container that can flex depending on the grid size
//the container should hold the grid pixels 
// 
// the grid should be scale-able: 
// first i need to fill in the container with a grid
// i want the grid to start at 16x16 and scale to 64x64
// a input or button to choose grid sizes

// when the mouse hover over the grid-pixels they change color:
//the grid should listen to mouse hover 



// a color wheel to choose color to pixilate
// a button that resets the grid
// a button for rainbow colors