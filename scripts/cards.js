import { gameLogic } from "./gameLogic.js"
export function createCard(flippedIcon) {
    const template = document.querySelector("#cardTemplate").cloneNode(true).content
    const card = template.querySelector(".card")
    card.querySelector("#flipped-icon")
    card.addEventListener("click", () => {
        gameLogic()
    })

    return card

}
export function createIconsArray(initialCount) {
    const cardsIcons = [
        "compass",
        "cloud",
        "play",
        "bolt",
        "stop",
        "cogs",
        "atom",
        "basketball-ball",
        "arrows", "angle-left",
        "bars",
        "file",
        "filter",
        "gear",
        "folder",
        "folder-open",
        "shield",
        "scissors",
        "pen-clip",
    ];

    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));

    let doubleCards = dublicateElements(cards)
    return shuffleArray(doubleCards)
}
function dublicateElements(array) {
    let newArr = []
    array.forEach((item) => {
        newArr.push(item, item)
    })
    return newArr
}


function shuffleArray(array) {

    let currentIndex = array.length;


    while (currentIndex !== 0) {



        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temp = array[currentIndex];

        array[currentIndex] = array[randomIndex];
        // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
        array[randomIndex] = temp;
    };

    // Возвращаем измененный массив
    return array;
}