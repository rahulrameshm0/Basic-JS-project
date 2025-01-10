let second = 0
let interval = null
const timer = document.getElementById("time")


function padStart(value){
    return String(value).padStart(2, "0")
}

function setTimes(){
    const minute = Math.floor(second/60)
    const seconds = second % 60
    timer.innerHTML = `${padStart(minute)}:${padStart(seconds)}`;
}

function startTime(){
    second++;
    setTimes()
}

function startClock(){
    if (interval) stopClock()
    interval = setInterval(startTime,1000)
}

function stopClock(){
   clearInterval(interval)
}

function resetClock(){
    stopClock()
    second = 0;
    setTimes()
}