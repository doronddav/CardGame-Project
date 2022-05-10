let winner1 = document.querySelector(".winner1");
let winner2 = document.querySelector(".winner");
const btnPlayer1 = document.querySelector(".playP1");
const btnPlayer2 = document.querySelector(".playP2");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let scoreP1 = document.querySelector(".scoreP1");
let scoreP2 = document.querySelector(".scoreP2");
let newGame = document.querySelector(".btnNew");
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let noCardOnTableP1 = true;
let noCardOnTableP2 = true;
scoreP1.classList.remove("winner");
scoreP2.classList.remove("winner");

const btnPlay = document.querySelector(".play");
class Card {
  constructor(num, symbol) {
    this.num = num;
    this.symbol = symbol;
  }
}

let deck = [];
let deckP1 = [];
let deckP2 = [];
let tempDeck = [];
const symbole = ["spades", "clubs", "diamonds", "hearts"];
let player1Card = {};
let player2Card = {};

function addCardsToDeck() {
  let checkListCard = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  ];
  let counter = 0;
  while (deck.length !== 52) {
    let num = Math.trunc(Math.random() * 13) + 1;
    let symbol = Math.trunc(Math.random() * 4);
    if (checkListCard[symbol][num - 1] !== false) {
      deck.push(new Card(num, symbole[symbol]));
      checkListCard[symbol][num - 1] = false;
    }
    counter++;
  }

  console.log("Try numbers to build the deck:", counter);
}

const getRandomCardFromDeck = function (deckName) {
  let cardIndex = Math.trunc(Math.random() * deckName.length);
  let removed = deckName.splice(cardIndex, 1);

  return removed[0];
};

const getRandomCardFromDeckForPlayer1 = function () {
  if (deck.length != 0) {
    player1Card = getRandomCardFromDeck(deck);
  } else {
    player1Card = getRandomCardFromDeck(deckP1);
  }
  card1.style.display = "block";
  card1.src = `/photos/${player1Card.num}-${player1Card.symbol}.png`;
  card1.atl = `${player1Card.num}-${player1Card.symbol}`;

  noCardOnTableP1 = false;
};

const getRandomCardFromDeckForPlayer2 = function () {
  if (deck.length != 0) {
    player2Card = getRandomCardFromDeck(deck);
  } else {
    player2Card = getRandomCardFromDeck(deckP2);
  }
  card2.style.display = "block";
  card2.src = `/photos/${player2Card.num}-${player2Card.symbol}.png`;
  card2.atl = `${player2Card.num}-${player2Card.symbol}`;

  noCardOnTableP2 = false;
};

const clearTable = function () {
  card1.style.display = "none";
  card2.style.display = "none";
  scoreP1.classList.remove("winner");
  scoreP2.classList.remove("winner");
};

const battle = function () {
  if (player1Card.num > player2Card.num) {
    if (tempDeck.length == 0) {
      deckP1.push(player1Card);
      deckP1.push(player2Card);
    } else {
      for (let i = 0; i < tempDeck.length; i++) {
        deckP1.push(tempDeck[i]);
      }
    }
    console.log("deck pleyer 1:", deckP1);
    scoreP1.classList.add("winner");
    scoreP2.classList.remove("winner");
  } else if (player2Card.num > player1Card.num) {
    if (tempDeck.length == 0) {
      deckP2.push(player1Card);
      deckP2.push(player2Card);
    } else {
      for (let i = 0; i < tempDeck.length; i++) {
        deckP2.push(tempDeck[i]);
      }
    }

    scoreP2.classList.add("winner");
    scoreP1.classList.remove("winner");
    console.log("deck pleyer 2:", deckP2);
  } else {
    console.log("deck pleyer 1:", deckP1);
    console.log("deck pleyer 2:", deckP2);
    tieBattle();
  }
  noCardOnTableP1 = true;
  noCardOnTableP2 = true;
  scoreP1.textContent = `${deckP1.length}`;
  scoreP2.textContent = `${deckP2.length}`;

  setTimeout(clearTable, 1000);
  winner();
};

const tieBattle = function () {
  console.log("card player 1:", player1Card);
  console.log("card player 2:", player2Card);
  tempDeck.push(player1Card, player2Card);
  for (let i = 0; i < 3; i++) {
    winner();
    getRandomCardFromDeckForPlayer1();
    getRandomCardFromDeckForPlayer2();
    tempDeck.push(player1Card, player2Card);
  }

  battle();
  tempDeck = [];
};

const winner = function () {
  if (deckP1.length === 52) {
    winner1.textContent = "WINNER";
  } else if (deckP1.length === 52) {
    winner2.textContent = "WINNER";
  }
};

addCardsToDeck();
btnPlayer1.addEventListener("click", () => {
  console.log("abv");
  if (noCardOnTableP1 == true) getRandomCardFromDeckForPlayer1();
  if (noCardOnTableP1 == false && noCardOnTableP2 == false) battle();
  console.log(player1Card);
});

btnPlayer2.addEventListener("click", () => {
  if (noCardOnTableP2 == true) getRandomCardFromDeckForPlayer2();
  if (noCardOnTableP1 == false && noCardOnTableP2 == false) battle();
});

newGame.addEventListener("click", () => {
  clearTable();
  deckP1 = [];
  deckP2 = [];
  deck = [];
  noCardOnTableP1 = true;
  noCardOnTableP2 = true;
  addCardsToDeck();
  scoreP1.textContent = `${deckP1.length}`;
  scoreP2.textContent = `${deckP2.length}`;
});
