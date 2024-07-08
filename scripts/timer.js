import { totalFlips, gameLogic } from "./gameLogic.js"
export let totalTime = 0
let intervalId = 60
export function startTimer() {
    let time = document.querySelector(".state__time")
    let flips = document.querySelector(".state__moves")
    intervalId = setInterval(() => {time-- }, 1000) 
    if (time === 0) {clearInterval(intervalId)}
    }



export function stopTimer() {
    ///
    }
