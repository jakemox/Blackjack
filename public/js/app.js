// let card1 = new C
let bet;
let hand = [];
let dealerHand = [];
let total = 0;
let dealerTotal = 0;

// 

document.addEventListener('DOMContentLoaded', () => {
  // Create and shuffle a new deck of cards
  // bet = parseInt(prompt('How much do you wanna bet?'));
  let betBtn = document.getElementById('submit');
  let betClass = document.getElementById('bet');
  betBtn.addEventListener('click', function() {
    betValue = document.getElementById('betvalue');
    bet = betValue.value;
    betClass.style.display = 'none';
    betValue.style.display = 'none';
  })

  const deck = new Deck();
  const hitBtn = document.getElementById('hitman');
  const standBtn = document.getElementById('standbtn');
  let dealerCards = document.getElementById('dealer-cards');
  let winLose = document.getElementById('winlose');
  deck.shuffle();
  console.log(deck);
  
  dealerCards.innerHTML = '';
  let card = deck.deal();
  let dealerCard = deck.deal();
  dealerTotal += dealerCard.value;
  dealerHand.push(dealerCard);
  updateDealerHand();



  hitBtn.addEventListener('click', () => {
    let playerCards = document.getElementById('player-cards');
    playerCards.innerHTML = '';
    let card = deck.deal();
    hand.push(card);
    updatePlayerHand();
    total += card.value;
    console.log(hand);

    if (total > 21) {
      winlose.innerHTML = ('You lose');
    } else if (total === 21) {
      winlose.innerHTML = ('You win $' + bet * 2);
    }

    let playerScore = document.getElementById('score');
    playerScore.innerHTML = 'Score: ' + total;
  }) 

  standBtn.addEventListener('click', () => {
    if (dealerTotal < 17) {
      dealerCards.innerHTML = '';
      let dealerCard = deck.deal();
      dealerHand.push(dealerCard);
      updateDealerLater();
      dealerTotal += dealerCard.value;
      let dealerScore = document.getElementById('dealerscore');
      dealerScore.innerHTML = 'Score: ' + dealerTotal;
    } else if (dealerTotal > 21) {
      winlose.innerHTML = ('You win $' + bet * 2);
    } else {
      if (21 - dealerTotal < 21 - total) {
        winlose.innerHTML = ('You lose');
      } else {
        winlose.innerHTML = ('You win $' + bet * 2);
      }
    }
  });
  
  function updatePlayerHand() {
    hand.forEach(item => {
      item.updateHTML(item);
    });
  }

    function updateDealerHand() {
      dealerHand.forEach(item => {
        item.updateDealerHTML(item);
      }); 
    }

    function updateDealerLater() {
      dealerHand.forEach(item => {
        item.updateDealerLater(item);
      }); 
    }

  
});