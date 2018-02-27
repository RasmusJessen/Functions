// let json = {
//    "person": {
//     "fornavn": "Jimi",
//     "efternavn": "Hendrix"
//    }
// }

// document.querySelector("#content").innerHTML += json.person.fornavn + "<br>";
// document.querySelector("#content").innerHTML += json.person.efternavn + "<br>";

let personer = {
    "person1": {
       "navn": "Jimi Hendrix"
    }, 
    "person2": {
        "navn": "Janis Lopin"
    }, 
    "person3": {
        "navn": "Jim Morrison"
    } 
}

document.querySelector("#content2").innerHTML += personer.person1.navn + "<br>";
document.querySelector("#content2").innerHTML += personer.person2.navn + "<br>";
document.querySelector("#content2").innerHTML += personer.person3.navn + "<br>";