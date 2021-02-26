var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close1")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function () {
  modal1.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
span1.onclick = function () {
  modal1.style.display = "none";
};

function createAccount() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-new/", {
    method: "POST",
    body: JSON.stringify({
      fname: inputs[0].value,
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
      document.getElementById("create-account").reset();
    });
}

function login() {
  let loginForm = document.getElementById("login");
  let inputs = loginForm.getElementsByTagName("input");

  let uname = inputs[0].value;
  let passw = inputs[1].value;

  let users;
  fetch("http://127.0.0.1:5000/show-accounts/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      users = json;
      console.log(uname, passw, users);

      let loggedIn = users.filter((user) => {
        return user.uname == uname && user.passw == passw;
      });

      if (loggedIn.length >= 1) {
        window.location.href = "./profile.html";
      }
    });
}
