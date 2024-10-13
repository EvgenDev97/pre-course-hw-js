// code
let timerId

const startButton = document.getElementById("start")
startButton.addEventListener("click", () => {
    timerId = setInterval(updateClock, 1000)
})

const stopButton = document.getElementById("stop")
stopButton.addEventListener("click", ()=>{
    clearInterval(timerId)
})

function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}