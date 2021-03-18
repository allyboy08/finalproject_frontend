var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function () {
  modal1.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
span1.onclick = function () {
  modal1.style.display = "none";
};
span2.onclick = function () {
  modal2.style.display = "none";
};
let loggedIn;

function createAccount() {
  let form = document.getElementById("create-account");
  const inputs = form.getElementsByTagName("input");

  fetch("https://pacific-ocean-71803.herokuapp.com/add-new/", {
    method: "POST",
    body: JSON.stringify({
      name: inputs[0].value,
      uname: inputs[1].value,
      passw: inputs[2].value,
      email: inputs[3].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account has been created");
      console.log(json);
      form.reset();
    });
}

function login() {
  let loginForm = document.getElementById("login");
  let inputs = loginForm.getElementsByTagName("input");

  let uname = inputs[0].value;
  let passw = inputs[1].value;

  let users;
  fetch(`https://pacific-ocean-71803.herokuapp.com/show-accounts/`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      users = json;
      console.log(uname, passw, users);

      loggedIn = users.filter((user) => {
        return user.uname == uname && user.passw == passw;
      });
      alert("logged in success");
      console.log(json);
      // loginForm.reset();
      if (loggedIn.length >= 1) {
        // let un = document.getElementById("uname").value;
        // let pas = document.getElementById("passw").value;
        localStorage.setItem("user-logged", JSON.stringify(uname, passw));
        window.location.href = `./index.html`;
        console.log("worked");
      }
    });
}
function out() {
  // if (loggedIn.length >= 1) {
  // let un = document.getElementById("uname").value;
  // let pas = document.getElementById("passw").value;
  localStorage.removeItem("user-logged");
  alert("logged out success");
  window.location.href = `./index.html`;
  // }
}
// export { login };
