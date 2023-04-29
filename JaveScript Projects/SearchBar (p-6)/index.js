const searchicon = document.querySelector(".searchicon");
const searchcontainer = document.querySelector(".searchcontainer");
searchicon.addEventListener("click",()=>{
    searchcontainer.classList.toggle("active");
})