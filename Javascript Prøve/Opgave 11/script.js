
document.querySelector("#aKnap").addEventListener("click", (event) => {
    //sørger for når man trykker på den at de forsvinder med 'style.display = none'
    document.querySelector("#aKnap").style.display = "none";
    klaret();
});

document.querySelector("#bKnap").addEventListener("click", (event) => {
    document.querySelector("#bKnap").style.display = "none";
    klaret();
});

document.querySelector("#cKnap").addEventListener("click", (event) => {
    document.querySelector("#cKnap").style.display = "none";
    klaret();
});

//gør at når alle knapper er blevet trykket på at vil den give besked til browseren 
function klaret() {
    if (document.querySelector("#aKnap").style.display === "none" &&
        document.querySelector("#bKnap").style.display === "none" &&
        document.querySelector("#cKnap").style.display === "none") {
        alert('Godt klaret');
        location.reload();
    }
}