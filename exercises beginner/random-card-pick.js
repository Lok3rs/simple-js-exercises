const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    suits = ['clubs', 'spades', 'hearts', 'diamonds'],
    Card = {};

function randomPick() {
    Card.value = values[Math.floor(Math.random() * values.length)];
    Card.suit = suits[Math.floor(Math.random() * suits.length)];
    return Card;
}

console.log(randomPick());