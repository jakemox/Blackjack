class Hand {
    constructor (name) { 
        this.name = name;
        this.hand = [];
        this.total = 0;
        this.state = 0;
        this.score = document.getElementById(`${this.name}-score`);
    }

    reset() {
        this.hand = [];
        this.total = 0;
        this.state = 0;
    }

    updateHTML() {
        let element = document.getElementById(`${this.name}-hand`);
        let elmCard = element.querySelector('.cards');
        elmCard.innerHTML = '';
        this.hand.forEach(item => {
            elmCard.innerHTML += item.createHTML();
        });
    }
    
    cardDownHTML() {
        let cards = document.getElementById(`${this.name}-cards`);
        cards.innerHTML += `<div class="card face-revers"></div>`;
    }

    hit() {
        if (this.total > 21) {
            this.state = 'BUST';
        } else if (this.total === 21) {
            this.state = '21';
        }
    }
    
}
