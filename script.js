function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Both fields are required!";
      return false;
    }
  
    // You can add additional validation here (e.g., checking username or password format)
  
    // If everything is fine, let the form submit
    errorMessage.textContent = "";
    return true;
  }
  