"use strict";

let list = document.getElementById("menu-list");

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
let result = "";
fetch("./jsonfiles/menu.json")
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
                    <div class="btn-edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                    <div class="btn-delete"><i class="fa fa-times-circle"  aria-hidden="true"></i></div>
                    </div>
                </div>
            </div> <br />
            `;

      list.innerHTML = result;

      // Modals
      let modalDelete = document.querySelector(".bg-modal-delete");
      let modalEdit = document.querySelector(".bg-modal-edit");

      let modalCloseDelete = document.querySelector(".close-delete");
      let modalCloseEdit = document.querySelector(".close-edit");

      let btnDelete = document.querySelectorAll(".btn-delete");
      let btnEdit = document.querySelectorAll(".btn-edit");

      //   Show delete modal
      btnDelete.forEach(close => {
        close.addEventListener("click", () => {
          modalDelete.style.display = "flex";
        });
      });

      //   Show edit modal
      btnEdit.forEach(edit => {
        edit.addEventListener("click", () => {
          modalEdit.style.display = "flex";
        });
      });

      //   Close modal when the x button is clicked
      modalCloseDelete.addEventListener("click", () => {
        modalDelete.style.display = "none";
      });

      //   Close modal when the x button is clicked
      modalCloseEdit.addEventListener("click", () => {
        modalEdit.style.display = "none";
      });
    });
  });
