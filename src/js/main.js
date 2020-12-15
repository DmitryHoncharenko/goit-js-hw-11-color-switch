const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
},
    colors = [
        '#FFFFFF',
        '#2196F3',
        '#4CAF50',
        '#FF9800',
        '#009688',
        '#795548',
    ],
  
    randomIntegerFromInterval = (min) => {
    return Math.floor(Math.random() * (min - 1));
    },
    // randomIntegerFromInterval = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // };

setRandomColor = () => {
    const _color = colors[randomIntegerFromInterval(colors.length)];
    console.log(_color);
    document.body.style.backgroundColor = _color;

};

let interval = undefined;

// refs.startBtn.addEventListener('click', () => interval = interval ?
//     interval :
//     setInterval(() => setRandomColor(), 1000));

// refs.stopBtn.addEventListener('click', () =>
//     clearInterval(interval) = clearInterval(interval) ? 
//         refs.startBtn.addEventListener('click', () => interval = interval ?
//     interval :
//     setInterval(() => setRandomColor(), 1000)));
  

refs.startBtn.addEventListener('click', () => interval = interval ? interval : setInterval(() => setRandomColor(), 1000));
refs.stopBtn.addEventListener('click', () => clearInterval(interval));
    


