let second = 0
let interval = null
const timer = document.getElementById("time")

function setTimes(){
    timer.innerHTML = second;
}

function startTime(){
    second++;
    setTimes()
}

function startClock(){
    interval = setInterval(startTime,1000)
}

function stopClock(){

}

function resetClock(){

}