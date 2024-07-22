const divWrapper = document.querySelector('#wrapper');
const buttonNumberOfDivs = document.createElement('button');
let numberOfDivs = 100;

const divWrapperWidth = divWrapper.offsetWidth / numberOfDivs;
const divWrapperHeight = divWrapper.offsetHeight / numberOfDivs;

for (let i = 0; i < numberOfDivs; i++) {
    let divContainer = document.createElement('div');
    divContainer.classList = 'div-container';
    divContainer.style.height = `${divWrapperHeight}px`;
    for (let j = 0; j < numberOfDivs; j++) {
        let divGrid = document.createElement('div');
        divGrid.classList = 'div-grid'
        divGrid.style.width = `${divWrapperWidth}px`;
        divGrid.addEventListener('mouseenter', () => {
            divGrid.style['background-color'] = 'black';
        });
        divContainer.appendChild(divGrid);
    }
    divWrapper.appendChild(divContainer);
}