import ArrayOfColors from "./source.js";

const refs = {
    bodyRef: document.querySelector('.js-body'),
    startButtonRef: document.querySelector('.js-startBtn'),
    stopButtonRef: document.querySelector('.js-stopBtn'),
    inputRef: document.querySelector('.js-input')
};

const interval ={
    ID: null,
    onStartSwitchColor() {
        if(this.ID){
            this.onStopSwitchColor();
        };
        currentID = setInterval(() => {
            console.log('switch')
            let sum = ArrayOfColors[randomIntegerFromInterval(0,ArrayOfColors.length-1)];
            refs.bodyRef.style.backgroundColor = sum;
        }, value((Number(refs.inputRef.value) * 1000)));
        return this.ID = currentID;
    },
    onStopSwitchColor() {
        clearInterval(this.ID);
        this.ID = null;
    }
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

function value(seconds) {
    if(seconds){
        return seconds
    };
    return 1000;
};

function onInput () {

    refs.inputRef.nextElementSibling.innerHTML = `Введено секунд: ${refs.inputRef.value} нажмите Start для начала`;
}


refs.inputRef.addEventListener('input', onInput)
refs.startButtonRef.addEventListener('click', interval.onStartSwitchColor.bind(interval));
refs.stopButtonRef.addEventListener('click', interval.onStopSwitchColor.bind(interval));
