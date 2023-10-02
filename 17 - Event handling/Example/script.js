function displayTime(){
document.getElementById('time').innerText 
= new Date().getFullYear(); 
}

function getName(){
var name = document.getElementById('name')
.value;
document.getElementById('firstName').
innerHTML = `Your name is ${name}`;


}