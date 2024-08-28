document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let valid = true;

    // Username validation
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        usernameError.style.display = 'block';
        valid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // If the form is valid, you can proceed with further actions like sending data to the server
    if (valid) {
        alert('Login successful!');
    }
});
