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

  // Validate at least one character type is selected
  if (!(useUppercase || useLowercase || useNumeric || useSpecial)) {
    alert("You must select at least one character type. Please try again.");
    return;
  }

  // Generate password
  var characters = "";
  if (useUppercase) characters += uppercase;
  if (useLowercase) characters += lowercase;
  if (useNumeric) characters += numeric;
  if (useSpecial) characters += special;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Get the elements
var generateButton = document.getElementById("generate");
var passwordTextarea = document.getElementById("password");

// Add click event listener to the button
generateButton.addEventListener("click", function () {
  var password = generatePassword();
  if (password) {
    passwordTextarea.value = password;
  }
});