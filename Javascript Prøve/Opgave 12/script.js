let tryk = "";

document.querySelector("#aKnap").addEventListener("click", function(event){
    document.querySelector("#aKnap").style.display = "none";
    tryk += "A";
    klaret();
});

document.querySelector("#bKnap").addEventListener("click", function(event){
    document.querySelector("#bKnap").style.display = "none";
    tryk += "B";
    klaret();
});

document.querySelector("#cKnap").addEventListener("click", function(event){
    document.querySelector("#cKnap").style.display = "none";
    tryk += "C";
    klaret();
});

function klaret() {
    if (document.querySelector("#aKnap").style.display === "none" &&
        document.querySelector("#bKnap").style.display === "none" &&
        document.querySelector("#cKnap").style.display === "none"
    ) 
    //tjekker om du trykker i den rigtig rækkefølge
    if(tryk.length == 3 && tryk == "CAB") {
        alert('Godt klaret');
        location.reload();
        //tjekker om du trykker i den forkerte rækkefølge 
    } else if(tryk.length == 3 && tryk != "CAB") {
        alert('Hallo det forkert')
        location.reload();
    }
}