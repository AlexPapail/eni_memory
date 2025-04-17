validPassword();
validName();
validEmail();
cancel();

let nameIsOk = false;
let emailIsOk = false;
let pwdIsOk = false;
let confirmPwdIsOk = false;
let nameTab = [];
let emailTab = []
let mdpTab = []
//const nameInStorage = localStorage.getItem(nameTab)?.toString()
// let valTab;

// function checkNameInStorage() {
//   for (let index = 0; index < nameTab.length; index++) {
//     if( nameTab(index)===document.getElementById("nomUtilisateur").value){
//       return true

//     }else{
//       return false
//     }

//   }

function checkStorage() {
  if (localStorage.getItem("nom")) {
    nameTab = JSON.parse(localStorage.getItem("nom"));
  }
  // if (localStorage.getItem("email")) {
  //   emailTab = JSON.parse(localStorage.getItem("email"));
  // }
  // if (localStorage.getItem("mdp")) {
  //   mdpTab = JSON.parse(localStorage.getItem("mdp"));
  // }
}
function update() {
  
  document
    .getElementById("confirmation")
    .addEventListener("click", function () {
      checkStorage()
      nameTab.push(document.getElementById("nomUtilisateur").value);
      localStorage.setItem("nom", JSON.stringify(nameTab));

    //   emailTab.push(document.getElementById("email").value);
    //   localStorage.setItem("email", JSON.stringify(emailTab));
      
    //   mdpTab.push(document.getElementById("mdp").value);
    //   localStorage.setItem("mdp", JSON.stringify(mdpTab));
    });
}

