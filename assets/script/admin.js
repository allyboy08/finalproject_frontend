function admin() {
  let adminForm = document.getElementById("admin");
  let inputs = adminForm.getElementsByTagName("input");

  let uname = inputs[0].value;
  let passw = inputs[1].value;

  let users;
  fetch("http://127.0.0.1:5000/show-admin/")
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
      adminForm.reset();
      if (loggedIn.length >= 1) {
        window.location.href = `./profile.html`;
      }
    });
}

function getAcc() {
  fetch(`http://127.0.0.1:5000/show-accounts/`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((user) => showtr(user));
    });
}

function showtr(user) {
  const tableacc = `<tr data-id=${user.id}>
  
        <td>${user.id}</td>
        <td><input class="inv" name="fname" type='text' value="${user.fname}"></td>
        <td><input class="inv" name="uname" type='text' value="${user.uname}"></td>
        <td><input class="inv" name="passw" type='text' value="${user.passw}"></td>
        <td><input class="inv" name="email" type='text' value="${user.email}"></td>
        <td><button class="tdbtn" onclick="deleteAcc(${user.id})">delete</button></td>
        <td><button class="tebtn" onclick="editAcc(${user.id})">edit</button></td>
      </tr>`;
  let list = document.getElementById("acc-table");
  console.log("hello");
  list.innerHTML += tableacc;
}
getAcc();

function deleteAcc(id) {
  if (confirm("are you sure you want to delete your account")) {
    fetch(`http://127.0.0.1:5000/delete-account/${id}/`, { method: "DELETE" });
    console.log(id);
  } else {
    alert("cancel");
    console.log("not saved to database");
  }
}

function editAcc(id) {
  let userItem = document.querySelector(`[data-id="${id}"]`);
  let inputs = userItem.getElementsByTagName("input");
  console.log(userItem);

  let user = {
    fname: inputs[0].value,
    uname: inputs[1].value,
    passw: inputs[2].value,
    email: inputs[3].value,
  };

  fetch(`http://127.0.0.1:5000/edit-account/${id}/`, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
