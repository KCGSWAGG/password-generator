// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  // Ask for length of password
  var passwordLength = window.prompt("Length of password");
  // at least 8 characters an no more then 128
  if (passwordLength  )
  // ask user do they want lowercase, uppercase, numeric, or special characters
  // Input from user should be validated an choose at one character type (IF statement)
  // randomize all available characters that the user selected. 
  // create a forloop that will run the code based on the length the user chose


  
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
