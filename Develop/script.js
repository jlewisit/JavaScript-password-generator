// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  // passwordText.value = generatePassword(length.value, characters);

// Add event listener to generate button
// generateBtn.addEventListener("click",writePassword);
var length = Number(prompt("Enter a password length between 8 and 128"));

var inclLower = prompt("Include lowercase letters? Enter Y or N", "Y");
if (inclLower === true) {
  console.log(lower);
}

var inclUpper = prompt("Include uppercase letters?  Enter Y or N", "Y");
if (inclUpper === true) {
  console.log(upper);
}

var inclNumbers = prompt("Include numbers?  Enter Y or N", "Y");
if (inclNumbers === true) {
  console.log(numbers);
}

var inclSymbols = prompt("Include symbols?  Enter Y or N", "Y");
if (inclSymbols === true) {
  console.log(symbols);
}

// Define characters that the password can contain:
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

// generatePassword function that creates the password:
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};