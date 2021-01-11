const refs = {
    startBtn: document.querySelector('button[data-action="start"'),
    stopBtn: document.querySelector('button[data-action="stop"'),
  },
  colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],
  randomIntegerFromInterval = min => {
    return Math.floor(Math.random() * (min - 1));
  },
 
  setRandomColor = () => {
    const _color = colors[randomIntegerFromInterval(colors.length)];
    console.log(_color);
    document.body.style.backgroundColor = _color;
  };

let interval = null;

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  interval = interval || setInterval(() => setRandomColor(), 1000);

  refs.stopBtn.addEventListener('click', () => {
    refs.startBtn.disabled = false;
    clearInterval(interval);
    interval = null;
  });
});
