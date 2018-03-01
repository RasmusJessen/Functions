let output = document.querySelector('#content');

function prisMedMoms(pris_uden_moms, pris_med_moms) {
    if(pris_uden_moms){
       return pris_med_moms
    }
}
let moms = prisMedMoms(200, 800);
output.innerHTML = moms;
console.log(moms);