let alder = 20;
let besked = "Velkommen";

function test() {
    if(alder < 18) {
        besked = "Desværre du er ikke gammel nok";
    }
}
test();
console.log(besked);