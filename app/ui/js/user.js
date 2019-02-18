"use strict";

let list = document.getElementById("menu-display-user");

let result = "";
fetch("./jsonfiles/menu.json")
  .then(res => res.json())
  .then(menuList => {
    menuList.forEach(menu => {
      const { name, description } = menu;

      result += `
        <div class="user-menu">
            <h2>${name}</h2>
            <p>${description}</p>
            <div class="btn-user-menu">Place Order</div>
        </div>

            `;

      list.innerHTML = result;

      // Modals
      let modalOrder = document.querySelector(".bg-modal-checkout");
      let btnOrder = document.querySelectorAll(".btn-user-menu");
      let cancelOrder = document.querySelector(".cancel-order");

      //   Show Modal
      btnOrder.forEach(order => {
        order.addEventListener("click", () => {
          modalOrder.style.display = "flex";
        });
      });

      cancelOrder.addEventListener("click", () => {
        modalOrder.style.display = "none";
      });
    });
  });
