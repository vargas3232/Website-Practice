document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        alert('You must log in first');
        window.location.href = 'html/login.html'; // Redirect to login if not logged in
    } else {
        document.getElementById('welcomeMessage').textContent = 'Hello, ' + loggedInUser + '!';
    }

    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('loggedInUser'); // Remove user from local storage
        window.location.href = 'html/login.html'; // Redirect to login page
    });
});
