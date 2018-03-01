let name = document.querySelector("#name");
let email = document.querySelector("#email");

//sørger for at den andre former er skjult 
document.querySelector("#arb").style.display = "none";
document.querySelector("#con").style.display = "none";
document.querySelector("#tak").style.display = "none";

document.querySelector(".next_om").addEventListener("click", (event) => {
    event.preventDefault();
    if(name.value.length == "") {
        alert("Skriv dit navn");
    } 
    
    if(email.value.length == "") {
      alert("Skriv din email");
    } else {
        alert("Du kan gå videre");
        document.querySelector("#om").style.display = "none";
        document.querySelector("#arb").style.display = "block";
    }
})

document.querySelector(".next_arb").addEventListener("click", (event) => {
    event.preventDefault();
    if(name.value.length == "") {
        alert("Skriv dit navn");
    } 
    
    if(email.value.length == "") {
      alert("Skriv din email");
    } else {
        alert("Du kan gå videre");
        document.querySelector("#arb").style.display = "none";
        document.querySelector("#con").style.display = "block";
    }
})

document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault();
    if(name.value.length == "") {
        alert("Skriv dit navn");
    } 
    
    if(email.value.length == "") {
      alert("Skriv din email");
    } else {
        alert("Du har klaret det");
        document.querySelector("#con").style.display = "none";
        document.querySelector("#tak").style.display = "block"
    }
})

//gør at man kan gå tilbage til de andre sider
document.querySelector(".for_arb").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#arb").style.display = "none";
    document.querySelector("#om").style.display = "block";
})

document.querySelector(".for_con").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#con").style.display = "none";
    document.querySelector("#arb").style.display = "block";
})