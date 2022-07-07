// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click",writePassword);
var length = Number(prompt("Enter a password length between 8 and 128"));
var inclLower = prompt("Include lowercase letters?  Enter Y or N");
var inclUpper = prompt("Include uppercase letters?  Enter Y or N");
var inclNumbers = prompt("Include numbers?  Enter Y or N");
var inclSymbols = prompt("Include symbols?  Enter Y or N");
// passwordText.value = generatePassword(length.value, characters);

// Define characters that the password can contain:
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

// Declare constant variables for DOM elements:
const passwordText = document.getElementById("password");
// const length = document.getElementById("length");
// const inclLower = document.getElementById("lower");
// const inclUpper = document.getElementById("upper");
// const inclNumbers = document.getElementById("numbers");
// const inclSymbols = document.getElementById("symbols");

// inclNumbers.checked ? (characters += numbers) : "";
// inclSymbols.checked ? (characters += symbols) : "";
// passwordText.value = generatePassword(length.value, characters);
// });

// And here is the generatePassword function that creates the password:
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};