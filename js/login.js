// js/login.js

// Sample user data (for demonstration purposes)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Store user info in local storage (for demonstration)
        localStorage.setItem('loggedInUser', username);
        alert('Login successful! Welcome, ' + username);
        // Redirect to another page (e.g., dashboard.html)
        window.location.href = 'dashboard.html'; // Create this page as needed
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
