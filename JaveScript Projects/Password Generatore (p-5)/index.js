const genaerate = document.querySelector(".generat");
const inputEI = document.querySelector(".create_password");
const copy = document.querySelector(".fa-copy");
let successalertEI = document.querySelector(".success_alert");

genaerate.addEventListener("click",()=>{
   
generatepassword();
});

copy.addEventListener("click",()=>{
    copypassword();
    if (inputEI.value) {
        successalertEI.classList.remove("active");
        setTimeout(()=>{
            successalertEI.classList.add("active");
        },2000);
    }
});
function generatepassword(){
let password="";
const passwordlenght=14;
    const char="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let index = 0; index <passwordlenght; index++) {

        const randomNum=Math.floor(Math.random()* char.length);
       password += char.substring(randomNum,randomNum+1);
    
}
    inputEI.value = password;
    successalertEI.innerText = password + " Copied!";

}
function copypassword(){
    inputEI.select();
    inputEI.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEI.value);

}
 