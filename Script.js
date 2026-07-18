function addBook(){

let book=document.getElementById("book").value;
let author=document.getElementById("author").value;

let row=document.createElement("tr");

row.innerHTML=
"<td>"+book+"</td>"+
"<td>"+author+"</td>"+
"<td><button onclick='this.parentElement.parentElement.remove()'>Delete</button></td>";

document.getElementById("list").appendChild(row);

document.getElementById("book").value="";
document.getElementById("author").value="";
}
