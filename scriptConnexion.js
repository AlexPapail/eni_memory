let usersTab = JSON.parse(localStorage.getItem("users"));
let mailIsOK = false;
let pwdIsOk = false;
let userIsOk = false;
checkUser()



function checkUser() {
  document.getElementById("form").addEventListener("input", function () {
    for (let index = 0; index < usersTab.length; index++) {
      const element = usersTab[index];
      if (element.email === document.getElementById('email').value&&element.password===document.getElementById('mdp').value) {
        userIsOk = true;
        break;
      } else {
        userIsOk = false;
      }
    }
    if (userIsOk) {
        document
        .getElementById("confirmation")
        .classList.remove('disabled')
    } else {
        document
        .getElementById("confirmation")
        .classList.add('disabled');
    }
    
  });
}

