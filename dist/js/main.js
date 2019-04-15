"use strict";

// Put JS logic (if any) here.
// ESNext to ES5 transpiling is completed via Babel's "env" preset.
function classToggle() {
  var navs = document.querySelectorAll('.Navbar__Items');
  navs.forEach(function (nav) {
    return nav.classList.toggle('Navbar__ToggleShow');
  });
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);
//# sourceMappingURL=main.js.map