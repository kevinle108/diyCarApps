// add click event to oil compare submit button
const oilSubmit = document.getElementById('oilCompSubmitButton');
oilSubmit.addEventListener('click', oilSubmitHandler)

function oilSubmitHandler(event) {
//   document.getElementById('');

  const oilAcon = document.getElementById('conventionalA');
  const oilAsyn = document.getElementById('syntheticA');
  const oilAquart= parseFloat(document.getElementById('quartAmtA').value);
  const oilAprice= parseFloat(document.getElementById('priceA').value);

  const oilBcon = document.getElementById('conventionalB');
  const oilBsyn = document.getElementById('syntheticB');
  const oilBquart= parseFloat(document.getElementById('quartAmtB').value);
  const oilBprice= parseFloat(document.getElementById('priceB').value);

  const oilCapacity = parseFloat(document.getElementById('oilTankCapacity').value);

  //check for empty values in oil A
  console.log('oilAquart', typeof(oilAquart), oilAquart);
  console.log('oilAprice', typeof(oilAprice), oilAprice);
  let selectedAtype = false;
  let validANumbers = false;
  let validA = false;
  if ((oilAcon.checked || oilAsyn.checked)) {
      selectedAtype = true;
  }
  if (!isNaN(oilAquart) && oilAquart > 0 && !isNaN(oilAprice) && oilAprice > 0) {
    validANumbers = true;
  }
  if (selectedAtype && validANumbers) {
    validA = true;
  }
  console.log('selectedAtype', selectedAtype)
  console.log('validANumbers', validANumbers)
  console.log('validA', validA);

  //check for empty values in oil B
  console.log('oilBquart', typeof(oilBquart), oilBquart);
  console.log('oilBprice', typeof(oilBrice), oilBprice);
  let selectedBtype = false;
  let validBNumbers = false;
  let validB = false;
  if ((oilBcon.checked || oilBsyn.checked)) {
      selectedBtype = true;
  }
  if (!isNaN(oilBquart) && oilBquart > 0 && !isNaN(oilBprice) && oilBprice > 0) {
    validBNumbers = true;
  }
  if (selectedBtype && validBNumbers) {
    validB = true;
  }

  console.log('selectedBtype', selectedBtype)
  console.log('validBNumbers', validBNumbers)
  console.log('validB', validB);

  //check for empty oil tank capacity  
  let validOilCapacity = (!isNaN(oilCapacity) && oilCapacity > 0 ? true : false);
  console.log('validOilCapacity', validOilCapacity);  
  
  if (validA && validB && validOilCapacity) {
    console.log(oilAcon, oilAsyn, oilAquart, oilAprice, oilBcon, oilBsyn, oilBquart, oilBprice, oilCapacity);

    let oilAmessage = 'Oil A is cheaper';
  
    const pricePerQuartA = oilAprice / oilAquart
    const costPerOilChangeA = pricePerQuartA * oilCapacity;
    const costPerMileA = costPerOilChangeA / (oilAcon.checked ? 3000 : 5000)
  
    console.log(`pricePerQuartA ${pricePerQuartA}`)
    console.log(`costPerOilChangeA ${costPerOilChangeA}`)
    console.log(`costPerMileA ${costPerMileA}`)
  
    let oilBmessage = 'Oil B is cheaper';
  
    const pricePerQuartB = oilBprice / oilBquart
    const costPerOilChangeB = pricePerQuartB * oilCapacity;
    const costPerMileB = costPerOilChangeB / (oilAcon.checked ? 3000 : 5000)
  
    console.log(`pricePerQuartB ${pricePerQuartB}`)
    console.log(`costPerOilChangeB ${costPerOilChangeB}`)
    console.log(`costPerMileB ${costPerMileB}`)
    
    // display result in alert box
    if (costPerMileB < costPerMileA) {
        alert('Oil B is cheaper');
    } else if (costPerMileB === costPerMileA) {
        alert('Both oil costs are the same');
    } else {
        alert('Oil A is cheaper');
    }
  } else {
      alert('Please enter appropriate values in each field!')
  }



  
  
}