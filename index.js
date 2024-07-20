let divContainer = document.querySelector('#container');


for (let i = 0; i <= 16; i++) {
    for (let j = 0; j <= 16; j++) {
        const divGrid = document.createElement('div');
        divGrid.classList = 'div-grid';
        divGrid.addEventListener('mouseover', () => {
            divGrid.style['background-color'] = 'black';
        })
        divContainer.appendChild(divGrid);
    }
}