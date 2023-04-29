const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".inputtask");
const ulEl = document.querySelector(".unorderlisting");
let itemslist = JSON.parse(localStorage.getItem("list"));
console.log(itemslist);
itemslist.forEach((task)=>{
    toDOList(task);
})
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
   
    toDOList();
})

 function toDOList(task){
     let newtask = inputEl.value;
     if(task){
         newtask=task.name;
     }
     
     const liEl=document.createElement("li");
     liEl.innerText=newtask;
     ulEl.appendChild(liEl);
     
     inputEl.value="";
     const checkEl = document.createElement("i");
     checkEl.className = "fa-solid fa-square-check";
     if(task && task.ischecked){
         liEl.classList.add("hide");
         checkEl.classList.add("hide");
     }
    //  checkEl.innerHTML =`<i class="fa-solid fa-square-check">`;
     
     const trashEl = document.createElement("i");
     trashEl.className ="fa-solid fa-trash";

    //  trashEl.innerHTML =`<i class="fa-solid fa-trash">`;
     liEl.appendChild(checkEl);
     liEl.appendChild(trashEl); 
     
     updatestorage();
     checkEl.addEventListener("click", (event) => {
         liEl.classList.toggle("hide");
         checkEl.classList.toggle("hide");
         updatestorage();
     });
     trashEl.addEventListener("click",(event)=>{
         liEl.remove();
         updatestorage();
     })
}
function updatestorage(){
const listitems=document.querySelectorAll("li");
 itemslist=[];
    listitems.forEach((item)=>{
        itemslist.push({
            name: item.innerText,
            ischecked: item.classList.contains("hide"),
        });
    });
    localStorage.setItem("list", JSON.stringify(itemslist))
    
}

