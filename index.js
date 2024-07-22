const divWrapper = document.querySelector('#wrapper');

const buttonNumberOfDivs = document.createElement('button');
buttonNumberOfDivs.addEventListener('click', getNumberOfDivs);
buttonNumberOfDivs.textContent = 'Alter grid layout';
buttonNumberOfDivs.classList = 'button-style';
divWrapper.appendChild(buttonNumberOfDivs);

let numberOfDivs = 16;
constructGridLayout();
//window.onload = constructGridLayout();

function constructGridLayout() {
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
}

function getNumberOfDivs() {
    numberOfDivs = 0;
    while (numberOfDivs <= 15 || numberOfDivs >= 101) {
        numberOfDivs = +prompt('Insert Grid Layout:');
    }
    let elementsToRemove = Array.from(getChildrenOfElement());
    elementsToRemove.forEach(element => {
        if(element.className === 'div-container') {
            divWrapper.removeChild(element);
        }
    })
    constructGridLayout();
}

function getChildrenOfElement() {
    let childrenOfElement = divWrapper.childNodes;
    return childrenOfElement;
}