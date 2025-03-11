const timefield = document.getElementById('timefield')
const Count_Down_btn = document.getElementById('Count-Down-btn')
const show_time = document.getElementById('show-time')
const pause = document.getElementById('pause_btn')
const resume = document.getElementById('resume_btn')
let timer;
let seconds;


function countdown(){
     seconds = parseInt(timefield.value)
    // console.log(seconds);
    if(seconds===NaN){
        show_time.innerText = `This is invalid`
        return
    }
    if(seconds < 0){
        show_time.innerText = `This is invalid`
        return
    }
         timer = setInterval(function(){
        seconds--
        show_time.innerText = `Time remaining is ${seconds}`
        if(seconds <= 0){
            clearInterval(timer)
            show_time.innerText = `Time up!`
        }
    },1 * 1000)
    
}
function pausetimer(){
    clearInterval(timer)
}
function resumetimer(){
    timer = setInterval(function(){
        seconds--
        show_time.innerText = `Time remaining is ${seconds}`
        if(seconds <= 0){
            clearInterval(timer)
            show_time.innerText = `Time up!`
        }
    },1 * 1000)
}


Count_Down_btn.addEventListener('click',countdown);
pause.addEventListener('click',pausetimer);
resume.addEventListener('click',resumetimer)