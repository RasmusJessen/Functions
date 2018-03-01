let name = document.querySelector("#name");
let code = document.querySelector("#code");

let username = "admin";
let password = 1234;

document.querySelector("#wel").style.display = "none";

document.querySelector("#login").addEventListener("click", (event) => {
    event.preventDefault();
    if(name.value != username) {
        alert("Skriv det rigtige brugernavn");
   } else {
   
   if (code.value != password) {
       alert("Skriv det rigtige password");
   } else {
       alert("Velkommen")
       document.querySelector("#form").style.display = "none";
       document.querySelector("#wel").style.display = "block";
   }  
}
})