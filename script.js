let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsList = document.getElementById('lapsList');

function startStopwatch() {
    interval = setInterval(() => {
        milliseconds += 10;

        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');
        millisecondsDisplay.textContent = Math.floor(milliseconds / 10).toString().padStart(2, '0');
    }, 10);
}

function stopStopwatch() {
    clearInterval(interval);
}

function recordLap() {
    const lapTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${Math.floor(milliseconds / 10).toString().padStart(2, '0')}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}

startStopBtn.addEventListener('click', () => {
    if (startStopBtn.textContent === 'Start') {
        startStopwatch();
        startStopBtn.textContent = 'Stop';
    } else if (startStopBtn.textContent === 'Stop') {
        stopStopwatch();
        startStopBtn.textContent = 'Resume';
    } else {
        startStopwatch();
        startStopBtn.textContent = 'Stop';
    }
});

resetBtn.addEventListener('click', () => {
    stopStopwatch();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '00';
    startStopBtn.textContent = 'Start';
    lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
    if (interval) {
        recordLap();
    }
});
