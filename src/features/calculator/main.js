//
let digits = document.querySelector('.digits');
digits.addEventListener('click', (e) => {
  console.log('hello');
  let currentDigit = e.target.value;
  document.getElementById('result').value += currentDigit;
});

//sum
let sum = () => {
  console.log('Hello');
  let x = document.getElementById('result').value;
  let y = eval(x);
  let result = (document.getElementById('result').value = y);
  //   console.log(y);
  return result;
};

let clearScreen = () => {
  console.log('Hello');
  document.getElementById('result').value = '';
};

// window.enterDigits = enterDigits;
window.sum = sum;
window.clearScreen = clearScreen;
