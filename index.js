import { createBoard } from "./createBoard.js";
import { generateConfetti } from "./scripts/confetti.js";
generateConfetti()
const gameBoard = document.querySelector(".board")
const button = document.querySelector(".board__button")
const input = document.querySelector('.board__input')
const restartButton = document.querySelector(".table__button")


let count = ""




let totalTime = 0


button.addEventListener("click", () => {
   let columns = input.value


   if (columns === 2) {
      count = 2 * 2;
   } else if (columns === 4) {
      count = 4 * 4;
   } else if (columns === 6) {
      count = 6 * 6;
   } else {
      columns = 4;
      count = 4 * 4;
   }

   createBoard(count)
})


function restart() {
   restartButton.addEventListener("click", () => {
      location.reload()
   })
}

for (let i = 0; i < count; i++) {
   gameTable.append(createCard());
}