const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

function showTime(){   
    const next=new Date("Jan 1,2024 12:00:00").getTime();
    let now=new Date().getTime();
    let countdown=next-now;
    let d=Math.floor(countdown/(1000*3600*24));
    let h=Math.floor((countdown%(1000*3600*24))/(1000*3600));
    let m=Math.floor((countdown%(1000*3600))/(1000*60));
    let s=Math.floor((countdown%(1000*60))/(1000));
    const year=new Date();
    let yr=year.getFullYear()+1;
    if(h>12){
        h-=12;
    }
    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    minutes.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;
    const years=document.querySelector("#year");
    years.innerHTML=yr;
}

setInterval(function(){
    showTime();
},1000);