validName();
validEmail();
validPassword();

function validName() {
  document
    .querySelector("#nomUtilisateur")
    .addEventListener("input", function () {
      let val = this.value;

      let checkLowerCase = /[A-Za-z]/.test(val);

      if (checkLowerCase && val.length >= 3) {
        this.setAttribute("class", "form-control is-valid");
      } else if (!val) {
        this.setAttribute("class", "form-control");
      } else {
        this.setAttribute("class", "form-control is-invalid");
      }
    });
}
function validEmail() {
  document.querySelector("#email").addEventListener("input", function () {
    let val = this.value;

    let arrobase = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val);
    console.log(val);
    if (arrobase) {
      this.setAttribute("class", "form-control is-valid");
    } else if (!val) {
      this.setAttribute("class", "form-control");
    } else {
      this.setAttribute("class", "form-control is-invalid");
    }
  });
}
// function createStrong(strong,maj,min,num,sym,size) {
//     if(!strong&&maj && min && num && sym && size){
//         let fort;
//         fort = document.createElement("div");
//         fort.id = "fort";
//         fort.innerText = "Fort";
//         document.getElementById("forceMdp").appendChild(fort);
//         strong = true;
//     }else if(strong&& !maj || !min || !num || !sym || !size){
//         document.getElementById("forceMdp").removeChild(fort);
//         strong = false
//     }
// }
// function createMiddle(middle,maj,min,num,sym) {
//     if(!middle&&maj && min && num && sym){
//         let moyen;
//         moyen = document.createElement("div");
//         moyen.id = "moyen";
//         moyen.innerText = "Moyen";
//         document.getElementById("forceMdp").appendChild(moyen);
//         middle = true;
//     }else if(middle&& size &&(!maj || !min || !num || !sym)){
//         document.getElementById("forceMdp").removeChild(moyen);
//         middle = false
//     }
// }
function createWeak(pwd) {
    
        let moyen;
        moyen = document.createElement("div");
        moyen.id = "moyen";
        moyen.innerText = "Moyen";
        document.getElementById("forceMdp").appendChild(moyen);
        
        
    
}

function validPassword() {
   
  document.getElementById("mdp").addEventListener("input", function () {
    let pwd = document.querySelector("#mdp").value;
    

    let maj = checkMaj(pwd);
    let min = checkMin(pwd);
    let num = checkNumber(pwd);
    let sym = checkSymbole(pwd);
    let size = checkSize(pwd);
    if(maj&&min&&!document.getElementById("moyen")){
        createWeak(pwd)
    }else if (!maj || !min){
        if(document.getElementById("moyen")){
            document.getElementById("forceMdp").removeChild(moyen);
        }
    }
    
    
    
    
    if (maj && min && num && sym && size) {
      document
        .getElementById("mdp")
        .setAttribute("class", "form-control is-valid");
      
    } else if (!pwd) {
      document.getElementById("mdp").setAttribute("class", "form-control");
    } else {
      document
        .getElementById("mdp")
        .setAttribute("class", "form-control is-invalid");
    }
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
