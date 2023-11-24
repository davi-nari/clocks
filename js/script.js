function myImg() {
    let elem = document.getElementById('img_1'); // получаем элемент по ID
    let style = getComputedStyle(elem); // получаем его стили
    if (style.display === 'none') {
      document.getElementById('img_1').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('img_1').style.display='none';
    }
  }


const hour        = document.querySelector('.h'),
      min         = document.querySelector('.m'),
      sec         = document.querySelector('.s'),
      hoursNum    = document.querySelector('.hour'),
      minutesNum  = document.querySelector('.minutes')
      secondsNum  = document.querySelector('.seconds')
function clock() {
    let time     = new Date(),
        seconds  = time.getSeconds() * 6,
        minutes  = time.getMinutes() * 6,
        hours    = time.getHours() * 30
        
    sec.style.transform = `rotate(${seconds}deg)` 
    min.style.transform = `rotate(${minutes}deg)` 
    hour.style.transform = `rotate(${hour}deg)`
    
    hoursNum.innerHTML     = time.getHours()   < 10 ? '0' + time.getHours()   : time.getHours()
    minutesNum.innerHTML   = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    secondsNum.innerHTML   = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    
    setTimeout(() => clock(), 1000);
}

clock()

const links = document.querySelectorAll('.tabsItem'),
      tabs  = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        tab(this, tabs[i])
    })
}

function tab(el, arr){
    el.classList.add('active')
    arr.classList.add('active')
}

const watchBtn = document.querySelector('.stopwatch__btn'),
      secWatch = document.querySelector('.stopwatch__seconds'),
      minWatch = document.querySelector('.stopwatch__minutes'),
      hourWatch = document.querySelector('.stopwatch__hours'),
      hourWat = document.querySelector('hours')

watchBtn.addEventListener('click', function (){
    if(this.innerHTML === 'start'){
        this.innerHTML = 'stop'
        /* secInfo.classList.add('active') */
        let second = 0
        setTimeout(() => stopWatch(this, second), 0)
    } else if(this.innerHTML === 'stop'){
        this.innerHTML = 'clear'
    } else{
        this.innerHTML = 'start'
        secWatch.innerHTML = minWatch.innerHTML = hourWatch.innerHTML = 0
    }
})

function stopWatch(btn, second){
    if(btn.innerHTML === 'stop'){
        if(second === 99){
            second = 0
            secWatch.innerHTML = second
            if(minWatch.innerHTML == 59){
                minWatch.innerHTML = 0
                hourWatch.innerHTML++
                if(hourWatch.innerHTML == 59){
                    hourWatch.innerHTML = 0
                    hourWat.innerHTML++
                } else{
                    hourWatch.innerHTML++
                }
            } else{
                minWatch.innerHTML++
            }
        } else{
            second++
            secWatch.innerHTML = second
        }
        setTimeout(() => stopWatch(btn, second), 10)
    }
}