// SELECTORS
let entry = document.getElementById('given');

let result = document.getElementById('res');

let convert = document.getElementById('convert');

function Conversion() {
  // GETTING TO THE CONVERTED FROM DROPDOWN LIST
  let from = document.getElementById('FromUnits');

  // GETTING TO THE CONVERTED TO DROPDOWN LIST
  let to = document.getElementById('ToUnits');

  if (from.value === to.value)
    result.innerText = 'Please specify a different unit';

  // GETTING TO THE CONVERTED-FROM OPTIONS IN DROPDOWN LIST
  let selectedFrom = from.options[from.selectedIndex].value;

  // GETTING TO THE CONVERTED-TO OPTIONS IN DROPDOWN LIST
  let selectedTo = to.options[to.selectedIndex].value;

  // M TO CM
  if (selectedFrom == 'Meters' && selectedTo == 'Centimeters') {
    let res = entry.value * 100;
    result.innerText = 'Result in Centimeters = ' + res + ' cm';
  }

  // M TO KM
  if (selectedFrom == 'Meters' && selectedTo == 'Kilometers') {
    let res = entry.value / 1000;
    result.innerText = 'Result in Kilometers = ' + res + ' km';
  }

  // M TO INCHES
  if (selectedFrom == 'Meters' && selectedTo == 'Inches') {
    let res = entry.value * 39.37;
    result.innerText = 'Result in Inches = ' + res + ' inches';
  }

  // CM TO M
  if (selectedFrom == 'Centimeters' && selectedTo == 'Meters') {
    let res = entry.value / 100;
    result.innerText = 'Result in Meters = ' + res + ' m';
  }

  // CM TO KM
  if (selectedFrom == 'Centimeters' && selectedTo == 'Kilometers') {
    let res = entry.value / 100000;
    result.innerText = 'Result in Kilometers = ' + res + ' km';
  }

  // CM TO INCHES
  if (selectedFrom == 'Centimeters' && selectedTo == 'Inches') {
    let res = entry.value / 2.54;
    result.innerText = 'Result in Inches = ' + res + ' Inches';
  }

  // KM TO M
  if (selectedFrom == 'Kilometers' && selectedTo == 'Meters') {
    let res = entry.value * 1000;
    result.innerText = 'Result in Meters = ' + res + ' m';
  }

  // KM TO CM
  if (selectedFrom == 'Kilometers' && selectedTo == 'Centimeters') {
    let res = entry.value * 100000;
    result.innerText = 'Result in Centimeters = ' + res + ' cm';
  }

  // KM TO INCHES
  if (selectedFrom == 'Kilometers' && selectedTo == 'Inches') {
    let res = entry.value * 39370;
    result.innerText = 'Result in Inches = ' + res + ' inches';
  }

  // INCHES TO M
  if (selectedFrom == 'Inches' && selectedTo == 'Meters') {
    let res = entry.value / 39.37;
    result.innerText = 'Result in Meters = ' + res + ' m';
  }

  // INCHES TO CM
  if (selectedFrom == 'Inches' && selectedTo == 'Centimeters') {
    let res = entry.value * 2.54;
    result.innerText = 'Result in Centimeters = ' + res + ' cm';
  }

  // INCHES TO KM
  if (selectedFrom == 'Inches' && selectedTo == 'Kilometers') {
    let res = entry.value / 39370;
    result.innerText = 'Result in Kilometers = ' + res + ' km';
    return;
  }

  // alert('Please Select The two fields with valid units');
  // else {
  // }
}

convert.addEventListener('click', Conversion);
