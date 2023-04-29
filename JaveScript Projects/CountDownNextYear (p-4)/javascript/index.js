const days = document.getElementById("day");
const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const secondes = document.getElementById("seconde");
const newyeartime=new Date("jan 1,2024").getTime("00:00:00");
updatedTime();
 function updatedTime(){

const now=new Date().getTime();
     const gap = newyeartime-now;
const seconde=1000;
     const minute=seconde * 60;
     const hour=minute * 60;
     const day= hour * 24;
   const d =Math.floor( (gap/day));
     const s=Math.floor( (gap%minute)/seconde);
     const m =Math.floor( (gap % hour) / minute);
     const h=Math.floor( (gap%day)/hour);

     days.innerText=d;
     hours.innerText=h;
     minutes.innerText=m;
     secondes.innerText=s;
     setTimeout(updatedTime,1000);

}
