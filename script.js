const container = document.querySelector('.container');
const gridSizeSlider = document.querySelector('#grid-size');
const gridSizeDisplay = document.querySelectorAll('#grid-size-display');

// Function to clear the existing grid
function clearGrid() {
    let rows = document.querySelectorAll('.row');
    rows.forEach(row => container.removeChild(row));
}

// Function to create the grid
function createGrid(size) {
    clearGrid();  // Clear any existing grid
    const squareSize = 960 / size;  // Calculate the size of each square
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `${squareSize}px`;  // Set row height
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = `${squareSize}px`;  // Set square size
            cell.dataset.lightness = 100;  // Set the initial lightness to 100%
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

// Function to generate a random RGB color
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

// Function to darken a color by a percentage
function darkenColor(rgb, percentage) {
    return {
        r: Math.floor(rgb.r * (1 - percentage / 100)),
        g: Math.floor(rgb.g * (1 - percentage / 100)),
        b: Math.floor(rgb.b * (1 - percentage / 100))
    };
}

// Function to apply the darkening effect
function applyDarkeningEffect(cell) {
    let lightness = parseInt(cell.dataset.lightness);
    if (lightness > 0) {
        lightness -= 10;  // Decrease lightness by 10% on each interaction
        cell.dataset.lightness = lightness;  // Update the lightness value
        
        let currentColor = getRandomRGB();
        let darkenedColor = darkenColor(currentColor, 100 - lightness);  // Darken color based on lightness
        
        cell.style.backgroundColor = `rgb(${darkenedColor.r}, ${darkenedColor.g}, ${darkenedColor.b})`;
    }
}

// Initialize a default 16x16 grid
createGrid(16);

// Event listener for mouseover on grid cells
container.addEventListener('mouseover', e => {
    if (e.target.classList.contains('cell')) {
        applyDarkeningEffect(e.target);
    }
});

// Event listener for slider input
gridSizeSlider.addEventListener('input', () => {
    let size = gridSizeSlider.value;
    gridSizeDisplay.forEach(display => display.textContent = size);  // Update the display text with the grid size
    createGrid(size);  // Create the grid based on the slider value
});
