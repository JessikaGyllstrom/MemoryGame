const cardArray = [
    {
        name: 'bird', 
        img: 'images/bird.png'
    },
    {
        name: 'cat', 
        img: 'images/cat.png'
    },
    {
        name: 'pug', 
        img: 'images/pug.png'
    },
    {
        name: 'rabbit', 
        img: 'images/rabbit.png'
    },
    {
        name: 'sloth', 
        img: 'images/sloth.png'
    },
    {
        name: 'squirrel', 
        img: 'images/squirrel.png'
    },
    {
        name: 'bird', 
        img: 'images/bird.png'
    },
    {
        name: 'cat', 
        img: 'images/cat.png'
    },
    {
        name: 'pug', 
        img: 'images/pug.png'
    },
    {
        name: 'rabbit', 
        img: 'images/rabbit.png'
    },
    {
        name: 'sloth', 
        img: 'images/sloth.png'
    },
    {
        name: 'squirrel', 
        img: 'images/squirrel.png'
    },
]
cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
        console.log(card, i);
    }
}
createBoard();

function checkMatch () {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId) {
        alert('You found a match!');
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry! Try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Congratulations! You found them all!"
    }
}
function flipCard () {
    const cardId = this.getAttribute('data-id')
    cardArray[cardId].name;
    cardsChosen.push (cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500); 
    }
    console.log("clicked", cardId);
}
console.log(cardArray);