// Handle user login form
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get email and password values
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Example validation (this could be replaced with actual server-side validation)
    if (email && password) {
        alert("Logged in successfully!");
        resetForm();
    } else {
        alert("Please fill in both email and password.");
    }
}

// Toggle between Login and SignUp form
let isSignUp = false;
function toggleSignUp() {
    isSignUp = !isSignUp;
    const loginForm = document.getElementById('login-form');
    const signupMessage = document.getElementById('signup-message');
    const userRoleMessage = document.getElementById('user-role-message');

    if (isSignUp) {
        loginForm.innerHTML = `
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required><br>
            <button type="submit">Sign Up</button>
        `;
        signupMessage.style.display = 'block';
        userRoleMessage.innerHTML = "Sign up to become a Programmer or an End User.";
    } else {
        loginForm.innerHTML = `
            <input type="email" name="email" placeholder="Email" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit">Login</button>
        `;
        signupMessage.style.display = 'none';
        userRoleMessage.innerHTML = "Log in to access your account.";
    }
}

// Switch between login for Programmer/End User
function switchToLogin(role) {
    const userRoleMessage = document.getElementById('user-role-message');
    userRoleMessage.innerHTML = `Login as a ${role.charAt(0).toUpperCase() + role.slice(1)}.`;
}
