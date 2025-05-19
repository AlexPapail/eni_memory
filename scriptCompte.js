pictureGameDisplay();
fillFilelds();

function createPicture(gamePhoto) {
  gamePhoto.id = "Picture";
  document.getElementById("gamePicture").appendChild(gamePhoto);
}
console.log(gamePictureMap.get("legume"));

function pictureGameDisplay() {
  let gameSelect = document.getElementById("gameSelect");
  let gamePhoto = document.createElement("img");
  let gamePictureMap = new Map([
    ["legumes", "images/memory_detail_legumes.png"],
    ["dino", "images/memory_detail_dinosaures.png"],
    ["animaux", "images/memory_detail_animaux_domestiques.png"],
  ]);

  gameSelect.addEventListener("change", function () {
    if (this.value !== "any") {
      createPicture(gamePhoto);
      gamePhoto.src = gamePictureMap.get(this.value);
      
    } else {
      document
        .getElementById("gamePicture")
        .removeChild(document.getElementById("Picture"));
        
    }
  });
  
}


function fillFilelds() {
  if (sessionStorage.getItem("name")) {
    document.getElementById("staticName").value =
      sessionStorage.getItem("name");
  } else {
    document.getElementById("staticName").value = " - ";
  }
  if (sessionStorage.getItem("email")) {
    document.getElementById("staticEmail").value =
      sessionStorage.getItem("email");
  } else {
    document.getElementById("staticEmail").value = " - ";
  }
}
