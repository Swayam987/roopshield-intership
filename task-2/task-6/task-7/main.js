const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear old errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let valid = true;

    // Name Validation
    if(name.trim() === ""){
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Email Validation
    if(!email.includes("@")){
        emailError.textContent = "Invalid email address";
        valid = false;
    }

    // Message Validation
    if(message.trim() === ""){
        messageError.textContent = "Message cannot be blank";
        valid = false;
    }

    // Success
    if(valid){
        form.innerHTML = "<h2>Thanks! Your message was sent.</h2>";
    }

});