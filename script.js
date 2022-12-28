var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("second");

var clock = setInterval(clockTime, 1000);

function clockTime(){
    var timeNow = new Date();
    var hr = timeNow.getHours();
    var min = timeNow.getMinutes();
    var sec = timeNow.getSeconds();

    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }

    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
}
