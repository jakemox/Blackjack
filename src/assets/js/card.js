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

  createHTML() {
    let face = `${this.rank}-of-${this.suit}`;
    return `<div class="card face-${face}"></div>`;
  }
} 
