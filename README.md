# CardGame-Project
War card game for 2 players



## Description
The main goal of the game is to get all card from the second player.
the deck made by a fucntion
```function addCardsToDeck() {
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
```


when player win the buttle the cards pushing to his own deck untill he lose them.
evety
in the end of a battle(when two card was displayed the table will be clear of cards by ```setTimeout``` of sec
the card display by function that get random card for each player


 


## How to use the Project
this app can be open just on live-server
```live-server``` on terminal.

To play you can use the btn of "play Card" for each player  to use ArrowLeft on keybaord for player 1 and ArrowRight on keyboard for player 2
to start a new game you can use Escape btn or New Gmae btn on the table


