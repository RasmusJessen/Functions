//Hiver fat i content fra html
let output = document.querySelector("#content");

//funktion med parametrene
function adresselabel(fornavn, efternavn, vej, husnummer, postnummer, bynavn) {
    //returnere parametrene 
    return `${fornavn} ${efternavn} <br>${vej} ${husnummer}</br> <br>${postnummer} ${bynavn} </br>`
}
//varibal text med værdier til alle parametrene 
let text = adresselabel('Rasmus', 'Jessen', 'Hørskætten', '2G', '2630', 'Taastrup');

//udskriver den på siden 
document.querySelector('#content').innerHTML = text;