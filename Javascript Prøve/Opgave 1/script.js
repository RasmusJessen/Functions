// function sammenlign(tekst1, tekst2) {
//     if(document.querySelector('#tekst1').value === tekst2) {
//        alert('rigtigt');
//     } if (document.querySelector('#tekst2').value === tekst1) {
//         alert('rigtigt');
//     } else {
//         alert('forskelligt');
//     }
// }
// sammenlign();

//Funktionen tjekker her om det tekst1 og tekst2 er det samme
function sammenlign(tekst1, tekst2) {
    if(tekst1 == tekst2) {
        return true;
    } else {
        return false;
    }
}

//Returner alt efter hvad der står i felterne 
document.querySelector('#submit').addEventListener('click', function(event){
    event.preventDefault
    var tekst1 = document.querySelector('#tekst1').value;
    var tekst2 = document.querySelector('#tekst2').value;
    var output = document.querySelector('#content');
    if(sammenlign(tekst1, tekst2)) {
        console.log("teksterne er ens");
    } else {
        console.log("teksterne er forskellige");
    }
})
sammenlign('navn', 'navn');

document.querySelector('#submit').addEventListener('click', sammenlign)
