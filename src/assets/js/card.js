/*
 * A playing card
 */
class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    if (this.rank === 'ace') {
      this.value = 11;
    } else if (this.rank === 'jack' || this.rank === 'queen' || this.rank === 'king') {
      this.value = 10;
    } else {
      this.value = parseInt(this.rank);
    };
  }

  updateHTML() {
    let playerCards = document.getElementById('player-cards');
    let card = document.createElement("div");
    card.classList.add('card');
    card.classList.add(`face-${this.rank}-of-${this.suit}`);
    playerCards.appendChild(card);
  }

  updateDealerHTML() {
    let dealerCards = document.getElementById('dealer-cards');
    let card = document.createElement("div");
    card.classList.add('card');
    card.classList.add(`face-${this.rank}-of-${this.suit}`);
    dealerCards.appendChild(card);

    let cardDown = document.createElement("div");
    cardDown.classList.add('card');
    cardDown.classList.add(`face-revers`);
    dealerCards.appendChild(cardDown);
  }

  updateDealerLater() {
    let dealerCards = document.getElementById('dealer-cards');
    let card = document.createElement("div");
    card.classList.add('card');
    card.classList.add(`face-${this.rank}-of-${this.suit}`);
    dealerCards.appendChild(card);
  }
} 

// let card1 = new Card(deck.cards[0]);