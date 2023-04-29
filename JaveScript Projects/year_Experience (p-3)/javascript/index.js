const couters = document.querySelectorAll(".counter");
couters.forEach((counter)=>{

counter.innerText= "0";
updatecounter();


function updatecounter(){
    let currentNum = +counter.innerText;
    const dataCeil = counter.getAttribute("data-ceil");
    const increment = dataCeil/15;
    currentNum=Math.ceil(increment+currentNum);
    counter.innerText= currentNum;
    if (currentNum < dataCeil){
        setTimeout(
            updatecounter,40
        )
    }
    else
    {
      counter.innerText  = dataCeil;
    }
}

    console.log(couters);
});