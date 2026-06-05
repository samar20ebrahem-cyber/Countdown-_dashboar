const Days =document.getElementById('Days');
const Hours =document.getElementById('Hours');
const Minutes =document.getElementById('Minutes');
const Seconds =document.getElementById('Seconds');
const mSeconds =document.getElementById('mSeconds');

// this is a function date
function countdown(){
    let today = new Date();
    let university = new Date("September 1, 2027 , 00:00:00");
    let timeDifference = university - today;
    // الفكرة من جمناي 
    let d = Math.floor(timeDifference / (1000*24*60*60));
    let h = Math.floor(timeDifference %  (1000*24*60*60)/  (1000*60*60));
    let m = Math.floor(timeDifference % (1000*60*60)/ (1000*60));
    let s = Math.floor(timeDifference % (1000*60)/ 1000);
    let ms = Math.floor(timeDifference % 1000);
   
    Days.innerText = d ;
    Hours.innerText = h ;
    Minutes.innerText = m ;
    Seconds.innerText = s 
    mSeconds.innerText = ms;


}

setInterval(countdown,1);

















































