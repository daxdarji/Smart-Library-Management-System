function registerUser(){

alert("Registration Successful");

window.location.href="home.html";

return false;

}
window.onload = function(){

const params = new URLSearchParams(window.location.search);
const book = params.get("book");

const dropdown = document.getElementById("bookName");

if(book && dropdown){

dropdown.value = book;
dropdown.disabled = true;

}

}