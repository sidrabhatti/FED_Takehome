// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.

  function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

