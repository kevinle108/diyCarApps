// targets and adds functionality to the submit button in the mpg form
document.getElementById('mpgSubmitBtn').onclick = submitFormMPG;

// calculates mpg and displays the result in the mpg form
function submitFormMPG() {
  let formRange = document.querySelector('#form-mpg-range').value;
  let formGas = document.querySelector('#form-mpg-gas').value;
  if (Number(formRange) && Number(formGas) && Number(formRange) > 0 && Number(formGas) > 0) {
      distance = +formRange;
      gas = +formGas;
      let answer = Math.round(distance / gas);
      console.log(`Range was ${formRange} miles`);
      console.log(`Gas was ${formGas} gallons`);
      console.log(`Answer is ${answer} mpg`);
      document.querySelector('#form-mpg-result').value = `${answer} miles / gallon`;        
  } else {
      alert('Error: Invalid inputs were submitted. Please enter positive numbers to calculate your mpg.')
  }
}