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


document.querySelector('#form-submit').onclick = submitFormMPG;

function submitFormMPG() {
    let formRange = document.querySelector('#form-mpg-range').value;
    let formGas = document.querySelector('#form-mpg-gas').value;
    if (Number(formRange) && Number(formGas)) {
        formRange = +formRange;
        formGas = +formGas;
        let answer = Math.round(formRange / formGas);
        console.log(`Range was ${formRange} miles`);
        console.log(`Gas was ${formGas} gallons`);
        console.log(`Answer is ${answer} mpg`);
        document.querySelector('#form-mpg-result').value = `${answer} miles / gallon`;        
    } else {
        alert('Error: Invalid inputs were submitted. Please enter numbers to calculate your mpg.')
    }
}



