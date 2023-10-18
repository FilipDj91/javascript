// API Endpoint
const api_url = "https://64fdbdfb596493f7af7e82b1.mockapi.io/tasks";

// Global Variables
const date = new Date();
const options = { month: "long", day: "numeric", year: "numeric" };
const audio = new Audio("assets/audio/ping.mp3");

// Logo Animation
anime({
  targets: ".loading",
  direction: "alternate",
  loop: false,
  duration: 1000,
  easing: "easeInOutCirc",
  update: function (animation) {
    document.querySelector(".percentage").innerHTML =
      Math.round(animation.progress) + "%";
  },
});

setTimeout(() => {
  document.getElementsByClassName("loading")[0].style.display = "none";
}, 1000);

// Dark Mode
if (localStorage.getItem("preferDark") == "1") {
  enableDarkMode();
}

function enableDarkMode() {
  document.body.classList.toggle("dark");
  const darkMode = document.getElementById("dark-mode");
  document.getElementById("loading").style.backgroundColor = "#121212";
  document.querySelector(".percentage").style.color = "#FFF";
  darkMode.innerHTML === "Enable Dark Mode"
    ? (darkMode.innerHTML = "Disable Dark Mode")
    : (darkMode.innerHTML = "Enable Dark Mode");
}

document.getElementById("dark-mode").addEventListener("click", function () {
  enableDarkMode();
  localStorage.getItem("preferDark") == "1"
    ? localStorage.setItem("preferDark", "0")
    : localStorage.setItem("preferDark", "1");
});

// Set Date
document.getElementById("date").innerHTML = date.toLocaleDateString(
  "en-US",
  options
);
document.getElementById("due-date").valueAsDate = date;
document.getElementById("year").innerText = date.getFullYear();

// Top Bar - Cookie Notice
const topbar = document.getElementById("top-bar-hide");
topbar.addEventListener("click", function () {
  document.querySelector(".top-bar").style.display = "none";
  setCookie("todo-cookie-notice", "closed", 7);
});

// Function that sets cookies
function setCookie(name, value, days) {
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
}

// Function that reads cookies
function getCookie(name) {
  const match = document.cookie.match(new RegExp(name + "=([^;]+)"));
  return match ? match[1] : null;
}

// If statement that is called when pages is loaded
if (getCookie("todo-cookie-notice") == "closed") {
  document.querySelector(".top-bar").style.display = "none";
}

// Modal
const modal = document.getElementById("modal");
const changeNameButton = document.querySelector(".change-name");
const closeButton = document.querySelector(".close-modal");

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

changeNameButton.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    hideModal();
  }
});

function setUser() {
  localStorage.setItem("user", document.getElementById("name").value);
  hideModal();
  window.location.reload();
}

(function showUser() {
  const user = localStorage.getItem("user");
  document.getElementById("user").innerText = `${!user ? "Hey there stranger" : user
    }`;
})();

// Greeting
(function () {
  const hour = date.getHours();
  const icon = document.getElementById("icon");
  let text;

  if (hour < 12) {
    icon.innerText = "routine";
    text = "Good Morning";
  } else if (hour < 18) {
    icon.innerText = "clear_day";
    text = "Good Afternoon";
  } else {
    icon.innerText = "dark_mode";
    text = "Good Evening";
  }

  document.getElementById("greeting").innerHTML = text;
})();

// Core Functionalities of To Do Task App
// Task Factory
function createTaskListItem(task) {
  const li = document.createElement("li");
  const list = document.getElementById("list");

  const formattedDate = new Date(task.due);

  li.innerHTML = `
  <span class="task">${task.task}</span>
  <span class="date">Added ${task.date
    } — Due ${formattedDate.toLocaleDateString("en-US", options)}</span>
  <span class="category">${task.category.toLowerCase().split("").join("-")}">${task.category
    }/span>
  <span class="close material-symbols-outlined">delete</span>
  `;

  li.dataset.id = task.id;
  li.dataset.due = task.due;
  li.dataset.completed = task.completed;

  formattedDate < date &&
    task.completed !== "true" &&
    li.classList.add("overdue");

  task.completed === "true" && li.classList.add("checked");


  list.appendChild(li);
}

// Task Creation Function
function newTask() {
  const input = document.getElementById("inputField").value;
  const due = document.getElementById("due-date").value;
  const category = document.getElementById("category").value;

  if (!input) {
    showError();
    return;
  }

let newId = 1; 
const lastChild = list.lastChild; 


if(lastChild && lastChild.dataset.id)

newId = lastChild?.dataset.id == null ? 1 : parseInt(lastChild.dataset.id) + 1; 





  const task = {
    task: input,
    completed: "false",
    date: date.toLocaleDateString("en-US", options),
    category: category,
    due: due,
    id: 1,
  };

  createTaskListItem(task);
  document.getElementById("inputField").value = null; 

}
// event delegation for input field keypress
document.letElementById("inputField").addEventListener("keypress", (event) => {

if(event.key === "Enter"){
document.getElementById("add").click();
}else {
const clickElement = event.target; 
const listItem = clickedElement.closest("li");

listItem.classList.toggle("checked");
listItem.classList.remove("overdue");


if(listItem.dataset.completed !== "false"){
Date.parse(listItem.dataset.due) < date && listItem.classList.add("overdue");
}else{
audio.play();

}
const taskCompletionStatus = listItem.dataset.completed == "true"
? (listItem.dataset.completed = "false")
: (listItem.dataset.completed = "true"); 
}
}); 

function handleResourceDeletion(element) {
element.remove(); 
checkEmpty();

}


// main functionalities of to do task app - event listeners

document.getElementById("list").addEventListener("click",(event) => {
if (event.target.classList.contains("close") ) {
handleResourceDeletion(event.target.parentElement);

}});




// Show error if task input value is empty
function showError() {
  const error = document.getElementById("inputField");
  error.placeholder = "Task cannot be empty";

  setTimeout(() => {
    error.placeholder = "Add a task...";
  }, 2000);
}

function checkEmpty() {
  if (document.getElementById("list").childNodes > 0 == true) {
    document.getElementById("empty").style.display = "none";

  } else {
    document.getElementById("empty").style.display = "initial";

  }
}