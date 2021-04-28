//Card options
cardss = [
    {
        name: "Jorja Smith",
        img: 'images/Jorja-Smith.jpg'
    },
    {
        name: "Meagan Good",
        img: 'images/Meagan-Good.jpg'
    },

    {
        name: "Maryam Nemazee",
        img: 'images/Maryam-Nemazee.jpg'
    },
    {
        name: "Taylor Swift",
        img: 'images/Taylor-Swift.jpg'
    },
    {
        name: "Maryam Nemazee",
        img: 'images/Maryam-Nemazee.jpg'
    },
    {
        name: "Jorja Smith",
        img: 'images/Jorja-Smith.jpg'
    },

    {
        name: "Meagan Good",
        img: 'images/Meagan-Good.jpg'
    },
    {
        name: "Taylor Swift",
        img: 'images/Taylor-Swift.jpg'
    },

    {
        name: "x.iz.x",
        img: 'images/x.iz.x.jpg'
    },
    {
        name: "Zendaya",
        img: 'images/Zendaya.jpg'
    },
    {
        name: "x.iz.x",
        img: 'images/x.iz.x.jpg'
    },
    {
        name: "Zendaya",
        img: 'images/Zendaya.jpg'
    }
]

cardss.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//Create Your Board
function createBoard(){
    for (let i = 0; i < cardss.length; i++){
        var card = document.createElement('img')
        // card.style.cssFloat = "right"
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//Check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
        alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardss.length/2){
        resultDisplay.textContent = 'Congratulations! You found all of them'
    }
}

//Flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardss[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardss[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }
}

createBoard()
