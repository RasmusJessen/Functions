let output = document.querySelector("#content");

function hentAreal(width, height) {
   return width * height
}
let areal = hentAreal(3, 2);
output.innerHTML = `Arealet er ${areal}`