let output = document.querySelector("#content");

function hentAreal(width, height) {
   return width * height
}
let areal = hentAreal(3, 2);
document.querySelector("#content").innerHTML = `Arealet er ${areal}`