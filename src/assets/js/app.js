// let card1 = new C
let bet;
let hand = [];
let dealerHand = [];
let total = 0;
let dealerTotal = 0;

// 

document.addEventListener('DOMContentLoaded', () => {
  let betBtn = document.getElementById('submit');
  let betClass = document.getElementById('bet');
  betBtn.addEventListener('click', function() {
    betValue = document.getElementById('betvalue');
    bet = betValue.value;
    betClass.style.display = 'none';
    betValue.style.display = 'none';
  })
  new Game().mount();
 

  //   if (total > 21) {
  //     winLose.innerHTML = ('You lose');
  //   } else if (total === 21) {
  //     winLose.innerHTML = ('You win $' + bet * 2);
  //   }
});