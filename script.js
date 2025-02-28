var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Full Stack Developer", "Software Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Basic Validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Simulating a form submission
    alert('Message sent successfully!');

    // Reset the form after submission
    document.getElementById('contactForm').reset();
});
