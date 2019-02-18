"use strict";

const submit = document.querySelector(".btnSubmit");
const user = document.querySelectorAll(".login-input");

submit.addEventListener("click", function(evt) {
  evt.preventDefault();

  user.forEach(user => {
    console.log(user.value);
    if (user.value == "admin") {
      window.location.replace("./admin.html");
    }

    if (user.value == "user") {
      window.location.replace("./user.html");
    }
    //   window.location.replace("./admin.html");
    return false;
  });
});
