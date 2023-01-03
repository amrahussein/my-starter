/*===================================To Do List ================================= */
// set Up Var
let theInput = document.querySelector('.add-task input'), // here i add the result
  theAddBtn = document.querySelector('.add-task .plus'), // the button
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
