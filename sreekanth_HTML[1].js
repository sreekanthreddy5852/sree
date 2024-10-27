let nameE = document.getElementById("name");
let errorName = document.getElementById("errorName");

let emailE = document.getElementById("email");
let errorEmail = document.getElementById("errorEmail");

let messageE = document.getElementById("message");
let errorMessage = document.getElementById("errorMessage");

let formE = document.getElementById("form");

let successMessage = document.getElementById("successMessage");


nameE.addEventListener("change", function(event) {
    if (event.target.value === "") {
        errorName.textContent = "*Required";
    } else {
        errorName.textContent = "";
    }
});

emailE.addEventListener("change", function(event) {
    if (event.target.value === "") {
        errorEmail.textContent = "*Required";
    } else {
        errorEmail.textContent = "";
    }
});

messageE.addEventListener("change", function(event) {
    if (event.target.value === "") {
        errorMessage.textContent = "*Required";
    } else {
        errorMessage.textContent = "";
    }
});




formE.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameE.value !== "" && emailE.value !== "" && messageE.value !== "") {
        successMessage.textContent = "Success";
        successMessage.style.color = "green";
    } else {
        successMessage.textContent = "Something went wrong";
        successMessage.style.color = "red";
    }
});