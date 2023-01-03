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
/*
tasks:
[1] use sweet Alert If Input Empty  {done}
[2] check is typed the same task

*/
// seting Up Var
let theInput = document.querySelector('.add-task input'),
  theAddBtn = document.querySelector('.add-task .plus'),
  tasksContainer = document.querySelector('.tasks-content'),
  noTaskMsg = document.querySelector('.no-tasks-message'),
  tasksCount = document.querySelector('.tasks-count span'),
  tasksCompleted = document.querySelector('.tasks-completed span');

// foucas on input field

window.onload = function () {
  theInput.focus();
};

// add new Task

theAddBtn.onclick = function () {
  // if input is Empty
  if (theInput.value === '') {
    swal({
      title: 'Fields Empty !',
      text: 'Please check the missing field!',
      icon: 'warning',
    });
  } else {
    // remove NO Tasks Message
    noTaskMsg.remove();

    // creat main span element
    let mainSpan = document.createElement('span');

    //Creat delete button
    let deletbtn = document.createElement('button');

    // Creat the main Span Text

    let text = document.createTextNode(theInput.value);

    // Creat the Delete Delete Button

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

    // Add the task to contaner

    tasksContainer.appendChild(mainSpan);

    // clear the inpute
    theInput.value = '';

    // Focus On Field

    theInput.focus();
  }
};

document.addEventListener('click', (e) => {
  // Delete Task
  if (e.target.className == 'delete') {
    // remove curent task
    e.target.parentNode.remove();
  }
});
