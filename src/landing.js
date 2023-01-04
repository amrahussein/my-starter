// toggle menu

// toggle class on icon
let myMenu = document.querySelector('.toggle-menu');
let myLinks = document.querySelector('.links');

// myMenu.onclick = () => {
//   this.classList.add("menu-active");
// };
//

myMenu.onclick = function (e) {
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
