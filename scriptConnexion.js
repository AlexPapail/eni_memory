let usersTab = JSON.parse(localStorage.getItem("users"));
let mailIsOK = false;
let pwdIsOk = false;
let userIsOk = false;

// cancel()

valid();
function valid() {
  document
    .getElementById("confirmation")
    .addEventListener("click", function () {
      checkUser();
      if (userIsOk) {
        document.getElementById("confirmation").href = "compte.html";
        sessionStorage.setItem("name", userName);
        sessionStorage.setItem("email", email);
      } else if (!userIsOk) {
       
        let wizz = setInterval(function () {
          document.getElementById("wizz").classList.toggle('choc')
        }, 20);
        
        setTimeout(function(){
          clearInterval(wizz)
        },500)
      }
    });
}

function cancel() {
  document.getElementById("annulation").addEventListener("click", function () {
    document.getElementById("confirmation").classList.add("disabled");
  });
}
function checkUser() {
  document.getElementById("form").addEventListener("input", function () {
    for (let index = 0; index < usersTab.length; index++) {
      const element = usersTab[index];
      if (
        element.email === document.getElementById("email").value &&
        element.password === document.getElementById("mdp").value
      ) {
        userIsOk = true;
        userName = element.name;
        email = element.email;
        break;
      } else {
        userIsOk = false;
      }
    }
  });
}
