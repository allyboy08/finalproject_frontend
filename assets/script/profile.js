function logged(){

    let user_data = JSON.parse(localStorage.getItem("user-logged"));
    console.log(user_data)
    let info = `
    <div class ="user_info">
       <h2 id="uname"> Welcome ${user_data} </h2>
         
    </div>
      
     `;
    console.log("Hello ", user_data);
    let body = document.getElementById("user-data");
    body.innerHTML += info;
  }
  logged();

  function out() {
    localStorage.removeItem("user-logged");
    alert("logged out success");
    window.location.href = `./index.html`;
  }