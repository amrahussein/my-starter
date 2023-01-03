//
// let digits = document.querySelector('.digits');
// digits.addEventListener('click', (e) => {
//   console.log('hello');
//   let currentDigit = e.target.value;
//   document.getElementById('result').value += currentDigit;

// });

/*
  for (let i = 0; i > AllDigits.length; i++) {
    if (AllDigits[i] != '') {
      console.log('hello');
    }
  }
  return AllDigits[i];
  */

// clear input after sum any logic
let AllDigits = document.querySelector('.digits');
AllDigits.onclick = function (e) {
  // console.log('hello here');
  let currentDigit = e.target.value;
  if (currentDigit != '') {
    document.getElementById('result').value += currentDigit;
    console.log('hello here');
  } else {
    document.getElementById('result').value = '';
  }
};

//operation
let operation = () => {
  // console.log('Hello');
  let x = document.getElementById('result').value;
  let y = eval(x);
  let result = (x = y);
  return result;
};

let clearScreen = () => {
  document.getElementById('result').value = '';
};

// window.enterDigits = enterDigits;
window.operation = operation;
window.clearScreen = clearScreen;
