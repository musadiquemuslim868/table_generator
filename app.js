// function generateTable() {
//   let num = document.getElementById("number").value;
//   let limit = document.getElementById("limit").value;
//   let output = document.getElementById("output");

//   output.innerHTML = "";

//   if (num === "" || limit === "") {
//     output.innerHTML = "<p>Please enter both number and limit</p>";
//     return;
//   }

//   for (let i = 1; i <= limit; i++) {
//     output.innerHTML += `<p>${num} × ${i} = ${num * i}</p>`;
//   }
// }
// function resetTable() {
//   document.getElementById("number").value = "";
//   document.getElementById("limit").value = "";
//   document.getElementById("output").innerHTML = "";
// }

function generateTable() {
    let num = document.getElementById("number").value
    let limit = document.getElementById("limit").value
    let output = document.getElementById("output");

    output.innerHTML = ""
    if (num === "" || limit === "") {
        output.innerHTML = "<p>Please enter both number an limit</p>"
        return
    }
    for (let i = 1; i <= limit; i++) {
        output.innerHTML += `<p>${num} x ${i} = ${num * i}</p>`
    }
}
function resetTable() {
    document.getElementById("number").value = "";
    document.getElementById("limit").value = "";
    document.getElementById("output").innerHTML = "";
}