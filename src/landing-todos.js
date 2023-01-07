/*===================================To Do List ================================= */
// set Up Var
let theInput = document.querySelector('.add-task input'), // here i add the result
  theAddBtn = document.querySelector('.add-task .plus'), // the button
  tasksContainer = document.querySelector('.tasks-content');
// focus on input field
window.onload = function () {
  theInput.focus();
};
// add new Task
theAddBtn.onclick = function () {
  // if input is Empty
  if (theInput.value === '') {
    // alert('the input is empty');
    Swal.fire('the input is empty');
  } else {
    let noTaskMsg = document.querySelector('.no-tasks-message');

    if (document.body.contains(document.querySelector('.no-tasks-message'))) {
      noTaskMsg.remove();
    }

    // create main span element
    let mainSpan = document.createElement('span');
    //Create delete button
    let deletbtn = document.createElement('button');
    // Create the main Span Text
    let text = document.createTextNode(theInput.value);
    // Create the Delete Delete Button
    let delettext = document.createTextNode('done');
    // add text to main span
    mainSpan.appendChild(text);
    // add class to mains span
    mainSpan.className = 'task-box';
    // add text to delete Button
    deletbtn.appendChild(delettext);
    // add class to delete btn
    deletbtn.className = 'done';
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

document.addEventListener('click', (e) => {
  // Delete Task
  if (e.target.className == 'done') {
    // remove current task
    e.target.parentNode.remove();

    if (tasksContainer.childElementCount == 0) {
      NoTaskShow();
    }
  }
  // add highlight to finished task
  if (e.target.classList.contains('task-box')) {
    e.target.classList.toggle('finished');
  }
});

// function to create no tasks Message
function NoTaskShow() {
  // create message
  let message = document.createElement('span');
  // create the text message
  let textMessage = document.createTextNode('No Tasks To Show');
  // add the textmsg to message
  message.appendChild(textMessage);
  // add class to message span
  message.className = 'no-tasks-message';
  // Append the message span Element to The Task Container
  tasksContainer.appendChild(message);
}
