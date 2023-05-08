// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  // Ask for length of password
  var passwordLength = window.prompt("Length of password");
  var lowerCase = window.prompt("Do you want lowercase");
  var upperCase = window.prompt("Do you want uppercase");
  var numeric = window.prompt("Do you want numeric");
  var specialCharacters = window.prompt("Do you want special characters");
  // at least 8 characters an no more then 128
  if (passwordLength < 8 && passwordLength > 128) {
    window.alert("Chose a password length from 8 characters to 128 characters");
    return;
  } 

  



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
