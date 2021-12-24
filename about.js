/*const grab = (e) => document.querySelector(`.${e}`);

// ABOUT PAGE MENU

grab('fa-bars').addEventListener('click', () => {
  grab('menu-lis', false, false).style.display = 'flex';
});

grab('close').addEventListener('click', () => {
  grab('menu-lis', false, false).style.display = 'none';
});*/
  
  /* MENU */
  
  const btn = document.querySelector('.hamburger');
  
  const icon = document.querySelector('.icon');
  
  const navElements = document.querySelector('.nav-element');
  
  btn.addEventListener('click', displayMenu);
  
  function displayMenu () {
      if(icon.classList.contains('menu')) {
          icon.classList.remove('menu');
          icon.classList.add('close');
          navElements.style.display = 'block';
      }
      else if(icon.classList.contains('close')) {
          icon.classList.remove('close');
          icon.classList.add('menu');
          navElements.style.display = 'none';
      }
  }