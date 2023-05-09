// Assignment Code
var generateBtn = document.querySelector("#generate");
var numList = [0,1,2,3,4,5,6,7,8,9];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?"];
var storedPassword = [];

function generatePassword(){
  console.log("Hello");
  // Ask for length of password
  // ask user do they want lowercase, uppercase, numeric, or special characters
  var passwordLength = window.prompt("Length of password");
  var lowerCase = window.confirm("Do you want lowercase");
  console.log(lowerCase);
  var upperCase = window.confirm("Do you want uppercase");
  console.log(upperCase);
  var numeric = window.confirm("Do you want numeric");
  console.log(numeric);
  var specialCharacters = window.confirm("Do you want special characters");
  console.log(specialCharacters);
  // at least 8 characters an no more then 128
  if (passwordLength < 8 && passwordLength > 128) {
    window.alert("Chose a password length from 8 characters to 128 characters");
    generatePassword();
    
      }

  if (lowerCase) {
    storedPassword.push(lowercaseLetters);
    console.log(storedPassword);
    
  }
  
  if (upperCase) {
    storedPassword.push(uppercaseLetters);
    console.log(storedPassword);
  }

  if (upperCase & !storedPassword) {
    storedPassword.push(uppercaseLetters);
    console.log(storedPassword);
  }


  if (numeric & !storedPassword) {
    storedPassword.push(numList);
    console.log(storedPassword);
  }
  
  if (specialChars & !storedPassword) {
    storedPassword.push(specialCharacters);
    console.log(storedPassword);
  }
  // Input from user should be validated an choose at one character type (IF statement)
  // randomize all available characters that the user selected. 
  // create a forloop that will run the code based on the length the user chose


  
  return password
}

// Write password to the #password input
function writePassword() {
  console.log("Hello");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);