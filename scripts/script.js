let user_range = 0;
let user_gas = 0;


let range = document.querySelector('.rangeText');
let gas = document.querySelector('.gasText');
let mpg = document.querySelector('.mpgText');

document.querySelector('button').onclick = testfunction;

function testfunction() {
    let user_range = prompt("How many miles travelled?");
    let user_gas = prompt("How many gallons of gas was used?");
    let mpgCalculated = Math.round(user_range / user_gas);
    range.textContent = user_range + " miles";
    gas.textContent = user_gas + " gallons";
    mpg.textContent = mpgCalculated + " miles/gallon";
}

// js code for form //
let formRange = document.querySelector('#form-mpg-range.value');
let formGas = document.querySelector('#form-mpg-gas.value');
let formResult = document.querySelector('#form-mpg-result');

document.querySelector('#form-submit').onclick = submitFormMPG;

function submitFormMPG() {
    formResult.value = formRange / formGas;
}



