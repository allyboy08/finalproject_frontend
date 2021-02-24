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
