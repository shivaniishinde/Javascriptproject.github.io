const addButtonElement = document.getElementById('countAdd');
const subButtonElement = document.getElementById('countsub');
const counterDisplayElement = document.getElementById('counterDisplay');

let total = 0;

const updatecounterDisplay = () => {
    counterDisplay.textContent = total;
}

addButtonElement.addEventListener('click', () => {
 total += 1;
 updatecounterDisplay();
});

subButtonElement.addEventListener('click', () => {
    total -= 1;
    updatecounterDisplay();

});