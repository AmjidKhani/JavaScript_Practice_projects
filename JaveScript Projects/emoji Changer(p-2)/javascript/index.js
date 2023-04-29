const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-regular");
const colorarray = ['red', 'orange','lightblue','lightgreen','green'];
updatestar(0);
stars.forEach((star ,index)=>{
star.addEventListener("click",()=>{
    console.log("clicked",index);
updatestar(index);
});
});
function updatestar(index){
    stars.forEach((star,idx)=>{
if(idx < index+1){
    star.classList.add("active");
    
}
else{
    star.classList.remove("active");
}
    });
    emojis.forEach((emoji)=>{
         emoji.style.transform=
         `translateX(-${index * 50 }px)`;
        emoji.style.color=colorarray[index];
     });

}