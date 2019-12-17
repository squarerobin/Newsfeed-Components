/* /* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an arrayOfItemsay as its only argument.

  Step 2: Inside this function, iterate over the arrayOfItemsay creating a list item <li> element for each item in the arrayOfItemsay. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector('.header');
const menuButton = document.querySelector('.menu-button');


function createMenu(arrayOfItems) {
  const menu = document.createElement('div');

  // Create unordered list
  const ul = document.createElement('ul');
  menu.appendChild(ul);

  // create list items
  arrayOfItems.forEach(el => {
    const li = document.createElement('li');
    li.innerText = el;
    ul.appendChild(li);

    try {
      li.style.cursor = 'pointer';
      // the following two lines won't work... why??
      li.onmouseover.style.backgroundColor = 'green';
      li.onclick.style.color = 'orange';
    } catch (error) {
      console.log(error);
    }


  });


  //add styles 
  menu.classList.add('menu');
  menuButton.addEventListener('click', e => {
    if (menu.classList.toggle('menu--close')) {
      menu.classList.toggle('menu--open');
      menu.style.width = '350px';
    } else {

     // menu.classList.toggle('menu--open');
       menu.classList.toggle('menu-close');
       menu.style.width = '0';
       ul.style.display = 'none';
       
       

    }
  });

  return menu;
}


header.appendChild(createMenu(menuItems));