let isstatus = document.querySelector("h5");

let Btn = document.querySelector("#add");

let check = 0;

Btn.addEventListener('click', ()=>{
   if (check == 0){
    isstatus.innerHTML = "Friends";
    isstatus.style.color = "green";
    Btn.innerHTML = "Remove Friend";
    check = 1
   } else {
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "red";
    Btn.innerHTML = "Add Friend";
    check = 0
   }
})