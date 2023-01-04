let digits = document.querySelector('.digits');
digits.addEventListener('click', (e) => {
  let currentDigit = e.target.value;
  document.getElementById('result').value += currentDigit;
});

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
