class AudioController {
    constructor() {
        this.flipSound = new Audio('Assets/sounds/flip.wav');
        this.matchSound = new Audio('Assets/sounds/match.wav');
        this.victorySound = new Audio('Assets/sounds/victory.wav');
        this.gameOverSound = new Audio('Assets/sounds/gameOver.wav');

    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.victorySound.play();
    }
    gameOver() {
        this.gameOverSound.play();
    }
}

class Match {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining')
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }

    startGame() {
        this.totalClicks=0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.shuffleCards(this.CardsArrray);
            this.countdown = this.startCountdown();
            this.busy = false;
         }, 500); 
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

    gameOver() {
        //code to go here
    }

    hideCards() {
        this.cardsArray.forEach(() => 
        //more to go here
    }

    flipCard(card) {
            //code to go here

    }

    checkIfCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
         this.cardMatch(card, this.cardToCheck);
        else
            this.cardNoMatch(card, this.cardToCheck);
        this.cardToCheck = null;             
    }
    cardMatch(card1, card2) {
        //something something leading to "victory" text & sound

    }

    cardNoMatch(card1, card2) {
        //something something "womp womp" sound and reset

    }

    shuffleCards() { 
    //Fisher-Yates loop to go here
    }