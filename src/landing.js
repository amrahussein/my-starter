// toggle menu
console.log('landing');
// toggle class on icon
let myMenu = document.querySelector('.toggle-menu');
let myLinks = document.querySelector('.links');

// myMenu.onclick = () => {
//   this.classList.add("menu-active");
// };
// console.log(myMenu);

myMenu.onclick = function (e) {
  console.log('hello');
  e.stopPropagation();
  // show the arrow when click (toggle => show and remove)
  this.classList.toggle('menu-active');
  // show the menu links in mobile mode (toggle => show and remove)
  myLinks.classList.toggle('open');
};
// click anyWher Outside menu And toggle button
document.addEventListener('click', (e) => {
  if (e.target !== myMenu && e.target !== myLinks) {
    // check if menu is open
    if (myLinks.classList.contains('open')) {
      // toggle (add) Class "menu actve" on button
      myMenu.classList.toggle('menu-active');
      // toggle class "open" On Links
      myLinks.classList.toggle('open');
    }
  }
});

// stopPropagation on menu
myLinks.onclick = function (e) {
  e.stopPropagation();
};

/*To Do List */
// set Up Var
let theInput = document.querySelector('.add-task input'),
  theAddBtn = document.querySelector('.add-task .plus'),
  tasksContainer = document.querySelector('.tasks-content'),
  noTaskMsg = document.querySelector('.no-tasks-message');

if (window.localStorage.getItem('todo')) {
  console.log('good');
} else {
  console.log('noo');
}
// focus on input field
window.onload = function () {
  theInput.focus();
};
// add new Task
theAddBtn.onclick = function (e) {
  // if input is Empty
  if (theInput.value === '') {
    alert('the input is empty');
  } else {
    // remove NO Tasks Message
    noTaskMsg.remove();
    // create main span element
    let mainSpan = document.createElement('span');
    //Create delete button
    let deletbtn = document.createElement('button');
    // Create the main Span Text
    let text = document.createTextNode(theInput.value);
    // Create the Delete Delete Button
    let delettext = document.createTextNode('delete');
    // add text to main span
    mainSpan.appendChild(text);
    // add class to mains span
    mainSpan.className = 'task-box';
    // add text to delete Button
    deletbtn.appendChild(delettext);
    // add class to delete btn
    deletbtn.className = 'delete';
    // add delete button to main span
    mainSpan.appendChild(deletbtn);
    // Add the task to container
    tasksContainer.appendChild(mainSpan);
    // clear the input
    theInput.value = '';
    // Focus On Field
    theInput.focus();
  }
  window.localStorage.setItem('todo', theInput.value);
};

// function getData() {
//   var data = sessionStorage.getItem('todoInput'); //localStorage.getItem("userData");
//   theInput.value = data;
// }
document.addEventListener('click', (e) => {
  // Delete Task
  if (e.target.className == 'delete') {
    // remove current task
    e.target.parentNode.remove();
  }
  // add highlight to finished task
  if (e.target.classList.contains('task-box')) {
    e.target.classList.toggle('finished');
  }
});
