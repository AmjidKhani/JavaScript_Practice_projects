let num=0;
const value = document.querySelector(".value");
const btn=document.querySelectorAll(".btn");
btn.forEach((btns)=>{
btns.addEventListener("click",(event)=>{
const style=event.currentTarget.classList;
    if (style.contains("minus"))
{
num--;

}
    else if (style.contains("plus") ){
num++;
}
else{
    num=0;
}
    value.textContent = num;
    if (num <0){
        value.style.color="red";

    }
    else if (num > 0)
    {
value.style.color="green";

    }
    else{
        value.style.color="black";
    }
});
});