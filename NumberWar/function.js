const player1 = [
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
];

const player2 = [
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
];

function chooseCard(cards, cardNumber) {
    return cards[cardNumber - 1];
}

function whoWins(player1Card, player2Card) {
    if (player1Card > player2Card) {
        return 'player1';
    }
    else if (player2Card > player1Card) {
        return 'player2';
    }
    else if (player2Card === player1Card) {
        return 'tie';
    }
}

const cardChosenByPlayer1 = chooseCard(player1, 1);
const cardChosenByPlayer2 = chooseCard(player1, 2);

console.log(whoWins(cardChosenByPlayer1, cardChosenByPlayer2));