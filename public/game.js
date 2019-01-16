class Game {
    constructor() {
        this.deck = new Deck();
        this.deck.shuffle();
        this.state = 'new game';
        this.dealer = new Hand('dealer');
        this.player = new Hand('player');
    }

    mount() {
        this.dealBtn = document.getElementById('dealbtn');
        this.hitBtn = document.getElementById('hitman');
        this.standBtn = document.getElementById('standbtn');

        this.dealBtn.addEventListener('click', () => this.deal());
        this.hitBtn.addEventListener('click', () => this.playerHit());
        this.standBtn.addEventListener('click', () => this.dealerHit());
    }

    deal() {
        this.player.reset();
        this.dealer.reset();
        this.displayMessage('');
        this.dealerCards = document.getElementById('dealer-cards');
        this.dealerCards.innerHTML = '';
        this.playerHit();
        this.playerHit();
        this.dealerDeal();
        this.state = 'in play';
        this.disableButtons();
    }

    playerHit() {
        const card = this.deck.deal();
        this.player.hand.push(card);
        this.player.updateHTML();
        this.player.total += card.value;
        this.player.score.innerHTML = 'Score: ' + this.player.total;
        this.player.hit();

        if (this.player.state === 'BUST') {
            this.playerLoses();
        } else if (this.player.state === '21') {
            this.playerWins();
        }
        console.log(this.player.total);
    }

    dealerDeal() {
        const card = this.deck.deal();
        this.dealer.hand.push(card);
        this.dealer.updateHTML();
        this.dealer.cardDownHTML(); 
        this.dealer.total += card.value; 
        this.dealer.score.innerHTML = 'Score: ?';  
    }

    dealerHit() {
        this.state = 'dealer turn';
        const card = this.deck.deal();
        this.dealer.hand.push(card);
        this.dealer.updateHTML();
        this.dealer.total += card.value;
        this.dealer.score.innerHTML = 'Score: ' + this.dealer.total;  


        while (this.dealer.total < 17) {
            const card = this.deck.deal();
            this.dealer.hand.push(card);
            this.dealer.updateHTML();
            this.dealer.total += card.value;
        }

        if (this.dealer.total > 21) {
            this.playerWins();
          } else {
            if (21 - this.dealer.total <= 21 - this.player.total) {
                this.playerLoses();
            } else {
                this.playerWins();
            }
          }
        console.log(this.dealer.total);
    }

    displayMessage(msg) {
        this.winLose = document.getElementById('winlose');
        this.winLose.innerHTML = msg;
    }

    roundEnds(msg) {
        this.displayMessage(msg);
        this.state = 'new game';
        this.disableButtons();
    }

    // 'message' passes from playerLoses to roundEnds to displayMessage.

    playerLoses() {
        this.roundEnds('LOSER');
    }

    playerWins() {
        this.roundEnds('WINNER');
    }

    disableButtons() {
        if (this.state === 'bet') {
            this.dealBtn.disabled = true;
            this.hitBtn.disabled = true;
            this.standBtn.disabled = true;
            return;
        } 
        
        if (this.state === 'new game') {
            this.dealBtn.disabled = false;
            this.hitBtn.disabled = true;
            this.standBtn.disabled = true;
            return;
        } 
        
        this.dealBtn.disabled = true;
        if (this.player.state === '0') {
            this.hitBtn.disabled = false;
            this.standBtn.disabled = true;
            return;
        } else if (this.player.state === 'win' || this.player.state === 'lose') {
            this.hitBtn.disabled = true;
            this.standBtn.disabled = true;
        } else {
            this.hitBtn.disabled = false;
            this.standBtn.disabled = false;
        }
            
    }

    // updatePlayerHand() {
    //     this.hand.forEach(item => {
    //       item.updateHTML(item);
    //     });
    //   }

    // updateDealerHand() {
    //     this.dealerHand.forEach(item => {
    //       item.updateDealerHTML(item);
    //     }); 
    //   }

    // updateDealerLater() {
    //     this.dealerHand.forEach(item => {
    //       item.updateDealerLater(item);
    //     }); 
    // }
}