// const Days =document.getElementById('Days');
// const Hours =document.getElementById('Hours');
// const Minutes =document.getElementById('Minutes');
// const Seconds =document.getElementById('Seconds');
// const mSeconds =document.getElementById('mSeconds');

// // this is a function date
// function countdown(){
//     let today = new Date();
//     let university = new Date("September 1, 2027 , 00:00:00");
//     let timeDifference = university - today;
//     // الفكرة من جمناي 
//     let d = Math.floor(timeDifference / (1000*24*60*60));
//     let h = Math.floor(timeDifference %  (1000*24*60*60)/  (1000*60*60));
//     let m = Math.floor(timeDifference % (1000*60*60)/ (1000*60));
//     let s = Math.floor(timeDifference % (1000*60)/ 1000);
//     let ms = Math.floor(timeDifference % 1000);
   
//     Days.innerText = d ;
//     Hours.innerText = h ;
//     Minutes.innerText = m ;
//     Seconds.innerText = s 
//     mSeconds.innerText = ms;


// }

// setInterval(countdown,1);


















































const Days = document.getElementById('Days');
const Hours = document.getElementById('Hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');
const mSeconds = document.getElementById('mSeconds');

// استدعاء عناصر المدخلات والرسالة الجديدة
const userDateInput = document.getElementById('userDate');
const countdownMessage = document.getElementById('countdownMessage');

let targetDate = null; // هنشيل فيه التاريخ اللي المستخدم هيختاره
let timerInterval = null; // هنشيل فيه العداد عشان نتحكم في إيقافه وتشغيله

// أول ما المستخدم يغير التاريخ في الـ Input، الدالة دي بتشتغل
userDateInput.addEventListener('change', function() {
    // تحويل القيمة التي اختارها المستخدم لتاريخ يفهمه الجافا سكريبت
    targetDate = new Date(userDateInput.value);
    
    // تحديث نص الرسالة تحت العنوان فوراً
    countdownMessage.innerText = `فاضلك على مناسبتك المحددة وقت كذا:`;

    // لو كان فيه عداد قديم شغال، بنوقفه عشان ميتداخلش مع العداد الجديد
    clearInterval(timerInterval);

    // تشغيل العداد الجديد
    timerInterval = setInterval(countdown, 1);
});

function countdown(){
    // لو المستخدم لسه مإختارش تاريخ، متعملش حاجة واخرج من الدالة
    if (!targetDate) return; 

    let today = new Date();
    let timeDifference = targetDate - today;

    // لو الوقت خلص أو التاريخ في الماضي
    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        countdownMessage.innerText = "وصلت بالسلامة! انتهى الوقت.";
        Days.innerText = "00";
        Hours.innerText = "00";
        Minutes.innerText = "00";
        Seconds.innerText = "00";
        mSeconds.innerText = "000";
        return;
    }

    // الحسبية الرياضية الذكية بتاعتك (بدون تغيير)
    let d = Math.floor(timeDifference / (1000*24*60*60));
    let h = Math.floor((timeDifference % (1000*24*60*60)) / (1000*60*60));
    let m = Math.floor((timeDifference % (1000*60*60)) / (1000*60));
    let s = Math.floor((timeDifference % (1000*60)) / 1000);
    let ms = Math.floor(timeDifference % 1000);
   
    // طباعة أرقام صافية (النقطتين الفاصلتين يفضل عملهم في الـ HTML/CSS لشكل أفضل)
    Days.innerText = d;
    Hours.innerText = h;
    Minutes.innerText = m;
    Seconds.innerText = s;
    mSeconds.innerText = ms;
}