/*
document.querySelector("button").addEventListener("click", addNote);

let body = document.querySelector("body");

let checkbox = document.getElementById("important");

function addNote(){
   let h3 = document.createElement("h3");

    let p = document.createElement("p");
    p.textContent = name.value + message.value;

    if(checkbox.checked){
        h3.classList.add("important");
        p.classList.add("important");
    }
    body.append(h3, p, document.createElement("hr"));
}
*/

function addComment(a, b){
    document.getElementById("comment").innerHTML = "";
    
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    document.getElementById("comment").innerHTML += name + " " + message;
}