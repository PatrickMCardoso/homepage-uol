document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
});

function validateEmail(event) {
    event.preventDefault(); 

    const emailField = document.getElementById("email");
    const email = emailField.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (emailPattern.test(email)) {
        alert("Success! Registration completed successfully.");
        return true; 
    } else {
        alert("Please enter a valid email.");
        return false; 
    }
}