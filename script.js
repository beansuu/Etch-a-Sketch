const container = document.getElementById('grid-container');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
    }
}

createGrid(16);

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseenter', function() {
        this.style.backgroundColor = getRandomColor();
    });

    gridItem.addEventListener('mouseLeave', function() {
        this.style.backgroundColor = '';
    })
})

function getRandomColor() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}