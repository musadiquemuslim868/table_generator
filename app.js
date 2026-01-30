function generateTable() {
    let x = document.getElementById("number").value;
    let y = document .getElementById("limit").value;
    let output = document.getElementById("output");
    output.innerHTML = "";
    if (x === ""|| y === ""){
        output.innerHTML = "Please Enter any number"

    }
    else {
        for (i = 1; i <= y; i++) {
            output.innerHTML += `${x} x ${i} = ${x * i}<br/>`

        }
    }
} 

function resetTable() {
     let x = document.getElementById("number").value = "";
     let y = document.getElementById("limit").value = "";
     let output = document.getElementById("output").innerHTML = "";
 }