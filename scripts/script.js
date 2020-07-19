// let user_range = 0;
// let user_gas = 0;


// let range = document.querySelector('.rangeText');
// let gas = document.querySelector('.gasText');
// let mpg = document.querySelector('.mpgText');

// document.querySelector('button').onclick = testfunction;

// function testfunction() {
//     let user_range = prompt("How many miles travelled?");
//     let user_gas = prompt("How many gallons of gas was used?");
//     let mpgCalculated = Math.round(user_range / user_gas);
//     range.textContent = user_range + " miles";
//     gas.textContent = user_gas + " gallons";
//     mpg.textContent = mpgCalculated + " miles/gallon";
// }

// html code: 
{/* <div class="mpgApp">       
        <h2>MPG Calculator App:</h2> <button >Click to calculate mpg!</button>
        <!-- there are blank spaces inside rangeText and gasText divs -->
        <p>Range (in miles):</p> <div class="rangeText"> </div> 
        <p>Gas consumed (in gallons):</p> <div class="gasText"> </div>
        <p>Calculated MPG:</p> 
        <div class="mpgText">0 mile/gallon</div>
    </div> */}

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

//code for show / hide form 

// document.querySelector('#btnOpen-mpgform').onclick = showHide;

// function showHide() {
//     // let form = document.querySelector('.mpgform-wrap');
//     // if (form.style.display === 'none') {
//     //     form.style.display === 'block';
//     // } else {
//     //     form.style.display === 'none';
//     // }
//     document.querySelector('.formtitle').textContent = 'CLICKED!';
// }

document.querySelector('#btnShowForm').onclick = showHideForm;
function showHideForm() {
  let x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
}

const showHideMenuBtn = document.getElementById('showButtonNavBar');
showHideMenuBtn.addEventListener('click', showHandler);
function showHandler(event) {
  event.preventDefault();
  showHideForm();
}

const contactMenuBtn = document.getElementById('contactMenuItem');
contactMenuBtn.addEventListener('click', contactBtnHandler);
function contactBtnHandler(event) {
  event.preventDefault();
  alert('Kevin Le: kevinle108@gmail.com');
}
