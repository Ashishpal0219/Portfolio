document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevents actual form submission
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Thanks, " + name + "! Your message has been received.";
        document.getElementById("responseMessage").style.color = "green";
        this.reset();
    } else {
        document.getElementById("responseMessage").innerText = "Please fill in all fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});