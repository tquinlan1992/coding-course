class Player {
    constructor(cards) {
        this.cards = cards;
    }

    chooseCard(cardNumber) {
        return this.cards[cardNumber - 1];
    }
}

const player1 = new Player([
    4,
    8,
    3,
    2,
    10,
    6,
    9,
    1,
    5,
    7
]);

const player2 = new Player([
    3,
    7,
    2,
    1,
    9,
    5,
    8,
    10,
    4,
    6
])

class Manager {
    constructor() {
        this.player1 = player1;
        this.player2 = player2;
        this.player1Wins = 0;
        this.player2Wins = 0;
    }

    choosePlayer1Card(cardNumber) {
        return this.player1.chooseCard(cardNumber)
    }

    choosePlayer2Card(cardNumber) {
        return this.player2.chooseCard(cardNumber);
    }

    getNumberOfWinsForPlayer1() {
        return this.player1Wins;
    }

    getNumberOfWinsForPlayer2() {
        return this.player2Wins;
    }

    whoWins(cardNumber) {
        const player1Card = this.player1.chooseCard(cardNumber);
        const player2Card = this.player2.chooseCard(cardNumber);
        if (player1Card > player2Card) {
            this.player1Wins = this.player1Wins + 1;
            return 'player1';
        }
        else if (player2Card > player1Card) {
            this.player2Wins = this.player2Wins + 1;
            return 'player2';
        }
        else if (player2Card === player1Card) {
            return 'tie';
        }
    }
}

const manager = new Manager();

manager.whoWins(1);
manager.whoWins(2);
manager.whoWins(3);
manager.whoWins(4);
manager.whoWins(5);
manager.whoWins(6);
manager.whoWins(7);
manager.whoWins(8);
manager.whoWins(9);
manager.whoWins(10);

console.log('player1 wins', manager.getNumberOfWinsForPlayer1());
console.log('player2 wins', manager.getNumberOfWinsForPlayer2());