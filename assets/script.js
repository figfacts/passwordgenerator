// Variables 

// Numbers
var numbers = "0123456789"
// lower case letters 
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// upper case letters 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// symbols or special characters 
var symbols = "!@#$%^&*(){}[]=<>/,."
// password length
var passwordLength = " "
// to store the final generated password 
var finalPassword = " "


// DF Pop Up Alerts
function generatePassword () {
  var promptPassword = " ";
  let passwordLength = prompt (
    "How many characters would you like the password to have? It needs to be between 8 and 128 characters."
  );

    if (( passwordLength <= 7 || passwordLength >=128)) {
    passwordLength = prompt( 'The number entered is not between the criteria. Please select a number between 8 and 128 characters.');
    } else {
      passwordLength = passwordLength;
    }
  // Combine characters to the password variable based on whatever the user selects 
    let numeric = confirm ("Click 'ok' to confirm using numbers or 'cancel' to not use numbers.")
      if (numeric === true) {
      finalPassword = finalPassword.concat(numbers);

    }
    let symbolic = confirm ("Click 'ok' to confirm using symbols or 'cancel' to not use symbols.")
      if (symbolic === true) {
      finalPassword = finalPassword.concat(symbols);

    }
    let lowerCased = confirm ("Click 'ok' to confirm using lowercase or 'cancel' to not use lowercase characters.")
      if (lowerCased === true) {
      finalPassword = finalPassword.concat(lowerCase);

    }
    let upperCased = confirm ("Click 'ok' to confirm using uppercase or 'cancel' to not use uppercase characters.")
      if (upperCased === true) {
      finalPassword = finalPassword.concat(upperCase);
}
//  loop through password variable and randomize the characters to a new variable 

  for (i=1; i <= passwordLength; i++) {
    var passwordRandom = Math.floor(Math.random() * finalPassword.length + 1);
    promptPassword += finalPassword.charAt(passwordRandom)
  }
    return promptPassword;
}

  

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === " ") {
    password = " ERROR. \n Invalid input. Please click 'ok' to at use at least one of the prompts for the type of characters to use in the password. \n Click the 'Generate Password' button to Try Again."
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
