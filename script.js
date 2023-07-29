const container = document.getElementById('grid-container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
}

createGrid(16);