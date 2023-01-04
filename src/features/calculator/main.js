//
// let digits = document.querySelector('.digits');
// digits.addEventListener('click', (e) => {
//
//   let currentDigit = e.target.value;
//   document.getElementById('result').value += currentDigit;

// });

/*
  for (let i = 0; i > AllDigits.length; i++) {
    if (AllDigits[i] != '') {
      
    }
  }
  return AllDigits[i];
  */

// clear input after sum any logic
let AllDigits = document.querySelector('.digits');
AllDigits.onclick = function (e) {
  //
  let currentDigit = e.target.value;
  document.getElementById('result').value += currentDigit;

  // if (currentDigit != '') {
  //   document.getElementById('result').value += currentDigit;
  //
  // } else {
  //   document.getElementById('result').value = '';
  // }
};

//operation
let operation = () => {
  //
  let x = document.getElementById('result').value;
  let y = eval(x);
  let result = (document.getElementById('result').value = y);
  return result;
};

let clearScreen = () => {
  document.getElementById('result').value = '';
};

// window.enterDigits = enterDigits;
window.operation = operation;
window.clearScreen = clearScreen;
