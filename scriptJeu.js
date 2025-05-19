let animalDeck = [
  "images/animaux/1.jpg",
  "images/animaux/2.jpg",
  "images/animaux/3.jpg",
  "images/animaux/4.jpg",
  "images/animaux/5.jpg",
  "images/animaux/6.jpg",
  "images/animaux/7.jpg",
  "images/animaux/8.jpg",
  "images/animaux/9.jpg",
  "images/animaux/10.jpg",
  "images/animaux/1.jpg",
  "images/animaux/2.jpg",
  "images/animaux/3.jpg",
  "images/animaux/4.jpg",
  "images/animaux/5.jpg",
  "images/animaux/6.jpg",
  "images/animaux/7.jpg",
  "images/animaux/8.jpg",
  "images/animaux/9.jpg",
  "images/animaux/10.jpg",
];
let cardNumber = [
  "card1",
  "card2",
  "card3",
  "card4",
  "card5",
  "card6",
  "card7",
  "card8",
  "card9",
  "card10",
  "card11",
  "card12",
  "card13",
  "card14",
  "card15",
  "card16",
  "card17",
  "card18",
  "card19",
  "card20",
];

let cardPlayed;
let numberOfCardPlayed = 0;

shuffleDeck(animalDeck);

cardFaceup(cardNumber, animalDeck);

function cardFaceup(cardNumberTab, DeckcardTab) {
    console.log(cardNumberTab.length);
    
  for (let i = 0; i < cardNumberTab.length; i++) {
    document
      .getElementById(cardNumberTab[i])
      .addEventListener("click", function () {
        cardPlayed = DeckcardTab[i];
        numberOfCardPlayed = numberOfCardPlayed + 1;
        console.log(numberOfCardPlayed);

        console.log(cardPlayed);

        if (
          document.getElementById(cardNumberTab[i]).alt === "riceplant" &&
          numberOfCardPlayed <= 2
        ) {
          document.getElementById(cardNumberTab[i]).alt = "animal";
          document.getElementById(cardNumberTab[i]).src = DeckcardTab[i];
          sessionStorage.setItem("card" + numberOfCardPlayed, cardPlayed);
          sessionStorage.setItem(
            "idCard" + numberOfCardPlayed,
            cardNumberTab[i]
          );
          
        } 
        if (
          sessionStorage.getItem("card1") !== sessionStorage.getItem("card2")&&numberOfCardPlayed==2
        ) {
            setTimeout(() => {
                document.getElementById(sessionStorage.getItem("idCard1")).alt =
            "riceplant";
          document.getElementById(sessionStorage.getItem("idCard1")).src =
            "images/rice-plant-publicdomain.jpg";

          document.getElementById(sessionStorage.getItem("idCard2")).alt =
            "riceplant";
          document.getElementById(sessionStorage.getItem("idCard2")).src =
            "images/rice-plant-publicdomain.jpg";
          numberOfCardPlayed = 0;
          sessionStorage.clear;
            }, 1000);
          
        } else if (
          sessionStorage.getItem("card1") === sessionStorage.getItem("card2") &&
          numberOfCardPlayed == 2
        ) {
          numberOfCardPlayed = 0;
          sessionStorage.clear;
        }
      });
  }
}

function shuffleDeck(animalDeck) {
  for (let i = 0; i < animalDeck.length; i++) {
    let newIndex;
    let tmp;
    newIndex = Math.floor(Math.random() * animalDeck.length);
    tmp = animalDeck[i];
    animalDeck[i] = animalDeck[newIndex];
    animalDeck[newIndex] = tmp;
  }
  return animalDeck;
}
