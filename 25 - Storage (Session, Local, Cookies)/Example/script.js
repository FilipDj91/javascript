localStorage.setItem('user', 'Filip Đukić')

const user = localStorage.getItem("user");
document.getElementById("user").innerHTML = user;

//
localStorage.setItem("age", "26");

//
sessionStorage.setItem("Session ID", "12345");

localStorage.clear();

// cookies

document.cookie = "username=ninoskuflic;expires=Thu, 31 Dec 2023 12:00:00 UTC; path=/; Secure; "; 

console.log("Cookie is: " + document.cookie);