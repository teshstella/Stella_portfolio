// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const form = document.getElementById("contactForm");
    const formMsg = document.getElementById("formMsg");

    // Ensure form exists before attaching listener (useful for other pages)
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // prevent reload

            // Get input values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Validation
            if (name === "" || email === "" || message === "") {
                formMsg.textContent = "⚠️ Please fill in all fields before submitting.";
                formMsg.style.color = "red";
                return;
            }

            // Email validation (basic)
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(email)) {
                formMsg.textContent = "📧 Please enter a valid email address.";
                formMsg.style.color = "orange";
                return;
            }

            // If all good, show success message
            formMsg.textContent = `✅ Thank you, ${name}! Your message has been sent successfully.`;
            formMsg.style.color = "green";

            // Optional: clear the form after 2 seconds
            setTimeout(() => {
                form.reset();
                formMsg.textContent = "";
            }, 4000);
        });
    }
});
