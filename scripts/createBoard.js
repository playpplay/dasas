import {createCard, createIconsArray} from "./cards.js"
import {startTimer} from "./timer.js";

export function createBoard(columns) {
    const template = document.querySelector("#gameTableTemplate")
    const gameTable = template.querySelector('.table');
    console.log(template)
 
 
 
    gameTable.style = `
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${columns}, 1fr);
    `;
    gameBoard.append(gameTable)
    restartButton.append(gameRestartBtn)
 
    let icons = createIconsArray(count)
    icons.forEach((icon) => {
       gameTable.append(createCard(icon))
    })
 }