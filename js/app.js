const images = [{
    name: 'Cat',
    img: '<img src="image/Cat.png" alt="">'
},
{
    name: 'Dolphin',
    img: '<img src="image/Dolphin.png" alt="">'
},
{
    name: 'Elephant',
    img: '<img src="image/Elephant.png" alt="">'
},
{
    name: 'Ladybug',
    img: '<img src="image/Ladybug.png" alt="">'
},
{
    name: 'Cat',
    img: '<img src="image/Cat.png" alt="">'
},
{
    name: 'Dolphin',
    img: '<img src="image/Dolphin.png" alt="">'
},
{
    name: 'Elephant',
    img: '<img src="image/Elephant.png" alt="">'
},
{
    name: 'Ladybug',
    img: '<img src="image/Ladybug.png" alt="">'
}
]

images.sort(() => 0.5 - Math.random())

//define variables ...
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
let count = 0
//create your board
function createBoard() {
    for (let i = 0; i < images.length; i++) {
        let y = i + 1
        let name = 'flip' + y;
        let name1 = '.flip-card' + y;
        let imgname = 'img' + y
        //card flip
        let card = document.createElement('div')
        card.setAttribute('class', name)
        card.setAttribute('id', name)
        card.setAttribute('data-id', i)
        //img flip
        let imgCard = document.createElement('div')
        imgCard.setAttribute('class', imgname)
        imgCard.setAttribute('id', imgname)
        // console.log(imgCard)
        //appending ..
        document.querySelector(name1).appendChild(card)
        document.querySelector(name1).appendChild(imgCard)
        card.addEventListener('click', FlipCard)
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    let y = parseInt(cardsChosenId[0]) + 1
    let y2 = parseInt(cardsChosenId[1]) + 1
    let nameOne = 'flip' + y;
    let nameTwo = 'flip' + y2;
    let imgOne = 'img' + y;
    let imgTwo = 'img' + y2;
    if (optionOneId == optionTwoId) {
        document.getElementById(imgOne).style.transform = 'rotateY(-180deg)'
        document.getElementById(nameOne).style.transform = 'rotateY(0)'
        document.getElementById(imgTwo).style.transform = 'rotateY(-180deg)'
        document.getElementById(nameTwo).style.transform = 'rotateY(0)'
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
        document.getElementById(imgOne).style.transform = 'rotateY(0)'
        document.getElementById(nameOne).style.transform = 'rotateY(-180deg)'
        document.getElementById(imgTwo).style.transform = 'rotateY(0)'
        document.getElementById(nameTwo).style.transform = 'rotateY(-180deg)'
        count++
    } else {
        document.getElementById(imgOne).style.transform = 'rotateY(-180deg)'
        document.getElementById(nameOne).style.transform = 'rotateY(0)'
        document.getElementById(imgTwo).style.transform = 'rotateY(-180deg)'
        document.getElementById(nameTwo).style.transform = 'rotateY(0)'
    }
    if (count == 4) {
        swal({
            title: "Congratulations",
            text: "You found all the pictures",
            icon: "success"
        })
    }
    cardsChosen = []
    cardsChosenId = []
}

function FlipCard() {
    let cardId = this.getAttribute('data-id')
    let y = cardId
    y++
    let name = 'flip' + y
    let imgname = 'img' + y
    document.getElementById(imgname).innerHTML = images[cardId].img
    console.log(images[cardId].name)
    document.getElementById(name).style.transform = 'rotateY(-180deg)'
    document.getElementById(imgname).style.transform = 'rotateY(0)'
    cardsChosen.push(images[cardId].name)
    cardsChosenId.push(cardId)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 700)
    }
}
function Start(e) {
    e.preventDefault()
    count = 0
    images.sort(() => 0.5 - Math.random())
    for (let i = 0; i < images.length; i++) {
        let y = i + 1
        let name = 'flip' + y
        let imgname = 'img' + y
        document.getElementById(name).style.transform = 'rotateY(0)'
        document.getElementById(imgname).style.transform = 'rotateY(-180deg)'
    }
}
createBoard()
