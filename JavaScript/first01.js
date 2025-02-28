const bulbBtn = document.getElementById('btn')
const status = document.getElementById('status')
const bulb = document.getElementById('bulb')
const statusText = document.getElementById('status_ON_OFF');

const btnOn = 'https://i.postimg.cc/6QyTynzr/bulb-on.png'
const btnOff = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png'


bulbBtn.addEventListener('click', () => {
  if(bulb.src.includes('bulb-on.png')){
    bulb.src = btnOff;
    bulbBtn.textContent = 'Turn On'
    statusText.textContent = 'Off'
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    

  }else{
    bulb.src = btnOn;
    bulbBtn.textContent = 'Turn Off'
    statusText.textContent = 'On'
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
});


