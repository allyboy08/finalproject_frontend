//modal
// var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn2");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// import { login } from "./login.js";

// Get data from URL
const params = new URLSearchParams(window.location.search);

if (params.has("userID")) {
  fetch(`http://127.0.0.1:5000/show-accounts/${params.get("userID")}`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setProfile(json);
    });
}

function setProfile(profile) {
  profileName = document.getElementById("profileName");
  profileName.innerHTML += profile.fname;
  // console.log(profile);
}

function remove() {
  let form = document.getElementById("delete");
  // let id = params.get("userID");

  fetch(`http://127.0.0.1:5000/delete-account/${params.get("userID")}`, {
    method: "DELETE",
    // Accept: "application/json",
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account has been deleted");
      console.log(json);
      form.reset();
    });
}
