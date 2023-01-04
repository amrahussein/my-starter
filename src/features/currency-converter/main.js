// website << https://www.exchangerate-api.com/
// include key & api for currency change

const api =
  'https://v6.exchangerate-api.com/v6/b2ac3c3fad8d03eae7a5da2e/latest/USD';

// for selecting different controls
let from_Currecy = document.querySelector('.from');
let to_Currecy = document.querySelector('.to');
let search = document.querySelector('.search');
let on_Reset = document.querySelector('#reset');

let convert = document.getElementById('convert');
let final_value = document.querySelector('.final-value');
let final_amount = document.getElementById('final-amount');
let reset = document.getElementsByClassName('btnrest');
// variables needed:
let currency_from_inp;
let currency_to_inp;
let search_value;

// when currency is changed
from_Currecy.addEventListener('change', (event) => {
  // currency user selected
  currency_from_inp = `${event.target.value}`;
});

to_Currecy.addEventListener('change', (event) => {
  // currency user selected to convert
  currency_to_inp = `${event.target.value}`;
});

// function for updating value
let updateValue = (e) => {
  search_value = e.target.value;
  //
};

search.addEventListener('input', updateValue);

// function getresults
let getresult = async (e) => {
  e.preventDefault();

  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(display);
};

// when user clicks, it calls function getresult
convert.addEventListener('click', getresult);

// display results after conversion
let display = (currency) => {
  // currency i can say it's object "java script obj notation"

  //conversion_rates it's periorety have all currency of reates

  let from_rate = currency.conversion_rates[currency_from_inp];
  let to_rate = currency.conversion_rates[currency_to_inp];

  // (currency 1 / currency 2) * value "user input"
  final_value.innerHTML = ((to_rate / from_rate) * search_value).toFixed(2); // 00.00 (first 2 digit)
  final_amount.style.display = 'block';
};

// when user click on reset button
let handle_reset = () => {
  //window.location.reload();
  this.location.reload();
  document.getElementsByClassName('final-value').innerHTML = '';
};
on_Reset.addEventListener('click', handle_reset);
