// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (HTML5 handles most, but add custom if needed)
    if (name && email && message) {
        // Simulate form submission (in real app, send to server)
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        
        // Reset form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
