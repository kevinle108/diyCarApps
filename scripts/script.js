document.querySelector('#form-submit').onclick = submitFormMPG;
function submitFormMPG() {
  let formRange = document.querySelector('#form-mpg-range').value;
  let formGas = document.querySelector('#form-mpg-gas').value;
  if (Number(formRange) && Number(formGas)) {
      distance = +formRange;
      gas = +formGas;
      let answer = calculateMPG(distance, gas);
      console.log(`Range was ${formRange} miles`);
      console.log(`Gas was ${formGas} gallons`);
      console.log(`Answer is ${answer} mpg`);
      document.querySelector('#form-mpg-result').value = `${answer} miles / gallon`;        
  } else {
      alert('Error: Invalid inputs were submitted. Please enter numbers to calculate your mpg.')
  }
}

function calculateMPG(miles, gallons) {
  return Math.round(miles / gallons);
}