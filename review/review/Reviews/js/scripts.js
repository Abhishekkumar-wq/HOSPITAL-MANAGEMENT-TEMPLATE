// Login Form Validation
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;

    if (!validateEmail(email)) {
        document.getElementById('email-error').innerText = 'Invalid email format';
        valid = false;
    } else {
        document.getElementById('email-error').innerText = '';
    }

    if (password.length < 6) {
        document.getElementById('password-error').innerText = 'Password must be at least 6 characters';
        valid = false;
    } else {
        document.getElementById('password-error').innerText = '';
    }

    if (valid) {
        alert('Login successful!');
    }
});

// Register Form Validation
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    let valid = true;

    if (username === '') {
        document.getElementById('username-error').innerText = 'Username is required';
        valid = false;
    } else {
        document.getElementById('username-error').innerText = '';
    }

    if (!validateEmail(email)) {
        document.getElementById('email-error').innerText = 'Invalid email format';
        valid = false;
    } else {
        document.getElementById('email-error').innerText = '';
    }

    if (password.length < 6) {
        document.getElementById('password-error').innerText = 'Password must be at least 6 characters';
        valid = false;
    } else {
        document.getElementById('password-error').innerText = '';
    }

    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').innerText = 'Passwords do not match';
        valid = false;
    } else {
        document.getElementById('confirm-password-error').innerText = '';
    }

    if (valid) {
        alert('Registration successful!');
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Edit profile functionality
function editProfile() {
    alert("Editing Profile...");
}
