function generatePassword() {
  var password = "";

  // Define all possible characters
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Prompt for password length
  var length = parseInt(prompt("Enter password length (between 8 and 128):"));

  // Validate password length
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Invalid password length. Please try again.");
    return;
  }

  // Prompt for character types
  var useUppercase = confirm("Include uppercase letters?");
  var useLowercase = confirm("Include lowercase letters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");