//1.
// function dato(selector)
// {
//     let i;
//     for (i = 1;i <= 31;i++){
//       selector.options[i-1] = new Option(i,i);
//     }
// }
// dato(document.getElementById("select"));

//2.
function month(select) {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let i;
        for (i = 0;i < month.length; i++){
          select.options[i] = new Option(i,i);
        }
}
month(document.getElementById("month"));