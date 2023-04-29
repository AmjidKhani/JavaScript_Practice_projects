const fb = document.querySelector(".facebook");
const option = document.querySelector(".options");
const menu = document.querySelector(".menu");
const replacetext = document.querySelector(".menu h5");
const iconssrotate = document.querySelector(".iconss");
const social = document.querySelectorAll(".social");

menu.addEventListener("click", () => {

    option.classList.toggle("hide");
    iconssrotate.classList.toggle("rotate");
});

    social.forEach((singlesocial)=>{
        singlesocial.addEventListener("click", () => {
            replacetext.innerHTML = singlesocial.innerHTML;
        iconssrotate.classList.toggle("rotate");
        option.classList.add("hide");
    });
 
   
});