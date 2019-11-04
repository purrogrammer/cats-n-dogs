const cards


// / class AudioController {
//     constructor() {
//         this.flipSound = new Audio('Assets/sounds/flip.wav');
//         this.matchSound = new Audio('Assets/sounds/match.wav');
//         this.victorySound = new Audio('Assets/sounds/victory.wav');
//         this.gameOverSound = new Audio('Assets/sounds/gameOver.wav');
//     }
//     flip() {
//         this.flipSound.play();
//     }
//     match() {
//         this.matchSound.play();
//     }
//     victory() {
//         this.victorySound.play();
//     }
//     gameOver() {
//         this.gameOverSound.play();
//     }
// }

class Match {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }

    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards(this.cardsArrray);
            this.countdown = this.startCountdown();
            this.busy = false;
            }, 500)
         this.hideCards();
         this.timer.innerText = this.timeRemaining;
         this.ticker.innerText = this.totalClicks; 
    }
    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver(); 
            }, 1000);
        }
     //clear scoreboard, trigger "game over" sound effect and unhide text
    gameOver() {
        clearInterval(this.countdown);
        this.audioController.gameOver(); 
        document.getElementById('game-over-text').classList.add('visible');
    }
    victory() {
        clearInterval(this.countdown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }
    hideCards() {
        this.cardsArray.forEach(card => {
        card.classList.remove('visible'); 
        card.classList.remove('matched');
        });
    }
   //trigger audio; add clicks to scoreboard; call checkIfCardMatdch function
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible'); 

            if(this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
              this.cardToCheck = card; 
            }
         }
     }
     checkForCardMatch(card){
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardNoMatch(card, this.cardToCheck);
        this.cardToCheck = null;
    }
     cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)
         this.victory(); 
    }
    cardNoMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    shuffleCards(cardsArray) {     //Fisher-Yates loop 
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardsArray[randIndex].style.order = i;
            cardsArray[i].style.order = randIndex;
        }
    }
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

    if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
    } else {
    ready();
    }
    // ready function to trigger text and start game
   function ready() { 
        let blurbs= Array.from(document.getElementsByClassName('intro-text'));
        let cards = Array.from(document.getElementsByClassName('card'));
        let game = new Match(100, cards);

        blurbs.forEach(blurb => {
            blurb.addEventListener('click', () => {
                blurb.classList.remove('visible');
                game.startGame();
            });
        });

        cards.forEach(card => {
            card.addEventListener('click', () => {
                game.flipCard(card);
            });
        });
    }