function valid() {
  if (nameIsOk && emailIsOk && pwdIsOk && confirmPwdIsOk) {
    update()
    document

      .getElementById("confirmation")
      .setAttribute("class", "btn btn-outline-success");
  } else {
    document
      .getElementById("confirmation")
      .setAttribute("class", "btn btn-outline-success disabled");
  }
}
function validName() {
  document
    .querySelector("#nomUtilisateur")
    .addEventListener("input", function () {
      if (/[A-Za-z]/.test(this.value) && this.value.length >= 3) {
        this.setAttribute("class", "form-control is-valid");
        nameIsOk = true;
      } else if (!this.value) {
        this.setAttribute("class", "form-control");
        nameIsOk = false;
      } else {
        this.setAttribute("class", "form-control is-invalid");
        nameIsOk = false;
      }
      valid();
    });
}
function validEmail() {
  document.querySelector("#email").addEventListener("input", function () {
    let val = this.value;

    let arrobase = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);

    if (arrobase) {
      this.setAttribute("class", "form-control is-valid");
      emailIsOk = true;
    } else if (!val) {
      this.setAttribute("class", "form-control");
      emailIsOk = false;
    } else {
      this.setAttribute("class", "form-control is-invalid");
      emailIsOk = false;
    }
    valid();
  });
}
function createStrong() {
  let fort;
  fort = document.createElement("div");
  fort.id = "fort";
  fort.innerText = "Fort";
  document.getElementById("forceMdp").appendChild(fort);
}
function createMiddle() {
  let moyen;
  moyen = document.createElement("div");
  moyen.id = "moyen";
  moyen.innerText = "Moyen";
  document.getElementById("forceMdp").appendChild(moyen);
}
function createWeak() {
  let faible;
  faible = document.createElement("div");
  faible.id = "faible";
  faible.innerText = "Faible";
  document.getElementById("forceMdp").appendChild(faible);
}
function validPassword() {
  document.getElementById("mdp").addEventListener("input", function () {
    let pwd = document.querySelector("#mdp").value;
    confirmPwd(pwd);
    let maj = checkMaj(pwd);
    let min = checkMin(pwd);
    let num = checkNumber(pwd);
    let sym = checkSymbole(pwd);
    let size = checkSize(pwd);
    if (maj && min && !document.getElementById("faible")) {
      createWeak(pwd);
    } else if (!maj || !min) {
      if (document.getElementById("faible")) {
        document.getElementById("forceMdp").removeChild(faible);
      }
    }
    if (maj && min && (num || sym) && !document.getElementById("moyen")) {
      createMiddle(pwd);
    } else if (!maj || !min || (!sym && !num)) {
      if (document.getElementById("moyen")) {
        document.getElementById("forceMdp").removeChild(moyen);
      }
    }
    if (maj && min && num && sym && size && !document.getElementById("fort")) {
      createStrong(pwd);
    } else if (!maj || !min || !sym || !num || !size) {
      if (document.getElementById("fort")) {
        document.getElementById("forceMdp").removeChild(fort);
      }
    }

    if (maj && min && num && sym && size) {
      document
        .getElementById("mdp")
        .setAttribute("class", "form-control is-valid");
      pwdIsOk = true;
    } else if (!pwd) {
      document.getElementById("mdp").setAttribute("class", "form-control");
      pwdIsOk = false;
    } else {
      document
        .getElementById("mdp")
        .setAttribute("class", "form-control is-invalid");
      pwdIsOk = false;
    }
    valid();
  });
}
function checkMaj(pwd) {
  let checkUpperCase = /[A-Z]/.test(pwd);

  if (checkUpperCase) {
    document.querySelector("#majuscule").setAttribute("class", "isOk");
  } else {
    document.querySelector("#majuscule").setAttribute("class", "isNotOk");
  }
  return checkUpperCase;
}
function checkMin(pwd) {
  let checkLowerCase = /[a-z]/.test(pwd);

  if (checkLowerCase) {
    document.querySelector("#minuscule").setAttribute("class", "isOk");
  } else {
    document.querySelector("#minuscule").setAttribute("class", "isNotOk");
  }
  return checkLowerCase;
}
function checkNumber(pwd) {
  let checkNumber = /[0-9]/.test(pwd);

  if (checkNumber) {
    document.querySelector("#chiffre").setAttribute("class", "isOk");
  } else {
    document.querySelector("#chiffre").setAttribute("class", "isNotOk");
  }
  return checkNumber;
}
function checkSymbole(pwd) {
  let checkSymbole = /[^\w]/.test(pwd);

  if (checkSymbole) {
    document.querySelector("#symbole").setAttribute("class", "isOk");
  } else {
    document.querySelector("#symbole").setAttribute("class", "isNotOk");
  }
  return checkSymbole;
}
function checkSize(pwd) {
  let checkSize = true;

  if (pwd.length >= 6) {
    checkSize = true;
    document.querySelector("#longMini").setAttribute("class", "isOk");
  } else {
    checkSize = false;
    document.querySelector("#longMini").setAttribute("class", "isNotOk");
  }
  return checkSize;
}
function confirmPwd(pwd) {
  document
    .querySelector("#confirmationmdp")
    .addEventListener("input", function () {
      let val = this.value;

      if (val === pwd) {
        this.setAttribute("class", "form-control is-valid");
        confirmPwdIsOk = true;
      } else if (!val) {
        this.setAttribute("class", "form-control");
        confirmPwdIsOk = false;
      } else {
        this.setAttribute("class", "form-control is-invalid");
        confirmPwdIsOk = false;
      }
      valid();
    });
}
function cancel() {
  document.getElementById("annulation").addEventListener("click", function () {
    document.getElementById("nomUtilisateur").value = "";
    document
      .getElementById("nomUtilisateur")
      .setAttribute("class", "form-control");
    document.getElementById("email").value = "";
    document.getElementById("email").setAttribute("class", "form-control");
    document.getElementById("mdp").value = "";

    document.getElementById("mdp").setAttribute("class", "form-control");
    document.getElementById("confirmationmdp").value = "";
    document
      .getElementById("confirmationmdp")
      .setAttribute("class", "form-control");

    document.getElementById("minuscule").setAttribute("class", "isNotOk");
    document.getElementById("majuscule").setAttribute("class", "isNotOk");
    document.getElementById("symbole").setAttribute("class", "isNotOk");
    document.getElementById("longMini").setAttribute("class", "isNotOk");
    document.getElementById("chiffre").setAttribute("class", "isNotOk");

    var element = document.getElementById("forceMdp");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    document
      .getElementById("confirmation")
      .setAttribute("class", "btn btn-outline-success disabled");
  });
}
