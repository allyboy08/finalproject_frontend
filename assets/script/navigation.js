// function toggleNav() {
//   //get links from navigation
//   const links = document.getElementById("nav-links");

//   //styles on links
//   links.style.width == "0px"
//     ? (links.style.width = "100vw")
//     : (links.style.width = "0px");

//   // IF example
//   // if(links.style.width == "0px"){
//   //     links.style.width = "100vw"
//   // }else{
//   //     links.style.width= "0px"
//   // }
// }
function openNav() {
  document.getElementById("nav-links").style.height = "100%";
}

function closeNav() {
  document.getElementById("nav-links").style.height = "0%";
}
