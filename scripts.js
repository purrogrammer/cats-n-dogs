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




    
}