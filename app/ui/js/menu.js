'use strict';

let list = document.getElementById('menu-list');

// list.innerHTML = `
// <li>
//     <div class="menu">
//     <div class="menu-header">
//         <h1 id="menu-name"></h1>
//         <i
//         class="fa fa-caret-square-o-down drop-menu"
//         aria-hidden="true"
//         ></i>
//     </div>
//     <div class="menu-body">
//         <p id="menu-description"></p>
//         <div class="menu-footer">
//         <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
//         <i class="fa fa-times-circle" aria-hidden="true"></i>
//         </div>
//     </div>
//     </div>
// </li>
// `;

// let menuName = document.getElementById('menu-name');
// let menuDescription = document.getElementById('menu-description');
let result = '';
fetch('./jsonfiles/menu.json')
  .then(res => res.json())
  .then(menuList => {
    menuList.forEach(menu => {
      const { name, description } = menu;

      result += `

            <div class="menu">
                <div class="menu-header">
                    <h1 id="menu-name">${name}</h1>
                    <i
                    class="fa fa-caret-square-o-down drop-menu"
                    aria-hidden="true"
                    ></i>
                </div>
                <div class="menu-body">
                    <p id="menu-description">${description}</p>
                    <div class="menu-footer">
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div> <br />
            `;

      list.innerHTML = result;
    });
  });
